import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    text: 'Text',
};

export const DefaultOnlyTitle = Template.bind({});
DefaultOnlyTitle.args = {
    title: 'Title',
};

export const DefaultOnlyText = Template.bind({});
DefaultOnlyText.args = {
    text: 'Text',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    title: 'Title',
    text: 'Text',
};

DefaultDark.decorators = [ThemeDecorator(Themes.DARK)];
