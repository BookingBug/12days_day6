import template from './geese.html';

import Configurator from 'bookingbug-configurator-js';


// add new page to the "Clients" sections of the studio app
Configurator.addPage('Clients', 'geese', { 
    style: 'tab',
    layout: [
        [
          {
            type: 'bb-geese-panel',
            width: 12,
            index: 0,
            panel_params: {
            }
          }
        ]
    ]
});

// A a new tab to the "client profile" set of tabs - that is set to shwo the new page
Configurator.addNamedTab('client_profile', { 
    name: 'Geese',
    path: '.views({view: "geese"})',
    position: -1
});


class GeeseCtrl {
    constructor(bbAuthorisation) {
        this.company = bbAuthorisation.getCompany();
        this.client = this.filter.client;
    }

    async email_geese(){
        const app = await this.company.$get('apps', {app_name: 'day6'});

        const data = {client_id: this.client.id, client_email: this.client.email};

        const result = await app.$post('admin_script', {name: 'Message'}, data);

    }
}

const geesePanel = {
    templateUrl: template.id,
    controller: GeeseCtrl,
    scope: true,
    bindings: {
        filter: '<'
    }
};

angular
    .module('BBAdminDashboard')
    .component('bbGeesePanel', geesePanel);
