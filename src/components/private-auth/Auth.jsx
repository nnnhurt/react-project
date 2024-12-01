import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, setUser } from "../../store/store";
import { getMe } from "../../store/api-methods";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const setUserData = useCallback(async (access_token, refresh_token) => {
    const user = await getMe(access_token, refresh_token);
    dispatch(setUser(user))
  })


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const refresh = localStorage.getItem("refresh")
    if (!user && jwt && refresh) {
      setUserData(jwt, refresh);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        console.log("redirecting...");
        navigate("/sign_in");
      }
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default AuthRoute
