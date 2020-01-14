import React from 'react';
import Button, {ButtonSize} from './';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

storiesOf('Atom/Button', module)
    .add(
        'default - small',
        () => {
            return <Button size={ButtonSize.small} onClick={action('clicked')}></Button>;
        }
    )
    .add(
        'default - medium',
        () => {
            return <Button size={ButtonSize.medium} onClick={action('clicked')}></Button>;
        }
    )
    .add(
    'default - large',
    () => {
        return <Button size={ButtonSize.large} onClick={action('clicked')}></Button>;
    }
);
