import { Subject } from "rxjs";

const subject = new Subject();
export class Store<T> {
  state:T = this.state;
  initialState: T;

  init() {
    new Store<T>();
  }

  componentWillUnmount() {
    subject.unsubscribe();
  }

  setStore(setSub: T) {
    subject.subscribe(setSub);
  }

  pushToStore(data: T) {
    this.state = {
      ...this.state,
      data: [...this.state, data],
    };
    subject.next(this.state);
  }

  resetStore() {
      this.state = initialState;
      subject.next(this.state);
    };
}
