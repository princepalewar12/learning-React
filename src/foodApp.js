import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";






const AppLayout = () => {
  return (
    <div className="app">
      {/* <h1 className="food">FOOOOOOOD</h1> */}
      <Header/>
      <Body />
    </div> 
  ); 
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// till episode 4 completed