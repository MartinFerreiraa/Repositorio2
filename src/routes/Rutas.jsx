import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ItemListContainer />} />

                    <Route path="/item-detail/:id" element={<ItemDetailContainer />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas;


