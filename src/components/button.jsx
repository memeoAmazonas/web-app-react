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
  callToAction: null,
  label: '',
};

Button.propTypes = {
  callToAction: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
