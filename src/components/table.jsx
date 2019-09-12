import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import '../sass/components/table.scss';
import strings from './strings';

class Table extends React.PureComponent {
  render() {
    const columns = [
      {
        dataField: 'bookingId',
        text: 'bookingId ',
        filter: textFilter(),
      },
      {
        dataField: 'name',
        text: 'Cliente',
      },
      {
        dataField: 'bookingTime',
        text: 'Fecha de Creación',
      },
      {
        dataField: 'streetAddress',
        text: 'Dirección',
      },
      {
        dataField: 'bookingPrice',
        text: 'Precio  ',
        filter: textFilter(),
      },
    ];
    const options = {
      sizePerPage: 5,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
    };
    return (
      <BootstrapTable keyField="id1" data={this.props.data} columns={columns} filter={filterFactory()} pagination={paginationFactory(options)} />
    );
  }
}

Table.defaultProps = {
  data: [],
};

Table.propTypes = {
  data: PropTypes.array,
};
export default Table;