import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post_Without_JWT from "./Components/CRUD/Post_Without_JWT";
import Get_Without_JWT from "./Components/CRUD/Get_Without_JWT.jsx";
import Login_Without_JWT from "./Components/Login_Without_JWT.jsx";
import CrudPost from "./Components/CRUD/Post.jsx";
import CrudGet from "./Components/CRUD/Get.jsx";
import CrudUpdate from "./Components/CRUD/Update.jsx";
import CrudSpecific from "./Components/CRUD/GetSpecific.jsx";
import CrudDelete from "./Components/CRUD/Delete.jsx";
import Registration from "./Components/Registration";
import LoginNew from "./Components/Login_new";
import GetSpecificUserMsg from "./Components/CRUD/GetSpecificUserMsgs";
import ProtectedRoutesJWT from "./Components/ProtectedRoutesJWT.jsx";

function App() {
  return (
    <div className="App">

      {/* With JWT Tokens */}
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<LoginNew />} />
          <Route path="/createPost" element={<CrudPost />} />

          {/* Protected Routes with JWT */}
          <Route element={<ProtectedRoutesJWT />}>
            <Route path="getSpecificUserMsg" element={<GetSpecificUserMsg />} />
            <Route path="getAll" element={<CrudGet />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
