import { Box } from "@mui/system";
import Header from "../src/components/Header/Header";
import FrontText from "../src/FrontText/FrontText";
import Tools from "../src/components/Tools/Tools";
import Projects from "../src/components/Projects/Projects";
import Footer from "../src/components/Footer/Footer";

export default function Home() {
  return (
    <Box>
      <style jsx global>
        {
          "body {background-image: radial-gradient(circle, #22c7a2, #00a899, #008a8a, #006c76, #13505c);}"
        }
      </style>
      <Header />
      <FrontText />
      <Tools />
      <Projects />
      <Footer />
    </Box>
  );
}
