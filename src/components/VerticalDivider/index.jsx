import React from 'react';

function VerticalDivider(props) {
  return (
    <span
      className="vertical-divider"
      style={{
        width: '1px',
        height: `${props.height}`,
        background: 'lightgrey',
      }}
    />
  );
}

export default VerticalDivider;
