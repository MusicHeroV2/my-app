import { Subject } from "rxjs";

export interface ISetSub {
  (value: unknown): void;
}

let subject = new Subject();
let initialValue: any = undefined;

class Store<T> {
  state: T = initialValue;
  subject = new Subject();

  act = {
    init: (state:T) => {
      subject.next(state);
    },
    subscribe: (setSub: ISetSub) => {
      subject.subscribe(setSub);
    },
    setStore: (data: T) => {
      this.state = data;
      subject.next(this.state);
    },
    pushStore: (data: T, state: Array<T>) => {
      state = [...state, data]
      subject.next(this.state)
    },
    resetStore: () => {
      this.state = initialValue;
      subject.next(this.state)
    },
    initialValue,
  };
}

export default Store;
