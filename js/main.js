
document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = document.getElementById("income-input");
    const incomeMoney = Number(income.value);

    const food = document.getElementById("food-input");
    const foodCost = Number(food.value);
    const rent = document.getElementById("rent-input");
    const rentCost = Number(rent.value);
    const cloth = document.getElementById("cloth-input");
    const clothCost = Number(cloth.value);

    const expense = document.getElementById("total-expense");
    let totalExpense = Number(expense.innerText);
    totalExpense = foodCost + rentCost + clothCost;
    expense.innerText = totalExpense

    const balance = document.getElementById("balance");
    let totalBalance = Number(balance.innerText);
    totalBalance = incomeMoney - totalExpense;
    balance.innerText = totalBalance;

})

document.getElementById("save-btn").addEventListener("click", function(){
    const income = document.getElementById("income-input");
    const incomeMoney = Number(income.value);

    const saving = document.getElementById("save-input");
    const savingTotal = Number(saving.value);
    const balance = document.getElementById("balance");
    const totalBalance = Number(balance.innerText);
    

    const savingMoney = (incomeMoney * savingTotal) / 100;
    const remainingBalance = totalBalance - savingMoney; 
    
    document.getElementById("saving-amount").innerText = savingMoney;
    document.getElementById("remaining-balance").innerText = remainingBalance;
    
})