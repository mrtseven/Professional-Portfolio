import React from 'react';
import DecryptedText from "@/components/animations/decryptedText";
import {translate} from "@/config/config";
import blogPostItem from "@/items/blogPostItem";

const blogComponent = (trans:any) => {
    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <h6 className="font-weight-700  text-uppercase mb-2 text-zinc-800 dark:text-zinc-200 cursor-target">
                        <DecryptedText
                            text={`${translate("blog", trans)}`}
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

            <div className="row">

                {blogPostItem('1' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_hct7rGTmGITfG5QLTWtpkRXGYnaLiCv-g&s','blog_title_1','blog_content_1','date_blog_1' , '#test' , trans)}

                <div className="col-md-12 flex items-center justify-center my-5">
                    <hr className="divider divider-lg divider-center"/>
                </div>

                {blogPostItem('1' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt1QzpYJmLaswgc7HXuhgW7E_4m7R1wZc9g&s','blog_title_2','blog_content_1','date_blog_2' , '#test' , trans)}

                <div className="col-md-12 flex items-center justify-center my-5">
                    <hr className="divider divider-lg divider-center"/>
                </div>

                {blogPostItem('1' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO37v_q0KYG_wqTvUnNpUTk6men_nyD-3_ZQ&s','blog_title_3','blog_content_1','date_blog_3' , '#test' , trans)}

            </div>

            <div className="row mt-6">
                <div className="col text-center">
                    <div className="radius-2 d-inline-block  shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] hover:shadow-[1px_5px_15px_5px_rgba(255,0,0,0.3)] dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] cursor-target">
                        <a className="radius-2 d-block px-4 py-2 font-size-15 font-weight-500 text-zinc-800 dark:text-zinc-300" href="blog.html">
                            {translate("all_post", trans)}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default blogComponent;
