// Only change code below this line
class Thermostat{
  constructor(tempinfarenheit){
    this.tempinfarenheit=tempinfarenheit;
  }
  //getter
  get temperature(){ //in farenheit
     return  (5/9 * (this.tempinfarenheit - 32));
  }
  set temperature(celcius){//in celcius
     return  this.tempinfarenheit = celcius * 9.0 / 5 + 32
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius