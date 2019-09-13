import React from 'react';
import PropTypes from 'prop-types';

import strings from './strings';
import '../sass/components/utcCard.scss';

class UtcCard extends React.PureComponent {
  render() {
    return (
      <div className="utc-card">
        <div className="label-card">
          <div>
            {strings.hour} :
          </div>
          <div>
            {this.props.hour}
          </div>
        </div>
        <div className="label-card">
          <div>
            {strings.timezone} :
          </div>
          <div>
            {this.props.timezone}
          </div>
        </div>
      </div>
    );
  }
}
UtcCard.defaultProps = {
  hour: '',
  timezone: '',
};
UtcCard.propTypes = {
  hour: PropTypes.string,
  timezone: PropTypes.string,
};

export default UtcCard;
