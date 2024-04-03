class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  notify(data) {
    this.subscribers.forEach((s) => {
      s.update(data);
    });
  }
}

class Subscriber {
  update(val) {
    console.log(`value changed => ${val}`);
  }
}

// 使用方式
const publisher = new Publisher();
const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

publisher.notify("Hello, subscribers!");

publisher.unsubscribe(subscriber2);

publisher.notify("Goodbye, subscriber2!");
