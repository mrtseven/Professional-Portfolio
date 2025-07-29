"use client";

import {Translations} from "@/config/config";
import React, {useEffect} from "react";
import {Col, Row, Tab} from "react-bootstrap";
import Sidebar from "@/components/sidebar/sidebar";
import MobileSidebar from "@/components/sidebar/mobileSidebar";
import aboutComponent from "@/app/components/about";
import homeComponent from "@/app/components/home";
import portfolioComponent from "@/app/components/portfolio";
import blogComponent from "@/app/components/blog";
import contactComponent from "@/app/components/contact";

const MainPageView = ({trans}: { trans: Translations }) => {
    useEffect(() => {

        if (localStorage.theme) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add(localStorage.theme);
        }
    }, []);


    return (
        <div id="wrapper" className="wrapper relative">

            <div className="container px-2 relative mt-4 lg:mt-0">
                <div className="row flex justify-center">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="home">

                        {MobileSidebar()}

                        <Row className="container px-1 relative">

                            {Sidebar(trans)}

                            <Col lg={9} className="my-order-switch-1 mb-24 lg:mb-0">
                                <Tab.Content>

                                    <Tab.Pane
                                        eventKey="home"
                                        className="shadow-2xl border-top dark:!border-[#444] shadow-zinc-700/50 dark:shadow-zinc-700/80 bg-zinc-100 dark:bg-[#2c2d30] radius-2 padding-dy text-center flex-col"
                                    >
                                        {homeComponent(trans)}
                                    </Tab.Pane>


                                    <Tab.Pane
                                        eventKey="about"
                                        className="shadow-2xl border-top dark:!border-[#444] shadow-zinc-700/50 dark:shadow-zinc-700/80 bg-zinc-100 dark:bg-[#2c2d30] radius-2 padding-dy text-center flex-col"
                                    >
                                        {aboutComponent(trans)}

                                    </Tab.Pane>


                                    <Tab.Pane
                                        eventKey="portfolio"
                                        className="shadow-2xl mb-8 border-top dark:!border-[#444] shadow-zinc-700/50 dark:shadow-zinc-700/80 bg-zinc-100 dark:bg-[#2c2d30] radius-2 padding-dy text-center flex-col"
                                    >
                                        {portfolioComponent(trans)}

                                    </Tab.Pane>

                                    <Tab.Pane
                                        eventKey="blog"
                                        className="shadow-2xl mb-8 border-top dark:!border-[#444] shadow-zinc-700/50 dark:shadow-zinc-700/80 bg-zinc-100 dark:bg-[#2c2d30] radius-2 padding-dy text-center flex-col"
                                    >
                                        {blogComponent(trans)}

                                    </Tab.Pane>

                                    <Tab.Pane
                                        eventKey="contact"
                                        className="shadow-2xl mb-8 border-top dark:!border-[#444] shadow-zinc-700/50 dark:shadow-zinc-700/80 bg-zinc-100 dark:bg-[#2c2d30] radius-2 padding-dy text-center flex-col"
                                    >
                                        {contactComponent(trans)}

                                    </Tab.Pane>


                                </Tab.Content>
                            </Col>

                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    );
};

export default MainPageView;
