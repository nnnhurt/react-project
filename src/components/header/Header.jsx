import React from "react"
import { Button } from "@consta/uikit/Button"
import { User } from "@consta/uikit/User"
import {useNavigate} from "react-router-dom"
const Header = () => {
    const navigate = useNavigate();
    return (
        <header style={{display: "flex", justifyContent: "space-evenly", position: "sticky", top: 0}}>
            <Button label="Главная страница" onClick={() => navigate("/")} />
            <Button label="Услуги компании" onClick={() => navigate("/about")} />
            <User />
            <Button label="Вход" onClick={() => navigate("/sign_in")} />
        </header>


    )
}

export default Header