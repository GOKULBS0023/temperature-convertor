function comptemp(event){
    var currentValue= +event.target.value;

    switch (event.target.name) {
        case "Celcius":
            $("#kelvin").val((currentValue + 273.15).toFixed(2));
            $("#fahrenheit").val((currentValue * 1.8  + 32).toFixed(2));
            break;
        case "Fahrenheit":
            $("#kelvin").val(((currentValue -32)/1.8 +273.15).toFixed(2));
            $("#celcius").val(((currentValue -32)/1.8).toFixed(2));
        break;
        case "Kelvin":
            $("#fahrenheit").val(((currentValue -273.15)*1.8 + 32).toFixed(2));
            $("#celcius").val((currentValue - 273.15).toFixed(2));
        break;
        default:
            break;
    }
}