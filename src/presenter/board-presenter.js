
import { render } from '/src/render.js';
import EditPointView from '/src/view/edit-point-view';
import FilterView from '/src/view/filter-view';
import SortView from '/src/view/sort-view';
import PointsListView from '/src/view/points-list-view';
import PointItemView from '/src/view/point-item-view';

const siteBodySection = document.querySelector('.page-body');
const siteFilterSection = siteBodySection.querySelector('.trip-controls__filters');
const siteContentSection = siteBodySection.querySelector('.trip-events');

export default class Presenter {
  pointListComponent = new PointsListView();

  constructor({pointsContainer, pointsModel, destinationsModel, offersModel}) {
    this.pointsContainer = pointsContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {

    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationsModel.getDestination()];
    this.offers = [...this.offersModel.getOffers()];

    render(new FilterView(), siteFilterSection);
    render(new SortView(), siteContentSection);
    render(this.pointListComponent, this.pointsContainer);
    render(new EditPointView(), this.pointListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointItemView({
        pointModel: this.points[i],
        destinationsModel: this.destinations,
        offersModel: this.offers,
      }), this.pointListComponent.getElement());
    }

  }
}
