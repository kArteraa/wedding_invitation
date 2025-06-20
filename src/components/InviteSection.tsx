import type {FC} from 'react';
import {Section} from "./Section.tsx";
import {Img} from "./Img.tsx";
import {ScrollAnimation} from "./ScrollAnimation.tsx";

export const InviteSection: FC = ({}) => {
    return (
        <Section title={"Дорогие родные и друзья"} bg={"primary"}>
            <ScrollAnimation direction="up" duration={3}>
                <p className="invite__text">С огромной радостью и любовью мы приглашаем вас
                    разделить с нами самый светлый и важный день нашей жизни — нашу свадьбу.</p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" duration={1.5}>
                <Img className="invite__img" src={"4.jpg"}/>
            </ScrollAnimation>
            <ScrollAnimation direction="up" duration={1.5}>
                <p className="invite__text"> Пусть этот день наполнится теплом, улыбками и незабываемыми моментами, которые
                мы создадим вместе!</p>
            </ScrollAnimation>
    </Section>
)
    ;
};
