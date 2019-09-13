import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputEntry from '../components/inputEntry';
import strings from '../components/strings';
import { HOUR, TIMEZONE } from '../actions/types';
import MainContainer from '../components/mainContainer';
import Button from '../components/button';
import getUtc from '../actions/utc';
import UtcCard from '../components/utcCard';

class Utc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.send = this.send.bind(this);
  }

  send() {
    this.props.getUtc(this.props.hour, this.props.timezone, () => (this.setState({ visible: true })));
  }

  render() {
    const content = (
      <div className="login">
        <InputEntry width={50} placeholder={strings.hour} typeReducer={HOUR} type="text" />
        <InputEntry width={50} placeholder={strings.timezone} typeReducer={TIMEZONE} type="text" />
        <Button label={strings.send} callToAction={this.send} />
        {this.state.visible ? <UtcCard timezone={this.props.utc.response.timezone} hour={this.props.utc.response.time} /> : null }
      </div>
    );
    return (<MainContainer label={strings.getUtc} content={content} />);
  }
}

Utc.defaultProps = {
  utc: {},
  timezone: '',
  hour: '',
  getUtc: null,
};
Utc.propTypes = {
  utc: PropTypes.object,
  timezone: PropTypes.string,
  hour: PropTypes.string,
  getUtc: PropTypes.func,
};

const mapStateToProps = state => (
  {
    utc: state.utc.utc,
    timezone: state.utc.timezone,
    hour: state.utc.hour,
  }
);
const mapDispatchToProps = { getUtc };
export default connect(mapStateToProps, mapDispatchToProps)(Utc);
