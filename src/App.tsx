import './App.css'
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {QuestionnaireProvider} from "./providers/QuestionnaireProvider/QuestionnaireContext";

function App() {
  return (
    <div className="App">
        <QuestionnaireProvider>
            <Header />
            <Menu />
        </QuestionnaireProvider>
    </div>
  )
}

export default App
