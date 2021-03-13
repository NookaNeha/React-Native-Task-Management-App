import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const settings = {timestampsInSnapshots: true};
const firebaseConfig = {
    apiKey: "AIzaSyAOjaru_jpey0ZrkjCL1kbYheNjVVMdwT0",
    authDomain: "rn-task-app-79cec.firebaseapp.com",
    projectId: "rn-task-app-79cec",
    storageBucket: "rn-task-app-79cec.appspot.com",
    databaseURL: "https://rn-task-app-79cec-default-rtdb.firebaseio.com",
    messagingSenderId: "442730682274",
    appId: "1:442730682274:web:c72bbcff1e226c4e8284fb"
  };
  
  let app;
  if(firebase.apps.length === 0){
    app=firebase.initializeApp(firebaseConfig);
  }
  else{
    app=firebase.app();
  }
   
  const db = app.firestore().settings(settings);;
  const auth = firebase.auth();
  const database = app.database();
  export {db,auth,database};