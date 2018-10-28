/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import { HEADER_SHOW, HEADER_HIDE } from "../actions/header";

const initialState = {
  isShown: true
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_HIDE:
      return {
        ...state,
        isShown: false
      };
    case HEADER_SHOW:
      return {
        ...state,
        isShown: true
      };
    default:
      return state;
  }
}
