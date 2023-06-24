const form = document.getElementById('questionnaire');
const resultElement = document.getElementById('result');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const q1 = parseInt(form.elements['q1'].value);
	const q2 = parseInt(form.elements['q2'].value);
    const q3 = parseInt(form.elements['q3'].value);
	const q4 = parseInt(form.elements['q4'].value);
    const q5 = parseInt(form.elements['q5'].value);
    const q6 = parseInt(form.elements['q6'].value);
    const q7 = parseInt(form.elements['q7'].value);
    const q8 = parseInt(form.elements['q8'].value); 
    const q9 = parseInt(form.elements['q9'].value);
    const q10 = parseInt(form.elements['q10'].value);

	const total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10;

	if (total > 20) {
		resultElement.innerText = 'You are in danger.';
		resultElement.setAttribute('id','danger');
        

        
	} else {
		resultElement.innerText = 'You are safe.';
		resultElement.setAttribute('id','safe');
        
	}

	form.style.display = 'none';
	fadeIn(resultElement);

    function fadeIn(element) {
        element.style.display = 'block';
        const opacity = parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
    
        let currentOpacity = 0;
        const intervalId = setInterval(function() {
            currentOpacity += 0.1;
            element.style.opacity = currentOpacity;
    
            if (currentOpacity >= opacity) {
                clearInterval(intervalId);
            }
        }, 50);
    }

});

