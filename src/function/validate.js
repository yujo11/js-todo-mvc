export function isUpdatedReferenceValue(prev, curr) {
  const prevData = JSON.stringify(prev);
  const currentData = JSON.stringify(curr);

  return prevData !== currentData;
}
