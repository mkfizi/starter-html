/**
 * --------------------------------------------------------------------------
 * Starter HTML v0.1.0: index.js
 * Licensed under MIT (https://github.com/mkfizi/starter-html/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(function () {
    'use strict';

    const app = {};

    app.name = 'Starter HTML';
    app.version = '0.1.0';

    app.ui = {
        viewportHeight: {

            // Workaround fix to handle viewport height issue on mobile browsers.
            // https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
            toggle: () => {
                document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
            }
        },

        // Initialize view
        init: () => {
            app.ui.viewportHeight.toggle();
        }
    }

    app.event = {
        window: {
            
            // Handle window 'resize' event.
            resize: () => {
                app.uid.viewportHeight.toggle();
            }
        },

        init: () => {
            window.addEventListener('resize', app.event.window.resize);
        }
    },

    app.init = () => {
        app.ui.init();
        app.event.init();
    }

    app.init();
})();