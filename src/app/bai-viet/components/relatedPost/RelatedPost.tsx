"use client"

import style from "./RelatedPost.module.scss";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import examPic from "../../../../../public/img/normalPost.jpg";
import authorHau from "../../../../../public/img/authorHau.jpg";
import { useState } from "react";

const RelatedPost = () => {

    const [isLiked, setIsLiked] = useState(false);
      const handleClick = () => {
        setIsLiked(!isLiked);
      };
    
    return (
        <>
        <div className={`${style["container"]}`}>
            <h2>Bài viết nổi bật</h2>
            <hr/>
            <div className={`${style["container__listPost"]}`}>
                <div className={`${style["container__listPost__detailPost"]}`}>
                    <div className={`${style["container__listPost__detailPost__image"]}`}>
                        <Image
                            src={examPic}
                            alt="VGEN PICTURE"
                            priority
                            className={`${style["container__listPost__detailPost__image__src"]}`}
                        />
                    </div>
                    <div className={`${style["container__listPost__detailPost__content"]}`}>
                        <p className={`${style["container__listPost__detailPost__content__header"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng</p>
                        <p className={`${style["container__listPost__detailPost__content__body"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng học tập V.Gen mình – 
                            được gọi là V.Gen Book Club. Tụi mình sẽ gặp nhau mỗi 2 tuần 
                            1 lần tại một địa điểm trung tâm SG để chia sẻ nhiều điều về...</p>
                        <div className={`${style["container__listPost__detailPost__content__author"]}`}>
                            <div className={`${style["container__listPost__detailPost__content__author__detail"]}`}>
                                <Image
                                    src={authorHau}
                                    alt="AUTHOR HAU"
                                    priority
                                    className={`${style["container__listPost__detailPost__content__author__detail__img"]}`}
                                />
                                <div className={`${style["container__listPost__detailPost__content__author__detail__info"]}`}>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__name"]}`}>M Hau Nguyen</span>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__date"]}`}>07 Thg 08</span>
                                </div>
                            </div>
                            
                            <div className={`${style["container__listPost__detailPost__content__author__reaction"]}`}>
                            {isLiked ? (
                                <FaHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__likeSuccess"]}`}
                                />
                            ) : (
                                <FaRegHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__like"]}`}
                                />
          )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${style["container__listPost__detailPost"]}`}>
                    <div className={`${style["container__listPost__detailPost__image"]}`}>
                        <Image
                            src={examPic}
                            alt="VGEN PICTURE"
                            priority
                            className={`${style["container__listPost__detailPost__image__src"]}`}
                        />
                    </div>
                    <div className={`${style["container__listPost__detailPost__content"]}`}>
                        <p className={`${style["container__listPost__detailPost__content__header"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng</p>
                        <p className={`${style["container__listPost__detailPost__content__body"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng học tập V.Gen mình – 
                            được gọi là V.Gen Book Club. Tụi mình sẽ gặp nhau mỗi 2 tuần 
                            1 lần tại một địa điểm trung tâm SG để chia sẻ nhiều điều về...</p>
                        <div className={`${style["container__listPost__detailPost__content__author"]}`}>
                            <div className={`${style["container__listPost__detailPost__content__author__detail"]}`}>
                                <Image
                                    src={authorHau}
                                    alt="AUTHOR HAU"
                                    priority
                                    className={`${style["container__listPost__detailPost__content__author__detail__img"]}`}
                                />
                                <div className={`${style["container__listPost__detailPost__content__author__detail__info"]}`}>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__name"]}`}>M Hau Nguyen</span>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__date"]}`}>07 Thg 08</span>
                                </div>
                            </div>
                            
                            <div className={`${style["container__listPost__detailPost__content__author__reaction"]}`}>
                            {isLiked ? (
                                <FaHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__likeSuccess"]}`}
                                />
                            ) : (
                                <FaRegHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__like"]}`}
                                />
          )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${style["container__listPost__detailPost"]}`}>
                    <div className={`${style["container__listPost__detailPost__image"]}`}>
                        <Image
                            src={examPic}
                            alt="VGEN PICTURE"
                            priority
                            className={`${style["container__listPost__detailPost__image__src"]}`}
                        />
                    </div>
                    <div className={`${style["container__listPost__detailPost__content"]}`}>
                        <p className={`${style["container__listPost__detailPost__content__header"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng</p>
                        <p className={`${style["container__listPost__detailPost__content__body"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng học tập V.Gen mình – 
                            được gọi là V.Gen Book Club. Tụi mình sẽ gặp nhau mỗi 2 tuần 
                            1 lần tại một địa điểm trung tâm SG để chia sẻ nhiều điều về...</p>
                        <div className={`${style["container__listPost__detailPost__content__author"]}`}>
                            <div className={`${style["container__listPost__detailPost__content__author__detail"]}`}>
                                <Image
                                    src={authorHau}
                                    alt="AUTHOR HAU"
                                    priority
                                    className={`${style["container__listPost__detailPost__content__author__detail__img"]}`}
                                />
                                <div className={`${style["container__listPost__detailPost__content__author__detail__info"]}`}>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__name"]}`}>M Hau Nguyen</span>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__date"]}`}>07 Thg 08</span>
                                </div>
                            </div>
                            
                            <div className={`${style["container__listPost__detailPost__content__author__reaction"]}`}>
                            {isLiked ? (
                                <FaHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__likeSuccess"]}`}
                                />
                            ) : (
                                <FaRegHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__like"]}`}
                                />
          )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${style["container__listPost__detailPost"]}`}>
                    <div className={`${style["container__listPost__detailPost__image"]}`}>
                        <Image
                            src={examPic}
                            alt="VGEN PICTURE"
                            priority
                            className={`${style["container__listPost__detailPost__image__src"]}`}
                        />
                    </div>
                    <div className={`${style["container__listPost__detailPost__content"]}`}>
                        <p className={`${style["container__listPost__detailPost__content__header"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng</p>
                        <p className={`${style["container__listPost__detailPost__content__body"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng học tập V.Gen mình – 
                            được gọi là V.Gen Book Club. Tụi mình sẽ gặp nhau mỗi 2 tuần 
                            1 lần tại một địa điểm trung tâm SG để chia sẻ nhiều điều về...</p>
                        <div className={`${style["container__listPost__detailPost__content__author"]}`}>
                            <div className={`${style["container__listPost__detailPost__content__author__detail"]}`}>
                                <Image
                                    src={authorHau}
                                    alt="AUTHOR HAU"
                                    priority
                                    className={`${style["container__listPost__detailPost__content__author__detail__img"]}`}
                                />
                                <div className={`${style["container__listPost__detailPost__content__author__detail__info"]}`}>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__name"]}`}>M Hau Nguyen</span>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__date"]}`}>07 Thg 08</span>
                                </div>
                            </div>
                            
                            <div className={`${style["container__listPost__detailPost__content__author__reaction"]}`}>
                            {isLiked ? (
                                <FaHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__likeSuccess"]}`}
                                />
                            ) : (
                                <FaRegHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__like"]}`}
                                />
          )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${style["container__listPost__detailPost"]}`}>
                    <div className={`${style["container__listPost__detailPost__image"]}`}>
                        <Image
                            src={examPic}
                            alt="VGEN PICTURE"
                            priority
                            className={`${style["container__listPost__detailPost__image__src"]}`}
                        />
                    </div>
                    <div className={`${style["container__listPost__detailPost__content"]}`}>
                        <p className={`${style["container__listPost__detailPost__content__header"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng</p>
                        <p className={`${style["container__listPost__detailPost__content__body"]}`}>Hậu sẽ mở một CLB đọc sách trong cộng đồng học tập V.Gen mình – 
                            được gọi là V.Gen Book Club. Tụi mình sẽ gặp nhau mỗi 2 tuần 
                            1 lần tại một địa điểm trung tâm SG để chia sẻ nhiều điều về...</p>
                        <div className={`${style["container__listPost__detailPost__content__author"]}`}>
                            <div className={`${style["container__listPost__detailPost__content__author__detail"]}`}>
                                <Image
                                    src={authorHau}
                                    alt="AUTHOR HAU"
                                    priority
                                    className={`${style["container__listPost__detailPost__content__author__detail__img"]}`}
                                />
                                <div className={`${style["container__listPost__detailPost__content__author__detail__info"]}`}>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__name"]}`}>M Hau Nguyen</span>
                                    <span className={`${style["container__listPost__detailPost__content__author__detail__info__date"]}`}>07 Thg 08</span>
                                </div>
                            </div>
                            
                            <div className={`${style["container__listPost__detailPost__content__author__reaction"]}`}>
                            {isLiked ? (
                                <FaHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__likeSuccess"]}`}
                                />
                            ) : (
                                <FaRegHeart
                                onClick={handleClick}
                                size={23}
                                className={`${style["container__listPost__detailPost__content__author__reaction__like"]}`}
                                />
          )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${style["container__listPost__button"]}`}>
                    <button className={`${style["container__listPost__button__src"]}`}>XEM THÊM</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default RelatedPost;