import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

//To query
firestore.collection('users').doc('Cm5ZDK6w2AStltNycbU8').collection('cartItems').doc('6HY4nmJRaMH73lq8Zz8L');
firestore.doc('/users/Cm5ZDK6w2AStltNycbU8/cartItems/6HY4nmJRaMH73lq8Zz8L');
firestore.collection('/users/Cm5ZDK6w2AStltNycbU8/cartItems');

