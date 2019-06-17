import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

import './PieChart.scss';

class PieChart extends Component {
  renderDesc = (labelSets, color) => {
    return labelSets.map((item, index) => (
      <div className="labelsets" key={index}>
        <div className="category">
          <div className="rect" style={{ backgroundColor: color[index] }} />
          <h4>{item.category}</h4>
        </div>
        <h4>{item.percent}</h4>
      </div>
    ));
  };

  render() {
    const { data, title, labelSets } = this.props;
    const { datasets } = data;
    return (
      <div className="piechart">
        <div className="piechart_chart">
          <Pie data={data} width={130} height={130} />
        </div>
        <div className="piechart_desc">
          <h4 className="title">{title}</h4>
          {this.renderDesc(labelSets, datasets[0].backgroundColor)}
        </div>
      </div>
    );
  }
}

export default PieChart;
