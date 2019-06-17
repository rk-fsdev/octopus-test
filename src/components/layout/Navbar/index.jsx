import React, { Component } from 'react';

import VerticalDivider from '../../VerticalDivider';
import SubDropwdown from '../../SubDropdown';
import { screenWidth, contentWidth } from '../../../utils/constants';
import { workspaceOptions, viewOptions } from '../../../utils/dummy';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.props.setToggle();
  }

  render() {
    return (
      <div className="navbar" style={screenWidth}>
        <span className="navbar_logo">
          <button className="ui icon button bars" onClick={this.handleToggleClick}>
            <i className="bars icon" />
          </button>
          <img src="/assets/png/logo.png" alt="Logo" />
        </span>
        <VerticalDivider height="55%" />
        <div className="navbar_content" style={contentWidth}>
          <div className="navbar_content-dropdowns">
            <SubDropwdown label="WORKSPACE" dropdownOptions={workspaceOptions} />
            <SubDropwdown label="VIEW" dropdownOptions={viewOptions} />
          </div>
          <div className="navbar_content-alarm">
            <button className="ui icon button">
              <i className="plus icon" />
            </button>
            <button className="ui icon button">
              <i className="bell outline icon" />
            </button>
            <img src="/assets/png/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
