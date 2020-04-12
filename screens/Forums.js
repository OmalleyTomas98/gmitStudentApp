import React, { Component } from 'react';

import ThreadDisplay from '../ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';

class Forums extends Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyAngbJs6JDqi-xZbeA0wcmdv_f5ctznMB0",
      authDomain: "studentthreadforum.firebaseapp.com",
      databaseURL: "https://studentthreadforum.firebaseio.com",
      projectId: "studentthreadforum",
      storageBucket: "studentthreadforum.appspot.com",
      messagingSenderId: "83134266838",
      appId: "1:83134266838:web:cb6153427a1110b7f87877",
      measurementId: "G-914KPJY9HP"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (


      
      <ThreadDisplay database={this.database} />
    );
  }
  
}

export default Forums;
