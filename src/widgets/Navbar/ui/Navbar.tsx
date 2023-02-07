import React, {FC} from 'react';
import styles from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
