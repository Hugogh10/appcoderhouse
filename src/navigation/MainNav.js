import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNav from "./AuthNav";
import TabNav from "./TabNav";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";

const MainNav = () => {
    const [checkedUser, setCheckedUser] = useState(null);
  const user = useSelector((state) => state.authSlice.user);

    useEffect(() => {
        const checkUser = async () => {
            try {
            const userEmail = await AsyncStorage.getItem("userEmail");
            userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);
            } catch (error) { 
                console.log(error);
            };
        };
        checkUser();
    }, [user]);
  return (

    <NavigationContainer>{user ? <TabNav /> : <AuthNav />}</NavigationContainer>
  );
};

export default MainNav;