// base products classes

class CPU {
  setSeries(series) {
    throw new Error("Method not implemented!");
  }
}

class Memory {
  setCapacityInGB(capacityInGB) {
    throw new Error("Method not implemented!");
  }
}

class Display {
  setResolution() {
    throw new Error("Method not implemented!");
  }
}

// Concrete product classes for each family

class CPUPhone extends CPU {
  setSeries(series) {
    console.log("[PHONE] CPU series " + series);
  }
}

class CPULaptop extends CPU {
  setSeries(series) {
    console.log("[LAPTOP] CPU series " + series);
  }
}

class CPUTablet extends CPU {
  setSeries(series) {
    console.log("[TABLET] CPU series " + series);
  }
}

class MemoryPhone extends Memory {
  setCapacityInGB(capacityInGB) {
    console.log("[PHONE] Memory of " + capacityInGB);
  }
}

class MemoryLaptop extends Memory {
  setCapacityInGB(capacityInGB) {
    console.log("[LAPTOP] Memory of " + capacityInGB);
  }
}

class MemoryTablet extends Memory {
  setCapacityInGB(capacityInGB) {
    console.log("[TABLET] Memory of " + capacityInGB);
  }
}

class DisplayPhone extends Display {
  setResolution() {
    console.log("[PHONE] Display");
  }
}

class DisplayLaptop extends Display {
  setResolution() {
    console.log("[LAPTOP] Display");
  }
}

class DisplayTablet extends Display {
  setResolution() {
    console.log("[TABLET] Display");
  }
}

// Abstract Factory Class
class ProductAbstractFactory {
  createCPU() {
    throw new Error("Method not implemented!");
  }

  createMemory() {
    throw new Error("Method not implemented!");
  }

  createDisplay() {
    throw new Error("Method not implemented!");
  }
}

// Concrete Factories
class PhoneFactory extends ProductAbstractFactory {
  createCPU() {
    return new CPUPhone();
  }

  createMemory() {
    return new MemoryPhone();
  }

  createDisplay() {
    return new DisplayPhone();
  }
}

class LaptopFactory extends ProductAbstractFactory {
  createCPU() {
    return new CPULaptop();
  }

  createMemory() {
    return new MemoryLaptop();
  }

  createDisplay() {
    return new DisplayLaptop();
  }
}

class TabletFactory extends ProductAbstractFactory {
  createCPU() {
    return new CPUTablet();
  }

  createMemory() {
    return new MemoryTablet();
  }

  createDisplay() {
    return new DisplayTablet();
  }
}

/////////////////////
function createFactory(factory) {
  const factories = {
    phone: PhoneFactory,
    laptop: LaptopFactory,
    tablet: TabletFactory,
  };
  const Factory = factories[factory];
  return new Factory();
}

function mainProgram(factory) {
  if (!factory) {
    throw new Error("Factory not provided!");
  }
  const cpu = factory.createCPU();
  const memory = factory.createMemory();
  const display = factory.createDisplay();

  cpu.setSeries("abcdefa234adf");
  memory.setCapacityInGB("32GB");
  display.setResolution();
}

mainProgram(createFactory("laptop"));
