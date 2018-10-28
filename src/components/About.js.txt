/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import React, { Component } from "react";
import AppStyles from "../styles";

class About extends Component {
  render() {
    return (
      <div style={AppStyles.mainWindow}>
        <div style={AppStyles.titleText}>
          About
        </div>
        <div style={AppStyles.content}>
          <p>
            LibreTask is a minimalist task manager that allows you to create
            and sync tasks across devices. The entire application is
            {" "}
            <a href="https://github.com/LibreTask">
              developed in the open
            </a>
            {" "}
            by a small team who values your privacy and
            {" "}
            <a href="mailto:hello@libretask.org">
              encourages your
              feedback
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default About;
