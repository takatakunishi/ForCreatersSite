import React, { useState} from 'react'
import '../../styles/molecules/RegistrationFunction.css'

const RegistrationFunction = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const onClickLoginButton = () => {
    if(password !== password2){
      alert("同じパスワードが入力されていません");
    }else if (password !== '' && password2 !== '' && userId !== '' && email !== ''){
      console.log(userId);
      console.log(password);
      console.log(email);
      setPassword('');
      setPassword2('');
      setEmail('');
      setUserId('');
    }else{
      alert("全ての情報が入力されていません")
    }
  }
  const onSetPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  }
  const onSetPassword2Change = (e) => {
    setPassword2(e.currentTarget.value);
  }
  const onSetUserIdChange = (e) => {
    setUserId(e.currentTarget.value);
  }
  const onsSetEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  }

  return (
    <div className = "RegistrationFunction">
      RegistrationFunction
      <input className = "RF_textInput" value={userId} placeholder="userIDを入力してください" onChange={onSetUserIdChange}/>
      <input className = "RF_textInput" value={password} placeholder="パスワードを入力してください" onChange={onSetPasswordChange} type = "password"/>
      <input className = "RF_textInput" value={password2} placeholder="もう一度パスワードを入力して下さい" onChange={onSetPassword2Change} type = "password"/>
      <input className = "RF_textInput" value={email} placeholder="メールアドレスを入力してください" onChange={onsSetEmailChange}/>
      <button className = "btn-flat-border" onClick={onClickLoginButton}>登録する</button>
    </div>
  )
}

export default RegistrationFunction;
