import {FC} from 'react';
import styles from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (
    {
        className,
        children,
        to,
        theme= AppLinkTheme.PRIMARY,
        ...otherProps
    }) => {
    return (
        <Link to={to} className={classNames(styles.appLink, {}, [className, styles[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
