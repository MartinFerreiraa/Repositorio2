import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/Layout/Layout";
import Home from "../components/Views/Home";
import Error from "../components/Views/Error";
import Niños from "../components/Views/Niños";
import Hombre from "../components/Views/Hombre";
import Mujeres from "../components/Views/Mujeres";
import Login from "../components/Views/Login";



const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/item/categori/:categoriId" element={<Hombre/>} /> 
                        <Route path="/item/categori/:categoriId" element={<Mujeres/>} /> 
                        <Route path="/item/categori/:categoriId" element={<Niños/>} /> 
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<Error/>}/>
                       
                    </Route>
                   
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas;


