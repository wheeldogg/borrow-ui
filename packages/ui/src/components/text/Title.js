import React from 'react';
import PropTypes from 'prop-types';

import { UI_PREFIX } from '../../config';
import { propTypesChildren } from '../../utils/types';
import { useRefHash } from '../../hooks/useAnchor';

const TITLE_CLASS = `${UI_PREFIX}__title`;
const TITLE_ANCHOR_CLASS = `${UI_PREFIX}__title__anchor`;
const TITLE_ANCHOR_ACTIVE_CLASS = `${UI_PREFIX}__title__anchor--active`;
// size is autogenerated as
// titleSize = `${UI_PREFIX}__title--size-${size}`;

export function Title({
    tag: Tag = 'h1',
    children,
    className = '',
    anchor,
    anchorClassName = '',
    ...rest
}) {
    const refHash = useRefHash();
    const titleClassName = `${TITLE_CLASS} ${className}`;

    const anchorActiveClassName = anchor === refHash && anchor ? TITLE_ANCHOR_ACTIVE_CLASS : '';
    const anchorClassName_ = `${TITLE_ANCHOR_CLASS} ${anchorClassName} ${anchorActiveClassName}`;
    const content = anchor ? (
        <a className={anchorClassName_} name={anchor} href={`#${anchor}`}>
            {children}
        </a>
    ) : (
        children
    );

    return (
        <Tag className={titleClassName} {...rest}>
            {content}
        </Tag>
    );
}

Title.propTypes = {
    tag: propTypesChildren,
    children: propTypesChildren,
    className: PropTypes.string,
    anchor: PropTypes.string,
    anchorClassName: PropTypes.string,
};
