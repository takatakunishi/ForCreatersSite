import { takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../../actions/LoginUser/ActionType";
import { loginSaga } from "./Login";

const loginUserSaga = [
  takeLatest(LOGIN_REQUEST, loginSaga)
]

export default loginUserSaga;
