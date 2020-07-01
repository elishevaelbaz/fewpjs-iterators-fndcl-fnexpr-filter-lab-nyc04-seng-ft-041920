function findMatching(driversArr, name){
  return driversArr.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(driversArr, letters){
  const len = letters.length
  return driversArr.filter(driver => {
    return driver.slice(0, len) === letters
  })
}

function matchName(driversArr, string){
  return driversArr.filter(driverObj => {
    return driverObj.name === string
  })
}