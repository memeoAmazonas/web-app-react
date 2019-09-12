import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Button from '../components/button';
import strings from '../components/strings';
import InputEntry from '../components/inputEntry';
import MainContainer from '../components/mainContainer';

import login from '../actions/user';
import booking from '../actions/booking';

import { EMAIL, PASSWORD } from '../actions/types';

import '../sass/views/login.scss';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.send = this.send.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  send() {
    this.props.login(this.props.email, this.props.password, () => (this.redirect('/home')));
  }
  redirect(url) {
    this.props.booking(this.props.token);
    this.setState({ url });
  }
  render() {
    if (this.state.url !== '') {
      return (
        <Redirect to={this.state.url} />
      );
    }
    const content = (
      <div className="login">
        <InputEntry width={50} placeholder={strings.email} typeReducer={EMAIL} />
        <InputEntry width={50} placeholder={strings.password} typeReducer={PASSWORD} />
        <Button label={strings.ingress} callToAction={this.send} />
      </div>);
    return (
      <MainContainer content={content} label={strings.login} />
    );
  }
}

Login.defaultProps = {
  email: '',
  login: null,
  booking: null,
  password: '',
  token: '',
};
Login.propTypes = {
  email: PropTypes.string,
  login: PropTypes.func,
  booking: PropTypes.func,
  password: PropTypes.string,
  token: PropTypes.string,
};

const mapStateToProps = state => (
  {
    email: state.user.email,
    password: state.user.password,
    token: state.user.token,
  }
);
const mapDispatchToProps = { login, booking };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
