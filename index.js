const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver};  //make a copy of original object

  NewDriver[key] = value;  //add new key value pair

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(someDriver, someKey, someValue) {
  someDriver[someKey] = someValue;

  return someDriver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver['name'];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  driver.pop[key];
  driver;
}
