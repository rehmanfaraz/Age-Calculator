function calculateAge() {
    const inputDate = document.getElementById('inputDate').value;
    const resultElement = document.getElementById('result');

    if (!inputDate) {
        resultElement.innerHTML = 'Please select a valid date!';
        resultElement.style.color = 'red';
        return;
    }

    const birthDate = new Date(inputDate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultElement.innerHTML = `You are ${age} years old.`;
    resultElement.style.color = 'Blue';
}
