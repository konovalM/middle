import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Ссылка',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { theme: AppLinkTheme.PRIMARY };

export const Secondary = Template.bind({});
Secondary.args = { theme: AppLinkTheme.SECONDARY };

export const Red = Template.bind({});
Red.args = { theme: AppLinkTheme.RED };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { theme: AppLinkTheme.PRIMARY };

PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];
export const SecondaryDark = Template.bind({});
SecondaryDark.args = { theme: AppLinkTheme.SECONDARY };
SecondaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const RedDark = Template.bind({});
RedDark.args = { theme: AppLinkTheme.RED };
RedDark.decorators = [ThemeDecorator(Themes.DARK)];
