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
    this.props.openModal(rowData);
  },

  deactiveRow: function(rowData) {
    this.props.deactive(rowData);
  },

  removeRow: function(id) {
    this.props.remove(id);
  },

  render: function() {
  //render () {
    let that = this;
    let datas = this.props.tableData;
    let headerTitle = this.props.tableHeader;
    let final = [];
    let skip = [];

    if (datas && datas.length > 0) {

      final.push(<table className="table table-bordered table-striped">);
      final.push(<thead>);
        final.push(
          {headerTitle.map(function(row, i){
            if (i!=0) {
              return (
                <th className="text-center">{row}</th>
              )
            }
          })}
        );
        final.push(</thead>);
      final.push(<tbody>);
      final.push(

        {datas.map(function(row, i){
          return (
            <tr>
              {row.map(function(item, j){
                let theItem = [];
                if (j != 0) {
                  theItem.push(
                    <td className="text-center tableItem" onClick={that.tdClick.bind(this, row[0]?row[0]:'')}>{item}</td>
                  )
                }

                if (j == (row.length-1)) {
                  theItem.push(
                    <td className="text-center tableItem">
                      <button className="btn btn-primary btn-sm" onClick={that.deactiveRow.bind(this, row[0]?row[0]:'')}>Deactive</button>
                    </td>
                  )
                  if (that.props.remove) {
                    theItem.push(
                      <td className="text-center tableItem">
                        <button className="btn btn-danger btn-sm" onClick={that.removeRow.bind(this, row[0]?row[0]:'')}>Delete</button>
                      </td>
                    )
                  }
                }

                return theItem;
              })}
            </tr>
          )
        })}
      );
      final.push(</tbody>);
      final.push(</table>);
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
