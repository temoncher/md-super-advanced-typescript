/** Context of common functions in objects */
const burgerFactory = {
  burger: '🍔',
  createBurger() {
    return this.burger;
  },
};

// Common function uses context to determine value of `this` on the fly
const realBurger = burgerFactory.createBurger();

realBurger;

// Common functions lose context with reassignment
const outerCreateBurger = burgerFactory.createBurger;

const outerBurger = outerCreateBurger();

outerBurger;

// But we can resotre context with `bind` by hand
const bindedCreateBurgere = burgerFactory.createBurger.bind(burgerFactory);
const bindedBurger = bindedCreateBurgere();

bindedBurger;

/** Context of common functions in classes */
class BurgerFactory {
  burger = '🍔';

  createBurger() {
    return this.burger;
  }
}

const classBurgerFactory = new BurgerFactory();

// Common function uses context to determine value of `this` on the fly
const classRealBurger = classBurgerFactory.createBurger();

classRealBurger;

// Common functions lose context with reassignment
const classOuterCreateBurger = classBurgerFactory.createBurger;

const classOuterBurger = classOuterCreateBurger();

classOuterBurger;

// But we can resotre context with `bind` by hand
const classBindedCreateBurgere = classBurgerFactory.createBurger.bind(null);
const classBindedBurger = classBindedCreateBurgere();

classBindedBurger;
