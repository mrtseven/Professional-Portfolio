import React from 'react';
import {translate} from "@/config/config";
import supportItem from "@/items/supportItem";

const services = (trans:any) => {
    return (
        <>
            <div className="row pt-8">
                <div className="col">
                    <h6 className="font-weight-700 text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        <span>{translate("services", trans)}</span>
                    </h6>
                    <div className="col-md-12 flex items-center justify-center my-3">
                        <hr className="divider divider-lg divider-center"/>
                    </div>
                </div>
            </div>

            <div className="row">

                {supportItem('support_one_title', 'support_one_content', 'fa-clock', trans)}

                {supportItem('support_two_title', 'support_two_content', 'fa-bell', trans)}

                {supportItem('support_three_title', 'support_three_content', 'fa-thumbs-up', trans)}

                {supportItem('support_three_title', 'support_three_content', 'fa-comment', trans)}

                {supportItem('support_three_title', 'support_three_content', 'fa-truck', trans)}

                {supportItem('support_three_title', 'support_three_content', 'fa-calendar', trans)}


            </div>
        </>
    );
};

export default services;
