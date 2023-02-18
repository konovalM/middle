import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    children, className, theme = ThemeButton.CLEAR, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(styles.button, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
