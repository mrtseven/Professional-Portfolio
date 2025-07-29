import React from 'react';
import LanguageButton from "@/components/languageButton";
import {translate, Translations} from "@/config/config" 

const Header = ({ trans}: { trans: Translations }) => {

    return (
        <div className='flex justify-between  px-4 py-3 m-2 rounded-2xl items-center bg-blue-500 dark:bg-blue-950 text-white p-2 fixed-top'>
            <p>{translate('title_header', trans)}</p>
            
        </div>
    );
};

export default Header;
