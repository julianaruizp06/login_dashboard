import React, { useState } from 'react';
import { DashboardUsuarios } from './DashboardUsuarios';



export const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }


  return (
    

    <div className="container" style={{ marginTop:150, padding:20,fontFamily:"serif"}}>
        
    <form id="form_login">

  

         

        <div>
            <h1 style={{color:"white", textalign:"center",fontSize:54 }}>LOGIN</h1>
            <label style={{color:"white",fontSize:20}} htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setUsu(e.target.value) }  required/>
        </div>
        <div>
            <label style={{color:"white", fontSize:20}}htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setPas(e.target.value) }  required/>
        </div><br/>
        <input style={{color:"#7439db"}} type="submit"  className="button" value="Login" onClick={ iniciarSesion }/>
    </form>

 { miLogin === "true" && <DashboardUsuarios  usu={usu}/> }

</div>


  )
}
