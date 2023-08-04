import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from "./Menu";
import Layout from "./Layout";
import Form from "./Form";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import PageTwo from "./pages/PageTwo";
// import PageCTA from "./pages/PageCTA";
// import About from "./pages/About";



function App() {
  return (
    <div>
    <Router>
      {/* <Menu/> */}
      <Routes>
        {/* <Route path="/" element={<Menu/>} exact></Route> */}
        {/* <Route path="/about" element={<About/>}></Route>
        <Route path="/page-two" element={<PageTwo/>}></Route> */}
        <Route path="/layout" element={<Layout/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
      
      </Routes>
    </Router>
  </div>
  
  );
}

export default App;

