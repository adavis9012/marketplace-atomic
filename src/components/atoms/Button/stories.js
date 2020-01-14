import React from 'react';
import Button, {ButtonSize, ButtonTheme} from './';
import {action} from "@storybook/addon-actions";
import {text, select, withKnobs} from "@storybook/addon-knobs";

export default {
    component: Button,
    title: 'Atoms/Button',
    decorators: [withKnobs]
};

export const interactive = () => {
    return <Button
        size={select('Size', ButtonSize, ButtonSize.medium )}
        theme={select('Theme', ButtonTheme, ButtonTheme.primary)}
        onClick={action('clicked')}
    >
        {text("Children", "Button")}
    </Button>;
};
export const small = () => {
    return <Button size={ButtonSize.small} onClick={action('clicked')}>
        Button
    </Button>;
};
export const medium = () => {
    return <Button size={ButtonSize.medium} onClick={action('clicked')}>
        Button
    </Button>;
};
export const  large = () => {
    return <Button size={ButtonSize.large} onClick={action('clicked')}>
        Button
    </Button>;
};

medium.story = {
    name: 'Medium (default)'
};
