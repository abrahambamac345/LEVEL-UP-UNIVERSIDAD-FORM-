import {BrowserRouter, Routes,Route} from "react-router-dom";
//import Navegacion from "./componentes/Navegacion";
import Form from "./componentes/Form";
import Register from "./componentes/Register";

export const App = () =>{
return(
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Form/>} />
   <Route path="/register" element={<Register/>} />
   </Routes>
   </BrowserRouter>
);
}