
import {render} from '/src/render.js';
import EditPointView from '/src/view/edit-point-view';
import FilterView from '/src/view/filter-view';
import SortView from '/src/view/sort-view';
import PointsListView from '/src/view/points-list-view';
import PointItemView from '/src/view/point-Item-view';

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
