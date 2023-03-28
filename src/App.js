//React 94 - Práca s ikonkami

import { Fa500Px } from "react-icons/fa";
import { DiCompass } from "react-icons/di";

const App = () => {
  return <div>
            <a href="https://react-icons.github.io/react-icons/icons?name=di" target="_blank">odkaz na ikony</a>
            <p className="popis">Otvoríme odkaz, skopírujeme import a potom meníme len názov ikony </p>
            <Fa500Px className="my-icon"/>
            <DiCompass  className="my-icon"/>
        </div>
  
  
  }
  export default App
  