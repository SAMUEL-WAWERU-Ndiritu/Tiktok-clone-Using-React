import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'


function Main(){
    return(
        < >
        <div  className="main">
         <App/>
         </div>
        </>
    )
}


ReactDom.render(<Main/>,document.getElementById("root"))