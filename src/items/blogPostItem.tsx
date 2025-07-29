import React from 'react';
import {translate} from "@/config/config";

const blogPost = (id:string,img:string, title:string, content:string, date:string, blogUrl:string , trans:any) => {
    return (
        <div className="col-md-12">
            <div className="mb-4 item">
                <a className="radius-1 shadow-inner d-block " href={`${blogUrl}`}>
                    <div className="  p-2  ">
                        <div className="shadow radius-1">
                            <img className="img-fluid radius-1" src={`${img}`} alt=""/>
                        </div>
                    </div>
                </a>
            </div>
            <div className="mb-1 flex justify-between ltr:text-left rtl:text-right my-4  ">
                <h1 className="text-zinc-800 dark:text-zinc-300 font-weight-600 text-sm ltr:text-left rtl:text-right cursor-pointer  cursor-target">
                    {translate(title, trans)}
                </h1>
                <span
                    className="d-inline-block bg-zinc-800  dark:bg-zinc-300 rounded-2xl font-size-13 mb-3 mb-lg-0 pt-1 font-bold px-3 text-zinc-200  dark:text-zinc-900">
                    {translate(date, trans)}
                        </span>
            </div>
            <ul className="list-inline font-size-13 ltr:text-left rtl:text-right text-zinc-800 dark:text-white">
                <li className="list-inline-item">
                    <span className=" fas fa-user mx-2 text-red-500"/>
                    <span>{translate("post_by", trans)}
                        <a className='text-zinc-700 dark:text-zinc-400 px-2' href="#">Benaissa Ghrib</a>
                                 </span>
                </li>
                <li className="list-inline-item">
                    <span className=" fas fa-tag text-red-500  mx-2"/>
                    <span>{translate("tag", trans)}
                        <a className='text-zinc-700 dark:text-zinc-400 px-2' href="#">Web Design</a>
                                 </span>
                </li>
                <li className="list-inline-item">
                    <span className=" fas fa-comment mx-2 text-red-500"/>
                    <span>{translate("comments", trans)}
                        <a className='text-zinc-700 dark:text-zinc-400 px-2' href="#">(2)</a>
                                 </span>
                </li>
            </ul>
            <hr className="mt-3 mb-3"/>
            <p className='text-zinc-800 dark:text-zinc-400 font-weight-500 text-sm ltr:text-left rtl:text-right cursor-target'>
                {translate(content, trans)}
            </p>
            <div className="bg-zinc-700 dark:bg-zinc-400 rounded-2xl w-fit float-end my-3 shadow-[1px_5px_15px_5px_rgba(0,0,0,0.15)] hover:shadow-[1px_5px_15px_5px_rgba(255,0,0,0.3)] dark:shadow-[1px_1px_15px_1px_rgba(255,255,255,0.15)] cursor-target">
                <a href="#home"
                   className="d-block px-4 py-2 font-size-14 text-zinc-300 dark:text-zinc-800 font-weight-500 hover:text-white dark:hover:text-black ">
                    {translate("more", trans)}
                </a>
            </div>
        </div>
    );
};

export default blogPost;
