let ledger = [
    {
      id: '001',
      checked: false,
      month: 1,
      day: 1,
      year: 2018,
      amount: 1000,
      label: 'Paycheck'
    },
    {
      id: '002',
      checked: false,
      month: 1,
      day: 2,
      year: 2018,
      amount: -400,
      label: 'Rent'
    },
    {
      id: '003',
      checked: false,
      month: 1,
      day: 4,
      year: 2018,
      amount: -75,
      label: 'MasterCard'
    },
    {
      id: '004',
      checked: false,
      month: 2,
      day: 3,
      year: 2018,
      amount: 1000,
      label: 'Paycheck'
    },
    {
      id: '004',
      checked: false,
      month: 2,
      day: 4,
      year: 2018,
      amount: -80,
      label: 'Electric'
    },
    {
      id: '004',
      checked: false,
      month: 2,
      day: 10,
      year: 2018,
      amount: -105,
      label: 'Visa'
    }
  ]

  function monthlySummary(ledger) {

    function createMonthly() {
      let monthly = {}
      monthly.startingBalance = 0;
      monthly.month = 0;
      monthly.year = 0;
      monthly.income = 0;
      monthly.expenses = 0;
      monthly.endingBalance = 0;
      return monthly;
    }

    let budgetSummaries = [];
    let monthlyBudget = createMonthly();
    let endingBalance = 0;

    currentMonth = ledger[0].month;
    currentYear = ledger[0].year;
    monthlyBudget.month = currentMonth;
    monthlyBudget.year = currentYear;

    for (let i=0; i<ledger.length; i++) {
      if (ledger[i].month !== currentMonth) {
        monthlyBudget.endingBalance = monthlyBudget.startingBalance + monthlyBudget.income + monthlyBudget.expenses;
        budgetSummaries.push(monthlyBudget);
        endingBalance = monthlyBudget.endingBalance;
        monthlyBudget = createMonthly();
        monthlyBudget.startingBalance = endingBalance;
        monthlyBudget.month = ledger[i].month;
        monthlyBudget.year = ledger[i].year;
        currentMonth = monthlyBudget.month;
      }
      if (ledger[i].amount > 0) {
        monthlyBudget.income += ledger[i].amount;
      } else {
        monthlyBudget.expenses += ledger[i].amount;
      }
    }

    monthlyBudget.endingBalance = monthlyBudget.startingBalance + monthlyBudget.income + monthlyBudget.expenses;
    budgetSummaries.push(monthlyBudget);
    
    return budgetSummaries;
  }

