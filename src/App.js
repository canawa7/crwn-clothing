import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from "./pages/checkout/checkout.component";


import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
//We need the App to update the currentUser value using the user.action 
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';


// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component{
  
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubsribeFromAuth = null;

  //The onAuthStateChanged return the unsubsribe function 
  //https://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged

  componentDidMount(){
    const {setCurrentUser_prop} = this.props;
    //If not being destructurized, we have to write it like this: this.props.serCurrentUser_prop

    //'user' is the state of the user whether it's signed in, signed out or null
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user});
      // createUserProfileDocument(user); //Received the data about the user from firebase
      // console.log(user);
      // console.log(userAuth);

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        //Representing the snapshot object of the data
        //Listen to userRef about any changes of this data but also get back the first state of that data
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot);
          // console.log(snapShot.data());
          
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, () => {
          //   // console.log(this.state);
          //   //The only way we can console log from a setState is by passing a second parameter to setState to make sure that it's done first then console log
          // })

          setCurrentUser_prop({
            id: snapShot.id,
            ...snapShot.data()
          });

          // console.log(this.state);
          
        });
        
      } else {
        // this.setState({ currentUser: userAuth });
        setCurrentUser_prop(userAuth);
      }
      
    });

    // console.log(this.unsubsribeFromAuth);
    
  }

  componentWillUnmount(){
    // console.log(this.unsubsribeFromAuth());
    this.unsubsribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser_prop ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );  
  }
}

//We use this to for when the App receives a value from the currentUser (or state is true), we redirect to the home page
//If null, then the user can access the SignUpAndSignInPage
const mapStateToProps = createStructuredSelector({
  currentUser_prop: selectCurrentUser
});

//We connect the App to connect() using the second argument which is the mapDispatchToProps
//This function returns an object where the prop name is the prop that the App will receive
//This prop dispatched the new action that we're gonna pass which is setCurrentUser

const mapDispatchToProps = (dispatch) => ({
  //It goes to a function the gets the user object
  //and then call dispatch() -> it is a way for redux to say whatever object you're passing me, it is gonna be the action object
  //that I'm gonna pass to every reducer

  //This user_object_app is gonna be used as the payload
  //And the user_object_app is from snapShot or userAuth above
  setCurrentUser_prop: user_object_app => dispatch(setCurrentUser(user_object_app))
});
  
//In the beginning, since we only need the App to set the value, we don't need the first argument to receive the value from the user.reducer, so we can put null

export default connect(mapStateToProps, mapDispatchToProps)(App);


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


// <Header currentUser={this.state.currentUser}/>

// <Route exact path='/signin' component={SignInAndSignUpPage}/> 


// const mapStateToProps = ({ user }) => ({
//   currentUser_prop: user.currentUser
// });