import React from 'react';
import {translate} from "@/config/config";
import educationItem from "@/items/educationItem";

const education = (trans:any) => {
    return (
        <>
            <div className="row pt-8">
                <div className="col">
                    <h6 className="font-weight-700 text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        <span>{translate("education", trans)}</span>
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
                                    <i className="fas fa-book-open text-[#fcfcfc] dark:text-zinc-800"/>
                                </div>
                            </div>
                        </div>
                        <div className="p-1">
                            {educationItem("education_one_title", 'education_one_content', 'Sept 2015 - Nov 2015', trans)}

                            {educationItem("education_two_title", 'education_two_content', 'Sept 2015 - Nov 2015', trans)}

                            {educationItem("education_three_title", 'education_three_content', 'May 2015 - Sept 2015', trans)}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default education;
