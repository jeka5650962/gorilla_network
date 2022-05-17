import React from "react";
import style from "./Photo.module.css";

const Photo = () => {
    return (
        <div className={style.profileInfo__photo}>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGP5l7bQHqE6A/profile-displayphoto-shrink_200_200/0/1633726581090?e=1657756800&v=beta&t=fISZxc6Jmt1lC2p18tlw-FUiEIVCVNojRFLR98C8y_o"
                alt="Avatar"/>
        </div>
    );
};

export default Photo;