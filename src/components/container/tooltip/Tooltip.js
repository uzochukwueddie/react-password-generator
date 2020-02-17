import React from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

const Tooltip = props => {
    const { message, position, displayTooltip } = props;

    return (
        <>
            {
                displayTooltip ?
                <div className={`tooltip-bubble tooltip-${position}`}>
                    <div className="tooltip-message">{message}</div>
                </div> : ''
            }
        </>
    )
}

Tooltip.propTypes = {
    message: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    displayTooltip: PropTypes.bool.isRequired,
}

export default Tooltip;
