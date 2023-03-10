import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize
    children: ReactNode
}

export const Button = memo(({
    children,
    className,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}: ButtonProps) => {
    const mods: Mods = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };
    return (
        <button
            type="button"
            className={classNames(styles.button, mods, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
