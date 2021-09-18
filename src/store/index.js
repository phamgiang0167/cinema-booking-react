import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import movieListReducer from 'containers/client/Home/Components/MovieList/modules/reducer'
import theaterReducer from 'containers/client/Home/Components/Theater/modules/reducer'
import movieDetailReducer from 'containers/client/MovieDetails/modules/reducer'
import userManagementReducer from 'containers/client/Login/modules/reducer'
import ticketRoomDetailReducer from 'containers/client/Checkout/modules/reducer'
import historyTicketReducer from 'containers/client/BookingHistory/modules/reducer'
const rootReducer = combineReducers({
    movieListReducer,
    theaterReducer,
    movieDetailReducer,
    userManagementReducer,
    ticketRoomDetailReducer,
    historyTicketReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
