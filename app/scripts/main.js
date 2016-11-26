import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import $ from 'jquery';
import config from './config';

let mainContainer = document.getElementById('main-container');


// let authURL = 'https://api.mapmyfitness.com/v7.1/oauth2/authorize/?client_id=hx8r9mbvzej8spf4jrv7u72ah5armmzy&response_type=code&redirect_uri=http://localhost:8080/oauth'
// window.location = authURL;

$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('backendless') > -1 ){

    console.log('interception son');
    console.log(opts.type);

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secretKey);
    xhr.setRequestHeader('application-type', 'REST');
    xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'))
  } else if(opts.url.indexOf('api.ua.com') > -1) {
    xhr.setRequestHeader('Api-Key', 'hx8r9mbvzej8spf4jrv7u72ah5armmzy')
  }
});


ReactDom.render(router, mainContainer);
