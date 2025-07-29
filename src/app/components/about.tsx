import React from 'react';
import {translate} from "@/config/config";
import testimonials from "@/app/sections/aboutSections/testimonials";
import DownloadPrintResume from "@/components/downloadPrintResume";
import DecryptedText from "@/components/animations/decryptedText";
import information from "@/app/sections/aboutSections/information";
import skillsAbout from "@/app/sections/aboutSections/skillsAbout";
import experience from "@/app/sections/aboutSections/experience";
import education from "@/app/sections/aboutSections/education";
import services from "@/app/sections/aboutSections/services";
import certificate from "@/app/sections/aboutSections/certificate";

const aboutComponent = (trans:any) => {
    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <h6 className="font-weight-700  text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        <DecryptedText
                            text={`${translate("about", trans)}`}
                            speed={50}
                            maxIterations={20}
                            characters="ABCD1234!?"
                            className="revealed"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                        />

                    </h6>
                    <div className="col-md-12 flex items-center justify-center my-3">
                        <hr className="divider divider-lg divider-center"/>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-lg-12">
                    <h1 className="font-weight-600 mb-0  text-zinc-800 dark:text-zinc-300">
                        <DecryptedText
                            text={`${translate("sidebar_title", trans)}`}
                            speed={50}
                            maxIterations={20}
                            characters="ABCD1234!?"
                            className="revealed"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                        />

                        <span className="mx-2 text-red-400 cursor-target">
                                                        {translate("sidebar_title_mark", trans)}
                                                </span>
                    </h1>
                </div>
            </div>


            <section className=''>
                {information(trans)}
            </section>

            <section className=''>
                {skillsAbout(trans)}
            </section>

            <section className=''>
                {experience(trans)}
            </section>

            <section className=''>
                {education(trans)}
            </section>

            <section className=''>
                {services(trans)}
            </section>

            <section className=''>
                {testimonials(trans)}
            </section>

            <section className=''>
                {certificate(trans)}
            </section>

            {DownloadPrintResume(trans)}


        </>
    );
};

export default aboutComponent;
