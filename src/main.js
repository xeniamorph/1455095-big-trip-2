
const siteBodySection = document.querySelector('.page-body');
const siteContentSection = siteBodySection.querySelector('.trip-events');

import Presenter from '/src/presenter/Presenter.js';

const presenter = new Presenter({pointContainer: siteContentSection});

presenter.init();
