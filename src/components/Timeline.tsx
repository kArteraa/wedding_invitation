import type {FC} from 'react';
import {Img} from "./Img.tsx";
import Map from "./Map.tsx";
import {ScrollAnimation} from "./ScrollAnimation.tsx";

export const Timeline: FC = () => {
    return (
        <div className="timeline">
            <div className="container">
                <div className="timeline__wrapper">
                    <div className="timeline__wrapper__block">
                        <ScrollAnimation direction={"right"}>
                            <Img src={"za.jpg"} className="timeline__wrapper__block__img"/>
                        </ScrollAnimation>
                        <div className="timeline__wrapper__block__content">
                            <ScrollAnimation direction={"left"}>
                                <h1 className="timeline__wrapper__block__content__title">Регистрация</h1>
                            </ScrollAnimation>
                            <ScrollAnimation direction={"left"} delay={0.2}>
                                <p className="timeline__wrapper__block__content__description">ул. Чайковского, 17А, Волжский.</p>
                            </ScrollAnimation>
                            <ScrollAnimation direction={"left"} delay={0.4}>
                                <p className="timeline__wrapper__block__content__description">Приходим по желанию!</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="timeline__wrapper__block">
                        <ScrollAnimation direction={"right"}>
                            <Img src={"5.jpg"} className="timeline__wrapper__block__img"/>
                        </ScrollAnimation>
                        <div className="timeline__wrapper__block__content">
                            <ScrollAnimation direction={"left"}>
                                <h1 className="timeline__wrapper__block__content__title">Место проведения</h1>
                            </ScrollAnimation>
                            <ScrollAnimation direction={"left"} delay={0.2}>
                                <p className="timeline__wrapper__block__content__description">ул. Мира, 125Б,
                                    Волжский.</p>
                            </ScrollAnimation>
                            <ScrollAnimation direction={"left"} delay={0.4}>
                                <p className="timeline__wrapper__block__content__description">Здесь мы будем ждать Вас,
                                    чтобы разделить этот важный момент вместе.</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <Map/>
            <div className="container">
                <div className="timeline__wrapper">
                    <div className="timeline__wrapper__block">

                        <div className="timeline__wrapper__block__content">
                            <ScrollAnimation direction={"right"}>
                                <h1 className="timeline__wrapper__block__content__title middle">Время
                                    сбора <br/>08.08.2025 <span className="delimiter">в</span> 14:30
                                </h1>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation direction={"left"}>
                            <Img src={"6.jpg"} className="timeline__wrapper__block__img"/>
                        </ScrollAnimation>
                    </div>
                    <div className="timeline__wrapper__block">
                        <ScrollAnimation direction={"right"}>
                            <Img src={"7.jpg"} className="timeline__wrapper__block__img remove_img"/>
                        </ScrollAnimation>

                        <div className="timeline__wrapper__block__content">
                        <ScrollAnimation direction={"left"}>
                                <h1 className="timeline__wrapper__block__content__title">Дресс код</h1>
                            </ScrollAnimation>
                            <ScrollAnimation direction={"left"} delay={0.2}>
                                <p className="timeline__wrapper__block__content__description">Свободный стиль</p>
                            </ScrollAnimation>
                            <ScrollAnimation direction={"left"} delay={0.4}>
                                <p className="timeline__wrapper__block__content__description">Главное — это Ваше
                                    присутствие, а не наряд. Приходите в том, в чём вам комфортно и приятно!</p>
                            </ScrollAnimation>

                        </div>
                    </div>
                    <div className="timeline__wrapper__block">
                        <ScrollAnimation direction={"up"} delay={0.2} className={"timeline_end"}>
                            <div className="timeline__wrapper__block__content middle">
                                <p className="timeline__wrapper__block__content__description">После торжества — уют,
                                    вкусные угощения и душевная атмосфера.</p>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </div>

        </div>
    );
};
