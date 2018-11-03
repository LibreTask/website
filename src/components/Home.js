/*
 * @link https://libretask.org/
 * @license https://github.com/LibreTask/backend/blob/master/LICENSE.md
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { Button, Grid, Row, Col, Image, Table } from "react-bootstrap";

import * as FooterActions from "../actions/footer";

import AppConstants from "../constants";
import AppStyles from "../styles";

const styles = {
  content: {
    margin: "auto",
    color: "#272727",
    fontSize: "130%",
    paddingLeft: 0,
    paddingRight: 0
  },
  nonPaddedRowElementContent: {
    display: "inline",
    margin: "auto"
  },
  rowElementContent: {
    display: "inline",
    margin: "auto",
    padding: 20
  },
  rowElementFont: {
    paddingTop: 10,
    color: "white",
    fontSize: "125%",
    fontWeight: "bold",
    margin: "auto",
    textAlign: "center"
  },
  rowElementImage: {
    verticalAlign: "top",
    margin: "auto",
    textAlign: "center"
  },
  featureIcon: {
    verticalAlign: "top",
    margin: "auto",
    textAlign: "center",
    padding: "15px",
    borderRadius: "6px",
    maxWidth: "160px",
    maxHeight: "160px",
    background: "black"
  },
  pricingTable: {
    minWidth: 320,
    maxWidth: 400,
    minHeight: 385,
    maxHeight: 400,
    width: "90%",
    backgroundColor: AppStyles.backgroundColor,
    textAlign: "center",
    margin: "auto",

    // required for rounded corners
    borderRadius: 5,
    overflow: "hidden"
  },
  tableHeader: {
    fontSize: "120%",
    fontWeight: "bold",
    textAlign: "center"
  },
  libretaskDemo: {
    width: "100%",
    height: "100%",

    // scaled down proportionally from original size
    minWidth: 285,
    minHeight: 296,

    // an individual frame is 346 widty by 360 height
    maxWidth: 346,
    maxHeight: 360
  },
  titleText: {
    color: AppStyles.textOnMainColor,
    fontSize: "240%",
    margin: "auto",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 70
  },
  whiteSectionText: {
    color: AppStyles.textOnMainColor,
    fontSize: "200%",
    margin: "auto",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  whiteSectionSmallText: {
    color: AppStyles.textOnMainColor,
    fontSize: "100%",
    margin: "auto",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  blackRow: {
    backgroundColor: "black",
    margin: "auto",
    width: "100%",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30
  },
  blackRowNoPadding: {
    backgroundColor: "black",
    margin: "auto",
    width: "100%",
    textAlign: "center"
  },
  blackRow10Padding: {
    backgroundColor: "black",
    margin: "auto",
    width: "100%",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  column: {
    float: "none",
    display: "inline-flex",
    verticalAlign: "middle"
  },
  titleColumn: {
    float: "none",
    display: "inline-flex",
    verticalAlign: "top"
  },
  ruler: {
    width: "60%"
  }
};

class Home extends Component {

  componentDidUpdate() {
    /*
      This code enables anchor links.
    */
    let hash = this.props.location.hash.replace("#", "");
    if (hash) {
      let node = ReactDOM.findDOMNode(this.refs[hash]);
      if (node) {
        node.scrollIntoView();
      }
    }
  }

  componentDidMount = () => {
    this.props.setIsDarkFooter(true);
  };

  componentWillUnmount = () => {
    this.props.setIsDarkFooter(false);
  };

  render() {
    let desktopDownloadButton;
    if (navigator.appVersion.indexOf("Win") !== -1) {
      desktopDownloadButton = (
        <div style={styles.nonPaddedRowElementContent}>
          <div style={styles.rowElementImage}>
            <a href={AppConstants.WINDOWS_DOWNLOAD_LINK}>
              <Button
                style={AppStyles.coloredDownloadButton}
                bsStyle="primary"
                bsSize="large"
                onClick={() => {}}
              >
                Download for Windows
              </Button>
            </a>
          </div>
        </div>
      );
    } else if (
      navigator.appVersion.indexOf("Linux") != -1 ||
      navigator.appVersion.indexOf("X11") != -1
    ) {
      desktopDownloadButton = (
        <div style={styles.nonPaddedRowElementContent}>
          <div style={styles.rowElementImage}>
            <a href={AppConstants.LINUX_DOWNLOAD_LINK}>
              <Button
                style={AppStyles.coloredDownloadButton}
                bsStyle="primary"
                bsSize="large"
                onClick={() => {}}
              >
                Download for Linux
              </Button>
            </a>
          </div>
        </div>
      );
    } else {
      // default to macOS
      desktopDownloadButton = (
        <div style={styles.nonPaddedRowElementContent}>
          <div style={styles.rowElementImage}>
            <a href={AppConstants.MAC_DOWNLOAD_LINK}>
              <Button
                style={AppStyles.coloredDownloadButton}
                bsStyle="primary"
                bsSize="large"
                onClick={() => {}}
              >
                Download for Mac
              </Button>
            </a>
          </div>
        </div>
      );
    }

    return (
      <div style={AppStyles.homePage}>
        <Grid fluid style={styles.content}>
          <Row style={styles.blackRow}>
            <Col style={styles.titleColumn} sm={10} md={5}>
              <div style={styles.titleText}>Minimalist task management.</div>
            </Col>
            <Col style={styles.column} sm={10} md={5}>
              <div style={styles.rowElementImage}>
                <Image
                  style={styles.libretaskDemo}
                  alt="LibreTask desktop application"
                  src="../images/libretask_demo.gif"
                  rounded
                />
              </div>
            </Col>
          </Row>

          <Row style={styles.blackRowNoPadding}>
            <hr style={styles.ruler}/>
            <Col>
              <div style={styles.whiteSectionText}>
                Features
              </div>
            </Col>
          </Row>
          <Row style={styles.blackRow10Padding}>
            <Col style={styles.column} sm={8} md={4}>
              <div style={styles.rowElementContent}>
                <img
                  src="../images/list.png"
                  style={styles.featureIcon}
                  alt="LibreTask list diagram"
                />

                <div style={styles.rowElementFont}>Organize your goals</div>
              </div>
            </Col>
            <Col style={styles.column} sm={8} md={4}>
              <div style={styles.rowElementContent}>
                <img
                  src="../images/sync.png"
                  style={styles.featureIcon}
                  alt="LibreTask sync diagram"
                />

                <div style={styles.rowElementFont}>Sync across devices</div>
              </div>
            </Col>
          </Row>
          <Row style={styles.blackRow10Padding}>
            <Col style={styles.column} sm={8} md={4}>
              <div style={styles.rowElementContent}>
                <img
                  src="../images/backup.png"
                  style={styles.featureIcon}
                  alt="LibreTask backup diagram"
                />

                <div style={styles.rowElementFont}>Backup unlimited tasks</div>
              </div>
            </Col>
            <Col style={styles.column} sm={8} md={4}>
              <div style={styles.rowElementContent}>
                <img
                  src="../images/offline.png"
                  style={styles.featureIcon}
                  alt="LibreTask offline diagram"
                />

                <div style={styles.rowElementFont}>Work completely offline</div>
              </div>
            </Col>
            <hr style={styles.ruler}/>
          </Row>
          <Row style={styles.blackRow10Padding}>
            <Col>
              <div style={styles.whiteSectionText}>Get it now</div>
              <div style={styles.whiteSectionSmallText}>No payment or signup required!</div>
            </Col>
          </Row>
          <Row style={styles.blackRow}>
            <Col style={styles.column} sm={6} md={4}>
              {desktopDownloadButton}
            </Col>
          </Row>
          {/*
          <Row style={styles.blackRow10Padding}>
            <Col style={styles.column} sm={6} md={4}>
              <div style={styles.nonPaddedRowElementContent}>
                <div style={styles.rowElementImage}>
                  <a href={AppConstants.ANDROID_DOWNLOAD_LINK}>
                    <Image
                      style={AppStyles.downloadButton}
                      alt="LibreTask Android download image"
                      src="../images/android.png"
                      rounded
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col style={styles.column} sm={6} md={3}>
              <div style={styles.rowElementContent}>
                <div style={styles.rowElementImage}>
                  <a href={AppConstants.IOS_DOWNLOAD_LINK}>
                    <Image
                      style={styles.downloadButton}
                      alt="LibreTask iOS download image"
                      src="../images/ios.svg"
                      rounded
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        */}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  /* TODO */
});

const mapDispatchToProps = {
  setIsDarkFooter: FooterActions.isDarkFooter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
