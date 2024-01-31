// import "./App.css";
import { Route, Routes } from "react-router-dom";

import routes from "./pages/index";
import { useEffect, useState } from "react";
import Preloader from "components/preloader/Preloader";
import AOS from "aos";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Routes>
          {routes.map((data, index) => (
            <Route
              exact={true}
              path={data.path}
              element={data.component}
              key={index}
            />
          ))}
          {/* <Route path='*' element={<Page404 />} /> */}
        </Routes>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
