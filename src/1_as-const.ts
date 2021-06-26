/** const arrays */

const burgerNames = ['classic', 'peach breeze', 'pig \'N egg', 'bitburger'];
// `as const` won't compile into any JS int is only a hint for TS compiler
const burgerNamesAsConst = ['classic', 'peach breeze', 'pig \'N egg', 'bitburger'] as const;

const someUnknownBurgerName = burgerNames[0];
const classicBurgerName = burgerNamesAsConst[0];

// works fine
burgerNames.push('chatny');
// errors out, menu is full!
burgerNamesAsConst.push('chatny');

burgerNames.map((burgerName) => burgerName);
// rich type information in iteration functions
burgerNamesAsConst.map((burgerName) => burgerName);

//
const menuPosition = 0 as number;
const someBurgerFromMenu = burgerNamesAsConst[menuPosition];

/** const objects */
const burgerMenu = {
  classic: 'ha-ha classic',
  'peach breeze': '🍑',
  'pig \'N egg': '🍳',
  bitburger: {
    meat: '🥩',
    toppings: '🍆',
  },
};
const constBurgerMenu = {
  classic: 'ha-ha classic',
  'peach breeze': '🍑',
  'pig \'N egg': '🍳',
  bitburger: {
    meat: '🥩',
    toppings: '🍆',
  },
} as const;

const bitBurgerMeat = burgerMenu.bitburger.meat;
const constBitBurgerMeat = constBurgerMenu.bitburger.meat;

// works fine
burgerMenu.classic = 'classic';
// errors out, menu is full!
constBurgerMenu.classic = 'classic';

export {};
