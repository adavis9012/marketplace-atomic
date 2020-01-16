import React from "react";
import SideNav, {icons} from "./";

export default {
    component: SideNav,
    title: 'Molecules/SideNav'
}

const mockListData = [
    {
        icon: 'test',
        text: 'item 1',
    },
    {
        icon: 'test',
        text: 'item 2',
        subItems: [
            {icon: 'text', text: 'sub-item 2.1'},
            {icon: 'text', text: 'sub-item 2.2'},
            {icon: 'text', text: 'sub-item 3.3'}
        ]
    },
    {
        icon: 'test',
        text: 'item 3',
        subItems: [
            {
                icon: 'text',
                text: 'sub-item 3.1',
                subItems: [
                    {icon: 'text', text: 'sub-item 3.1.1'}
                ]
            }
        ]
    }
];

export const _default = () => {
    return <SideNav navItems={mockListData}/>
};