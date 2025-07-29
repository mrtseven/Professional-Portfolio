import React from 'react';
import {translate, Translations} from "@/config/config";


const HomepageView = ({trans}: { trans: Translations }) => {
    return (
        <div>
            {translate('welcome', trans)}
        </div>
    );
};

export default HomepageView;
