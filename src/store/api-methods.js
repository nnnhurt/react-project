const login = async (username, password) => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      }),
      credentials: "omit",
    });
    if (!response.ok) {
      throw new Error("Get credentials from dummyjson");
    }
    return await response.json();
  };
  
  const getMe = async (access_token, refresh_token) => {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      credentials: "omit",
    });
  
    if (response.status === 401) {
      const refreshResponse = await refreshMe(refresh_token);
      localStorage.setItem("jwt", refreshResponse.accessToken);
      localStorage.setItem("refresh", refreshResponse.refreshToken);
  
      if (refreshResponse.accessToken) {
        return await getMe(
          refreshResponse.accessToken,
          refreshResponse.refreshToken,
        );
      } else {
        throw new Error("Unable to refresh token");
      }
    }
  
    const data = await response.json();
    return data;
  };
  
  const refreshMe = async (refresh_token) => {
    const response = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: refresh_token,
        expiresInMins: 30,
      }),
      credentials: "omit",
    });
  
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
  
    return await response.json();
  };
  
  export { login, getMe, refreshMe };
  