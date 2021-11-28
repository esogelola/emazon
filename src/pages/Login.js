import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { setAuthState, getCurrentUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router";
function Login() {
  const User = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(getCurrentUser());
    });
  });

  return User.userInfo !== null ? (
    <div>{history.push("/")}</div>
  ) : (
    <AmplifyAuthenticator />
  );
}

export default Login;
