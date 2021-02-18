export const breakpoints = {
  mobile: 600, // px
  tablet: 960 // px
};

export const keysOf = <T extends object>(object: T) => Object.keys(object) as (keyof typeof object)[];

export const from = keysOf(breakpoints).reduce((acc, key) => {
  acc[key] = `@media screen and (min-width: ${breakpoints[key]}px)`;
  return acc;
}, {} as { [key in keyof typeof breakpoints]: string });