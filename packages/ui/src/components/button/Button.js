import React from 'react';
import PropTypes from 'prop-types';

import 'style/components/button.scss';


const BUTTON_CLASS = 'borrow-ui__button';
const BUTTON_CLASS_POSITIVE = `${BUTTON_CLASS}--positive`;

export function Button({ className, mean, children, ...rest }) {
    let buttonClassName = `${BUTTON_CLASS} ${className}`;
    if (mean === 'positive') {
        buttonClassName = `${buttonClassName} ${BUTTON_CLASS_POSITIVE}`;
    }

    return <button className={buttonClassName} {...rest}>
        {children}
    </button>;
}

Button.propTypes = {
    className: PropTypes.string,
    mean: PropTypes.oneOf([
        undefined, 'positive'
    ]),
    children: PropTypes.node,
};