import React, {FunctionComponent} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import classNames from "classnames";
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import './style.scss';

interface ListItemProps {
    children: string,
    icon?: IconDefinition
}

export const icons = faIcons;

const ListItem: FunctionComponent<ListItemProps> = (props) => {
   const classProps:string = classNames(
       'list-item'
   );

    return (
        <li className={classProps}>
            <FontAwesomeIcon
                className='list-item_icon'
                icon={props.icon}
            />
            <span className="list-item_text">
                {props.children}
            </span>
        </li>
    );
};

ListItem.defaultProps = {
    icon: icons.faDotCircle
};

export default ListItem;