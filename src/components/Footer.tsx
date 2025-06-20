import type {FC} from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import {ScrollAnimation} from "./ScrollAnimation.tsx";

export const Footer: FC = () => {
    return (
        <section className="footer">
            <div className="container">
                <ScrollAnimation direction="up" delay={0.1}>
                    <div className="footer__wrapper">
                        <h1 className="footer__title">С любовью</h1>
                        <h2 className="footer__title"><span className="allura" style={{fontSize:60}}>A</span>ртём <span className="delimiter-10">&</span> Татьяна</h2>
                        <IoIosHeartEmpty className="footer__icon"/>
                    </div>
                </ScrollAnimation>

            </div>

        </section>
    );
};
