import { useEffect } from "react";
import { IconButton, Container, Button } from "@mui/material";
import {
  useAppDispatch,
  fetchData,
  getApiLoaded,
  useAppSelector,
} from "./store";
import ResponsiveAppBar from "./navigationBar/ResponsiveAppBar";
import HeroSection from "./heroSection/HeroSection";
import About from "./about/About";
import "./styles.css";
import WorkEx from "./workex/workex";
const App = () => {
  const dispatch = useAppDispatch();
  const isApiLoaded = useAppSelector(getApiLoaded);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    isApiLoaded && (
      <>
        <ResponsiveAppBar />
        <div className="App">
           
          <Container maxWidth="xl">
          <HeroSection />
          {/* </Container> */}
          <About />
          <WorkEx />
             </Container>
        </div>
      </>
    )
  );
};
export default App;
