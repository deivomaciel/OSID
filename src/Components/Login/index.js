import { useSignInWithGoogle, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig'
import { Link, Navigate } from "react-router-dom";

function Login() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    let userInfo = {
        name: null,
        email: null,
        uid: null,
        accessToken: null
    }

    if(error) {
        console.log(error)
    }

    if(loading) {
        return (<div><p>loading</p></div>)
    }

    if (user) {
        userInfo.name = user.user.displayName
        userInfo.email = user.user.email
        userInfo.uid = user.user.uid
        userInfo.accessToken = user.user.accessToken
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
    }

    return (
        localStorage.userInfo ? <Navigate to="/home" /> : (
            <div className="App">
                <button onClick={() => signInWithGoogle()}>Sign In</button>
            </div>
        )
    )
}

export default Login