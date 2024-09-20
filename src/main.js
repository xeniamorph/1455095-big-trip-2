import { render } from './render';

import Filter from './view/Filter';
import Sort from './view/Sort';
import Presenter from '/src/presenter/Presenter.js';

const siteMainSection = document.querySelector('.page-body');
const siteFilterSection = siteMainSection.querySelector('.trip-controls__filters');
const siteSortSection = siteMainSection.querySelector('.trip-events');

const presenter = new Presenter({pointContainer: siteSortSection});

render(new Filter(), siteFilterSection);
render(new Sort(), siteSortSection);

presenter.init();
