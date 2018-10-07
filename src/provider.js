import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Context from './context';
import Notification from './notification';

class Provider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
  }

  showNotification(notificationOptions) {
    if (this.notification) {
      this.notification.show(notificationOptions);
    }
  }

  render() {
    return (
      <Context.Provider value={this.showNotification}>
        {Children.only(this.props.children)}
        <Notification
          ref={(ref) => {
            this.notification = ref;
          }}
        />
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
