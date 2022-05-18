import React, { useState } from 'react';
// import Button from '../../components/button/Button'


const Test = () => {

      const [lista, setList] = useState([])

    setList([{id: 1, nome:"jeff"},{id: 2, nome:"jeff2"},{id: 3, nome:"jeff3"},{id: 4, nome:"jeff4"}])
   localStorage.setItem("list", JSON.stringify(lista));   
   console.log(lista)


   console.log(JSON.parse(localStorage.getItem('list')) ) 
   const remove = lista.filter(item => item.id  !== 2)   
   localStorage.setItem("list", JSON.stringify(remove))
  console.log(lista)

   return (
      <>

 
        
      </>

   )
};




export default Test;

