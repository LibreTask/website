/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import React, { Component } from "react";
import AppStyles from "../styles";

class Privacy extends Component {
  render() {
    return (
      <div style={AppStyles.mainWindow}>
        <div style={AppStyles.titleText}>Privacy Policy</div>
        <div style={AppStyles.content}>
          <p>
            LibreTask is a task management service. This policy describes the
            types of personal information we may collect and how we use it to
            provide the LibreTask service.
          </p>
          <p>
            By using LibreTask, you agree to the collection and use of your
            personal information as described in this policy. You should know:
          </p>
          <ul>
            <li>
              We collect limited account information and store and maintain your
              account and tasks on our servers.
            </li>
            <li>
              We will never distribute information that personally identifies
              you for marketing purposes without your permission.
            </li>
          </ul>
          <h3>What information do we collect and how do we use it?</h3>
          <p>
            When you register with LibreTask, we will request some personal
            information, including your email and password. Your password will
            be maintained on our system in a hashed form. The contents of your
            LibreTask account are stored and maintained on LibreTask servers in
            order to provide the service.
          </p>
          <h3>How we may contact you.</h3>
          <p>
            LibreTask may send you information related to your LibreTask account
            or LibreTask services. Because we believe such information is
            important, you will not be given the opportunity to opt-out of
            receiving them.
          </p>
          <h3>Transfer of information.</h3>
          <p>
            Personal information collected by LibreTask may be stored and
            processed in the United States or any other country in which
            LibreTask maintains facilities. By using LibreTask, you consent to any
            such transfer of information outside of your country.
          </p>
          <p>
            We reserve the right to transfer your personal information in the
            event of a transfer of ownership of LibreTask, such as acquisition by
            or merger with another company. In such an event, LibreTask will
            notify you before information is transferred and becomes subject to
            a different privacy policy.
          </p>
          <h3>Updating your information.</h3>
          <p>
            You can terminate your account at any time, by going to the Delete
            Account page. We typically deactivate accounts within two business
            days of such requests. You should be aware, however, that residual
            copies of information may remain stored on our systems even after
            the deletion of information or the termination of your account.
          </p>
        </div>
      </div>
    );
  }
}

export default Privacy;
