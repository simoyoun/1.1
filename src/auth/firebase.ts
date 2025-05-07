import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth'

// Replace these values with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCH4BAOvoHk9eWOIjY-pr1NZ7RbTk19bVg",
  authDomain: "ibills-79a61.firebaseapp.com",
  projectId: "ibills-79a61",
  storageBucket: "ibills-79a61.firebasestorage.app",
  messagingSenderId: "28216509994",
  appId: "1:28216509994:web:d776aab7ebf517d30ca553",
  measurementId: "G-WGEWLPGRPY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// Providers
export const googleProvider = new GoogleAuthProvider()
export const appleProvider = new OAuthProvider('apple.com')
