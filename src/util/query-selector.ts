export const $ = (selector: string, context = document) => {
  return context.querySelector(selector);
};

export const $$ = (selector: string, context = document) => {
  return context.querySelectorAll(selector);
};
