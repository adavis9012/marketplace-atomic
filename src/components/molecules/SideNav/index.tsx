import React, {FunctionComponent} from "react";
import ListItem, {icons} from "../../atoms/ListItem";
import classNames from "classnames";

interface ListElement {
    text: string,
    icon: string,
    subItems?: [ListElement]
}

interface SideNavProps {
    navItems: [ListElement]
}

const SideNav: FunctionComponent<SideNavProps> = (props => {

    function renderList(elements: [ListElement]) {
        return <ul>
            {
                elements.map((el => {
                    let Output = function () {
                        return <ListItem icon={icons.faAngleDoubleDown}>{el.text}</ListItem>;
                    };

                   if(el.subItems) {
                       return <>
                           <Output/>
                           {renderList(el.subItems)}
                       </>;
                   } else {
                       return <Output/>;
                   }
                }))
            }
        </ul>
    }

    return renderList(props.navItems);
});

export default SideNav;