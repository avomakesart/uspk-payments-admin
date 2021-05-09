export const isEmptyObject = (value: any) => {
  for (var key in value) {
    if (value[key] !== null && value[key] != '') return false;
  }
  return true;
};
