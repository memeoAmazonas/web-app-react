import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

import '../sass/components/table.scss';

class Table extends React.PureComponent {
  render() {
    return (
      <BootstrapTable keyField="id1" data={this.props.data} columns={this.props.columns} filter={this.props.filterFactory} pagination={this.props.paginationFactory} />
    );
  }
}

Table.defaultProps = {
  columns: [],
  data: [],
  filterFactory: null,
  paginationFactory: null,
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  filterFactory: PropTypes.func,
  paginationFactory: PropTypes.func,
};
export default Table;
