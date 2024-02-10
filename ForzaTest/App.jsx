import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { MoviesContextProvider } from './src/services/movies.context';

function App() {

  return(
    <MoviesContextProvider>
      <AppNavigator/>
    </MoviesContextProvider>
  )
}

export default App;
