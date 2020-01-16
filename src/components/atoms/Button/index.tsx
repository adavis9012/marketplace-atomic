import React, {FunctionComponent} from 'react';
import classNames from 'classnames';
import './style.scss';

interface ButtonProps {
    size?: string,
    theme?: string,
    onClick: () => void
}

export enum ButtonSize {
    small = 'button--small',
    medium = 'button--medium',
    large = 'button--large'
}

export enum ButtonTheme {
    primary = 'button--primary',
    dark = 'button--dark'
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    const classProps:string = classNames(
        'button',
        props.size,
        props.theme
    );

    return <button
        className={classProps}
        onClick={props.onClick}
    >
        {props.children}
    </button>;
};

Button.defaultProps = {
    size: ButtonSize.medium,
    theme: ButtonTheme.primary
};

export default Button;