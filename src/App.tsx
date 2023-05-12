import './App.css';
import AppRoutes from './routes/default-router';

declare global {
  interface Window { __REACT_DEVTOOLS_GLOBAL_HOOK__: any; }
}

window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { isDisabled: true };

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
