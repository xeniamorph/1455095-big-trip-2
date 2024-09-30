import Presenter from '/src/presenter/board-presenter.js';

import './mock/item.js';

const siteBodySection = document.querySelector('.page-body');
const siteContentSection = siteBodySection.querySelector('.trip-events');


const presenter = new Presenter({pointContainer: siteContentSection});

presenter.init();
