import React from 'react';
import { addDecorator, ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet beatae cumque dolore est expedita explicabo ipsa ipsum libero magni nulla, omnis quisquam reiciendis similique sunt tempore, temporibus voluptas.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet beatae cumque dolore est expedita explicabo ipsa ipsum libero magni nulla, omnis quisquam reiciendis similique sunt tempore, temporibus voluptas.',
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
