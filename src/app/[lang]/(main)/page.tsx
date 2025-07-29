import React from "react";
import {getDictionary} from "@/app/dictionaries";
import MainPageView from "@/app/[lang]/(main)/page-view";

const MainPage = async ({params}: {
    params: Promise<{ lang: any }>
}) => {
    const {lang} = await params;
    const trans = await getDictionary(lang);
    return <MainPageView trans={trans}/>;
};

export default MainPage;
