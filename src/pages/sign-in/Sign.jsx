import { useState } from "react";
import { Button } from "@consta/uikit/Button";

const SignIn = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  
  
    function updateFormData (e) {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    }
  
    function handleSubmit(e) {
      e.preventDefault();
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
            { (!formData.username && !formData.password) ? 
                <Informer status="alert" view="filled" label="Заполните поля пж"/>
            : null}

          </form>
        </main>
      </>
    )
  
  }
  
  export default SignIn;
  