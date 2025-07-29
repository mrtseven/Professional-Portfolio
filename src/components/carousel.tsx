import React, {JSX, useEffect, useRef, useState} from "react";
import {motion, PanInfo, useMotionValue, useTransform} from "framer-motion";
import DecryptedText from "@/components/animations/decryptedText";
import {translate} from "@/config/config";

export interface CarouselItem {
    title: string;
    description: string;
    id: number;
}

export interface CarouselProps {
    items: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
    trans:any;
}


const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = {type: "spring", stiffness: 300, damping: 30};

export function Carousel({
                             items ,
                             baseWidth = 300,
                             autoplay = false,
                             autoplayDelay = 3000,
                             pauseOnHover = false,
                             loop = false,
                             round = false,
                             trans
                         }: CarouselProps): JSX.Element {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? {duration: 0} : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    // @ts-ignore
    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden justify-center items-center m-auto flex flex-col w-full px-4 py-6 rounded-xl bg-zinc-200 dark:bg-zinc-800`}>
            <motion.div
                className="flex"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                }}
                onDragEnd={handleDragEnd}
                animate={{x: -(currentIndex * trackItemOffset)}}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [
                        -(index + 1) * trackItemOffset,
                        -index * trackItemOffset,
                        -(index - 1) * trackItemOffset,
                    ];
                    const outputRange = [90, 0, -90];
                    const rotateY = useTransform(x, range, outputRange, {clamp: false});
                    return (
                        <motion.div
                            key={index}
                            className={`relative shrink-0 flex flex-col items-start justify-between dark:bg-[#222] bg-zinc-700 border-2 border-[#222] rounded-[12px] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.3)] dark:shadow-[1px_5px_15px_5px_rgba(255,255,255,0.3)]"
                             overflow-hidden cursor-grab active:cursor-grabbing`}
                            style={{
                                width: itemWidth,
                                height: "100%",
                                rotateY: rotateY,
                            }}
                            transition={effectiveTransition}
                        >

                            <div className="p-3 flex flex-col justify-between w-full h-full">
                                <div className="mb-1 font-black text-lg text-white cursor-target">
                                    <DecryptedText
                                        text={`${translate(`${item.title}`, trans)}`}
                                        speed={50}
                                        maxIterations={20}
                                        characters="ABCD1234!?*"
                                        className="revealed"
                                        parentClassName="all-letters"
                                        encryptedClassName="encrypted"
                                    />
                                </div>
                                <p className="text-sm text-white cursor-target">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div
                className={` flex w-full items-center justify-center`}
            >
                <div className="mt-4 flex w-[150px] justify-between px-8">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                                currentIndex % items.length === index
                                    ? "dark:bg-white bg-[#212121]"
                                    : "dark:bg-[#777] bg-[rgba(51,51,51,0.4)]"
                            }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{duration: 0.15}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
