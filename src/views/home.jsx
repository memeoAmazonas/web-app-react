import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    return (
      <MainContainer content={<Table data={data} />} label={strings.home} />
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
