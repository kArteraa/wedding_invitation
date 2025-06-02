import type {FC} from 'react';
import '../styles/index.scss'
import {Intro} from "../components/Intro.tsx";
import {InviteSection} from "../components/InviteSection.tsx";
import {ContactSection} from "../components/ContactSection.tsx";
import {Footer} from "../components/Footer.tsx";
import {Timeline} from "../components/Timeline.tsx";


export const App: FC = ({}) => {
    return (
        <div className="app">
            <Intro />
            <InviteSection />
            <Timeline />
            <ContactSection />
            <Footer />
        </div>
    );
};
