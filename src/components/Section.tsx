import type {FC, ReactNode} from 'react';
import cn from 'classnames';
import {ScrollAnimation} from "./ScrollAnimation.tsx";

interface SectionProps {
    title: string;
    bg: "primary" | "secondary";
    children: ReactNode;
}

export const Section: FC<SectionProps> = ({title,children,bg}) => {
    return (
        <section className={cn("section",bg)}>
            <div className="container">
                <div className="section__wrapper">
                    <ScrollAnimation direction="up" duration={1}>
                        <h1 className="section__title">{title}</h1>

                    </ScrollAnimation>
                    <div className="section__content">
                    {children}
                    </div>
                </div>
            </div>
        </section>
    );
};
