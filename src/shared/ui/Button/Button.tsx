import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
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
};
