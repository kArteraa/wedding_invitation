import { type FC, useEffect, useRef, useState } from 'react';
import { GiLinkedRings } from 'react-icons/gi';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.birds.min';
import {ScrollAnimation} from "./ScrollAnimation.tsx";

export const Intro: FC = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect && myRef.current) {
            setVantaEffect(
                BIRDS({
                    el: myRef.current,
                    THREE, // важно передать THREE вручную
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    backgroundColor: 0xfefefe,
                    color1: 0xb10000,
                    color2: 0x0,
                    birdSize: 0.20,
                    wingSpan: 10.00,
                    speedLimit: 2.00,
                    separation: 85.00,
                    cohesion: 100.00,
                    quantity: 4.00
                })
            );
        }
        return () => {
            // @ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="intro" style={{ position: 'relative' }}>
            <div
                ref={myRef}
                style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                }}
            />
            <div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '1rem',
                }}
            >
                <ScrollAnimation direction="up" duration={1}>
                    <h1 className="intro__title">
                        08<span className="delimiter-5">.</span>08<span className="delimiter-5">.</span>2025
                    </h1>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={0.1} duration={1} >
                    <h2 className="intro__subtitle">
                        Этот день навсегда останется в наших сердцах
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.2} duration={1}>
                    <p className="intro__paragraph">
                        <span className="allura">A</span>ртём <span className="delimiter">&</span> Татьяна
                    </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.3} duration={1}>
                    <GiLinkedRings className="intro__icon" />
                </ScrollAnimation>
            </div>
        </section>
    );
};