//import Product from "./Product";
import { useTranslation } from "react-i18next"
import serigramallImage from "../../src/assets/logo.jpg";
function Index() {

  const serigramallImageStyles = {
    "width": "70vh",
    "height": "70vh",
    "position": "absolute",
    "left": "50%",
    "top": "50%",
    "-webkit-transform": "translate(-50 %, -50 %)",
    "transform": "translate(-50%, -50%)"
  }

  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <img src={serigramallImage} alt="Serigramall Logo" style={serigramallImageStyles} />
    </div>
  );
}


export default Index;