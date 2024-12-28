document.getElementById('mcqForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  

    // Get user input  
    const question = document.getElementById('question').value;  
    const options = document.getElementById('options').value.split(',').map(option => option.trim());  
    const answer = document.getElementById('answer').value;  

    // Generate MCQ HTML  
    let mcqHtml = `<strong>${question}</strong><br>`;  
    options.forEach(option => {  
        mcqHtml += `<input type="radio" name="mcqAnswer" value="${option}"> ${option}<br>`;  
    });  

    // Add feedback on correct answer  
    mcqHtml += `<button onclick="checkAnswer('${answer}')">Submit Answer</button>`;  
    
    // Display output  
    document.getElementById('output').innerHTML = mcqHtml;  
});  

// Function to check the answer  
function checkAnswer(correctAnswer) {  
    const selected = document.querySelector('input[name="mcqAnswer"]:checked');  
    if (selected) {  
        const userAnswer = selected.value;  
        if (userAnswer === correctAnswer) {  
            alert('Correct Answer!');  
        } else {  
            alert('Wrong Answer. The correct answer is: ' + correctAnswer);  
        }  
    } else {  
        alert('Please select an answer.');  
    }  
}