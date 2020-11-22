temp = input.temperature(TemperatureUnit.FAHRENHEIT)

if temp >= 70:
    light.set_pixel_color(4, light.rgb(255,0,0))

elif temp < 70 or temp >= 40:
    light.set_pixel_color(4, light.rgb(0, 255, 0))
else: 
    light.set_pixel_color(4, light.rgb(0, 0, 255))
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 70:
        light.set_all(light.rgb(255,0,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 70 or input.temperature(TemperatureUnit.FAHRENHEIT) >= 40:
        light.set_all(light.rgb(0, 255, 0))
    else:
        light.set_all(light.rgb(0, 0, 255))