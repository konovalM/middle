import {ButtonHTMLAttributes, FC} from 'react';
import styles from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({children, className, theme = ThemeButton.CLEAR, ...otherProps}) => {
    return (
        <button className={classNames(styles.button, {}, [className, styles[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
