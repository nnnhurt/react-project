import { useState } from "react";
import { Button } from "@consta/uikit/Button";
import Header from "../../components/header/Header";
import { Informer } from "@consta/uikit/Informer"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/store";
import { login } from "../../store/api-methods";



const SignIn = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
  

    const [errorInInput, setErrorInInput] = useState(false);
  
    function updateFormData (e) {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!formData.username && !formData.password) {
        setErrorInInput(true)
        return
      } else {
        setErrorInInput(false)
      }
      login(formData.username, formData.password).then((res) => {
        dispatch(setUser(res))
        localStorage.setItem("jwt", res.accessToken)
        localStorage.setItem("refresh", res.refreshToken)  
        navigate("/")
      }).catch(() => {
        setErrorInInput(true)
      })
    }
    return (
      <>
        <Header />
        <main style={{ display: "flex", justifyContent: "center"}}>
          <form style={{display: "flex", flexDirection: "column", width: "500px", alignItems: "start"}} onSubmit={handleSubmit}>
            <label>
              Username
              <input type="text" name="username" onChange={updateFormData}/>
            </label>
            <label>
              Password
              <input type="password" name="password" onChange={updateFormData}/>
            </label>
            <Button label="Sign In" type="submit" />
            { errorInInput ? 
                <Informer status="alert" view="filled" label="Заполните поля"/>
            : null}

          </form>
        </main>
      </>
    )
  
  }
  
  export default SignIn;
  