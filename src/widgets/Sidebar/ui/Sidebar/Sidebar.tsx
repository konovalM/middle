import React, { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                {
                    SidebarItemList.map((item) => (
                        <SidebarItem
                            item={item}
                            collapsed={collapsed}
                            key={item.path}
                        />
                    ))
                }
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
