document.addEventListener('DOMContentLoaded', () => {

    const jsonButton = document.getElementById('generate_json');

    jsonButton.addEventListener('click', (event) => {
        
        // Prevent the form from trying to submit to a server
        event.preventDefault(); 

        const formData = {};

        formData.firstName = document.getElementById('first-name').value;
        formData.middleName = document.getElementById('middle-name').value;
        formData.lastName = document.getElementById('last-name').value;
        formData.divider = document.getElementById('divider').value;
        formData.mascotAdjective = document.getElementById('mascot-adj').value;
        formData.mascotAnimal = document.getElementById('mascot-animal').value;
        
        formData.image = document.querySelector('#loadImage img').getAttribute('src');
        formData.imageCaption = document.getElementById('pic-caption').value;
        
        formData.personalStatement = document.getElementById('personal-stat').value;
        formData.personalBackground = document.getElementById('personal-bg').value;
        formData.professionalBackground = document.getElementById('prof-bg').value;
        formData.background = document.getElementById('background-bg').value;
        formData.academicBackground = document.getElementById('academic-bg').value;
        formData.primaryComputer = document.getElementById('primary-cp').value;

        formData.courses = [];
        const departmentInputs = document.querySelectorAll("input[id^='department']");

        departmentInputs.forEach((deptInput) => {
            const idSuffix = deptInput.id.replace('department', '');
            formData.courses.push({
                department: deptInput.value,
                number: document.getElementById(`number${idSuffix}`).value,
                name: document.getElementById(`name${idSuffix}`).value,
                reason: document.getElementById(`reason${idSuffix}`).value
            });
        });

        formData.interesting = document.getElementById('interesting').value;
        formData.share = document.getElementById('share').value;
        formData.quote = document.getElementById('quote').value;
        
        formData["quote-author"] = document.getElementById('quote-author').value;

        formData.links = [];

        const linkUrls = [
            document.getElementById('link1').value,
            document.getElementById('link2').value,
            document.getElementById('link3').value,
            document.getElementById('link4').value,
            document.getElementById('link5').value
        ];

        const linkNames = ["ITIS3135", "GitHub", "CLT Webpages", "GitHub.io", "LinkedIn"];

        linkUrls.forEach((url, index) => {
            if (url) {
                formData.links.push({
                    name: linkNames[index],
                    href: url
                });
            }
        });

        // Convert the entire JavaScript object into a JSON text string
        const jsonString = JSON.stringify(formData, null, 2);

        const formContainer = document.getElementById('form-container');
        const resultsContainer = document.getElementById('intro-results');
        const formHeading3 = document.getElementById('form-heading3');
        const formHeading2 = document.getElementById('form-heading2');

        const pre = document.createElement('pre');
        const code = document.createElement('code');
        
        // class for highlight.js
        code.className = 'language-json'; 
        
        // Put the JSON string inside the <code> element
        code.textContent = jsonString;

        // Put the <code> element inside the <pre> element
        pre.appendChild(code);

        // Clear any old results and add the new <pre> block
        resultsContainer.innerHTML = ''; 
        resultsContainer.appendChild(pre);
        
        // Call highlight.js to color the code
        if (typeof hljs !== 'undefined') {
            hljs.highlightElement(code);
        }
        
        // Hide the form and show the results
        formContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        if (formHeading3) {
            formHeading3.style.display = 'none';
        }
        
        if (formHeading2) {
            formHeading2.textContent = 'JSON Output';
        }
        
        // Remove the redirect - comment out or delete this line:
        // window.location.href = "introduction.html";
    });
});