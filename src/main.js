
const siteBodySection = document.querySelector('.page-body');
const siteContentSection = siteBodySection.querySelector('.trip-events');

import Presenter from '/src/presenter/board-presenter.js';

const presenter = new Presenter({pointContainer: siteContentSection});

presenter.init();
