import React from 'react';
import {translate} from "@/config/config";

const experienceItem = (title: string, content: string, date: string,current: boolean, trans: any) => {
    return (
        <div className="flex justify-center  flex-col ltr:pl-[3.375rem] rtl:pr-[2.375rem] timeline-content after:bg-[#f56c6d] after:left-[1.12rem] after:right-[1.12rem] after:top-[4rem]">
            <div className="mb-1 ltr:pl-[3.375rem] rtl:pr-[2.375rem]">
                <h6 className="font-weight-600 font-size-15 mb-1 text-zinc-800 dark:text-zinc-100  rtl:text-right ltr:text-left">
                    {translate(title, trans)}
                </h6>
                <div className="font-size-13 text-alt mb-1 p-2 rtl:text-right ltr:text-left">
                    <span
                        className="fa fa-calendar mr-2 text-zinc-800 dark:text-red-300"></span>
                    <span className='text-zinc-800 dark:text-red-300 px-2'>{date} </span>
                    {current && <><span> - </span><span className="current text-white px-3 py-2 m-1">  {translate("current", trans)}</span></>}
                </div>
            </div>
            <p className="mb-0 text-zinc-800 dark:text-zinc-400 rtl:text-right ltr:text-left ltr:pl-[3.375rem] rtl:pr-[2.375rem]">
                {translate(content, trans)}
            </p>
        </div>
    );
};

export default experienceItem;
