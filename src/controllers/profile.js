/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

export function createOrUpdateProfile(profile) {
  localStorage.setItem("profile", JSON.stringify(profile));
}

export async function getMyProfile() {
  return localStorage.getItem("profile");
}

export function logout() {
  return cleanProfileStorage();
}

export function cleanProfileStorage() {
  localStorage.clear();
}
