import { Subject } from "rxjs";
import * as React from "react";

const subject = new Subject();

export class Store_ {
  // initialState = {
  //   data: [],
  // };
  
  // setStore() {
  //   init: () => subject.next(this.state);
  //   sub: (setSub) => subject.subscribe(setSub);
  // }

  // pushToStore() {
  //   push: () => {
  //     this.state = {
  //       ...this.state,
  //       data: [...this.state, data],
  //     };
  //     subject.next(state);
  //   };
  // }

  // resetStore() {
  //   reset: () => {
  //     this.state = initialState;
  //     subject.next(this.state);
  //   };
  // }

  // setStore: () => subject.next(this.state)

  componentDidMount(setSub) {
    subject.subscribe(setSub)
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  init(setSub) {
    subject.subscribe(setSub)
    subject.next(this.state)
  }

  setStore() {}
}
