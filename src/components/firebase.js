import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD13YqLPrR5UdK_80fanyx3ZUcYNBK1cBE",
	authDomain: "admin-dashboard-86722.firebaseapp.com",
	projectId: "admin-dashboard-86722",
	storageBucket: "admin-dashboard-86722.appspot.com",
	messagingSenderId: "5525507175",
	appId: "1:5525507175:web:4aa4703ab7f10d919558c2",
	measurementId: "G-ZP2NDT0DRE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
