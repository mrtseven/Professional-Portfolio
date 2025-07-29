import React from 'react';
import DecryptedText from "@/components/animations/decryptedText";
import {translate} from "@/config/config";

const contactComponent = (trans:any) => {
    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <h6 className="font-weight-700  text-uppercase mb-2 text-zinc-800 dark:text-zinc-200 cursor-target">
                        <DecryptedText
                            text={`${translate("contact_info", trans)}`}
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

            <div className="row position-relative">
                <div className="col-md-4 mb-3 mb-lg-0">
                    <div className="  text-center">
                        <div className="radius-5">
                            <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] hover:shadow-[1px_5px_15px_5px_rgba(255,0,0,0.3)] ui-icon ui-icon-lg cursor-target">
                                <div className="ui-icon-inner">
                                    <svg version="1.1" className="max-width-1-7 svg-icon"
                                         x="0px" y="0px"
                                         viewBox="0 0 517 397.6"
                                         >
                                          <g>
                                             <g>
                                                <g>
                                                   <path d="M488.9,2.5H28.2C14.1,2.5,2.5,14,2.5,28.2v341.3c0,14.1,11.5,25.6,25.6,25.6h460.8
                                                      c14.1,0,25.6-11.5,25.6-25.6V28.2C514.5,14,503.1,2.5,488.9,2.5z M497.4,369.5c0,4.7-3.8,8.5-8.5,8.5H28.2
                                                      c-4.7,0-8.5-3.8-8.5-8.5V28.2c0-4.7,3.8-8.5,8.5-8.5H489c4.7,0,8.5,3.8,8.5,8.5L497.4,369.5L497.4,369.5z"/>
                                                    <path d="M472.7,36.8c-2.3-0.2-4.5,0.5-6.2,2l-197,165.3c-6.3,5.3-15.6,5.3-22,0L50.8,38.8c-2.3-2-5.5-2.5-8.4-1.5
                                                      s-5,3.5-5.5,6.5s0.6,6.1,2.9,8l196.8,165.4c12.7,10.7,31.2,10.7,43.9,0L477.3,51.7c1.7-1.5,2.8-3.5,3-5.8s-0.5-4.5-2-6.2
                                                      C476.9,38,474.8,36.9,472.7,36.8z"/>
                                                    <path d="M166.7,216c-3-0.7-6.2,0.3-8.2,2.6L39,346.6c-2.2,2.2-3,5.4-2.1,8.4s3.3,5.2,6.3,5.9c3,0.7,6.2-0.3,8.2-2.6
                                                      l119.5-128c2.2-2.2,3-5.4,2.1-8.4S169.7,216.6,166.7,216z"/>
                                                    <path d="M358.7,218.6c-2.1-2.3-5.2-3.3-8.2-2.6s-5.4,2.9-6.3,5.9s-0.1,6.2,2.1,8.4l119.5,128
                                                      c3.2,3.3,8.5,3.4,11.9,0.3c3.4-3.2,3.6-8.5,0.5-11.9L358.7,218.6z"/>
                                                </g>
                                             </g>
                                          </g>
                                       </svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-400 mb-0 mt-3 font-bold font-size-14 dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 px-3 py-1">Email :
                            name@gmail.com </p>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-lg-0">
                    <div className="  text-center">
                        <div className="radius-5">
                            <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] hover:shadow-[1px_5px_15px_5px_rgba(255,0,0,0.3)] ui-icon ui-icon-lg cursor-target">
                                <div className="ui-icon-inner">
                                    <svg version="1.1" className="max-width-1-7 svg-icon"
                                          x="0px" y="0px"
                                         viewBox="0 0 517.1 517" >
                                          <g transform="translate(-1 -1)">
                                             <g>
                                                <g>
                                                   <path d="M502,398.5l-103.6-69.1c-13.2-8.7-30.8-5.8-40.5,6.6l-30.2,38.8c-3.9,5.1-10.9,6.6-16.5,3.5l-5.7-3.2
                                                      c-19-10.4-42.7-23.3-90.5-71s-60.7-71.4-71-90.5l-3.1-5.7c-3.2-5.6-1.7-12.7,3.4-16.6l38.8-30.2c12.4-9.7,15.3-27.4,6.6-40.5
                                                      L120.4,17C111.5,3.6,93.6-0.5,79.9,7.8l-43.3,26C23,41.8,13,54.8,8.7,70c-15.6,56.9-3.9,155,140.7,299.6
                                                      c115,115,200.6,145.9,259.5,145.9c13.5,0.1,27-1.7,40.1-5.2c15.2-4.3,28.2-14.3,36.2-27.9l26.1-43.3
                                                      C519.5,425.3,515.4,407.5,502,398.5z M496.5,430.4l-26,43.3c-5.7,9.8-15.1,17.1-26,20.2c-52.5,14.4-144.2,2.5-283-136.3
                                                      S10.7,127.1,25.1,74.6c3.1-11,10.4-20.3,20.2-26.1l43.3-26c6-3.6,13.7-1.9,17.6,4l37.5,56.4l31.5,47.3c3.8,5.7,2.5,13.4-2.9,17.6
                                                      L133.5,178c-11.8,9-15.2,25.4-7.9,38.3l3.1,5.6c10.9,20,24.5,44.9,74,94.4s74.4,63.1,94.4,74l5.6,3.1c13,7.3,29.3,3.9,38.3-7.9
                                                      l30.2-38.8c4.2-5.4,11.9-6.6,17.6-2.9l103.6,69.1C498.3,416.6,500.1,424.4,496.5,430.4z"/>
                                                    <path d="M293.6,88.9c80.1,0.1,145,65,145.1,145.1c0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5
                                                      c-0.1-89.5-72.6-162-162.1-162.1c-4.7,0-8.5,3.8-8.5,8.5S288.8,88.9,293.6,88.9z"/>
                                                    <path d="M293.6,140.1c51.8,0.1,93.8,42.1,93.9,93.9c0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5
                                                      c-0.1-61.2-49.7-110.9-110.9-110.9c-4.7,0-8.5,3.8-8.5,8.5C285,136.3,288.8,140.1,293.6,140.1z"/>
                                                    <path d="M293.6,191.3c23.6,0,42.6,19.1,42.7,42.7c0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5c0-33-26.8-59.7-59.7-59.7
                                                      c-4.7,0-8.5,3.8-8.5,8.5S288.8,191.3,293.6,191.3z"/>
                                                </g>
                                             </g>
                                          </g>
                                       </svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-400 mb-0 mt-3 font-bold font-size-14 dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 px-3 py-1">Phone : (98)
                            911-3177411 </p>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-lg-0">
                    <div className="  text-center">
                        <div className="radius-5">
                            <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] hover:shadow-[1px_5px_15px_5px_rgba(255,0,0,0.3)] ui-icon ui-icon-lg cursor-target">
                                <div className="ui-icon-inner">
                                    <svg version="1.1" className="max-width-1-7 svg-icon stroke-0"
                                          x="0px" y="0px" viewBox="0 0 517 517" >
                                          <g>
                                             <g>
                                                <path d="M258.5,2.5c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S399.9,2.5,258.5,2.5z
                                                   M174.7,44.1c-24.9,27.1-44.7,66.1-56.8,112H52.2C77.7,105.2,121.4,65,174.7,44.1z M28.1,258.5c0-27,5.1-52.7,13.7-76.8h70.5
                                                   c-4.6,24.3-7.4,50-7.4,76.8s2.7,52.5,7.3,76.8H41.8C33.2,311.2,28.1,285.5,28.1,258.5z M52.2,360.9H118
                                                   c12.1,45.9,31.8,84.9,56.8,112C121.4,452,77.7,411.8,52.2,360.9z M245.7,487.7c-43.8-8.3-81.9-58.2-101.4-126.8h101.4L245.7,487.7
                                                   L245.7,487.7z M245.7,335.3H138.2c-4.9-24.2-7.7-50-7.7-76.8s2.8-52.6,7.7-76.8h107.5V335.3z M245.7,156.1H144.3
                                                   c19.5-68.5,57.5-118.5,101.4-126.8L245.7,156.1L245.7,156.1z M464.8,156.1H399c-12.1-45.9-31.8-84.9-56.8-112
                                                   C395.6,65,439.3,105.2,464.8,156.1z M271.3,29.3c43.8,8.3,81.9,58.2,101.4,126.8H271.3V29.3z M271.3,181.7h107.5
                                                   c4.9,24.2,7.7,50,7.7,76.8s-2.8,52.6-7.7,76.8H271.3V181.7z M271.3,487.7V360.9h101.4C353.2,429.4,315.1,479.4,271.3,487.7z
                                                   M342.3,472.9c24.9-27.1,44.7-66.1,56.8-112h65.7C439.3,411.8,395.6,452,342.3,472.9z M404.7,335.3c4.6-24.3,7.4-50,7.4-76.8
                                                   s-2.7-52.5-7.3-76.8h70.5c8.6,24.1,13.7,49.8,13.7,76.8s-5.1,52.7-13.7,76.8H404.7z"></path>
                                             </g>
                                          </g>
                                       </svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-800 dark:text-zinc-400 mb-0 mt-3 font-bold font-size-14 dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 px-3 py-1 ">Site :
                            imrt.dev</p>
                    </div>
                </div>
            </div>


            <div className="row my-6">
                <div className="col">
                    <h6 className="font-weight-700  text-uppercase mb-2 text-zinc-800 dark:text-zinc-200 cursor-target">
                        <DecryptedText
                            text={`${translate("send_email", trans)}`}
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


            <div className="row justify-content-center">
                <div className="col-md-12">
                    <form className="contact-form" method="post" action="backend_sample_page.php">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 mb-3">
                                    <input className="rounded-2xl placeholder:!text-black dark:placeholder:!text-zinc-200 !text-zinc-800 dark:!text-zinc-400 form-control   dark:!shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] !shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)]  !bg-zinc-300 dark:!bg-zinc-800 !border-none" name="message"
                                              placeholder={`${translate('namefamily' , trans)}`} id="message"></input>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 mb-3">
                                    <input className="rounded-2xl placeholder:!text-black dark:placeholder:!text-zinc-200 !text-zinc-800 dark:!text-zinc-400 form-control   dark:!shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] !shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)]  !bg-zinc-300 dark:!bg-zinc-800 !border-none" name="message"
                                           placeholder={`${translate('email' , trans)}`} id="message"></input>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 mb-3">
                                    <input className="rounded-2xl placeholder:!text-black dark:placeholder:!text-zinc-200 !text-zinc-800 dark:!text-zinc-400 form-control   dark:!shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] !shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)]  !bg-zinc-300 dark:!bg-zinc-800 !border-none" name="message"
                                           placeholder={`${translate('message' , trans)}`} id="message"></input>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] radius-2 d-inline-block text-center">
                                    <a className="send radius-2 d-block py-2 px-4 font-size-15 font-weight-500 text-zinc-800 dark:text-zinc-400"
                                       href="#">
                                        {translate('send_message' , trans)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default contactComponent;
