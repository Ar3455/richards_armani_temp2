let temp = input.temperature(TemperatureUnit.Fahrenheit)
if (temp >= 70) {
    light.setPixelColor(4, light.rgb(255, 0, 0))
} else if (temp < 70 || temp >= 40) {
    light.setPixelColor(4, light.rgb(0, 255, 0))
} else {
    light.setPixelColor(4, light.rgb(0, 0, 255))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 70 || input.temperature(TemperatureUnit.Fahrenheit) >= 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}

