import React, {FC, useState} from 'react';
import styles from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Коллапс</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                {/*LangSwitcher*/}
            </div>
        </div>
    );
};
