import React from 'react';

const portfolioItem = (category:string , image:string) => {
    return (
        <div className="col-lg-4 mb-5">
            <div className={`item ${category} `}>
                <a
                    className="radius-1 hover-effect d-block "
                    href="#">
                            <span className="hover-effect-container">
                              <span className="hover-effect-icon ">
                                <span className=" fas fa-eye top-icon "></span>
                              </span>
                            </span>
                    <div className="  p-2  bg-none">
                        <div className="radius-1 shadow-[1px_5px_15px_5px_rgba(0,0,0,0.3)] dark:shadow-[1px_5px_15px_5px_rgba(255,255,255,0.3)]">
                            <img
                                className=" radius-1 "
                                alt=""
                                src={image}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default portfolioItem;
