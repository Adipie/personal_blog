import React from 'react';

function SectionTitle(props) {
    return <div>
                <h2 className="top_title">{props.top}</h2>
                <h3 className="bottom_title">{props.bottom}</h3>
            </div>
}

export default SectionTitle;
