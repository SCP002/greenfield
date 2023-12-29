import { GameComp } from 'components/GameComp/GameComp';
import 'index.scss';
import { configure } from 'mobx';
import React from 'react';
import { createRoot } from 'react-dom/client';
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

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <StoresContext.Provider value={rootStore}>
      <GameComp />
    </StoresContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
