import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
// import {} from "../../actions/auth"

// const error = handleAction(
//   fetchShowEntitiesFailure,
//   (state, action) => action.error,
//   null
// );

// const isFetching = handleActions(
//   {
//     [fetchShowEntitiesRequest]: () => false,
//     [fetchShowEntitiesSuccess]: () => true,
//     [fetchShowEntitiesFailure]: () => true
//   },
//   false
// );

// const entities = handleAction(
//   fetchShowEntitiesSuccess,
//   (state, action) => action.payload,
//   []
// );

export const getIsAuthorized = state => state;

// export default combineReducers({
//   error,
//   entities,
//   isFetching
// });
