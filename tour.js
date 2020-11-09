
let ticketInfoArray = [
  {
    id: 0,
    date: '6-19-21',
    city: 'St. Paul, MN',
    venue: 'Xcel Energy Center',
    price:150,
  },
  {
    id: 1,
    date: '6-21-21',
    city: 'Chicago, IL',
    venue: 'United Center',
    price: 150,
  },
  {
    id: 2,
    date: '6-24-21',
    city: 'Detroit,MI',
    venue: 'Little Caesar',
    price: 150,
  },
  {
    id: 3,
    date: '6-25-21',
    city: 'Pittsburg,PA',
    venue: 'PPG Parcel Arena',
    price: 150,
  },  
  ]
  let totalQty = 0;
  let totalCost = 0;
  let finalPrice =0;
  let total1 = 0;
 

 const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
  };

  const studentPrinter = (ticketInfoArray) => {
    let domString = '';
    for (let i = 0; i < ticketInfoArray.length; i++) {
      domString += `<div class="col-2 ">${ticketInfoArray[i].date}</div>`
      domString += `<div class="col-3 ">${ticketInfoArray[i].city}</div>`
      domString += `<div class="col-4 ">${ticketInfoArray[i].venue}</div>`
      domString += `<div class="col-2 ">${ticketInfoArray[i].price}</div>`
      domString += `<input type="number" class="col-1 " id =${ticketInfoArray[i].id} value=0 > `;
      domString += `<br>`;
     }
     
     domString += `<button class="btn btn-light purchase_tab"  onclick="getQty()">Purchase</button>`;

    printToDom('allInfo', domString)
    
    }
  studentPrinter(ticketInfoArray)

  function getQty() {
    const value1 = parseFloat($("#0").val())
    const value2 = parseFloat($("#1").val())
    const value3 = parseFloat($("#2").val())
    const value4 = parseFloat($("#3").val())
    const totalQty = Number(value1) + Number(value2) + Number(value3) + Number(value4);
      finalPrice = totalQty * 150
      total_cost();
    }

  function total_cost () {
    console.log("new final",finalPrice);
  }

function cart_checkout () {
 alert("Thank You for purchasing your tickets for $" + finalPrice + "!")
}


 