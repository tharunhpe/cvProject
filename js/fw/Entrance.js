/**
 *  Entrance.js launch the application.
 *
 *  @author  Tharun Kariveda
 *  @date    Nov 12, 2017
 *
 **/
import {Splash} from 'splash-screen';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'js/application/App.js';

class Entrance {

    constructor() {}

    beforeStart() {
        let injectTapEventPlugin = require('react-tap-event-plugin');
        //Needed for onTouchTap
        //Can go away when react 1.0 release
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();
    }

    _destroySplash() {
        let _this = this;
        Splash.destroy();
        require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        ReactDOM.render(<App />, document.querySelector('#view'));
    }

    run() {
        this.beforeStart();
        this._destroySplash();
        this.launch();
    }

}

export default Entrance;
