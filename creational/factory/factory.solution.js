class HttpAdapterFactory {
  makeAdapter() {
    throw new Error("Method not implemented.");
  }
}

class BaseHttpAdapter {
  constructor(name) {
    this._name = name;
  }
  get() {
    throw new Error("Method not implemented.");
  }
  post() {
    throw new Error("Method not implemented.");
  }
  put() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }

  getName() {
    return this._name;
  }
}

class CoolRestHttpAdapter extends BaseHttpAdapter {
  constructor() {
    super("CoolRest");
  }

  get() {
    console.log("GET request CoolRest");
  }
  post() {
    console.log("POST request CoolRest");
  }
  put() {
    console.log("PUT request CoolRest");
  }
  delete() {
    console.log("DELETE request CoolRest");
  }
}

class BetterRestHttpAdapter extends BaseHttpAdapter {
  constructor() {
    super("BetterRest");
  }

  get() {
    console.log("GET request BetterRest");
  }
  post() {
    console.log("POST request BetterRest");
  }
  put() {
    console.log("PUT request BetterRest");
  }
  delete() {
    console.log("DELETE request BetterRest");
  }
}

class CoolRestHttpAdapterFactory extends HttpAdapterFactory {
  makeAdapter() {
    return new CoolRestHttpAdapter();
  }
}

class BetterRestHttpAdapterFactory extends HttpAdapterFactory {
  makeAdapter() {
    return new BetterRestHttpAdapter();
  }
}

function createHttpAdapterFactory(type) {
  httpAdapterFactories = {
    CoolRest: CoolRestHttpAdapterFactory,
    BetterRest: BetterRestHttpAdapterFactory,
  };

  const HttpAdapterFactoryClass = httpAdapterFactories[type];
  return new HttpAdapterFactoryClass();
}

function app(factory) {
  if (!factory) {
    console.log("No factory provided");
    return;
  }
  const myAdapter = factory.makeAdapter();
  console.log("factory name: ", myAdapter.getName());
  myAdapter.get();
  myAdapter.post();
}

app(createHttpAdapterFactory("BetterRest"));
app(createHttpAdapterFactory("CoolRest"));
