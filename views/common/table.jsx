import React from 'react';
var _ = require('lodash');
import { render } from 'react-dom';

var Table = React.createClass({
//class Table extends React.Component {

  //constructor(props) {
  //  super(props);
  //  //this.handleClick = this.handleClick.bind(this);
  //}
  //handleClick(item) {
  //  //alert('----id---'+item);
  //  that.openModal();
  //}


  //getInitialState () {
  //  return { modalIsOpen: false };
  //}
  //
  //openModal () {
  //  this.setState({modalIsOpen: true});
  //}
  //
  //closeModal () {
  //  this.setState({modalIsOpen: false});
  //}
  //
  //handleModalCloseRequest () {
  //  // opportunity to validate something and keep the modal open even if it
  //  // requested to be closed
  //  this.setState({modalIsOpen: false});
  //}


  tdClick: function(rowData) {
    alert(rowData);
  },

  render: function() {
  //render () {
    let that = this;
    let datas = this.props.tableData;
    let headerTitle = this.props.tableHeader;
    let final = [];
    let header = [];
    let dataRow = [];

    if (headerTitle && headerTitle.length > 0) {
      headerTitle.map(function (row, i) {
        header.push(
          <th className="text-center">{row}</th>
        )
      })
    }

    if (datas && datas.length > 0) {
      datas.map(function (row, i) {
        dataRow.push(
          <tr>
            {row.map(function (item, j) {
              let theItem = [];
              //if (j != 0) {
              theItem.push(
                <td className="text-center tableItem" onClick={that.tdClick.bind(this, row[0]?row[0]:'')}>{item}</td>
              )
              //}

              return theItem;
            })}
          </tr>
        )
      })
    }

    if (datas && datas.length > 0) {
      let classes = 'table table-bordered table-striped';
      final.push(
        <table className={classes}>
          <thead>
            {header}
          </thead>
          <tbody>
            {dataRow}
          </tbody>
        </table>);
    } else {
      final.push(<div className="alert alert-warning text-center" role="alert">No Data Found!</div>);
    }

    return (
      <div>
        {final}
      </div>
    );
  }
});

//const Td = React.createClass({
//  render() {
//    return (
//      <td className="text-center" onClick={that.handleClick.bind(this, row[0])}>{item}</td>
//    );
//  }
//});

//const PastPromo = React.createClass({
//  render() {
//    return (
//      <PromotionAdminPage type="past" />
//    )
//  }
//});


//Table.prototypes = {
//  tableData: React.PropTypes.array
//}

module.exports = Table;
