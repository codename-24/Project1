document.getElementById('addForm').addEventListener('submit', addExpense);
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e){
    e.preventDefault();
    var amount = document.getElementById('amount').value;
    var dropdown = document.getElementById('dropdown-names').value;
    var description = document.getElementById('description').value;
    const expense = {
        amount, 
        dropdown, 
        description,
        id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    }
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    document.getElementById('addForm').reset();
    showExpenses();
}

    const showExpenses = () => {

        const expenseTable = document.getElementById('expenseTable');
    
        expenseTable.innerHTML = '';
    
        for(let i = 0; i < expenses.length; i++){
            expenseTable.innerHTML += `
                <tr>
                    <td>${expenses[i].amount}</td><span></span>
                    <td>${expenses[i].dropdown}</td><span></span>
                    <td>${expenses[i].description}</td><span></span>
                    <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})"><button>
                    Delete</button></td>
                    <td><a class="editButton" onclick="editExpense(${expenses[i].id})"><button>
                    Edit</button></td>
                        
                </tr>
            `;
        }
    }
    const deleteExpense = (id) => {
        for(let i = 0; i < expenses.length; i++){
            if(expenses[i].id == id){
                expenses.splice(i, 1);
            }
        }
        localStorage.setItem('expenses', JSON.stringify(expenses));
        showExpenses();
    }
  
    showExpenses();
    const editExpense = (id) => {
        for(let i = 0; i < expenses.length; i++){
            if(expenses[i].id == id){
                expenses.splice(i, 1);
            }
        }
        localStorage.setItem('expenses', JSON.stringify(expenses));
        showExpenses();
    }
    
    showExpenses();


