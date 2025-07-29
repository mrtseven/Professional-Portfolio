import React from 'react';
import {translate} from "@/config/config";
import experienceItem from "@/items/experienceItem";

const experience = (trans:any) => {
    return (
        <>
            <div className="row my-6">
                <div className="col">
                    <h6 className="font-weight-700 text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        <span>{translate("experience", trans)}</span>
                    </h6>
                    <div className="col-md-12 flex items-center justify-center my-3">
                        <hr className="divider divider-lg divider-center"/>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-12">
                    <div
                        className="timeline before:bg-[#2c2d30] before:dark:bg-[#fcfcfc] before:shadow-[1px_0px_10px_5px_rgba(0,0,0,0.3)] before:dark:shadow-[1px_5px_10px_5px_rgba(255,255,255,0.3)]">
                        <div className="rounded-xl absolute">
                            <div
                                className="ui-icon ui-icon-md  bg-[#2c2d30] dark:bg-[#fcfcfc]">
                                <div className="ui-icon-inner">
                                    <i className="fas fa-clock text-[#fcfcfc] dark:text-zinc-800"/>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 w-full">
                            {experienceItem("experience_one_title", 'experience_one_content', 'Feb 2020', true, trans)}

                            {experienceItem("experience_two_title", 'experience_two_content', 'Sep 2018', false, trans)}

                            {experienceItem("experience_three_title", 'experience_three_content', 'May 2015 - Sept 2015', false, trans)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default experience;
