let espMilk = document.getElementById('EspMilk').innerText;
let espCream = document.getElementById('EspCream').innerText;
let espLatte = document.getElementById('EspLatte').innerText;
let capMilk = document.getElementById('CapMilk').innerText;
let capCream = document.getElementById('CapCream').innerText;
let capLatte = document.getElementById('CapLatte').innerText;
let latMilk = document.getElementById('LatMilk').innerText;
let latCream = document.getElementById('LatCream').innerText;
let latlat = document.getElementById('LatLat').innerText;



let espMilk_price = document.getElementById('EspMilk_price').innerText.replace('₹', '');
let espCream_price = document.getElementById('EspCream_price').innerText.replace('₹', '');
let espLatte_price = document.getElementById('EspLatte_price').innerText.replace('₹', '');
let capMilk_price = document.getElementById('CapMilk_price').innerText.replace('₹', '');
let capCream_price = document.getElementById('CapCream_price').innerText.replace('₹', '');
let capLatte_price = document.getElementById('CapLatte_price').innerText.replace('₹', '');
let latMilk_price = document.getElementById('LatMilk_price').innerText.replace('₹', '');
let latCream_price = document.getElementById('LatCream_price').innerText.replace('₹', '');
let latlat_price = document.getElementById('LatLat_price').innerText.replace('₹', '');

let button1 = document.getElementById("Add1")
let button2 = document.getElementById("Add2")
let button3 = document.getElementById("Add3")
let button4 = document.getElementById("Add4")
let button5 = document.getElementById("Add5")
let button6 = document.getElementById("Add6")
let button7 = document.getElementById("Add7")
let button8 = document.getElementById("Add8")
let button9 = document.getElementById("Add9")
let epsmBill, epscBill, epslbill, capmBill, capcBill, caplBill, latmBill, latcBill, latlBill, Sum, Sum_cgst, Sum_sgst, Total,
        data = [],
        data_price = [],
        epmty_arr = []
        
button1.addEventListener('click', function () {
        button1.dataset.clicked = "true"
        if (button1.dataset.clicked == "false") {
                epsmBill = ""
                showBill();
        } else {
                let espm_qty = document.querySelector('#EspMilk_Qty').value;
                epsmBill = "<tr><td>" + espMilk + "</td><td>₹" + espMilk_price + "</td><td>" + espm_qty + "</td><td>₹" + espMilk_price * espm_qty + "</td></tr>"
                data.push(epsmBill)
                data_price.push(espMilk_price * espm_qty)
                console.log(data_price)
                showBill();
        }
})
button2.addEventListener('click', function () {
        button2.dataset.clicked = "true"
        if (button2.dataset.clicked == "false") {
                epscBill = ""
                showBill();
        } else {
                let espc_qty = document.querySelector('#EspCream_Qty').value;
                epscBill = "<tr><td>" + espCream + "</td><td>₹" + espCream_price + "</td><td>" + espc_qty + "</td><td>₹" + espCream_price * espc_qty + "</td></tr>"
                data.push(epscBill)
                data_price.push(espCream_price * espc_qty)
                showBill();
        }
})
button3.addEventListener('click', function () {
        button3.dataset.clicked = "true"
        if (button3.dataset.clicked == "false") {
                epslbill = ""
                showBill();
        } else {
                let espl_qty = document.querySelector('#EspLatte_Qty').value;
                epslbill = "<tr><td>" + espLatte + "</td><td>₹" + espLatte_price + "</td><td>" + espl_qty + "</td><td>₹" + espLatte_price * espl_qty + "</td></tr>"
                data.push(epslbill)
                data_price.push(espLatte_price * espl_qty)
                showBill();
        }
})
button4.addEventListener('click', function () {
        button4.dataset.clicked = "true"
        if (button4.dataset.clicked == "false") {
                capmBill = ""
                showBill()
        } else {
                let capm_qty = document.querySelector('#CapMilk_Qty').value;
                capmBill = "<tr><td>" + capMilk + "</td><td>₹" + capMilk_price + "</td><td>" + capm_qty + "</td><td>₹" + capMilk_price * capm_qty + "</td></tr>"
                data.push(capmBill)
                data_price.push(capMilk_price * capm_qty)
                showBill();
        }
})
button5.addEventListener('click', function () {
        button5.dataset.clicked = "true"
        if (button5.dataset.clicked == "false") {
                capcBill = ""
                showBill()
        } else {
                let capc_qty = document.querySelector('#CapCream_Qty').value;
                capcBill = "<tr><td>" + capCream + "</td><td>₹" + capCream_price + "</td><td>" + capc_qty + "</td><td>₹" + capCream_price * capc_qty + "</td></tr>"
                data.push(capcBill)
                data_price.push(capCream_price * capc_qty)
                showBill();
        }
})
button6.addEventListener('click', function () {
        button6.dataset.clicked = "true"
        if (button6.dataset.clicked == "false") {
                caplBill = ""
                showBill()
        } else {
                let capl_qty = document.querySelector('#CapLatte_Qty').value;
                caplBill = "<tr><td>" + capLatte + "</td><td>₹" + capLatte_price + "</td><td>" + capl_qty + "</td><td>₹" + capLatte_price * capl_qty + "</td></tr>"
                data.push(caplBill)
                data_price.push(capLatte_price * capl_qty)
                showBill();
        }
})
button7.addEventListener('click', function () {
        button7.dataset.clicked = "true"
        if (button7.dataset.clicked == "false") {
                latmBill = ""
                showBill();
        } else {
                let latm_qty = document.querySelector('#LatMilk_Qty').value;
                latmBill = "<tr><td>" + latMilk + "</td><td>₹" + latMilk_price + "</td><td>" + latm_qty + "</td><td>₹" + latMilk_price * latm_qty + "</td></tr>"
                data.push(latmBill)
                data_price.push(latMilk_price * latm_qty)
                showBill();
        }
})
button8.addEventListener('click', function () {
        button8.dataset.clicked = "true"
        if (button8.dataset.clicked == "false") {
                latcBill = ""
                showBill();
        } else {
                let latc_qty = document.querySelector('#LatCream_Qty').value;
                latcBill = "<tr><td>" + latCream + "</td><td>₹" + latCream_price + "</td><td>" + latc_qty + "</td><td>₹" + latCream_price * latc_qty + "</td></tr>"
                data.push(latcBill)
                data_price.push(latCream_price * latc_qty)
                showBill();
        }
})
button9.addEventListener('click', function () {
        button9.dataset.clicked = "true"
        if (button9.dataset.clicked == "false") {
                latlBill = ""
                showBill()
        } else {
                let latl_qty = document.querySelector('#LatLat_Qty').value;
                latlBill = "<tr><td>" + latlat + "</td><td>₹" + latlat_price + "</td><td>" + latl_qty + "</td><td>₹" + latlat_price * latl_qty + "</td></tr>"
                data.push(latlBill)
                data_price.push(latlat_price * latl_qty)
                showBill();
        }
})

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

document.getElementById('confirm').addEventListener('click', function () {
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
