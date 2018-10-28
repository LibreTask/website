/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import footerReducer from "./footer";
import headerReducer from "./header";
import userReducer from "./user";

const appReducer = combineReducers({
  footer: footerReducer,
  header: headerReducer,
  user: userReducer,
  routing
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
