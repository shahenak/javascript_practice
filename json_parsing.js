
var data = {
  "account_number": "6301101512",
  "client": {
    "login": "vb513509",
    "name": "Peter Graham",
    "email": "peter@wealthsimple.com",
    "approved_on": "2014-10-18",
    "penny_test_received_on": "2014-10-15"
  },
  "activities": [
    {
      "date": "2014-12-04",
      "currency": "CAD",
      "transaction_type": "EFT",
      "net_amount": "3445.57",
      "symbol": null,
      "quantity": "0.0",
      "price": "0.0"
    },
    {
      "date": "2014-12-04",
      "currency": "CAD",
      "transaction_type": "EFT",
      "net_amount": "4281.35",
      "symbol": null,
      "quantity": "0.0",
      "price": "0.0"
    },
    {
      "date": "2014-12-16",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-780.52",
      "symbol": "XIC",
      "quantity": "35.0",
      "price": "22.3007"
    },
    {
      "date": "2014-12-16",
      "currency": "USD",
      "transaction_type": "BUY",
      "net_amount": "-967.13",
      "symbol": "IEFA",
      "quantity": "17.0",
      "price": "56.89"
    },
    {
      "date": "2014-12-16",
      "currency": "USD",
      "transaction_type": "BUY",
      "net_amount": "-662.9",
      "symbol": "IEMG",
      "quantity": "14.0",
      "price": "47.35"
    },
    {
      "date": "2014-12-16",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-1105.65",
      "symbol": "PDF",
      "quantity": "45.0",
      "price": "24.57"
    },
    {
      "date": "2014-12-16",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-1182.0",
      "symbol": "PBD",
      "quantity": "60.0",
      "price": "19.7"
    },
    {
      "date": "2014-12-16",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-749.99",
      "symbol": "PHE.B",
      "quantity": "37.0",
      "price": "20.27"
    },
    {
      "date": "2014-12-16",
      "currency": "USD",
      "transaction_type": "BUY",
      "net_amount": "-952.83",
      "symbol": "VTI",
      "quantity": "9.0",
      "price": "105.87"
    },
    {
      "date": "2014-12-16",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-782.85",
      "symbol": "PHR",
      "quantity": "38.0",
      "price": "20.601326"
    },
    {
      "date": "2014-12-15",
      "currency": "CAD",
      "transaction_type": "ADJ",
      "net_amount": "-2986.23",
      "symbol": null,
      "quantity": "0.0",
      "price": "0.0"
    },
    {
      "date": "2014-12-15",
      "currency": "USD",
      "transaction_type": "ADJ",
      "net_amount": "2583.0",
      "symbol": null,
      "quantity": "0.0",
      "price": "0.0"
    },
    {
      "date": "2014-12-22",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-24.49",
      "symbol": "PDF",
      "quantity": "1.0",
      "price": "24.49"
    },
    {
      "date": "2014-12-17",
      "currency": "CAD",
      "transaction_type": "EFT",
      "net_amount": "3248.46",
      "symbol": null,
      "quantity": "0.0",
      "price": "0.0"
    },
    {
      "date": "2014-12-29",
      "currency": "USD",
      "transaction_type": "BUY",
      "net_amount": "-427.8",
      "symbol": "VTI",
      "quantity": "4.0",
      "price": "106.95"
    },
    {
      "date": "2014-12-29",
      "currency": "USD",
      "transaction_type": "BUY",
      "net_amount": "-449.04",
      "symbol": "IEFA",
      "quantity": "8.0",
      "price": "56.13"
    },
    {
      "date": "2014-12-29",
      "currency": "USD",
      "transaction_type": "BUY",
      "net_amount": "-279.16",
      "symbol": "IEMG",
      "quantity": "6.0",
      "price": "46.5278"
    },
    {
      "date": "2014-12-30",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-503.29",
      "symbol": "PDF",
      "quantity": "20.0",
      "price": "25.1645"
    },
    {
      "date": "2014-12-30",
      "currency": "CAD",
      "transaction_type": "BUY",
      "net_amount": "-456.78",
      "symbol": "PBD",
      "quantity": "23.0",
      "price": "19.86"
    }
  ]
};


//Attempt to solve with JS in order to become more familiar with parsing json obj
function sortObj(data) {
  //1. initialize empty arrays for each account type
  var buyArray = [];
  var eftArray = [];
  var adjArray = [];
  var count = 0;
  //access activities list for particular account holder
  var activitiesList = data.activities;
  //2. loop through json objects
  for (var i = 0; i < activitiesList.length - 1; i++){
    //3. push objects with trans type BUY/EFT/ADJ into empty array
    if (activitiesList[i].transaction_type == "BUY"){
      buyArray.push(activitiesList[i]);
      count++;
    } else if (activitiesList[i].transaction_type == "EFT"){
      eftArray.push(activitiesList[i]);
       count++;
    } else if (activitiesList[i].transaction_type == "ADJ"){
      adjArray.push(activitiesList[i]);
      count++;
    }
  }

  separateDate(buyArray);
  separateDate(eftArray);
  separateDate(adjArray);

}

  // 4. print desired output for each array type
  function separateDate(array){
    var myMap = new Map();
    for (var i = 0; i < array.length; i++){
      if (myMap.has(array[i].date) == false){
          myMap.set(array[i].date, [array[i]]);
      } else {
         var duplicate = myMap.get(array[i].date);
          duplicate.push(array[i]);
          myMap.set(array[i].date, duplicate);
      }
    }
  printArr(myMap);

}

function printArr(myMap){
  var keyArr = [];
  myMap.forEach(function(value, key, myMap){
    keyArr.push(key);
  });
  var sorted = keyArr.sort();
  for (var i=0; i < sorted.length; i++){
    var results = myMap.get(sorted[i]);
    var count = results.length;
    if (results[0].transaction_type == "BUY"){
      console.log(sorted[i] + " We bought " + count + " asset(s) for you");
      for (var j=0; j < results.length; j++){
        console.log("Bought " + results[j].quantity + " share(s) of " +                         results[j].symbol + " at " + results[j].price + "/share");
        count++;

      }
    } else if (results[0].transaction_type == "ADJ"){
      console.log(sorted[i]);
      for (var j=0; j < results.length; j++){
        if (results[j].currency == "USD"){
          console.log("We converted " + results[j].net_amount + " " + results[j].currency + " to " + results[j].net_amount * 1.5 + " " + results[j].currency);
        } else {
          console.log("We converted " + results[j].net_amount + " " + results[j].currency +  " to " + results[j].net_amount + " " + results[j].currency);
        }
      }
    } if (results[0].transaction_type == "EFT"){
      var countEFT = results.length;
      console.log(sorted[i] + " We recieved your " + countEFT + " deposit(s)");
      for (var j=0; j < results.length; j++){
        console.log("$" + results[j].net_amount + " " + results[j].currency);
      }
    }
    console.log("***************************");
  }
}


console.log(sortObj(data));


//Sample output:  Bought 37 share(s) of PHE.B at $52.98/share
