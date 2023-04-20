import './App.css';
import Counter from '../src/components/Counter';
import { Provider } from 'react-redux';
import store from './components/Store'

function App() {
  return (

    <div className='App'>
      <Provider store={store}>
        < Counter />
      </Provider>

    </div>
  );
}

export default App;
