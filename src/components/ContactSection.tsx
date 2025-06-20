import type {FC} from 'react';
import {Section} from "./Section.tsx";
import { FaWhatsapp } from "react-icons/fa6";
import {ScrollAnimation} from "./ScrollAnimation.tsx";

export const ContactSection: FC = ({}) => {
    return (
        <Section title={"Контакты"} bg={"primary"}>
            <ScrollAnimation direction={"up"} delay={0.1}>
                <p className="contact__text">Жених: 8 (995)-400-27-17</p>
            </ScrollAnimation>
            <div className="contact__icons">
                <ScrollAnimation direction={"up"} delay={0.3}>
                    <a href="https://wa.clck.bar/79954002717" className="contact__icon"><FaWhatsapp/></a>
                </ScrollAnimation>

            </div>
            <ScrollAnimation direction={"up"} delay={0.1}>
                <p className="contact__text">Невеста: 8 (961)-676-23-06</p>
            </ScrollAnimation>
            <div className="contact__icons">

                <ScrollAnimation direction={"up"} delay={0.3}>
                    <a href="https://wa.clck.bar/79616762306" className="contact__icon"><FaWhatsapp/></a>
                </ScrollAnimation>


            </div>
        </Section>
    );
};
