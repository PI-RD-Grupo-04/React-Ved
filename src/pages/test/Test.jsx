import React, { useState } from 'react';
// import Button from '../../components/button/Button'


const Test = () => {


   const [aa, setAa]  = useState('');


   return (
      <>

      <input type="text"  onChange={(e) => {
         console.log(e.target.value.length)
      }} />

        
      </>

   )
};




export default Test;

