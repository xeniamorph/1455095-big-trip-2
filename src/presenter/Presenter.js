import EditPoint from '/src/view/EditPoint';
import FormPointWithoutOffer from '/src/view/FormPointWithoutOffer';
import FormPointWithoutDestination from '/src/view/FormPointWithoutDestination';
import PointsList from '../view/PointsList';
import PointItem from '../view/PointItem';
import {render} from '/src/render.js';

export default class Presenter {
  pointItemComponent = new PointItem();
  pointItemComponent2 = new PointItem();
  pointItemComponent3 = new PointItem();
  pointListComponent = new PointsList();
  formPointWithoutOfferComponent = new FormPointWithoutOffer();
  formPointWithoutDestinationComponent = new FormPointWithoutDestination();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(this.pointListComponent, this.pointContainer);
    render(this.pointItemComponent, this.pointListComponent.getElement());

    render(new EditPoint(), this.pointItemComponent.getElement());
    render(new PointItem(), this.pointListComponent.getElement());

    render(this.formPointWithoutOfferComponent, this.pointContainer);
    render(new PointItem(), this.pointListComponent.getElement());
    render(this.formPointWithoutDestinationComponent, this.pointContainer);
  }
}
