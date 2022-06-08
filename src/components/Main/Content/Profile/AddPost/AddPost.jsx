import React, {useRef} from "react";
import style from "./AddPost.module.scss";

const AddPost = (props) => {

    /* ------------------------------------------------------------------------------------------------------ addPost */

    let newPostElement = useRef(null);

    let addPost = () => {
        props.dispatch( { type: 'ADD-POST' } );
    };

    /* ------------------------------------------------------------------------------------------------- onPostChange */

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
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