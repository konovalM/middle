import React, { FC, memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={styles.item}
            to={item.path}
        >
            <item.Icon className={styles.icon} />
            <span
                className={classNames(styles.link, { [styles.collapsed]: collapsed }, [])}
            >
                {t(item.text)}
            </span>
        </AppLink>
    );
});
