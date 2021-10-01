
import './App.css';
import MainComponents from './Components/MainComponents';
import myStore from '../src/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
