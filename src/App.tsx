import * as React from 'react';
import './App.css';

import logo from './logo.svg';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    require: any;
  }
}
const remote = window.require('electron').remote;


class App extends React.Component {
  public render() {
    const obj = remote.getGlobal("electronObject");
    console.log(obj.a);
    console.log(obj.b);
    console.log(obj.isDev);
    const isDev = obj.isDev ? "true" : "false";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Electron/React/TypeScript (isDev: {isDev})</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
