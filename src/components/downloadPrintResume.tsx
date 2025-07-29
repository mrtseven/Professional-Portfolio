import React from 'react';
import DownSVG from "@/assets/svg/down";
import {translate} from "@/config/config";
import PrinterSVG from "@/assets/svg/printer";

const DownloadPrintResume = (trans:any) => {
    return (
        <div className="row">
            <div className="col-md-12 mb-6 flex items-center justify-center">
                <hr className="divider divider-lg divider-center"/>
            </div>
            <div className="col-md-6  mb-2 mb-lg-0 ">
                <a className="flex justify-arround " href="#">
                    <div className="flex justify-between items-center cursor-target">
                        <div className=" radius-2 mr-3">
                            <div
                                className="ui-icon ui-icon-md inner shadow-lg shadow-zinc-600/50 hover:shadow-xl">
                                <div className="ui-icon-inner">
                                    <DownSVG/>
                                </div>
                            </div>
                        </div>
                        <div className="media-body flex items-center mt-2">
                              <span className="text-alt font-size-13 font-weight-600 text-uppercase px-2">
                                {translate("download_cv", trans)}
                              </span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-6  mb-2 mb-lg-0">
                <a className="flex justify-arround" href="#">
                    <div className="flex justify-between items-center cursor-target">
                        <div className="radius-2  mr-3">
                            <div
                                className="ui-icon ui-icon-md inner shadow-lg shadow-zinc-600/50 hover:shadow-xl">
                                <div className="ui-icon-inner">
                                    <PrinterSVG/>
                                </div>
                            </div>
                        </div>
                        <div className="media-body flex items-center mt-2">
                              <span className="text-alt font-size-13 font-weight-600 text-uppercase px-2">
                                {translate("print_cv", trans)}
                              </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DownloadPrintResume;