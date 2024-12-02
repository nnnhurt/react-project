
import React, { useEffect, useState } from "react";
import { Button } from "@consta/uikit/Button";
import { User } from "@consta/uikit/User";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/store";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "sticky",
            top: 0,
            backgroundColor: isScrolled ? "black" : "transparent",
            padding: "10px 0",
            zIndex: 1000
        }}>
            <Button 
                label="Главная страница" 
                onClick={() => navigate("/")} 
                style={{ backgroundColor: "red", color: "white" }}
            />
            {user != null ? (
                <Button 
                    label="Услуги компании" 
                    onClick={() => navigate("/services")} 
                    style={{ backgroundColor: "red", color: "white" }}
                />
            ) : null}
            {user != null ? (
                <User name={user.username} onClick={() => navigate("/profile")} style={{backgroundColor: "white"}} />
            ) : null}
            {user == null ? (
                <Button 
                    label="Вход" 
                    onClick={() => navigate("/sign_in")} 
                    style={{ backgroundColor: "red", color: "white" }}
                />
            ) : null}
        </header>
    );
}

export default Header;