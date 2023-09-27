// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel =100;
let weatherStatus = 'clear';
let preparedForLiftOff = 'true';

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log(true)
} else {
    console.log(false)
}
// add logic below to verify all astronauts are ready
if (astronautStatus === 'ready') {
    console.log(true)
} else {
    console.log(false)
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log(true)
} else {
    console.log(false)
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log(true)
} else {
    console.log(false)
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = 100){
    console.log(true)
} else {
    console.log(false)
}
// add logic below to verify the weather status is clear
if (weatherStatus = 'clear'){
    console.log(true)
} else {
    console.log(false)
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCount === false || astronautStatus === false || totalMassKg === false || fuelTempCelsius === false || 
    fuelLevel === false || weatherStatus === false) {
    console.log("Abort mission!")
} else {
    console.log("All systems are a go! Initiating space shuttle launch. \n" + 
    "Date: " + date + "\n" + 
    "Time: " + time + "\n" + 
    "Astronaut Count: " + astronautCount + "\n" +
    "Crew Mass: " + astronautCount + "\n" +
    "Crew Mass: " + crewMassKg + "\n" +
    "Fuel Mass: " + fuelMassKg + "\n" +
    "Shuttle Mass: " + shuttleMassKg + "\n" +
    "Total Mass: " + totalMassKg + "\n" +
    "Fuel Temperature: " + fuelTempCelsius + "°C" + "\n" +
    "Weather Status: " + weatherStatus + "\n" +
    "Have a safe trip!")
}