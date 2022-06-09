import React, {useRef} from "react";
import style from "./AddPost.module.scss";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/state";

const AddPost = (props) => {

    /* ------------------------------------------------------------------------------------------------------ addPost */

    let newPostElement = useRef(null);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    /* ------------------------------------------------------------------------------------------------- onPostChange */

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    /* ------------------------------------------------------------------------------------------------------- return */

    return (
        <div className={style.addPost}>
            <div className={style.addPost__title}>
                Add new post
            </div>
            <div className={style.addPost__area}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <button onClick={addPost} className={style.addPost__button}>Publish</button>
        </div>
    );
};

export default AddPost;