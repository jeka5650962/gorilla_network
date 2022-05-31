import React, {useRef} from "react";
import style from "./AddPost.module.scss";

const AddPost = (props) => {

    /* ------------------------------------------------------------------------------------------------------ addPost */

    let newPostElement = useRef(null);

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    };

    /* ------------------------------------------------------------------------------------------------- onPostChange */

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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