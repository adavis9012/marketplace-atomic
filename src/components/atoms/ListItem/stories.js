import React from 'react';
import ListItem from "./";
import * as icons from '@fortawesome/free-solid-svg-icons'
import {text, select, withKnobs} from "@storybook/addon-knobs";

export  default {
    component: ListItem,
    title: 'Atoms/ListItem',
    decorators: [withKnobs]
}

export const _default = () => {
    return <ListItem icon={select('Icon', icons, icons.faDotCircle)}>List Item</ListItem>;
};