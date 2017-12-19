function theBeatlesPlay(name, instrument) {
  var newArray = []
  for (let i = 0; i < name.length; i++) {
    newArray.push(`${name[i]} plays ${instrument[i]}`)
  }
  
  return newArray
}