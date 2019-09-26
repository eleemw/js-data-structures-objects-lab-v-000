const driver = {};
const someDriver = { someKey: "someValue" };

function updateDriverWithKeyAndValue(someDriver, someKey, someValue) {
  const newDriver = { ...someDriver};  //make a copy of original object

  newDriver[someKey] = someValue;  //add new key value pair

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(someDriver, someKey, someValue) {
  someDriver[someKey] = someValue;

  return someDriver;
}

function deleteFromDriverByKey(driver, key) {

  const newDriver = Object.assign({}, driver);

  delete newDriver['name'];

  newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  driver.pop[key];
  driver;
}
