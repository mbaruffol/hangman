//Importing the configureStore function from the @reduxjs/toolkit package
import { configureStore } from '@reduxjs/toolkit';
//Importing the reducer from the wordsReducer file
import wordsReducer from '../components/wordsReducer';

//Creating the store using the configureStore function
const store = configureStore({
    //Adding the reducer to the store
    reducer: {
        words: wordsReducer
    }
});
//Exporting the store
export default store;