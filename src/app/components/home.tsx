import React from 'react';
import DecryptedText from "@/components/animations/decryptedText";
import {translate} from "@/config/config";
import SocialItem from "@/items/socialItem";
import DownloadPrintResume from "@/components/downloadPrintResume";

const homeComponent = (trans:any) => {
    return (
        <>
            <div className="row v-height-50 v-centred">
                <div className="col-md-12">
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
                    <div className="text-rotation">
                        <div className="item">
                            <h6 className="h5 text-alt mt-3 mb-0 ">
                              <span
                                  className=" text-zinc-600 dark:text-zinc-400 text-rotating flex  justify-center cursor-target">
 <DecryptedText
     text={`${translate("sidebar_subtitle", trans)}`}
     speed={50}
     maxIterations={20}
     characters="ABCD1234!?"
     className="revealed"
     parentClassName="all-letters"
     encryptedClassName="encrypted"
 />

                              </span>
                            </h6>
                        </div>
                    </div>


                    <ul className="list-inline mb-0 mt-4">

                        {SocialItem('fa-facebook-f', 'https://facebook.com')}

                        {SocialItem('fa-google', '#google')}

                        {SocialItem('fa-twitter', '#twitter')}

                        {SocialItem('fa-instagram', '#instagram')}

                        {SocialItem('fa-linkedin', '#linked_in')}

                        {SocialItem('fa-github', '#GitHub')}

                        {SocialItem('fa-youtube', '#Youtube')}

                    </ul>
                </div>
            </div>
            {DownloadPrintResume(trans)}
        </>
    );
};

export default homeComponent;
