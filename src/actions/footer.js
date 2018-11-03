/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

export const FOOTER_SHOW = "FOOTER_SHOW";

export function show() {
  return {
    type: FOOTER_SHOW
  };
}

export const FOOTER_HIDE = "FOOTER_HIDE";

export function hide() {
  return {
    type: FOOTER_HIDE
  };
}

export const IS_DARK_FOOTER = "IS_DARK_FOOTER";

export function isDarkFooter(isDark) {
  return {
    type: IS_DARK_FOOTER,
    isDark: isDark
  };
}
