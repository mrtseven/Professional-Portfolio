import React, { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useAnimation,
    useTransform,
    PanInfo,
    ResolvedValues,
} from "framer-motion";


interface TestimonialsGalleryProps {
    autoplay?: boolean;
    pauseOnHover?: boolean;
    images?: string[];
}


const TestimonialsGallery: React.FC<TestimonialsGalleryProps> = ({  autoplay = false,
                                                           pauseOnHover = false,
                                                           images = [] }) => {
    const galleryImages = images;

    const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(
        typeof window !== "undefined" && window.innerWidth <= 640
    );
    useEffect(() => {
        const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
    const faceCount: number = galleryImages.length;
    const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
    const radius: number = cylinderWidth / (2 * Math.PI);

    const dragFactor: number = 0.05;
    const rotation = useMotionValue(0);
    const controls = useAnimation();

    const transform = useTransform(
        rotation,
        (val: number) => `rotate3d(0,1,0,${val}deg)`
    );

    const startInfiniteSpin = (startAngle: number) => {
        controls.start({
            rotateY: [startAngle, startAngle - 360],
            transition: {
                duration: 100,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    useEffect(() => {
        if (autoplay) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        } else {
            controls.stop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoplay]);

    const handleUpdate = (latest: ResolvedValues) => {
        if (typeof latest.rotateY === "number") {
            rotation.set(latest.rotateY);
        }
    };

    const handleDrag = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        controls.stop();
        rotation.set(rotation.get() + info.offset.x * dragFactor);
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        const finalAngle = rotation.get() + info.velocity.x * dragFactor;
        rotation.set(finalAngle);
        if (autoplay) {
            startInfiniteSpin(finalAngle);
        }
    };

    const handleMouseEnter = (): void => {
        if (autoplay && pauseOnHover) {
            controls.stop();
        }
    };

    const handleMouseLeave = (): void => {
        if (autoplay && pauseOnHover) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        }
    };

    return (
        <div className="relative h-[300px] w-full overflow-hidden">
            <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
                <motion.div
                    drag="x"
                    dragElastic={0}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    animate={controls}
                    onUpdate={handleUpdate}
                    style={{
                        transform: transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
                >
                    {galleryImages.map((url, i) => (
                        <div
                            key={i}
                            className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%] rounded-2xl"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <img
                                src={url}
                                alt="gallery"
                                className="mx-1 pointer-events-none h-[260px] w-[200px] rounded-xl border-[3px] border-white object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[100px] sm:w-[220px]"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialsGallery;
