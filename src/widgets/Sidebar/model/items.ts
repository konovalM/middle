import React from 'react';
import { RoutePath } from 'shared/consts/routeConsts/routeConsts';
import HouseIcon from 'shared/assets/icons/house.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import ProfileIcon from 'shared/assets/icons/proile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HouseIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: ListIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
];
