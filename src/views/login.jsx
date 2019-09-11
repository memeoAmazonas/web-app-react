import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/button';
import strings from '../components/strings';
import InputEntry from '../components/inputEntry';
import MainContainer from '../components/mainContainer';

import '../sass/views/login.scss';

class Login extends React.PureComponent {
  render() {
    const content = (
      <div className="login">
        <InputEntry width={50} placeholder={strings.email} />
        <InputEntry width={50} placeholder={strings.password} />
        <Button label={strings.ingress} />
      </div>);
    return (
      <MainContainer content={content} label={strings.login} />
    );
  }
}
export default Login;
