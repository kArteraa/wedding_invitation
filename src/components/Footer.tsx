import type {FC} from 'react';
import { IoIosHeartEmpty } from "react-icons/io";

export const Footer: FC = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <h1 className="footer__title">С любовью</h1>
                    <h2 className="footer__title">Артём <span className="delimiter-10">&</span> Татьяна</h2>
                    <IoIosHeartEmpty className="footer__icon" />
                </div>
            </div>

        </section>
    );
};
