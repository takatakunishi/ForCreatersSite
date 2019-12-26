import { call, put } from '@redux-saga/core/effects';
import { login } from '../../apis/LoginUser/Login';
// import { signInSuccess, signInFailed } from '../../actions/LoginUser/ActionCreator'
// import { getFunnyRequest } from '../../actions/Funny/ActionCreator';


export function* loginSaga(action) {
  console.log('in login saga');
  const response = yield call(login, action.data);
  console.log(response.status);
  if (response.status === 201) {
    console.log(response)
    // const token = response.headers.authorization;
    // yield put(signInSuccess(action.data, token));
    // yield put(getFunnyRequest(action.data, token));
    console.log("success");
  } else {
    console.log("connect failed");
    // yield put(signInFailed());
  }
}
