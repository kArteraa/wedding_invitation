import type {FC} from 'react';
import {Section} from "./Section.tsx";
import { FaVk } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

export const ContactSection: FC = ({}) => {
    return (
        <Section title={"Контакты"} bg={"primary"}>
            <p className="contact__text">Жених: 8 (999)-999-99-99</p>
            <div className="contact__icons">
                <a href="#" className="contact__icon"><FaVk/></a>
                <a href="#" className="contact__icon"><FaWhatsapp/></a>
                <a href="#" className="contact__icon"><FaTelegram/></a>
            </div>
            <p className="contact__text">Невеста: 8 (999)-999-99-99</p>
            <div className="contact__icons">
                <a href="#" className="contact__icon"><FaVk/></a>
                <a href="#" className="contact__icon"><FaWhatsapp/></a>
                <a href="#" className="contact__icon"><FaTelegram/></a>
            </div>
        </Section>
    );
};
