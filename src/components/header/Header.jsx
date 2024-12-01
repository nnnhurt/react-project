import React, { useEffect } from "react"
import { Button } from "@consta/uikit/Button"
import { User } from "@consta/uikit/User"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { selectUser } from "../../store/store"
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);


    return (
        <header style={{display: "flex", justifyContent: "space-evenly", position: "sticky", top: 0}}>
            <Button label="Главная страница" onClick={() => navigate("/")} />
            {user != null ? <Button label="Услуги компании" onClick={() => navigate("/services")} /> : null}
            {user != null ? <User name={user.username} onClick={() => navigate("/profile")}/> : null}
            {user == null ? <Button label="Вход" onClick={() => navigate("/sign_in")} />: null}
        </header>


    )
}

export default Header