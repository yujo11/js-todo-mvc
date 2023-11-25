export function isReferenceValueUpdated({ prev, curr }) {
  const prevData = JSON.stringify(prev);
  const currentData = JSON.stringify(curr);

  if (prevData === currentData) {
    return false;
  }
  return true;
}

export function isPrimitiveValueUpdated({ prev, curr }) {
  if (prev === curr) {
    return false;
  }
  return true;
}
