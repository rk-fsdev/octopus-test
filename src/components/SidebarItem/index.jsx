import React, { Component } from 'react';

import './SidebarItem.scss';

class SidebarItem extends Component {
  handleLiClick = () => {
    const { itemLabel } = this.props;
    this.props.handleItemClick(itemLabel);
  };
  render() {
    const { iconName, itemLabel } = this.props;
    return (
      <li className={`sidebar_item ${this.props.className}`} onClick={this.handleLiClick}>
        <i className={`${iconName} icon`} />
        <label>{itemLabel}</label>
      </li>
    );
  }
}

export default SidebarItem;
