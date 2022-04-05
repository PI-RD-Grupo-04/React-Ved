import React, { useState } from 'react';
import Button from '../../components/button/Button'

const Test = () => {
   
   const [teste, setTest] = useState('');


   function valida (e) {
      if(e.target.value.length < 11){
         console.log('menos que 11')
      } else { console.log('okkkkkkkkkkkk')}


   }



   return (
      <>
      <input type="text " onChange={valida} value={setTest.value}/>
      </>

   )
};




export default Test;

