import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator(({ user: undefined }))],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const LightLoggedIn = Template.bind({});
LightLoggedIn.args = {};
LightLoggedIn.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ user: { authData: { id: '123', name: 'ii4elka' } } })];

export const DarkLoggedIn = Template.bind({});
DarkLoggedIn.args = {};
DarkLoggedIn.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({ user: { authData: { id: '123', name: 'ii4elka' } } })];
