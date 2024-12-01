import { useState } from "react";
import { Button } from "@consta/uikit/Button";
import Header from "../../components/header/Header";
import { Informer } from "@consta/uikit/Informer"

const SignIn = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  

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
      console.log(formData.username)
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
  