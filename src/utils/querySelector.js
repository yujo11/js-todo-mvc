export const $ = (selector, context = document) =>
  context.querySelector(selector);
