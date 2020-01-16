import React from 'react';
import ListItem, {icons} from "./";
import {select, text, withKnobs} from "@storybook/addon-knobs";

export  default {
    component: ListItem,
    title: 'Atoms/ListItem',
    decorators: [withKnobs]
}

export const _default = () => {
    const iconKnob = select('Icon', icons, icons.faDotCircle);

    return <ListItem icon={iconKnob}>{text('Children', 'List Item')}</ListItem>;
};