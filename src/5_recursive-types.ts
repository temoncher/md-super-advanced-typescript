/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

/** React node example */
type ReactNode = {
  // ...
  children: ReactNode[];
  // ...
};

/** JSON example */
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const exampleStatusJSON: Json = {
  available: true,
  username: 'Jean-loup',
  room: {
    name: 'Highcrest',
    // Cannot add functions into the Json type
    // update: () => {}
  },
};

export {};
