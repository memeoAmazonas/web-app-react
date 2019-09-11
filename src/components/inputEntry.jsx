import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/inputEntry.scss';

class InputEntry extends React.PureComponent {
  render() {
    return (
      <div className="input-entry">
        <input placeholder={this.props.placeholder} style={{ width: `${this.props.width}%` }} />
      </div>
    );
  }
}

InputEntry.defaultProps = {
  placeholder: '',
  width: 20,
};

InputEntry.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.number,
};
export default InputEntry;
