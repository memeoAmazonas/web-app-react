import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { numberFilter } from 'react-bootstrap-table2-filter';

import Table from '../components/table';
import strings from '../components/strings';
import MainContainer from '../components/mainContainer';

import '../sass/views/home.scss';

import booking from '../actions/booking';

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.booking(this.props.token);
  }

  render() {
    const data = this.props.bookingBody !== [] ? this.props.bookingBody : [];
    const columns = [
      {
        dataField: 'bookingId',
        text: 'bookingId ',
        filter: numberFilter(),
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
        filter: numberFilter(),
      },
    ];
    const options = {
      sizePerPage: 5,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
    };
    return (
      <MainContainer content={<Table columns={columns} data={data} filterFactory={filterFactory()} paginationFactory={paginationFactory(options)} />} label={strings.home} />
    );
  }
}
Home.defaultProps = {
  token: '',
  booking: null,
  bookingBody: [],
};

Home.propTypes = {
  token: PropTypes.string,
  booking: PropTypes.func,
  bookingBody: PropTypes.array,
};

const mapStateToProps = state => (
  {
    token: state.user.token,
    bookingBody: state.booking.booking,
  }
);

const mapDispatchToProps = { booking };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
