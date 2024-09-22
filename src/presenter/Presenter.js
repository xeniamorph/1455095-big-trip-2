
import {render} from '/src/render.js';
import EditPointView from '/src/view/EditPointView';
import FilterView from '/src/view/FilterView';
import SortView from '/src/view/SortView';
import PointsListView from '/src/view/PointsListView';
import PointItemView from '/src/view/PointItemView';

const siteBodySection = document.querySelector('.page-body');
const siteFilterSection = siteBodySection.querySelector('.trip-controls__filters');
const siteContentSection = siteBodySection.querySelector('.trip-events');

export default class Presenter {
  pointListComponent = new PointsListView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(new FilterView(), siteFilterSection);
    render(new SortView(), siteContentSection);
    render(this.pointListComponent, this.pointContainer);
    render(new EditPointView(), this.pointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointItemView(), this.pointListComponent.getElement());
    }

  }
}
