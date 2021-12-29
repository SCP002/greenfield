import { GameComp } from 'components/GameComp/GameComp';
import 'index.scss';
import { configure } from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import { GameStore } from 'stores/GameStore';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const rootStore = {
  game: new GameStore(),
};
export const StoresContext = React.createContext(rootStore);

ReactDOM.render(
  <React.StrictMode>
    <StoresContext.Provider value={rootStore}>
      <GameComp />
    </StoresContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
