const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver};  //make a copy of original object
  newDriver[key] = value;  //add new key value pair
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);  //make a copy of original object
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
