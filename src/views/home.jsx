import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../components/table';
import strings from '../components/strings';
import MainContainer from '../components/mainContainer';

import '../sass/views/home.scss';

import booking from '../actions/booking';

class Home extends React.PureComponent {
  render() {
    const data = [{
      bookingId: 1,
      name: 'Jose',
      bookingTime: '1',
      streetAddress: '1',
      bookingPrice: '1',
    }];
    return (
      <MainContainer content={<Table data={data} />} label={strings.home} />
    );
  }
}
Home.defaultProps = {
  email: '',
  token: '',
  booking: null,
};
Home.propTypes = {
  email: PropTypes.string,
  token: PropTypes.string,
  booking: PropTypes.func,
};

const mapStateToProps = state => (
  {
    email: state.user.email,
    token: state.user.token,
  }
);
const mapDispatchToProps = { booking };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
