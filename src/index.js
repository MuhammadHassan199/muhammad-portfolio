import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



const DownloadCV = ()=>{
  const handleDownload = () => {
      const link = document.createElement('a');
      link.href ='./muhammad_hassan_cv.pdf'
      link.download = 'Muhammad Hassan CV';
      link.click();
  }
  return (
    <button className='DownloadCV' onClick={handleDownload}>Download CV</button>
  )
}

export default DownloadCV;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
