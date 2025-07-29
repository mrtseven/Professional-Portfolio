import React from 'react';
import {translate} from "@/config/config";
import skillProgress from "@/components/skillProgress";

const skillsAbout = (trans:any) => {
    return (
        <>
            <div className="row mb-5 mt-8">
                <div className="col">

                    <h6 className="font-weight-700 text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        {translate("professional_skills", trans)}
                    </h6>
                    <div className="col-md-12 flex items-center justify-center my-3">
                        <hr className="divider divider-lg divider-center"/>
                    </div>
                </div>
            </div>
            <div className="row vc skill des mb-5">
                <div className="col-lg-1">
                    <div className="title des font-size-14">
                        <span>{translate("design", trans)}</span>
                    </div>
                </div>
                <div className="col-md-11">

                    <ul className="skills-list list-inline mb-0">
                        {skillProgress('photoshop', 70, '#4CAF50')}
                        {skillProgress('Illustrator', 80, '#4CAF50')}
                        {skillProgress('Indesign', 50, '#4CAF50')}
                    </ul>
                </div>

            </div>
            <div className="row vc skill dev mb-5">

                <div className="col-lg-1">
                    <div className="title dev font-size-14">
                        <span>{translate("coding", trans)}</span>
                    </div>
                </div>
                <div className="col-md-11">
                    <ul className="skills-list list-inline mb-0">
                        {skillProgress(' Html-CSS', 80, '#883ccf')}
                        {skillProgress(' Javascript', 90, '#883ccf')}
                        {skillProgress(' Php-mysql', 70, '#883ccf')}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default skillsAbout;
