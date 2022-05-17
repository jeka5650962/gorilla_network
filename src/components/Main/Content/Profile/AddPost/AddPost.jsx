import React from "react";
import style from "./AddPost.module.css";

const AddPost = () => {
    return (
        <div className={style.addPost}>
            <div className={style.addPost__title}>
                Add new post
            </div>
            <div className={style.addPost__area}>
                <textarea name="text"></textarea>
            </div>
            <div className={style.addPost__button}>Publish</div>
        </div>
    );
};

export default AddPost;