import React from 'react';
import {Nav} from "react-bootstrap";
import {translate} from "@/config/config";

const SidebarItems = (title:string,icon:string,trans:any,isMobile:boolean) => {

    return(
        isMobile?  <Nav.Link
                eventKey={`${title}`}
                className="p-0 hover:text-shadow-lg dark:hover:text-shadow-zinc-500/50 m-0 h-14"
            >
                <label
                    className="cursor-target relative w-full p-3 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-col gap-3 items-center justify-center text-black rounded-xl"
                    htmlFor={`${title}`}>
                    <i className={`fa ${icon} text-xl text-zinc-500 dark:text-white/80`}/>
                </label>
            </Nav.Link>
            :
            <li className="shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] hover:shadow-[1px_5px_15px_5px_rgba(255,0,0,0.3)] dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] radius-2 mb-3 w-full">
                <Nav.Link
                    eventKey={`${title}`}
                    className="cursor-target p-0 radius-2 hover:text-shadow-lg dark:hover:text-shadow-zinc-500/50 "
                >
                    <div className="flex justify-between items-center px-4 py-2.5">
                              <span className="text-zinc-800 dark:text-zinc-300 font-weight-600 text-sm text-uppercase">
                                {translate(`${title}`, trans)}
                              </span>
                        <i className={`fa ${icon} text-xl text-zinc-800 dark:text-red-50`}/>
                    </div>
                </Nav.Link>
            </li>
    )
};

export default SidebarItems;