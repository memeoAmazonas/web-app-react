import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/mainContainer.scss';

class MainContainer extends React.PureComponent {
  render() {
    return (
      <div className="main-container">
        <div className="main-container-label">
          {this.props.label}
        </div>
        <div className="main-container-content">
          { this.props.content }
        </div>
      </div>
    );
  }
}

MainContainer.defaultProps = {
  content: null,
  label: '',
};

MainContainer.propTypes = {
  content: PropTypes.element,
  label: PropTypes.string,
};
export default MainContainer;
