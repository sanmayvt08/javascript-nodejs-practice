const vehicle = {
  // Add your properties
  speed: 60,
  temperature: 75,
  batteryLevel: 50,
};

function checkTemperature(data) {
  // Write your condition here
  return data.temperature > 70;
}

console.log(checkTemperature(vehicle));
