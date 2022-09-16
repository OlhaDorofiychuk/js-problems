const speedMilesPerHour = 80
const timeInMinutes = 65
const speedPerMinute = speedMilesPerHour / 60
let roundedUpDistance = Math.round(speedPerMinute * timeInMinutes)
console.log(roundedUpDistance)