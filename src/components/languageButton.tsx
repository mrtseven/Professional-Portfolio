"use client";
import React, {useState} from "react";
import {usePathname, useRouter} from "next/navigation";

const languages = [
    {
        name: "fa",
    },
    {
        name: "en",
    },
];
const LanguageButton = () => {
    type Language = {
        name: string;
        language?: string;
    };

    const router = useRouter();
    const pathname = usePathname();
    const found = pathname ? languages.find((lang) => pathname.includes(lang.name)) : null;
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        found ?? languages[0]
    );

    const handleSelected = (lang: string) => {

        setSelectedLanguage({
            ...selectedLanguage,
            name: lang,
            language: lang === "en" ? "En" : "Fa",
        });
        if (pathname) {
            router.push(`/${lang}/${pathname.split("/")[2] ? pathname.split("/")[2] : ''}`);
        }
    
    };
    
    return <div className={`relative cursor-target`}>
        <div className="bg-gray-100 dark:bg-zinc-800 shadow-[1px_5px_15px_5px_rgba(255,255,255,0.3)] dark:shadow-[1px_5px_15px_5px_rgba(255,255,255,0.1)] border-2 border-zinc-300 dark:border-zinc-600 rounded-xl inline-block">
            <a className=" hover:shadow-[1px_5px_15px_5px_rgba(20,20,20,0.25)] rounded-xl block" href="#theme-toggle" onClick={() => handleSelected(pathname && pathname.includes("fa") ? "en" : "fa")}>
                <span className={`text-zinc-800 dark:text-zinc-300 font-bold  text-sm flex items-center justify-center p-3`}>{pathname && pathname.includes('fa') ? 'EN' : 'FA'}</span>
            </a>
        </div>
  </div>
};

export default LanguageButton;
