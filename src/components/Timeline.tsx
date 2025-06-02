import type {FC} from 'react';
import {Img} from "./Img.tsx";
import Map from "./Map.tsx";

export const Timeline: FC = () => {
    return (
        <div className="timeline">
            <div className="container">
                <div className="timeline__wrapper">
                    <div className="timeline__wrapper__block">
                        <Img src={"https://placehold.co/600x400"} className="timeline__wrapper__block__img"/>
                        <div className="timeline__wrapper__block__content">
                            <h1 className="timeline__wrapper__block__content__title">Место проведения</h1>
                            <p className="timeline__wrapper__block__content__description">ул. Мира, 125Б, Волжский.</p>
                            <p className="timeline__wrapper__block__content__description">Здесь мы будем ждать вас,
                                чтобы разделить этот важный момент вместе.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Map/>
            <div className="container">
                <div className="timeline__wrapper">
                    <div className="timeline__wrapper__block">
                        <div className="timeline__wrapper__block__content">
                            <h1 className="timeline__wrapper__block__content__title middle">Время сбора 14:30</h1>
                        </div>
                        <Img src={"https://placehold.co/600x400"} className="timeline__wrapper__block__img"/>
                    </div>
                    <div className="timeline__wrapper__block">
                        <Img src={"https://placehold.co/600x400"} className="timeline__wrapper__block__img"/>

                        <div className="timeline__wrapper__block__content">
                            <h1 className="timeline__wrapper__block__content__title">Дресс код</h1>
                            <p className="timeline__wrapper__block__content__description">Свободный стиль</p>
                            <p className="timeline__wrapper__block__content__description">Главное — это ваше
                                присутствие, а не наряд. Приходите в том, в чём вам комфортно и приятно!</p>
                        </div>
                    </div>
                    <div className="timeline__wrapper__block">

                        <div className="timeline__wrapper__block__content middle">
                            <p className="timeline__wrapper__block__content__description">После торжества — уют, вкусные угощения и душевная атмосфера.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
