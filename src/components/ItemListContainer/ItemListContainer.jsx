import React, {useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [productos,setProductos] = useState ([]) 
    const onAdd = (count) => {}
   
   const data = [
       {
           id: 1,
           title: "Perfume hombre",
           description:"Perfume para hombre",
           price : '$3000',
           pictureUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/perfumes-hombre-2018-aqcua-di-gio-absolu-1519380833.png?crop=1xw:1xh;center,top&resize=480:*'
        },
       {
        id: 2,
        title: "Perfume mujer",
        description:"Perfume para mujer",
        price : '$2500',
        pictureUrl: 'https://i.pinimg.com/originals/8e/ee/04/8eee04c5bf668076b6394dae66b21295.png'
        },
        {
        id: 3,
        title: "Perfume niños",
        description:"Perfume para niños",
        price : '$800',
        pictureUrl: 'https://3.bp.blogspot.com/-wwPsAofdk6I/WbVS4uytu8I/AAAAAAABBj8/KJqijjgDb7YAth76pjtTVfjDWJYr4Y-jgCLcBGAs/s1600/atleta%2B%2528Small%2529.png'
        },
    ]
    useEffect(() => {
        const promesa = new Promise (function (resolve,reject) {
          setTimeout(() => {
              resolve(data);
          }, 2000);
        })
        promesa.then((res)=>{
        setProductos(res)
        }).then(()=>
        console.log(productos)
        ).catch((err)=>
        console.log(err))
    },[]);

    return (
        <div className='container text-warning bg-secondary d-flex justify-content-center aling-item-center' style={{padding:"10px"}}>
            <ItemCount stock={20} initaial={1} onAdd={onAdd}/>
            <ItemList productos={productos}/>
            
        </div>  
    )
}
export default ItemListContainer 