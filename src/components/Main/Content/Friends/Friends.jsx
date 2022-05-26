import React from "react";
import style from "./Friends.module.scss";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsItemElements = props.friendsItemData.map( fid => <FriendsItem image={fid.image} photo={fid.photo} name={fid.name} description={fid.description}/> )

    return (
        <div className={style.friends}>
            <div className={style.friends__row}>
                {friendsItemElements}
            </div>
        </div>
    );
};

export default Friends;