import type {FC} from 'react';
import cn from "classnames";

interface ImgProps {
    src: string;
    className?: string;
}

export const Img: FC<ImgProps> = ({src,className}) => {
    return (
        <div className={cn("img_box",className)}>
            <img className="img" src={src} alt=""/>
        </div>
    );
};
