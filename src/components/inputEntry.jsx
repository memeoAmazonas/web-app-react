import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setInputField from '../actions/inputfile';

import '../sass/components/inputEntry.scss';

class InputEntry extends React.PureComponent {
  render() {
    return (
      <div className="input-entry">
        <input placeholder={this.props.placeholder} style={{ width: `${this.props.width}%` }} onChange={e => this.props.setInputField(this.props.typeReducer, e.target.value)} type={this.props.type} />
      </div>
    );
  }
}

InputEntry.defaultProps = {
  placeholder: '',
  setInputField: null,
  typeReducer: '',
  width: 20,
  type: '',
};

InputEntry.propTypes = {
  placeholder: PropTypes.string,
  setInputField: PropTypes.func,
  typeReducer: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.string,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = { setInputField };
export default connect(mapStateToProps, mapDispatchToProps)(InputEntry);