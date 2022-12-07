import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from "firebase/auth";
import { auth } from "../services/firebase";

export async function logIn() {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  const result = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log(user);
      localStorage.setItem('token', token!);

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      localStorage.setItem('token', '');
    });

  return result;
}

export async function logOut() {
  const result = await signOut(auth)
    .then(() => {
      localStorage.removeItem('token')
    })
    .catch((error) => {
      console.log(error);
    })

  return result;
}