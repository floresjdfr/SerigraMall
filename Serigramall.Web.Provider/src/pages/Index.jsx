//import Product from "./Product";
import { useTranslation } from "react-i18next"
function Index() {
  const [t, i18n] = useTranslation("global");
  return (
  /*
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  */
    <div>
      {/* <h1>{t("header.index")}</h1> */}
      <img src="src/styles/img/logo.jpg" width="50%" height="50%"/>
    </div>
    
  );
}


export default Index;