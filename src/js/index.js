'use strict';

(function () {
    const app = {};

    app.name = 'Starter HTML';
    app.version = '0.1.0';

    app.init = () => {
        console.log(app.name);
        console.log(app.version);
    }
    
    app.init();
})();