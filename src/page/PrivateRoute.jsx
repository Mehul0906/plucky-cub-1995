import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function PrivateRoute({children}) {
    const [user] = useAuthState(auth);
    console.log(user)
    if (!user) {
        alert("please login to contiue on payment page.....")
      return <Navigate to={"/auth"} />;
    }
  return children
}

export default PrivateRoute
