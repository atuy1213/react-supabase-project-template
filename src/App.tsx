import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "context/AuthContext";
import Routing from "routing/Routing";

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </>
  );
}

export default App;
