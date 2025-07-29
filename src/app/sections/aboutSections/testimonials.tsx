import React from "react";
import {translate} from "@/config/config";
export interface CarouselItem {
    title: string;
    description: string;
    id: number;
}
import 'react-multi-carousel/lib/styles.css';
import TestimonialsGallery from "@/components/animations/testimonialsGallery";
const testimonials = (trans: any) => {

    const images: string[] = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0g_ye5yqXbIaMdxmQNtNwpqf56trAzn4fA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6Hqlj_BpqSRK347lBClt-XSLk8iIHJKBCg&s",
        "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/purple-elegant-recognition-certificate-template-qqv2th9aa60ddd.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa_mxijI9v_pvjA10Icag3EtDC93yhbTEMA&s",
        "https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_certificate-template-908f1750642c3cceba19cbc67086b678.jpg?ts%20=%201745913213",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsq5q5VjusgnObzXFzx8EJY1p2r3-OiUL2nw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsq5q5VjusgnObzXFzx8EJY1p2r3-OiUL2nw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhQG100ag3E_opRYf-aoP9pacO9gvbrbJkQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE08W--wNXG3WNxhUkQsLIKgybjjKTPJW4mA&s"
    ];


    return (
        <div className="row pt-8">

            <div className="col">
                <h6 className="font-weight-700 text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                    <span>{translate("testimonials", trans)}</span>
                </h6>
                <div className="col-md-12 flex items-center justify-center my-3">
                    <hr className="divider divider-lg divider-center"/>
                </div>
            </div>


            <TestimonialsGallery images={images} autoplay={true} pauseOnHover={true} />



        </div>
    );
};

export default testimonials;

