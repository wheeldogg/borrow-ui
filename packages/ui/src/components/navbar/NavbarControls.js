import React from 'react';
import PropTypes from 'prop-types';

import { UI_PREFIX } from '../../config';

const NAVBAR_CONTROLS_CLASS = `${UI_PREFIX}__navbar__controls`;
const NAVBAR_CONTROLS_FLOATING_CLASS = `${UI_PREFIX}__navbar__controls--floating`;

export function NavbarControls({ toggleBodyOpen, floating = false }) {
    const controlsClassName = `${NAVBAR_CONTROLS_CLASS} ${
        floating ? NAVBAR_CONTROLS_FLOATING_CLASS : ''
    }`;

    return (
        <div className={controlsClassName}>
            <span
                onClick={() => toggleBodyOpen(false)}
                style={{ cursor: 'pointer', fontSize: '24px' }}
            >
                &times;
            </span>
        </div>
    );
}

NavbarControls.propTypes = {
    toggleBodyOpen: PropTypes.func.isRequired,
    floating: PropTypes.bool,
};
