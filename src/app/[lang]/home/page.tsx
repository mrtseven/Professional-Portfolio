import React from "react";
import {getDictionary} from "@/app/dictionaries";
import HomepageView from "@/app/[lang]/home/page-view";


const HomePage = async ({params}: {
    params: Promise<{ lang: any }>
}) => {
    const {lang} = await params;
    const trans = await getDictionary(lang);
    return <HomepageView trans={trans}/>;
};

export default HomePage;
