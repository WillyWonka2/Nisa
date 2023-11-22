import { ButtonInterface } from "@/interfaces/interfaces";

import styles from "@/components/UI/button.module.css"
import { ArrowIcon, PlayIcon } from "../../../public/svg/icons";

const Button = ({text, pathname, bgColor = 'var(--secondary-font-color)', arrowIcon = false, playIcon = false}: ButtonInterface) => {
    let style = styles.primary__btn

    if(arrowIcon || playIcon){
        style = styles.secondary__btn
    }

    return (
        <a href={pathname} style={{backgroundColor: bgColor}} className = {style}>
            {text}
            {arrowIcon && <ArrowIcon/> || playIcon && <PlayIcon/>}
        </a>
    );
};

export default Button;