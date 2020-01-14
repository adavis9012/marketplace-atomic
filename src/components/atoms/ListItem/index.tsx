import React, {FunctionComponent} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import * as icons from '@fortawesome/free-solid-svg-icons'

interface ListItemProps {
    children: string,
    icon?: string
}

const ListItem: FunctionComponent<ListItemProps> = (props) => {
    return (
        <li>
            <FontAwesomeIcon icon={props.icon} />
            {props.children}
        </li>
    )
};

export default ListItem;