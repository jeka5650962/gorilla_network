import React from "react";
import style from "./AddPost.module.css";

const AddPost = () => {
    return (
        <div className={style.addPost}>
            <div className={style.addPost__title}>
                New post
            </div>
            <div className={style.addPost__area}>
                <textarea name="text"></textarea>
            </div>
            <div className={style.addPost__button}>Post</div>
        </div>
    );
};

export default AddPost;