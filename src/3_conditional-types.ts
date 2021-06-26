/* eslint-disable func-style */
// Boolean example
type BooleanExample = true extends true
  ? string
  : number;

const booleanExample: BooleanExample = 'qq';

// string and number example
type IsNumberAString = 12 extends string ? 'yes' : 'no';

const stringOrNumber: IsNumberAString = 'no';

// unions example
type BurgerName = 'classic' | 'peach breeze' | 'chatny';

type Classic = 'classic' extends BurgerName ? 'yes' : 'no';
type Bitburger = 'bitburger' extends BurgerName ? 'yes' : 'no';

// objects example
type Burger = {
  meat: string;
  numberOfSlices: number;
};

type BurgerWithCheese = {
  meat: string;
  numberOfSlices: number;
  cheese: string;
};

type JustMeat = {
  meat: string;
};

type HasAllBurgerProps = BurgerWithCheese extends Burger ? 'yes' : 'no';
type DoesntHaveAllBurgerProps = JustMeat extends Burger ? 'yes' : 'no';

// GENERICS!!
type DoesTypeExtendString<T> = T extends string ? 'yes' : 'no';
type StringExtendsString = DoesTypeExtendString<string>;
type NumberExtendsString = DoesTypeExtendString<number>;
type LiteralTypeStringExtendsString = DoesTypeExtendString<'classic'>;
type LiteralTypeNumberExtendsString = DoesTypeExtendString<33>;

type IsBurger<T> = T extends Burger ? 'yes' : 'no';
type BurgerWithCheeseResult = IsBurger<BurgerWithCheese>;
type JustMeatResult = IsBurger<JustMeat>;

// Pseudo-real case
// Common javascripter folk, LEVEL 0
const composeBurgerBasedOnMeat1 = (meat: string): Burger => {
  if (meat === '🥩') {
    return {
      meat: '🥩',
      numberOfSlices: 1,
    };
  }

  if (meat === '🍖') {
    return {
      meat: '🍖',
      numberOfSlices: 2,
    };
  }

  return {
    meat: '🍗',
    numberOfSlices: 1,
  };
};

const b11 = composeBurgerBasedOnMeat1('🥩');
const b12 = composeBurgerBasedOnMeat1('🍖');
const b13 = composeBurgerBasedOnMeat1('qq');

// TypeScript folk, LEVEL 2
type ClassicBurger = {
  meat: '🥩';
  numberOfSlices: 1;
};

type PeachBreeze = {
  meat: '🍖';
  numberOfSlices: 2;
};

type ChickenBurger = {
  meat: '🍗';
  numberOfSlices: 1;
};

const composeBurgerBasedOnMeat2 = (meat: string): ClassicBurger | PeachBreeze | ChickenBurger => {
  if (meat === '🥩') {
    const classicBurger: ClassicBurger = {
      meat: '🥩',
      numberOfSlices: 1,
    };

    return classicBurger;
  }

  if (meat === '🍖') {
    const peachBreeze: PeachBreeze = {
      meat: '🍖',
      numberOfSlices: 2,
    };

    return peachBreeze;
  }

  const chickenBurger: ChickenBurger = {
    meat: '🍗',
    numberOfSlices: 1,
  };

  return chickenBurger;
};

const b21 = composeBurgerBasedOnMeat2('🥩');
const b22 = composeBurgerBasedOnMeat2('🍖');
const b23 = composeBurgerBasedOnMeat2('qq');

// Real types enjoyer, LEVEL 999
type ComposedBurger<M> = M extends '🥩'
  ? ClassicBurger
  : M extends '🍖'
    ? PeachBreeze
    : ChickenBurger;

const composeBurgerBasedOnMeat3 = <M extends string>(meat: M): ComposedBurger<M> => {
  if (meat === '🥩') {
    const classicBurger: ClassicBurger = {
      meat: '🥩',
      numberOfSlices: 1,
    };

    return classicBurger as ComposedBurger<M>;
  }

  if (meat === '🍖') {
    const peachBreeze: PeachBreeze = {
      meat: '🍖',
      numberOfSlices: 2,
    };

    return peachBreeze as ComposedBurger<M>;
  }

  const chickenBurger: ChickenBurger = {
    meat: '🍗',
    numberOfSlices: 1,
  };

  return chickenBurger as ComposedBurger<M>;
};

const b31 = composeBurgerBasedOnMeat3('🥩');
const b32 = composeBurgerBasedOnMeat3('🍖');
const b33 = composeBurgerBasedOnMeat3('qq');

/** overloads */
function composeBurgerBasedOnMeat4(beef: '🥩'): ClassicBurger;
function composeBurgerBasedOnMeat4(pork: '🍖'): PeachBreeze;
function composeBurgerBasedOnMeat4(meat: string): ChickenBurger;
function composeBurgerBasedOnMeat4(meat: string): ClassicBurger | PeachBreeze | ChickenBurger {
  if (meat === '🥩') {
    const classicBurger: ClassicBurger = {
      meat: '🥩',
      numberOfSlices: 1,
    };

    return classicBurger;
  }

  if (meat === '🍖') {
    const peachBreeze: PeachBreeze = {
      meat: '🍖',
      numberOfSlices: 2,
    };

    return peachBreeze;
  }

  const chickenBurger: ChickenBurger = {
    meat: '🍗',
    numberOfSlices: 1,
  };

  return chickenBurger;
}

const b41 = composeBurgerBasedOnMeat4('🥩');
const b42 = composeBurgerBasedOnMeat4('🍖');
const b43 = composeBurgerBasedOnMeat4('qq');

export {};
