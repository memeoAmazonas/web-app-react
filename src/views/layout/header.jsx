import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../../components/strings';
import '../../sass/utils.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <a href="/utc">{strings.getUtc}</a>
        <a href="/">{strings.logout}</a>

      </div>
    );
  }
}
export default Header;

