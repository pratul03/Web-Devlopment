/** You are building a wether application. Write JavaScript
program that takes the current temperature as input and
uses conditional(ternary) operator to determine and print
the weather condition. If the temperature is above 30
degrees C, the condition is “Hot”; otherwise, it is
“moderate” */

function weatherTemperature(temperature) {
    const temp = (temperature>"30C")?"Hot":"Moderate";
    console.log(temp)
}

weatherTemperature("20C")
weatherTemperature("31C")