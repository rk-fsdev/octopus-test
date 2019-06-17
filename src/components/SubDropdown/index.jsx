import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import './SubDropdown.scss';

function SubDropdown(props) {
  return (
    <div className="sub-dropdown">
      <h4>{props.label}</h4>
      <Dropdown defaultValue={props.dropdownOptions[0].text} selection options={props.dropdownOptions} />
    </div>
  );
}

export default SubDropdown;
