import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LocationsList from './components/LocationsList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>FDMealPlanner Locations</h1>
        <LocationsList />
      </div>
    </Provider>
  );
};

export default App;
