import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Button from '../components/button';
import strings from '../components/strings';
import InputEntry from '../components/inputEntry';
import MainContainer from '../components/mainContainer';

import login from '../actions/user';

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
  password: '',
};
Login.propTypes = {
  email: PropTypes.string,
  login: PropTypes.func,
  password: PropTypes.string,
};

const mapStateToProps = state => (
  {
    email: state.user.email,
    password: state.user.password,
  }
);
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
