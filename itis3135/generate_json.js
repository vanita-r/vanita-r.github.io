document.addEventListener('DOMContentLoaded', () => {

    const jsonButton = document.getElementById('generate_json');

    jsonButton.addEventListener('click', (event) => {
        
        // Prevent the form from trying to submit to a server
        event.preventDefault(); 


        const formData = {};

        formData.firstName = document.getElementById('first-name').value;
        formData.lastName = document.getElementById('last-name').value;
        formData.divider = document.getElementById('divider').value;
        formData.mascotAdjective = document.getElementById('mascot-adj').value;
        formData.mascotAnimal = document.getElementById('mascot-animal').value;
        
        formData.image = document.querySelector('#loadImage img').getAttribute('src');
        formData.imageCaption = document.getElementById('pic-caption').value;
        
        formData.personalStatement = document.getElementById('personal-stat').value;
        formData.personalBackground = document.getElementById('personal-bg').value;
        formData.professionalBackground = document.getElementById('prof-bg').value;
        formData.academicBackground = document.getElementById('academic-bg').value;
        formData.primaryComputer = document.getElementById('primary-cp').value;


        formData.courses = [];


        formData.courses.push({
            department: document.getElementById('department1').value,
            number: document.getElementById('number1').value,
            name: document.getElementById('name1').value,
            reason: document.getElementById('reason1').value
        });

        formData.courses.push({
            department: document.getElementById('department2').value,
            number: document.getElementById('number2').value,
            name: document.getElementById('name2').value,
            reason: document.getElementById('reason2').value
        });
        
        formData.courses.push({
            department: document.getElementById('department3').value,
            number: document.getElementById('number3').value,
            name: document.getElementById('name3').value,
            reason: document.getElementById('reason3').value
        });

        formData.courses.push({
            department: document.getElementById('department4').value,
            number: document.getElementById('number4').value,
            name: document.getElementById('name4').value,
            reason: document.getElementById('reason4').value
        });

        formData.courses.push({
            department: document.getElementById('department5').value,
            number: document.getElementById('number5').value,
            name: document.getElementById('name5').value,
            reason: document.getElementById('reason5').value
        });

        formData.interesting = document.getElementById('interesting').value;
        formData.quote = document.getElementById('quote').value;
        
        formData["quote-author"] = document.getElementById('quote-author').value;

        formData.links = [];

        formData.links.push({
            name: "CLT Webpage",
            href: document.getElementById('link1').value
        });
        
        formData.links.push({
            name: "Github",
            href: document.getElementById('link2').value
        });

        formData.links.push({
            name: "GitHub Pages",
            href: document.getElementById('link3').value
        });

        formData.links.push({
            name: "GitHub.io",
            href: document.getElementById('link4').value
        });

        formData.links.push({
            name: "LinkedIn",
            href: document.getElementById('link5').value
        });

        //Convert the entire JavaScript object into a JSON text string
        const jsonString = JSON.stringify(formData, null, 2);

        const formContainer = document.getElementById('form-container');
        const resultsContainer = document.getElementById('intro-results');

        const pre = document.createElement('pre');
        const code = document.createElement('code');
        
        //class for highlight.js
        code.className = 'language-json'; 
        
        // Put the JSON string inside the <code> element
        code.textContent = jsonString;

        // Put the <code> element inside the <pre> element
        pre.appendChild(code);

        // Clear any old results and add the new <pre> block
        resultsContainer.innerHTML = ''; 
        resultsContainer.appendChild(pre);
        hljs.highlightElement(code);
        
        // Hide the form
        formContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        document.getElementById('form-heading3').style.display = 'none';
        document.getElementById('form-heading2').textContent = 'Introduction HTML';
    });
});