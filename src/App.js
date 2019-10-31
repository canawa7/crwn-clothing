import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

//exact is a true or false property. This path must be exactly '/' in order for the component to render.
//Without the exact, anything that has the '/', it will render

//Switch -> the moment Switch sees something match the path, it just renders that path, nothing else


// function App() {
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   );
// }