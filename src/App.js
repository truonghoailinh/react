import './App.css'
import HelloWork from './main-concert/hello'
import WelCome from './main-concert/welcom'
import HandelEvent from './main-concert/handleEvent'
import Conditional from './main-concert/conditional'
import List from './main-concert/listEndKey'
import Form from './main-concert/form'
import Lifting from './main-concert/lifting'
function App() {
  return (
    <div className="App">
      <HelloWork />
      <WelCome name="Linh" />
      <HandelEvent />
      <Conditional />
      <List />
      <Form />
      <Lifting />
    </div>
  );
}

export default App;
