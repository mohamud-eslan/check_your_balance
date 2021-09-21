document.getElementById("submit").onclick = ()=>{
    const salary = document.getElementById("salary").value;
    const fuel = document.getElementById("fuel").value;
    const food = document.getElementById("food").value;
    const rent = document.getElementById("rent").value;
    const entertainment = document.getElementById("entertainment").value;

    const result = Number(salary)-Number(rent)-Number(food)-Number(fuel)-Number(entertainment);
    const tax = 10/100;
    const subTax = Number(salary) * tax;
    document.getElementById("output").innerHTML = `hi mohamud your balance is ${result} and your tax is ${subTax.toFixed(2)}`};