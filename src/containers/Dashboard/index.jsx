import React, { Component } from 'react';
import classnames from 'classnames';
import { Dropdown, Checkbox, Table } from 'semantic-ui-react';

import PieChart from '../../components/PieChart';
import Spinner from '../../components/Spinner';
import { dataChart1, dataChart2, dataChart3, serverOptions, tableViewOptions } from '../../utils/dummy';
import { screenWidth, contentWidth, contentCollapsedWidth, loadingLength } from '../../utils/constants';

import './Dashboard.scss';

class Dashboard extends Component {
  state = {
    isHeaderClicked: 'false',
    selectedHeader: '',
    isTop: false,
    items: Array.from({ length: loadingLength }),
    isLoading: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isToggled !== nextProps.isToggled) {
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleHeaderClick = e => {
    const { isHeaderClicked } = this.state;
    const name = e.target.getAttribute('name');
    this.setState({ isHeaderClicked: !isHeaderClicked, selectedHeader: name });
  };

  handleScroll = () => {
    const tableTop =
      document.getElementsByClassName('content')[0].offsetTop +
      document.getElementsByClassName('content_header')[0].offsetHeight;
    const actualHeight =
      document.getElementsByClassName('dashboard')[0].offsetHeight +
      document.getElementsByClassName('navbar')[0].offsetHeight;
    const scrollHeight = window.innerHeight + window.scrollY;

    if (window.scrollY > tableTop) {
      this.setState({ isTop: true });
    } else {
      this.setState({ isTop: false });
    }

    if (scrollHeight >= actualHeight) {
      this.fetchMoreData();
    }
  };

  fetchMoreData = () => {
    const { items } = this.state;
    setTimeout(() => {
      this.setState({
        items: items.concat(Array.from({ length: loadingLength })),
        isLoading: false,
      });
    }, 1000);
    this.setState({ isLoading: true });
  };

  renderTableCells = () => {
    const { items } = this.state;
    return items.map((_i, index) => (
      <Table.Row key={index}>
        <Table.Cell className="tablebody_checkbox">
          <Checkbox />
        </Table.Cell>
        <Table.Cell>Type something</Table.Cell>
        <Table.Cell>35435</Table.Cell>
        <Table.Cell>35435</Table.Cell>
        <Table.Cell>Type something</Table.Cell>
        <Table.Cell>35435</Table.Cell>
        <Table.Cell>Memory Capacity</Table.Cell>
        <Table.Cell>License Scope</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
    ));
  };

  renderSortIcon = name => {
    const { selectedHeader, isHeaderClicked } = this.state;

    return selectedHeader === name ? (
      <i className={classnames('arrow up icon', isHeaderClicked ? 'transform-deg' : '')} />
    ) : (
      ''
    );
  };

  renderTableHeader = () => {
    return (
      <Table.Row>
        <Table.HeaderCell className="tableheader_checkbox" name="checkbox">
          <Checkbox />
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_vmname" onClick={this.handleHeaderClick} name="vmname">
          VM Name
          {this.renderSortIcon('vmname')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_host" onClick={this.handleHeaderClick} name="host">
          Host
          {this.renderSortIcon('host')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_ip" onClick={this.handleHeaderClick} name="ip">
          IP Address
          {this.renderSortIcon('ip')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_os" onClick={this.handleHeaderClick} name="os">
          OS
          {this.renderSortIcon('os')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_vcpu" onClick={this.handleHeaderClick} name="vcpu">
          vCPU
          {this.renderSortIcon('vcpu')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_memcap" onClick={this.handleHeaderClick} name="memcap">
          Memory Capacity
          {this.renderSortIcon('memcap')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_license" onClick={this.handleHeaderClick} name="license">
          License Scope
          {this.renderSortIcon('license')}
        </Table.HeaderCell>
        <Table.HeaderCell className="tableheader_status" onClick={this.handleHeaderClick} name="status">
          Status
          {this.renderSortIcon('status')}
        </Table.HeaderCell>
      </Table.Row>
    );
  };

  render() {
    const { isToggled } = this.props;
    const { isTop, isLoading } = this.state;
    const tableWidth = isToggled ? contentCollapsedWidth : contentWidth;

    return (
      <div className={classnames('dashboard', isToggled ? 'expanded' : '')} style={screenWidth}>
        <div className="header">
          <div className="header_dropdown">
            <Dropdown defaultValue="Virtual Server" selection options={serverOptions} />
          </div>
          <div className="header_func">
            <button className="ui icon button">
              <i className="sliders horizontal icon" />
            </button>
            <button className="ui icon button">
              <i className="angle up icon" />
              <i className="angle down icon" />
            </button>
          </div>
        </div>
        <div className="charts">
          <PieChart data={dataChart1.data} title={dataChart1.title} labelSets={dataChart1.labelSets} />
          <PieChart data={dataChart2.data} title={dataChart2.title} labelSets={dataChart2.labelSets} />
          <PieChart data={dataChart3.data} title={dataChart3.title} labelSets={dataChart3.labelSets} />
        </div>
        <div className="ui divider" />
        <div className="content">
          <div className="content_header">
            <div className="content_header-left">
              <Dropdown defaultValue="Table View" icon="dropdown" selection options={tableViewOptions} />
              <button className="ui button">
                <i className="list alternate icon" />
                Group
              </button>
              <button className="ui button">
                <i className="filter icon" />
                Filters
              </button>
            </div>
            <div className="content_header-right">
              <h5>155 items</h5>
              <button className="ui icon button">
                <i className="search icon" />
              </button>
              <button className="ui icon button">
                <i className="ellipsis vertical icon" />
              </button>
            </div>
          </div>
          <div className="content_table">
            <Table id="table-1" style={tableWidth}>
              <Table.Header className="tableheader">{this.renderTableHeader()}</Table.Header>
              <Table.Body className="tablebody">{this.renderTableCells()}</Table.Body>
            </Table>
            {isTop ? (
              <Table id="header-fixed" style={tableWidth}>
                <Table.Header className="tableheader">{this.renderTableHeader()}</Table.Header>
              </Table>
            ) : (
              ''
            )}
            {isLoading ? <Spinner /> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
