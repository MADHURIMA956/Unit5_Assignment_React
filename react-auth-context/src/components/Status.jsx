import { useContext } from "react"
import { AuthContext } from "../contexts/Auth_Context"

export const Status=()=>{
const {isAuth,token}=useContext(AuthContext)
return <div>
  <h1>{isAuth}</h1>
  <h1>{token}</h1>
</div>
  
}