import React, { Component } from 'react';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import SidebarItem from '../../SidebarItem';

import './Sidebar.scss';

class Sidebar extends Component {
  state = {
    selectedItem: '',
  };

  componentDidMount() {
    const { location } = this.props;
    this.setState({ selectedItem: location.pathname.substring(1) });
  }

  handleItemClick = itemLabel => {
    this.setState({ selectedItem: itemLabel }, () => {
      const { selectedItem } = this.state;
      this.props.history.push(`${selectedItem}`);
    });
  };

  render() {
    const { selectedItem } = this.state;
    const { isToggled } = this.props;
    return (
      <div className={classnames('sidebar', isToggled ? 'collapsed' : '')}>
        <ul>
          <SidebarItem
            className={selectedItem === 'Dashboard' ? 'active' : ''}
            iconName="th large"
            itemLabel="Dashboard"
            handleItemClick={this.handleItemClick}
          />
          <SidebarItem
            className={selectedItem === 'Assets' ? 'active' : ''}
            iconName="bookmark"
            itemLabel="Assets"
            handleItemClick={this.handleItemClick}
          />
          <SidebarItem
            className={selectedItem === 'Organizations' ? 'active' : ''}
            iconName="book"
            itemLabel="Organizations"
            handleItemClick={this.handleItemClick}
          />
          <SidebarItem
            className={selectedItem === 'Software' ? 'active' : ''}
            iconName="globe"
            itemLabel="Software"
            handleItemClick={this.handleItemClick}
          />
          <SidebarItem
            className={selectedItem === 'Agreements' ? 'active' : ''}
            iconName="eye"
            itemLabel="Agreements"
            handleItemClick={this.handleItemClick}
          />
          <SidebarItem
            className={selectedItem === 'Reports' ? 'active' : ''}
            iconName="file alternate"
            itemLabel="Reports"
            handleItemClick={this.handleItemClick}
          />
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
