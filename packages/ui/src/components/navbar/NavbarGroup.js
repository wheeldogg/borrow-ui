import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { UI_PREFIX } from '../../config';
import { propTypesChildren } from '../../utils/types';

const NAVBAR_GROUP_CLASS = `${UI_PREFIX}__navbar__group`;
const NAVBAR_GROUP_ITEM_CLASS = `${UI_PREFIX}__navbar__group__item`;
const NAVBAR_GROUP_ITEM_CLICKABLE_CLASS = `${UI_PREFIX}__navbar__group__item--clickable`;

export function NavbarGroup({ position, elements, toggleSetItem }) {
    if (!elements) return;

    const positionClass = `${NAVBAR_GROUP_CLASS}--${position}`;

    const items = Array.isArray(elements) ? elements : [elements];

    return (
        <div className={`${NAVBAR_GROUP_CLASS} ${positionClass}`}>
            {items.map((item, index) => {
                const itemHeader = item.hasOwnProperty('headerLabel') ? item.headerLabel : null;
                return (
                    <Fragment key={`navbar-header-group-${position}-${index}`}>
                        {typeof item === 'string' && (
                            <span className={NAVBAR_GROUP_ITEM_CLASS}>{item}</span>
                        )}
                        {itemHeader && (
                            <span
                                className={`${NAVBAR_GROUP_ITEM_CLASS} ${NAVBAR_GROUP_ITEM_CLICKABLE_CLASS}`}
                                onClick={() => toggleSetItem(item, true)}
                            >
                                {item.headerLabel}
                            </span>
                        )}
                        {React.isValidElement(item) && !item.hasOwnProperty('renderHeader') && item}
                    </Fragment>
                );
            })}
        </div>
    );
}

const elementType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.shape({
        headerLabel: propTypesChildren,
        name: PropTypes.string,
        bodyItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        showQueryInput: PropTypes.bool,
        floatingControls: PropTypes.bool,
    }),
]);

NavbarGroup.propTypes = {
    position: PropTypes.oneOf(['left', 'center', 'right']),
    elements: PropTypes.oneOfType([elementType, PropTypes.arrayOf(elementType)]),
    toggleSetItem: PropTypes.func,
};
