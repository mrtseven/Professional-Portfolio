import React from 'react';
import {Nav} from "react-bootstrap";
import SidebarItems from "@/components/sidebar/sidebarItems";

const MobileSidebar = () => {

    return (
        <Nav variant="pills" className="flex lg:!hidden main-nav justify-center fixed bottom-0 z-[999] rounded-xl">

            <ul className="justify-center items-center rounded-xl">
                <div
                    className="flex justify-center items-center transition-all duration-[450ms] ease-in-out w-auto">

                    <article
                        className="relative border border-solid border-gray-700 w-full ease-in-out duration-500 left-0 px-4 rounded-2xl items-center flex  backdrop-blur-2xl shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_5px_15px_5px_rgba(255,255,255,0.15)] dark:bg-zinc-800  ">

                        {SidebarItems('home' , 'fa-home' , null , true)}

                        {SidebarItems('about' , 'fa-user-alt' , null , true)}

                        {SidebarItems('portfolio' , 'fa-camera' , null , true)}

                        {SidebarItems('blog' , 'fa-newspaper' , null , true)}

                        {SidebarItems('contact' , 'fa-mail-bulk' , null , true)}

                    </article>
                </div>
            </ul>
        </Nav>
    );
};

export default MobileSidebar;