import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  return (
    <>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Zoom}
      />
    </>
  );
}

export default App;
