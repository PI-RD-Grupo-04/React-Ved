import React, { useState } from 'react';
// import Button from '../../components/button/Button'


const Test = () => {

      const [lista, setList] = useState([])

      setList([{id: 1, nome:"jeff", qt: 1},{id: 2, nome:"jeff2", qt: 1},{id: 3, nome:"jeff3", qt: 1},{id: 4, nome:"jeff4", qt: 1}]) 
      localStorage.setItem("list", JSON.stringify(lista));    
      if (lista.filter(item => item.id  == 2)) {
         const achar =  lista.find(item => item.id  == 2) 
         const acharString =  JSON.stringify(achar)
         localStorage.setItem("achar", acharString)
         
      }
      //const remove = lista.filter(item => item.id  !== 2)
      //console.log(remove)
      // function adicionar() {
      //    console.log(remove.id)
      // } 



     // localStorage.setItem("list", JSON.stringify(remove))
     

   return (
      <>

 
        
      </>

   )
};




export default Test;

