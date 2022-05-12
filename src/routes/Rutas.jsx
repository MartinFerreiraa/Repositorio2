import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/Layout/Layout";
import Home from "../components/Views/Home";
import Error from "../components/Views/Error";
import Login from "../components/Views/Login";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";



const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/category/:cat" element={<ItemListContainer/>} />                         
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<Error/>}/>
                       
                    </Route>
                   
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas;


