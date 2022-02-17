function getInput(){
    const income = document.getElementById("income-input");
    const incomeMoney = Number(income.value);

    return incomeMoney;
}

function getInput2(){
    const balance = document.getElementById("balance");
    let totalBalance = Number(balance.innerText);

    return totalBalance;
}

// for calculate button 
document.getElementById("calculate-btn").addEventListener("click", function(){
    // function call
    const incomeMoney = getInput();

    const food = document.getElementById("food-input");
    const foodCost = Number(food.value);
    const rent = document.getElementById("rent-input");
    const rentCost = Number(rent.value);
    const cloth = document.getElementById("cloth-input");
    const clothCost = Number(cloth.value);


    const expense = document.getElementById("total-expense");
    let totalExpense = Number(expense.innerText);

    // error handling ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    if (incomeMoney < 0 || foodCost < 0 || rentCost < 0 || clothCost < 0) {
        document.getElementById("error-msg").style.display = "block";
        expense.innerText = "";
        balance.innerText = "";
        return;
    }
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    document.getElementById("error-msg").style.display = "none";
    totalExpense = foodCost + rentCost + clothCost;
    expense.innerText = totalExpense;

    // function call 
    let totalBalance = getInput2("balance"); 

    totalBalance = incomeMoney - totalExpense;
    balance.innerText = totalBalance;

    

})


// for save button
document.getElementById("save-btn").addEventListener("click", function(){
    // function call
    const incomeMoney = getInput("income-input");

    const saving = document.getElementById("save-input");
    const savingTotal = Number(saving.value);
    
    // function call 
    let totalBalance = getInput2("balance");

    const savingMoney = (incomeMoney * savingTotal) / 100;
    const remainingBalance = totalBalance - savingMoney; 
    
    document.getElementById("saving-amount").innerText = savingMoney;
    document.getElementById("remaining-balance").innerText = remainingBalance;
    
})
