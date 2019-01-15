import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Components/cards';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <div>
//           <Card />
//         </div>
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="container">
    <div className="jumbotron">
      <h1>Test</h1>
      <Card />
    </div>
  </div>
);

export default App;
