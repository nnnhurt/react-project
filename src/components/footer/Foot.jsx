
import React from "react";
import { Button } from "@consta/uikit/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/store";

const Footer = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <footer style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "30px 0",
      backgroundColor: "black"
    }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button 
          label="Главная страница" 
          onClick={() => navigate("/")} 
          style={{ backgroundColor: "red" }} 
        />
        {user != null ? (
          <Button 
            label="Услуги компании" 
            onClick={() => navigate("/services")} 
            style={{ backgroundColor: "red" }} 
          />
        ) : null}
      </div>
      <div>
        {user ? (
          <p style={{ margin: 0, color: "white" }}>Добро пожаловать, {user.username}!</p>
        ) : (
          <p style={{ margin: 0, color: "white" }}>© 2024 Ваша Компания. Все права защищены.</p>
        )}
      </div>
    </footer>
  );
}

export default Footer;