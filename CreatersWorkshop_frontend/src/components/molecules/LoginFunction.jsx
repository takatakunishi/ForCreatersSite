import React, { useState} from 'react'
import '../../styles/molecules/LoginFunction.css'
import UserIDInput from '../atoms/UserIDInput'
import UserPassInput from '../atoms/UserPassInput'
import ForgetUserID from '../atoms/ForgetUserID'

const LoginFunction = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const onClickLoginButton = () => {
    const id = document.getElementById("UID_text");
    const pass = document.getElementById("UPI_text");
    if (pass.value !== '' && id.value !== ''){
      console.log(pass.value);
      console.log(id.value);
      pass.value = '';
      id.value = '';
    }else{
      alert("必要事項が全て入力されていません");
    }
  }
  return (
    <div className = "LoginFunction">
      LoginFunction
      <UserIDInput userId={userId}/>
      <UserPassInput password={password}/>
      <button className = "btn-flat-border" onClick={onClickLoginButton}>Log in</button>
      <ForgetUserID />
    </div>
  )
}

export default LoginFunction;
