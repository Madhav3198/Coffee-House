import {
    espressMilk,
    espressMPrice,
    espressMilk_Add,
    espressMilk_Qty,
    epsmBill,
    espressCream,
    espressCPrice,
    espressCream_Add,
    espressCream_Qty,
    epscBill,
    espressLatte,
    espressLPrice,
    espressLatte_Add,
    espressLatte_Qty,
    epslBill,
    cappucinoCream,
    cappucinoCPrice,
    cappucinoCream_Add,
    cappucinoCream_Qty,
    capcBill,
    cappucinoMilk,
    cappucinoMPrice,
    cappucinoMilk_Add,
    cappucinoMilk_Qty,
    capmBill,
    cappucinoLatte,
    cappucinoLPrice,
    cappucinoLatte_Add,
    cappucinoLatte_Qty,
    caplBill,
    latteMilk,
    latteMPrice,
    latteMilk_Add,
    latteMilk_Qty,
    latmBill,
    latteCream,
    latteCPrice,
    latteCream_Add,
    latteCream_Qty,
    latcBill,
    latteLatte,
    latteLPrice,
    latteLatte_Add,
    latteLatte_Qty,
    latlBill
} from './variables.js'

let data = [],
    data_price = [],
    Sum, Sum_cgst, Sum_sgst, Total


class CoffeeOrder {
    constructor(coffee, price, add, qty, bill) {
        this.cof = coffee;
        this.pri = price;
        this.button = add;
        this.qty = qty;
        this.bill = bill;
    }
    AddCoffee() {
        this.button.addEventListener('click', () => {
            this.bill = "<tr><td>" + this.cof + "</td><td>₹" + this.pri + "</td><td>" + this.qty.value + "</td><td>₹" + this.pri * this.qty.value + "</td></tr>"
            data.push(this.bill)
            data_price.push(this.pri * this.qty.value)
            showBill()
        })
    }
}
// Show Bill Function 
function showBill() {
    let sum = 0;
    document.getElementById('bill-1').innerHTML = data.join('')
    for (let i = 0; i < data_price.length; i++) {
        sum += data_price[i];
    }
    Sum = document.getElementById('amount').innerHTML = sum;
    Sum_sgst = document.getElementById('sgst').innerHTML = sum * 0.025;
    Sum_cgst = document.getElementById('cgst').innerHTML = sum * 0.025;
    Total = document.getElementById('total').innerHTML = Sum + Sum_cgst + Sum_sgst
}

// Confirm Order Function
document.getElementById('confirm').addEventListener('click',()=>{
    data = []
    data_price = []
    document.getElementById('bill-1').innerHTML = data_price
    document.getElementById('amount').innerHTML = 0
    document.getElementById('sgst').innerHTML = 0;
    document.getElementById('cgst').innerHTML = 0;
    document.getElementById('total').innerHTML = 0;
    document.getElementById('bill-1').innerHTML = data
    alert("***Thankyou for Ordering***")

})


const EspressoMilk = new CoffeeOrder(espressMilk, espressMPrice, espressMilk_Add, espressMilk_Qty, epsmBill)
const EspressoCream = new CoffeeOrder(espressCream,espressCPrice,espressCream_Add,espressCream_Qty,epscBill)
const EspressoLatte = new CoffeeOrder(espressLatte,espressLPrice,espressLatte_Add,espressLatte_Qty,epscBill)
const CappuccinoMilk = new CoffeeOrder(cappucinoMilk,cappucinoMPrice,cappucinoMilk_Add,cappucinoMilk_Qty,capmBill)
const CappuccinoCream = new CoffeeOrder(cappucinoCream,cappucinoCPrice,cappucinoCream_Add,cappucinoCream_Qty,capcBill)
const CappuccinoLatte = new CoffeeOrder(cappucinoLatte,cappucinoLPrice,cappucinoLatte_Add,cappucinoLatte_Qty,caplBill)
const LatteMilk = new CoffeeOrder(latteMilk,latteMPrice,latteMilk_Add,latteMilk_Qty,latmBill)
const LatteCream = new CoffeeOrder(latteCream,latteCPrice,latteCream_Add,latteCream_Qty,latcBill)
const LatteLatte = new CoffeeOrder(latteLatte,latteLPrice,latteLatte_Add,latteLatte_Qty,latlBill)

EspressoMilk.AddCoffee()
EspressoCream.AddCoffee()
EspressoLatte.AddCoffee()
CappuccinoMilk.AddCoffee()
CappuccinoCream.AddCoffee()
CappuccinoLatte.AddCoffee()
LatteMilk.AddCoffee()
LatteCream.AddCoffee()
LatteLatte.AddCoffee()
