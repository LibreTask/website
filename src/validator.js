/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import Validator from "validator";

const AppValidator = {
  isValidEmail: function(email) {
    return Validator.isEmail(email);
  },
  isValidPassword: function(password) {
    return Validator.isLength(password, { min: 6, max: 100 });
  }
};

export default AppValidator;
