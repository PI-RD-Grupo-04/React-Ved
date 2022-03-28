import React, { useState } from 'react';
import { validEmail, validPassword } from './Regex.js';
import InputMask from 'react-input-mask';

const Test = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);
   const validate = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      }
   };
   return (
      <div>
         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <div>
            <button onClick={validate}>Validate</button>
         </div>
         {emailErr && <p>Email incorreto</p>}
         {pwdError && <p>Senha incorreta</p>}




    <div>
      <InputMask mask="99999-999"  >
      </InputMask>
  
      <InputMask mask="999.999.999-99 " id="form-cpf-cliente">
      </InputMask>
  
      <InputMask mask="9999 9999 9999 9999" />

  </div>
      </div>
   );
};




export default Test;

