/** Context of fat arrow functions */
const arrowBurgerFactory = {
  burger: '🍔',
  createBurger: () => this.burger,
};


// Arrow function remembers it's context ON CREATION
const arrowRealBurger = arrowBurgerFactory.createBurger();

arrowRealBurger;

// Arrow functions DO NOT lose their context with reassignment
const arrowOuterCreateBurger = arrowBurgerFactory.createBurger;

const arrowOuterBurger = arrowOuterCreateBurger();

arrowOuterBurger;

// And they can not be binded
const arrowBindedCreateBurgere = arrowBurgerFactory.createBurger.bind(arrowBurgerFactory);
const arrowBindedBurger = arrowBindedCreateBurgere();

arrowBindedBurger;

/** Context of arrow functions in classes */
class BurgerFactory {
  burger = '🍔';

  createBurger = () => this.burger;
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
const classBindedCreateBurgere = classBurgerFactory.createBurger.bind(classBurgerFactory);
const classBindedBurger = classBindedCreateBurgere();

classBindedBurger;
