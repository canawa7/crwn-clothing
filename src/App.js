import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';



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
    const {setCurrentUser} = this.props;

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

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          // console.log(this.state);
          
        });
        
      } else {
        // this.setState({ currentUser: userAuth });
        setCurrentUser(userAuth);
      }
      
    });

    console.log(this.unsubsribeFromAuth);
    
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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );  
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

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