import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from './pages/Login'
import Links from "./pages/Links";
import Error from "./pages/NotFound";
import Menu from './components/Menu/index'
import { getLinksSave } from "./services/storeLink";
import SignUp from "./pages/SignUp";
import { tokenService } from "./services/tokenService";

function RoutesApp() {
const token =tokenService.get()
  return (
    
    <BrowserRouter>
        <Menu/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<Error />} />
          <Route path="/:id" element={<Redirect />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

function Redirect() {
  const [myLinks, setMyLinks] = useState([]);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@seuLink");
      setMyLinks(result);
    }
    getLinks();
  }, []);
  let { id } = useParams();
  return myLinks.some((link) => link.id === id) ? (
    (window.location.href = myLinks.find((link) => link.id === id).long_url)
  ) : (
    <Error />
  );
}
