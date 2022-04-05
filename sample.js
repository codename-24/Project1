document.getElementById('expenseForm').addEventListener('submit',addExpense);
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e){
    e.preventDefault();
    var amount = document.getElementById('amount').value;
    var category = document.getElementById('dropdown').value;
    var description = document.getElementById('description').value;
    const expense={
        amount,
        category,
        description,
        id: expenses.length>0? expenses[expenses.length-1].id+1 :1
    }
    expenses.push(expense);
    localStorage.setItem('expense',JSON.stringify(expenses));
    showExpenses();
}
    const showExpenses = () => {
    const list = document.getElementById('display');
    for(let i=0;i<expenses.length;i++)
    {
        var amt = expenses[i].amount;
        var cat = expenses[i].category;
        var desp = expenses[i].description;
        var sum = amt+'-->'+cat+'-->'+desp;
    }
    const entry = document.createElement('li');
    const sp = document.createElement('span');
    entry.appendChild(sp);
    sp.appendChild(document.createTextNode(sum));
    list.appendChild(entry);

    var removeBtn = document.createElement("input"); 
            removeBtn.type = "button";     
            removeBtn.value = "Remove";
            removeBtn.onclick = remove;
            entry.appendChild(removeBtn);
            list.appendChild(entry);
            var editBtn = document.createElement("input");
            editBtn.type='button';
            editBtn.value='Edit';
            editBtn.onclick = edit;
            entry.appendChild(editBtn);
            list.appendChild(entry);
            var savebtn = document.createElement('input');
            savebtn.type = 'button';
            savebtn.value='save';
            savebtn.onclick = save;
            entry.appendChild(savebtn);
            list.appendChild(entry);
        
      
}
function remove(e) {
    var el = e.target;
    el.parentNode.remove();
}
function edit(e) {
    var button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    const span = li.firstElementChild;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    li.insertBefore(input, span);
    li.removeChild(span);
      
}
function save(e){
        var butn = e.target;
        const li = butn.parentNode;
        const inp = li.firstElementChild;
        const spann = document.createElement('span');
        spann.textcontent= inp.value;
        li.insertBefore(spann,inp);
        

}
