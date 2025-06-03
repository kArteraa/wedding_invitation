import type {FC} from 'react';
import {Section} from "./Section.tsx";
import { FaVk } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import {ScrollAnimation} from "./ScrollAnimation.tsx";

export const ContactSection: FC = ({}) => {
    return (
        <Section title={"Контакты"} bg={"primary"}>
            <ScrollAnimation direction={"up"} delay={0.1}>
                <p className="contact__text">Жених: 8 (999)-999-99-99</p>
            </ScrollAnimation>
            <div className="contact__icons">
                <ScrollAnimation direction={"right"} delay={0.3}>
                    <a href="#" className="contact__icon"><FaVk/></a>
                </ScrollAnimation>
                <ScrollAnimation direction={"up"} delay={0.3}>
                    <a href="#" className="contact__icon"><FaWhatsapp/></a>
                </ScrollAnimation>
                <ScrollAnimation direction={"left"} delay={0.3}>
                    <a href="#" className="contact__icon"><FaTelegram/></a>
                </ScrollAnimation>

            </div>
            <ScrollAnimation direction={"up"} delay={0.1}>
                <p className="contact__text">Невеста: 8 (999)-999-99-99</p>
            </ScrollAnimation>
            <div className="contact__icons">
                <ScrollAnimation direction={"right"} delay={0.3}>
                    <a href="#" className="contact__icon"><FaVk/></a>
                </ScrollAnimation>
                <ScrollAnimation direction={"up"} delay={0.3}>
                    <a href="#" className="contact__icon"><FaWhatsapp/></a>
                </ScrollAnimation>
                <ScrollAnimation direction={"left"} delay={0.3}>
                    <a href="#" className="contact__icon"><FaTelegram/></a>
                </ScrollAnimation>

            </div>
        </Section>
    );
};
