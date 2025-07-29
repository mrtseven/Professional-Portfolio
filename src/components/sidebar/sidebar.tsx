import React from 'react';
import imgProfile from "@/assets/img/profile.jpg";
import {translate} from "@/config/config";
import {Col, Nav} from "react-bootstrap";
import SidebarItems from "@/components/sidebar/sidebarItems";
import ThemeToggle from "@/components/themeToggle";
import LanguageButton from "@/components/languageButton";
import ProfileCard from "@/components/profileImage";

const Sidebar = (trans:any) => {
    return (

        <>

            <div className="flex lg:hidden justify-center items-center gap-2 mb-4">
                <ThemeToggle/>
                <LanguageButton/>
            </div>

            <Col lg={3} className="my-order-switch-2 hidden lg:block">

                <div className="">

                    <header
                        className="shadow-2xl border-top dark:!border-[#444] shadow-zinc-700/50 dark:shadow-zinc-700/80 bg-zinc-100 dark:bg-[#2c2d30] radius-2 px-4 py-6 text-center ">

                        <div className="profile-image">
                            <ProfileCard
                                avatarUrl={imgProfile}
                                onContactClick={() => console.log('Contact clicked')}
                            />
                        </div>
                        <div className="my-4">
                            <h3 className=" font-weight-600 mb-0 text-zinc-800 dark:text-zinc-300">
                              <span className="cursor-target">
                                    {translate("sidebar_title", trans)}
                              </span>
                                <span className="mx-2 text-red-400 cursor-target">
                                                    {translate("sidebar_title_mark", trans)}
                                                </span>
                            </h3>
                            <h6 className="mt-2 text-zinc-600 dark:text-zinc-400 cursor-target">
                                {translate("sidebar_subtitle", trans)}
                            </h6>
                        </div>

                        <div className="flex justify-center items-center gap-2 mb-4">
                            <ThemeToggle/>
                            <LanguageButton/>
                        </div>

                        <Nav variant="pills" className="main-nav clearfix tabbed">
                            <ul className="pl-0 w-full">

                                {SidebarItems('home' , 'fa-home' , trans , false)}

                                {SidebarItems('about' , 'fa-user-alt' , trans, false)}

                                {SidebarItems('portfolio' , 'fa-camera' , trans, false)}

                                {SidebarItems('blog' ,  'fa-newspaper' , trans, false)}

                                {SidebarItems('contact' ,  'fa-mail-bulk' , trans, false)}

                            </ul>
                        </Nav>
                    </header>
                    <div className="text-center mt-5 ">
                        <p className="font-size-14 mb-2 text-alt">
                            {translate("copyright", trans)}
                        </p>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Sidebar;