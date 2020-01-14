import React, {FunctionComponent} from 'react';
import classnames from 'classnames';
import './style.scss';

interface ButtonProps {
    size: string
    onClick: () => void
}

export const ButtonSize: {[key: string]: string}=  {
    small: 'button_small',
    medium: 'button_medium',
    large: 'button_large'
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    const classProps:string = classnames(
        'button',
        props.size
    );
    return <button
        className={classProps}
        onClick={props.onClick}
    >ola ke ase</button>;
};

Button.defaultProps = {
    size: 'medium'
};

export default Button;