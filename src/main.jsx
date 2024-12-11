import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Arrow from './Arrow.jsx'
import Person from './Another.jsx'
import  { Animals }  from './devweb.jsx'


/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>

    
    <Animals />,
  </StrictMode>,
)



