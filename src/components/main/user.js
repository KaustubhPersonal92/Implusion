import React, { Component } from 'react';

class UserPage extends Component {
  shouldRoute() {
    if(localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }
}

export default UserPage;
