import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import Header from "./Header.js";
import Container from "./Container.js";
import Footer from "./Footer.js";
  
function Page(){
  return(
    <div>
  <Header/>
  <Container/>
  <Footer/>
  </div>
  )
}
*/



function Page(){
  return(
    <div className='content'>
      <main>
      <img src="logo.png" alt='Logo' className='logo'/>

      <a><h1>Dziennik</h1></a>
      <a><h1>Plan Lekcji</h1></a>
      <a><h1>Zastępstwa</h1></a>
      </main>
      
      <footer>
        <h3>2023 ZS1 Goleniow Development Team</h3>
      </footer>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page/>)