import classNames from 'classnames';
import jwplayerSettings from '../fileSettings/jwplayerSettings.json'

let htmlHelpers = {
  toggleSidebar: toggle => { },
  scrollTop: () => { },
  storageGet: key => null,
  storageSet: (key, value) => { },
  getJwplayerState: () => ({ autoPlay: true }),
  setJwplayerState: state => ({}),
  initFacebookSDK: facebokAppId => { },
  isBrowser() {
    return typeof (window) !== 'undefined'
  }
};


if (typeof (document) !== 'undefined') {
  htmlHelpers.toggleSidebar = toggle => {
    document.body.setAttribute('class', classNames('sidebar-mini'.adminCss(), {
      ['sidebar-open'.adminCss()]: !toggle,
      ['sidebar-collapse'.adminCss()]: toggle
    }));
  }

  htmlHelpers.scrollTop = () => {
    window.scrollTo(0, 0);
  }

  htmlHelpers.storageGet = key => {
    return localStorage.get(key);
  }

  htmlHelpers.storageSet = (key, value) => {
    localStorage.set(key, value)
  }

  htmlHelpers.getJwplayerState = () => {
    const playerState = localStorage.get(jwplayerSettings.videoPlayerKey);
    return playerState || { autoPlay: true };
  }

  htmlHelpers.setJwplayerState = state => {
    localStorage.set(jwplayerSettings.videoPlayerKey, state);
    return htmlHelpers.getJwplayerState();
  }

  htmlHelpers.initFacebookSDK = facebokAppId => {
    window.fbAsyncInit = () => {
      const parseBrowser = require('../services/parseBrowser').default;
      parseBrowser.FacebookUtils.init({
        appId: facebokAppId, // Facebook App ID
        status: true,  // check Facebook Login status
        cookie: true,  // enable cookies to allow Parse to access the session
        xfbml: true,  // initialize Facebook social plugins on the page
        version: 'v4.0' // point to the latest Facebook Graph API version
      });
    };

    // Load Facebook SDK
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}

export default htmlHelpers;