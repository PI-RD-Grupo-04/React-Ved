import React, { useState } from 'react';
import Button from '../../components/button/Button'

const Test = () => {
   

   function resposta () {
     console.log("OPa wahstgon"); 

      
      

   }

   return (
      <>
      <Button modal label="FAla WASGINOTN" confirm  onClick={resposta}></Button>
      </>

   )
};




export default Test;

