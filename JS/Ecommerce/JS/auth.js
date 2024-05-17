import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"

    import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDhyXg_1D_w5oHvyqORtsH2itVWUtU_4gU",
	authDomain: "fir-30a0a.firebaseapp.com",
	projectId: "fir-30a0a",
	storageBucket: "fir-30a0a.appspot.com",
	messagingSenderId: "988474708812",
	appId: "1:988474708812:web:a9234a7fc7b60eea80f5e9",
}

// Initialize Firebase
firebase.initializeApp(config)
const app = initializeApp(firebaseConfig)
document.getElementById("form").addEventListener("submit", registerLogic)
function registerLogic(e) {
	e.preventDefault()
	const em = document.getElementById("email").value
	const pwd = document.getElementById("password").value
	console.log(em, pwd)
	firebase
		.auth()
		.createUserWithEmailAndPassword(em, pwd)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user
			alert("signup successful")
		})
		.catch((error) => {
			var errorCode = error.code
			var errorMessage = error.message
			alert("signup failed" + errorMessage)
		})
}
