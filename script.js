function csrTravelCreditChecker() {
  let travelCreditUsage = 0;
  let tr = document.querySelectorAll('#creditCardTransTable')[0].querySelectorAll('tr');

  tr.forEach(row => {
    let foundTravelCredit = false;
    row.querySelectorAll('.xs-overflow').forEach(description => {
      if (description.innerHTML === 'TRAVEL CREDIT $300/YEAR') {
        foundTravelCredit = true;
      }
    });

    if (foundTravelCredit) {
      row.querySelectorAll('.NUMSTR').forEach(dollars => {
        travelCreditUsage += Number(dollars.innerHTML.replace(/[^0-9\.]+/g, ''));
      });
    }
  });

  let roundedTravelCredit = Math.round(travelCreditUsage * 100)/100;
  return roundedTravelCredit;
}

console.log(`%c You have used $${csrTravelCreditChecker()} so far.`, 'font-size:20px');
