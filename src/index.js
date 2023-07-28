import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>,
    errorElement: <ErrorPage/>
  }
])

export default function App() {
  return (
      <RouterProvider router={router}/>
  ) 
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)