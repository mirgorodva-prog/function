function printEvenNumbers(n) {
    let evenNumbers = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    
    
    console.log(`Парні числа до ${n}:`, evenNumbers);
    return evenNumbers;
}


document.getElementById('genBtn').addEventListener('click', function() {
    let nVal = document.getElementById('nInput').value;
    let container = document.getElementById('evenNumbersContainer');
    
    if (nVal === "") {
        container.textContent = "Будь ласка, введіть n.";
        return;
    }
    
    let n = Number(nVal);
    if (n < 2) {
        container.textContent = "Немає парних чисел у цьому діапазоні.";
        return;
    }
    
    let resultArr = printEvenNumbers(n);
    container.textContent = resultArr.join(', ');
});