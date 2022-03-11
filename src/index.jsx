import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename={process.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
