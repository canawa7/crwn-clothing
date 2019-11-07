import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase.utils';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component{
  
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null;

  componentDidMount(){
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
      
    });
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );  
  }
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