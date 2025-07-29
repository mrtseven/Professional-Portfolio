import React from 'react';
import {translate} from "@/config/config";

const supportItem = (title: string, content: string, icon: string, trans: any) => {
    return <div className="col-md-4 my-4">
        <div className=" service text-center">
            <div className="bg-zinc-100 dark:bg-zinc-300 shadow-[1px_5px_15px_5px_rgba(0,0,0,0.3)] dark:shadow-[1px_5px_15px_5px_rgba(255,255,255,0.3)]  ui-icon-outer-lg rounded-full m-auto">
                <div className="ui-icon ui-icon-lg">
                    <div className="ui-icon-inner ui-icon-inner-lg ">
                        <i className={`fa ${icon} text-2xl text-red-600`}/>
                    </div>
                </div>
            </div>
            <h6 className="font-weight-600 font-size-15 mb-1 mt-3 text-zinc-800 dark:text-zinc-300">
                {translate(title, trans)}
            </h6>
            <p className="mb-0 text-zinc-700 dark:text-zinc-400">
                {translate(content, trans)}
            </p>
        </div>
    </div>
};

export default supportItem;
