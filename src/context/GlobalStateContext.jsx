import React, { createContext, useEffect, useState } from 'react'
export const GlobalContext = createContext('')

const GlobalStateContext = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        const carritoLs = JSON.parse(localStorage.getItem('carrito')) ?? []
        setCarrito(carritoLs)
    }, [])


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    const agregarCarrito = (producto) => {
        if (carrito.some(producto => producto.id === producto.id)) {
            <p> Errrrrrrrrrrrrrr</p>
        } else {
            setCarrito([...carrito, producto])
        }
    }


    const [total, setTotal] = useState(0)
    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.count * producto.price, 0
        )
        setTotal(calculoTotal)
    }, [carrito])
    

    const eliminarProducto = (id) => {
        const prodEliminar = carrito.filter(producto => producto.id !== id)
        setCarrito(prodEliminar)
    }

    const vaciarCard = () => {
        setCarrito([])
    }


    return (
        <GlobalContext.Provider value={{ carrito, total, agregarCarrito, eliminarProducto, vaciarCard }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalStateContext

