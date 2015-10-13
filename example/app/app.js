import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Component from './components/Component.js';

import './bower_components/bootstrap-customize/css/bootstrap.css';
import './assets/styles/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='layout-page'>
        <Header/>
        <main className='layout-main'>
          <div className='container'>
            <Component/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

function run() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
