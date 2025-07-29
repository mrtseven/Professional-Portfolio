import React from 'react';

const SocialItem = (icon : string , link : string) => {
    return (
        <li className="list-inline-item shadow-lg dark:shadow-sm shadow-zinc-700/50 dark:shadow-zinc-300/50 rounded-circle mx-2 mb-2 mb-lg-0">
            <button

                className="cursor-target p-3 rounded-full border-2 backdrop-blur-lg  border-black/40 dark:border-white/70 dark:bg-black shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-white/40 group relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"/>
                <div className="relative z-10 p-2">
                                                                <a href={link} target='_blank'><span
                                                                    className={`fab ${icon} text-lg btn-icon-inner dark:text-white text-zinc-800`}></span></a>
                </div>
            </button>
        </li>
    );
};

export default SocialItem;