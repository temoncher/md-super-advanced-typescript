/** Common usecase for typeguards */
type ServerError = {
  code: number;
  message: string;
};

const isServerError = (error: any): error is ServerError => {
  if (!error) return false;

  const codeIsCorrect = typeof error.code === 'number';
  const messageIsCorrect = typeof error.message === 'string';

  return codeIsCorrect && messageIsCorrect;
};

const validateInput = (something: string | ServerError): void => {
  if (isServerError(something)) {
    console.error(`Error code: ${something.code}, message: ${something.message}`);
  } else {
    console.log('something is not an server error');
  }
};

// type Assertion<T> = (error) => asserts error is T;

// eslint-disable-next-line func-style
function assertServerError(error: any): asserts error is ServerError {
  if (!error) throw Error('Passed value is falsy');

  if (typeof error.code !== 'number') throw Error('Error code is not a number');

  if (typeof error.message !== 'string') throw Error('Error message is not a string');
}

const validateWithAssertion = (something: any): void => {
  assertServerError(something);

  console.error(`Error code: ${something.code}, message: ${something.message}`);
};

/** Enum type guards */

/* eslint-disable arrow-body-style */
enum BurgerName {
  CLASSIC = 'classic',
  PEACH_BREEZE = 'peach breeze',
  PIG_N_EGG = "pig 'N egg",
  BITBURGER = 'bitburger',
}

const isBurgerName = (burgerName: string): burgerName is BurgerName => {
  return Object.values(BurgerName).includes(burgerName as BurgerName);
};

export {};
