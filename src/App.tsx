import React from 'react';
import './App.scss';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Header />
      <Main />
    </div>
  );
};
