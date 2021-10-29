const tempCalc = document.getElementById('tempCalc');
tempCalc.onsubmit = function (){

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp)
    const tempSelected = document.getElementById('temp_diff'); //select celcius or fahrenheit:
 const valTemp = temp_diff.options[tempSelected.selectedIndex].value;  // set the index value

 const celToFah = (cel) => {
    let fahrenheit =  Math.round((cel * 9/5) + 32);
    return fahrenheit;
 }

    const fahToCel = (fah) => {
        let celcius =  Math.round((fah  - 32) * 5/9);
        return celcius;
    }

 let result;

 if (valTemp == 'cel'){
     result = celToFah(numberTemp);
     document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;
 }else {
     result = fahToCel(numberTemp);
     document.getElementById('resultContainer').innerHTML= `= ${result}°Celcius`;
 }
    return false;
}