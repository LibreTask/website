/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

export const LOGIN = "LOGIN";

export function login(profile) {
  return {
    type: LOGIN,
    profile: profile
  };
}

export const LOGOUT = "LOGOUT";

export function logout() {
  return {
    type: LOGOUT
  };
}

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export function updateProfile(profile) {
  return {
    type: UPDATE_PROFILE,
    profile: profile
  };
}
