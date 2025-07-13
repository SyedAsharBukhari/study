import { Link } from "react-router-dom";

function Header() {
    return (
<>
<div className="Headerfirst"> 
<h1>Transforming Ideas into Reality</h1>
<p>Discover innovative solutions tailored to your needs. Our expert team delivers exceptional services in web development, app creation, and digital marketing to help your business thrive.</p>
<div className="Headerbutton">
    <button id="as">Get in Touch</button>
    <button id="asd" style={{backgroundColor: "black"}}><Link to={"/login"}>Login</Link></button>
</div>








</div>



</>
  
    );
  }
  
  export default Header;
  