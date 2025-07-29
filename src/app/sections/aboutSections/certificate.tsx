import React from 'react';
import {translate} from "@/config/config";
import TiltedCard from "@/components/animations/cardEffect";

const certificate = (trans:any) => {
    return (
        <>
            <div className="row pt-8">
                <div className="col">
                    <h6 className="font-weight-700 text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        <span>{translate("certificate", trans)}</span>
                    </h6>
                    <div className="col-md-12 flex items-center justify-center my-3">
                        <hr className="divider divider-lg divider-center"/>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText=""
                    captionText=""
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="200px"
                    imageWidth="200px"
                    rotateAmplitude={40}
                    scaleOnHover={1.5}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                />
                <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText=""
                    captionText=""
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="200px"
                    imageWidth="200px"
                    rotateAmplitude={40}
                    scaleOnHover={1.5}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                />
                <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText=""
                    captionText=""
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="200px"
                    imageWidth="200px"
                    rotateAmplitude={40}
                    scaleOnHover={1.5}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                />
            </div>
        </>
    );
};

export default certificate;
