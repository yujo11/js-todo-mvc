export function isUpdatedReferenceValue(prev, curr) {
  const prevData = JSON.stringify(prev);
  const currentData = JSON.stringify(curr);

  if (prevData === currentData) {
    return false;
  }
  return true;
}

export function isUpdatedPrimitiveValue(prev, curr) {
  if (prev === curr) {
    return false;
  }
  return true;
}
