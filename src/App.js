import React from 'react';
import MyForm from './MyForm';
import Items from './Items';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello CS Club!</h1>
      <p>Today, we are creating a form using React!</p>
      <MyForm />
      <Items />
    </div>
  );
}
