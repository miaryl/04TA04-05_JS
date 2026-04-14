

const checkNumber = () => {
    let input = document.getElementById("numInput").value;
    let num = parseInt(input);

    if (Number.isNaN(num)) {
        alert("Please enter a valid NUMBER!!");
        return;

    }
    
    let num_digit = input.length;
    let sum = 0;



    for (let i = 0; i < num_digit; i++) {
        let digit = Number(input[i]);
        sum += Math.pow(digit, num_digit);
    }


    const resultText = (sum === num) ? `Yes! ${input} is a Narcissistic Number!` : `Nope:/ ${input} is NOT a Narcissistic Number...`;

    document.getElementById("result").textContent = resultText;

    document.getElementById("numInput").value = "";
};


document.getElementById("btn").addEventListener("click", checkNumber);