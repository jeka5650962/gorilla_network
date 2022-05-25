import React from "react";
import style from "./Friends.module.scss";
import image1 from "./images/image1.jpg";
import ava1 from "./images/ava1.jpg";
import image2 from "./images/image2.jpg";
import ava2 from "./images/ava2.jpg";
import image3 from "./images/image3.jpg";
import ava3 from "./images/ava3.jpg";
import image4 from "./images/image4.jpg";
import ava4 from "./images/ava4.jpg";

const Friends = () => {
    return (
        <div className={style.friends}>
            <div className={style.friends__row}>
                <div className={style.friends__column}>
                    <div className={style.friends__item}>
                        <div className={style.friends__image}><img src={image1} alt="image"/></div>
                        <div className={style.friends__photo}><img src={ava1} alt="ava"/></div>
                        <div className={style.friends__name}>Nithin C Mathew</div>
                        <div className={style.friends__description}>Asst. Accountant | UAE | The Deep Seafood Co. | MBA Finance</div>
                        <a href="#" className={style.friends__button}>Send message</a>
                    </div>
                </div>
                <div className={style.friends__column}>
                    <div className={style.friends__item}>
                        <div className={style.friends__image}><img src={image2} alt="image"/></div>
                        <div className={style.friends__photo}><img src={ava2} alt="ava"/></div>
                        <div className={style.friends__name}>Darya Panasevich</div>
                        <div className={style.friends__description}>English Instructor with 6 years of experinece at IsSoft</div>
                        <a href="#" className={style.friends__button}>Send message</a>
                    </div>
                </div>
                <div className={style.friends__column}>
                    <div className={style.friends__item}>
                        <div className={style.friends__image}><img src={image3} alt="image"/></div>
                        <div className={style.friends__photo}><img src={ava3} alt="ava"/></div>
                        <div className={style.friends__name}>Julia Deshkovich</div>
                        <div className={style.friends__description}>Recruiter Recruiter</div>
                        <a href="#" className={style.friends__button}>Send message</a>
                    </div>
                </div>
                <div className={style.friends__column}>
                    <div className={style.friends__item}>
                        <div className={style.friends__image}><img src={image4} alt="image"/></div>
                        <div className={style.friends__photo}><img src={ava4} alt="ava"/></div>
                        <div className={style.friends__name}>Alina Sh</div>
                        <div className={style.friends__description}>Your IT Recruiter at Solbeg</div>
                        <a href="#" className={style.friends__button}>Send message</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;