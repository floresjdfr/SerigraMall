//import Product from "./Product";
import { useTranslation } from "react-i18next"
import serigramallImage from "../../src/assets/logo.jpg";
function Index() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <img src={serigramallImage} width="50%" height="50%" />
    </div>
  );
}


export default Index;