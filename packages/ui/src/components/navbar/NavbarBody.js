import React from 'react';
import PropTypes from 'prop-types';

import { UI_PREFIX } from '../../config';
import { NavbarControls } from './NavbarControls';

const NAVBAR_BODY_CLASS = `${UI_PREFIX}__navbar__body`;
const NAVBAR_BODY_ITEM_CLASS = `${UI_PREFIX}__navbar__body__item`;

export function NavbarBody({
    selectedItem,
    SelectedItemBody,
    query,
    toggleBodyOpen,
    setState,
    resetState,
}) {
    return (
        <div className={NAVBAR_BODY_CLASS}>
            <NavbarControls
                query={query}
                handleChangeQuery={e => setState(state => ({ ...state, query: e.target.value }))}
                toggleBodyOpen={toggleBodyOpen}
                showQueryInput={selectedItem.showQueryInput}
                floatingControls={selectedItem.floatingControls}
            />
            {SelectedItemBody && (
                <div className={NAVBAR_BODY_ITEM_CLASS}>
                    <SelectedItemBody query={query} resetState={resetState} />
                </div>
            )}
        </div>
    );
}

NavbarBody.propTypes = {
    selectedItem: PropTypes.shape({
        showQueryInput: PropTypes.bool,
        floatingControls: PropTypes.bool,
    }),
    SelectedItemBody: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    query: PropTypes.string,
    toggleBodyOpen: PropTypes.func,
    setState: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
};
