import { useState } from "react";
import Admin from './containers/admin/container'
import User from './containers/user/example-container'
function App() {

  const [admin,setAdmin] = useState(true)
  if(admin) return (
    <Admin />
  );
  else return(
    <User />
  )
}

export default App;
