/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

const ErrorCodes = {
  USER_DOES_NOT_EXIST: "USER_DOES_NOT_EXIST",
  EMAIL_IS_ALREADY_USED: "EMAIL_IS_ALREADY_USED",
  INVALID_LOGIN: "INVALID_LOGIN",
  INVALID_EMAIL_CONFIRMATION_TOKEN: "INVALID_EMAIL_CONFIRMATION_TOKEN",
  EMAIL_CONFIRMATION_TOKEN_ALREADY_USED:
    "EMAIL_CONFIRMATION_TOKEN_ALREADY_USED",
  INVALID_PASSWORD_RESET_TOKEN: "INVALID_PASSWORD_RESET_TOKEN",
  USER_HAS_ALREADY_UPGRADED: "USER_HAS_ALREADY_UPGRADED",
  NOTHING_FOUND: "NOTHING_FOUND"
};

module.exports = ErrorCodes;
