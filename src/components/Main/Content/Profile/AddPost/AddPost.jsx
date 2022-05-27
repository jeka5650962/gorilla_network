import React, {useRef} from "react";
import style from "./AddPost.module.scss";

const AddPost = () => {

    /* -------------------------------------------------------------------------------------- addPost */

    let newPostElement = useRef(null);

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    /* --------------------------------------------------------------------------------------- return */

    return (
        <div className={style.addPost}>
            <div className={style.addPost__title}>
                Add new post
            </div>
            <div className={style.addPost__area}>
                <textarea ref={newPostElement} name="text"></textarea>
            </div>
            <button onClick={addPost} className={style.addPost__button}>Publish</button>
        </div>
    );
};

export default AddPost;