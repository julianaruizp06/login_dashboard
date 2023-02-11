
import { NavLink } from "react-router-dom"

export const DashboardUsuarios = (props) => { 
  
    function cerrarSesion() {
      document.getElementById("caja_menu").style.display = "none";
      document.getElementById("form_login").style.display = "block";
      document.getElementById("txtusu").value = "";
      document.getElementById("txtpas").value = "";
      document.getElementById("txtusu").focus();
    }
  
    return (




      <div id="caja_menu" style={{ textAlign: "left" }}>

<strong className="h3"  style={{color:"white"}}>
      Bienvenido Administrador: 
    </strong>


        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20 }}>
          <div className="container-fluid">


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link  h5  text-center" onClick={"./"} >Usuarios</NavLink>
                

                <NavLink to="" className="nav-link  h5  text-center"  onClick={"./"} >Clientes</NavLink>

                <NavLink to="" className="nav-link  h5  text-center"   onClick={"./"}>Productos</NavLink>

                <NavLink to="" className="nav-link  h5  text-center"  onClick={"./"} >Estadistica</NavLink>

                <a className="nav-link  h5  text-center" style={{ color: "blue" }} href=" " onClick={cerrarSesion} >Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="bg-light" style={{marginTop:20, padding:20}}>

          <h1>Grafico</h1>
        </div>
        </div>    
        
       
  

    )
}
