/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import React, { Component } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";

import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Modal
} from "react-bootstrap";

import moment from "moment";

import * as UserActions from "../actions/user";
import * as ProfileController from "../controllers/profile";

import AppValidator from "../validator";
import AppStyles from "../styles";

import * as Client from "../middleware/client";

const styles = {
  titleText: {
    fontSize: "170%",
    textAlign: "center"
  },
  accountDeletionDialog: {
    overflow: "visible",
    height: 120 // TODO - fix this hack, so that buttons are visible
  },
  profileModal: {
    zIndex: AppStyles.modalZIndex
  },
  controlLabel: {
    fontSize: "120%"
  },
  deleteAccountText: {
    color: AppStyles.linkOnBackgroundColor,
    cursor: "pointer",
    fontSize: "110%",
    paddingTop: 15,
    textAlign: "center"
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedProfile: this.props.profile || {},
      emailValidationError: "",
      successMessage: "",
      errorMessage: "",
      isUpdatingProfile: false,
      deleteAccountDialogIsOpen: false
    };
  }

  componentDidMount = () => {
    if (!this.props.isLoggedIn) {
      browserHistory.push("/login"); // redirect to main page if not logged in
    } else {
      this._fetchProfile(); // update profile on load/reload
    }
  };

  _fetchProfile = () => {
    let id = this.state.updatedProfile.id;
    let password = this.state.updatedProfile.password;

    this.setState(
      {
        successMessage: "",
        errorMessage: "",
        emailValidationError: ""
      },
      () => {
        Client.fetchProfile(id, password)
          .then(response => {
            if (response.errorCode) {
              this.setState({
                errorMessage: response.errorMessage,
                isUpdatingProfile: false
              });
            } else {
              // TODO - fix this hack; do not assign PW in this way
              response.profile.password = this.state.updatedProfile.password;
              this.setState({ updatedProfile: response.profile });
              this.props.updateProfile(response.profile);

              ProfileController.createOrUpdateProfile(response.profile);
            }
          })
          .catch(error => {
            this.setState({
              errorMessage: error.message,
              isUpdatingProfile: false
            });
          });
      }
    );
  };

  _updateProfile = () => {
    let email = this.state.updatedProfile.email;

    let emailValidationError = "";

    if (!AppValidator.isValidEmail(email)) {
      emailValidationError = "Email is not valid";
    }

    if (emailValidationError) {
      this.setState({
        successMessage: "",
        errorMessage: "",
        emailValidationError: emailValidationError
      });

      return; // validation failed; cannot update profile
    }

    this.setState(
      {
        isUpdatingProfile: true,
        successMessage: "",
        errorMessage: "",
        emailValidationError: ""
      },
      () => {
        Client.updateProfile(this.state.updatedProfile)
          .then(response => {
            if (response.errorCode) {
              this.setState({
                errorMessage: response.errorMessage,
                isUpdatingProfile: false
              });
            } else {
              this.setState(
                {
                  successMessage: "Email successfully updated",
                  isUpdatingProfile: false
                },
                () => {
                  setTimeout(() => {
                    this.setState({ successMessage: "" });
                  }, 1000 * 3); // only display success message for three seconds
                }
              );

              // TODO - fix this hack; do not assign PW in this way
              response.profile.password = this.state.updatedProfile.password;

              ProfileController.createOrUpdateProfile(response.profile);
              this.props.updateProfile(response.profile);
            }
          })
          .catch(error => {
            this.setState({
              errorMessage: error.message,
              isUpdatingProfile: false
            });
          });
      }
    );
  };

  _deleteAccount = () => {
    this.setState(
      {
        successMessage: "",
        errorMessage: "",
        emailValidationError: ""
      },
      () => {
        Client.deleteProfile(this.state.updatedProfile)
          .then(response => {
            if (response.errorCode) {
              this.setState({
                errorMessage: response.errorMessage
              });
            } else {
              this.props.logout();
              ProfileController.logout();
              browserHistory.push("/");
            }
          })
          .catch(error => {
            this.setState({
              errorMessage: error.message
            });
          });
      }
    );
  };

  /*
    This function assumes that an errorMessage and
    successMessage cannot exist simultaneously.
  */
  _constructMessageBanner = () => {
    if (this.state.errorMessage) {
      return <div style={AppStyles.errorBanner}>{this.state.errorMessage}</div>;
    }
    if (this.state.successMessage) {
      return (
        <div style={AppStyles.successBanner}>{this.state.successMessage}</div>
      );
    } else {
      return <div />;
    }
  };

  _constructProfileDeletionDialog = () => {
    return (
      <div style={styles.profileModal}>
        <Modal
          show={this.state.deleteAccountDialogIsOpen}
          onHide={() => {
            this.setState({ deleteAccountDialogIsOpen: false });
          }}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.setState({ deleteAccountDialogIsOpen: false });
              }}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                this.setState({ deleteAccountDialogIsOpen: false });
                this._deleteAccount();
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  emailValidationState = () => {
    // no status, if no error
    return this.state.emailValidationError ? "error" : null;
  };

  _profileUpdateForm = () => {
    return (
      <form style={AppStyles.form}>
        <FormGroup
          controlId="login-password-form"
          validationState={this.emailValidationState()}
        >
          <ControlLabel style={styles.controlLabel}>Email</ControlLabel>
          <FormControl
            type="email"
            value={this.state.updatedProfile.email || ""}
            placeholder="Email"
            onChange={e => {
              let updatedProfile = this.state.updatedProfile;
              updatedProfile.email = e.target.value;
              this.setState({ updatedProfile: updatedProfile });
            }}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.state.emailValidationError}</HelpBlock>
        </FormGroup>
      </form>
    );
  };

  render() {
    return (
      <div style={AppStyles.mainWindow}>
        <div style={AppStyles.centerBlockContentNoBorder}>
          {this._constructMessageBanner()}

          {this._constructProfileDeletionDialog()}

          <div>
            <div style={styles.titleText}>Profile</div>
            <div style={AppStyles.centerContent}>
              {this._profileUpdateForm()}

              <Button
                className="form_button"
                style={AppStyles.formButton}
                bsStyle="primary"
                bsSize="large"
                onClick={() => {
                  this._updateProfile();
                }}
              >
                Update Email
              </Button>

              <Button
                className="form_button"
                style={AppStyles.formButton}
                bsStyle="primary"
                bsSize="large"
                onClick={() => {
                  browserHistory.push("/reset-password");
                }}
              >
                Update Password
              </Button>

              <div
                className="underline_on_hover"
                style={styles.deleteAccountText}
                onClick={() => {
                  this.setState({ deleteAccountDialogIsOpen: true });
                }}
              >
                Delete Account
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  updateProfile: UserActions.updateProfile,
  logout: UserActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
