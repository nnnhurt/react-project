import { Text } from "@consta/uikit/Text";
import React from "react";


const NotFound = () => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
        <Text size="6xl">404</Text>
        <Text size="2xl">Страница не найдена</Text>
      </div>
    </>
  )
}


export default NotFound;
