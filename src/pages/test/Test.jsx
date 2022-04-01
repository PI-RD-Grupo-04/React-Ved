<<<<<<< HEAD
import React, { useState } from 'react';
import Button from '../../components/button/Button'

const Test = () => {
   
   const [teste, setTest] = useState('');


   function valida (e) {
      if(e.target.value.length < 11){
         console.log('menos que 11')
      } else { console.log('ok')}


   }



   return (
      <>
      <input type="text " onChange={valida} value={setTest.value}/>
      </>

   )
};




export default Test;

=======
>>>>>>> 22898a324e35eed7daf6461702bb95aac6c4d9ce
