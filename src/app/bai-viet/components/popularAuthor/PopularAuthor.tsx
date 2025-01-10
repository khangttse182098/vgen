import React from "react";
import style from "./PopularAuthor.module.scss";
import { GoPencil } from "react-icons/go";
import authorHau from "../../../../../public/img/authorHau.jpg"
import author1 from "../../../../../public/img/author1.jpg"
import author2 from "../../../../../public/img/author2.jpg"
import author3 from "../../../../../public/img/author3.jpg"
import Image from "next/image";

const PopularAuthor = (props: any) => {

    const renderAuthorImage = () => {
            switch (props.image) {
                case 'authorHau':
                    return <Image
                    src={authorHau}
                   alt="AUTHOR PICTURE"
                   priority
                   className={`${style["author_img"]}`}
                   />;
                case 'author1':
                    return <Image
                    src={author1}
                   alt="AUTHOR PICTURE"
                   priority
                   className={`${style["author_img"]}`}
                   />;
                case 'author2':
                    return <Image
                    src={author2}
                   alt="AUTHOR PICTURE"
                   priority
                   className={`${style["author_img"]}`}
                   />;
                case 'author3':
                    return <Image
                    src={author3}
                   alt="AUTHOR PICTURE"
                   priority
                   className={`${style["author_img"]}`}
                   />;;
                default:
                    return null; 
            }
        };

    return (
        <>
            <div className={`${style["container"]}`}>
                <div>
                {renderAuthorImage()}
                </div>
                <p className={`${style["author_name"]}`}>{props.name}</p>
                <p className={`${style["author_article"]}`}><GoPencil /> {props.quantity} bài viết</p>
            </div>
            
        </>
    )
}

export default PopularAuthor;