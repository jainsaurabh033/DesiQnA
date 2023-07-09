import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import { selectUser } from "./redux/userSlice";
import Login from "./components/auth/Login";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase";
import { login } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);

  return <div className="App">{user ? <Home /> : <Login />}</div>;
}

export default App;
