import React from 'react';
import {translate} from "@/config/config";

const information = (trans:any) => {
    return (
        <>
            <div className="row mb-2">
                <div className="col-md-6">
                    <p className="text-zinc-800 dark:text-zinc-300">
                        {translate("about_text_1", trans)}
                    </p>
                </div>
                <div className="col-md-6">
                    <p className="text-zinc-800 dark:text-zinc-300">
                        {translate("about_text_1", trans)}
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-3 mb-lg-0">
                    <div className="text-center  p-2 radius-1 shadow-inner ">
                        <div className="shadow radius-1">
                            <ul className="text-center info-list font-size-14 p-2 list-inline  mb-0">
                                <li>
                                                                <span
                                                                    className="inf text-zinc-800 dark:text-zinc-300">{translate("name", trans)} </span>
                                    <span
                                        className="value text-zinc-800 dark:text-zinc-400">{translate("fullname", trans)}</span>
                                </li>
                                <li>
                                                                <span
                                                                    className="inf text-zinc-800 dark:text-zinc-300">  {translate("birthday", trans)}</span>
                                    <span
                                        className="value text-zinc-800 dark:text-zinc-400">{translate("birthday_date", trans)}</span>
                                </li>
                                <li>
                                                                <span
                                                                    className="inf text-zinc-800 dark:text-zinc-300">  {translate("city", trans)}</span>
                                    <span
                                        className="value text-zinc-800 dark:text-zinc-400">{translate("city_value", trans)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center  p-2 radius-1 shadow-inner ">
                        <div className="shadow radius-1">
                            <ul className=" text-center info-list p-2 font-size-14 list-inline mb-0">
                                <li>
                                                                <span
                                                                    className="inf text-zinc-800 dark:text-zinc-300">{translate("email", trans)}</span>
                                    <span
                                        className="value text-zinc-800 dark:text-zinc-400">i@imrt.dev</span>
                                </li>
                                <li>
                                                                <span
                                                                    className="inf text-zinc-800 dark:text-zinc-300">{translate("phone", trans)}</span>
                                    <span
                                        className="value text-zinc-800 dark:text-zinc-400">00989113177411</span>
                                </li>
                                <li>
                                                                <span
                                                                    className="inf text-zinc-800 dark:text-zinc-300">  {translate("skype", trans)}</span>
                                    <span
                                        className="value text-zinc-800 dark:text-zinc-400">idmrtcom</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default information;
