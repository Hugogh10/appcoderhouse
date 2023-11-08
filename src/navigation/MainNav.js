import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNav from "./AuthNav";
import TabNav from "./TabNav";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import { setIdToken, setUser } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux"

const MainNav = () => {
    const dispatch = useDispatch();
    const [checkedUser, setCheckedUser] = useState(false);
    const user = useSelector((state) => state.authSlice.user);

    useEffect(() => {
      const checkUser = async () => {
        try {
      const sessionInfo = await AsyncStorage.getItem("savedSession")
      if (sessionInfo){
          let userInfo = JSON.parse(sessionInfo).email
          let idTokenInfo = JSON.parse(sessionInfo).idToken
          dispatch(setUser(userInfo))
          dispatch(setIdToken(idTokenInfo))
          setCheckedUser(true)
      } else {
          setCheckedUser(false)
      }
  } catch (err) {
      console.log(err);
  }
} 
        checkUser()
}, [user]);


  return (

    <NavigationContainer>
      {checkedUser ? <TabNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;