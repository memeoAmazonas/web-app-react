import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/button.scss';

class Button extends React.PureComponent {
  render() {
    return (
      <button className="button" onClick={this.props.callToAction}>{this.props.label}</button>
    );
  }
}

Button.defaultProps = {
  label: '',
  callToAction: null,
};

Button.propTypes = {
  label: PropTypes.string,
  callToAction: PropTypes.func,
};

export default Button;
