document.addEventListener('DOMContentLoaded', () => {

    const htmlButton = document.getElementById('generate_html');

    htmlButton.addEventListener('click', (event) => {
        
        event.preventDefault(); 

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const middleName = document.getElementById('middle-name').value;
        const divider = document.getElementById('divider').value;
        const mascotAdj = document.getElementById('mascot-adj').value;
        const mascotAnimal = document.getElementById('mascot-animal').value;
        
        const imageUrl = document.querySelector('#loadImage img').getAttribute('src');
        const caption = document.getElementById('pic-caption').value;
        
        const personalStat = document.getElementById('personal-stat').value;
        const personalBg = document.getElementById('personal-bg').value;
        const profBg = document.getElementById('prof-bg').value;
        const academicBg = document.getElementById('academic-bg').value;
        const backgroundBg = document.getElementById('background-bg').value;
        const primaryCp = document.getElementById('primary-cp').value;

        const interesting = document.getElementById('interesting').value;
        const share = document.getElementById('share').value;
        const quote = document.getElementById('quote').value;
        const quoteAuthor = document.getElementById('quote-author').value;

        const fullName = `${firstName} ${middleName} ${lastName}`;
        const mascot = `${mascotAdj} ${mascotAnimal}`;

        let coursesHtmlString = "";
        const departmentInputs = document.querySelectorAll("input[id^='department']");
        
        departmentInputs.forEach((deptInput) => {
            const num = deptInput.id.replace('department', '');
            const dept = deptInput.value;
            const number = document.getElementById(`number${num}`).value;
            const name = document.getElementById(`name${num}`).value;
            const reason = document.getElementById(`reason${num}`).value;

            if (dept && number && name && reason) {
                coursesHtmlString += `\n            <li>
                <strong>${dept} ${number} - ${name}:</strong> ${reason}
            </li>`;
            }
        });
        
        let linkElements = [];
        const linkInputs = document.querySelectorAll(".last-fieldset input[id^='link']");
        const linkLabels = ["ITIS3135", "GitHub", "CLT Webpages", "GitHub.io", "LinkedIn"];
        
        linkInputs.forEach((link, index) => {
            if (link.value) {
                linkElements.push(`<a href="${link.value}" target="_blank">${linkLabels[index]}</a>`);
            }
        });
        
        const linksHtmlString = `<div class="centered-links">${linkElements.join(` &nbsp;${divider.trim()}&nbsp; `)}</div>`;

        const htmlString = `
<h2>Introduction</h2>
<h2>${fullName} ${divider} ${mascot}</h2>

<figure>
    <img src="${imageUrl}" alt="${caption}">
    <figcaption>${caption}</figcaption>
</figure>

<p>${personalStat}</p>

<ul>
    <li><strong>Personal Background:</strong> ${personalBg}</li>
    <li><strong>Professional Background:</strong> ${profBg}</li>
    <li><strong>Academic Background:</strong> ${academicBg}</li>
    <li><strong>Background Background:</strong> ${backgroundBg}</li>
    <li><strong>Primary Computer:</strong> ${primaryCp}</li>
    <li>
        <strong>Courses I'm Taking, & Why:</strong>
        <ul>${coursesHtmlString}
        </ul>
    </li>
    <li><strong>Funny/Interesting Item to Remember Me by:</strong> ${interesting}</li>
    <li><strong>Something I'd also like to share:</strong> ${share}</li>
</ul>

<p class="quote">"${quote}"</p>
<p class="quote">${quoteAuthor}</p>

${linksHtmlString}
        `;

        const formContainer = document.getElementById('form-container');
        const resultsContainer = document.getElementById('intro-results');
        const formHeading3 = document.getElementById('form-heading3');
        const formHeading2 = document.getElementById('form-heading2');

        // Create the <pre> and <code> elements
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        
        code.className = 'language-html'; 
        
        code.textContent = htmlString;

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
            formHeading2.textContent = 'HTML Output';
        }
    });
});document.addEventListener('DOMContentLoaded', () => {

    const htmlButton = document.getElementById('generate_html');

    htmlButton.addEventListener('click', (event) => {
        
        event.preventDefault(); 

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const middleName = document.getElementById('middle-name').value;
        const divider = document.getElementById('divider').value;
        const mascotAdj = document.getElementById('mascot-adj').value;
        const mascotAnimal = document.getElementById('mascot-animal').value;
        
        const imageUrl = document.querySelector('#loadImage img').getAttribute('src');
        const caption = document.getElementById('pic-caption').value;
        
        const personalStat = document.getElementById('personal-stat').value;
        const personalBg = document.getElementById('personal-bg').value;
        const profBg = document.getElementById('prof-bg').value;
        const academicBg = document.getElementById('academic-bg').value;
        const backgroundBg = document.getElementById('background-bg').value;
        const primaryCp = document.getElementById('primary-cp').value;

        const interesting = document.getElementById('interesting').value;
        const share = document.getElementById('share').value;
        const quote = document.getElementById('quote').value;
        const quoteAuthor = document.getElementById('quote-author').value;

        const fullName = `${firstName} ${middleName} ${lastName}`;
        const mascot = `${mascotAdj} ${mascotAnimal}`;

        let coursesHtmlString = "";
        const departmentInputs = document.querySelectorAll("input[id^='department']");
        
        departmentInputs.forEach((deptInput) => {
            const num = deptInput.id.replace('department', '');
            const dept = deptInput.value;
            const number = document.getElementById(`number${num}`).value;
            const name = document.getElementById(`name${num}`).value;
            const reason = document.getElementById(`reason${num}`).value;

            if (dept && number && name && reason) {
                coursesHtmlString += `\n            <li>
                <strong>${dept} ${number} - ${name}:</strong> ${reason}
            </li>`;
            }
        });
        
        let linkElements = [];
        const linkInputs = document.querySelectorAll(".last-fieldset input[id^='link']");
        const linkLabels = ["ITIS3135", "GitHub", "CLT Webpages", "GitHub.io", "LinkedIn"];
        
        linkInputs.forEach((link, index) => {
            if (link.value) {
                linkElements.push(`<a href="${link.value}" target="_blank">${linkLabels[index]}</a>`);
            }
        });
        
        const linksHtmlString = `<div class="centered-links">${linkElements.join(` &nbsp;${divider.trim()}&nbsp; `)}</div>`;

        const htmlString = `
<h2>Introduction</h2>
<h2>${fullName} ${divider} ${mascot}</h2>

<figure>
    <img src="${imageUrl}" alt="${caption}">
    <figcaption>${caption}</figcaption>
</figure>

<p>${personalStat}</p>

<ul>
    <li><strong>Personal Background:</strong> ${personalBg}</li>
    <li><strong>Professional Background:</strong> ${profBg}</li>
    <li><strong>Academic Background:</strong> ${academicBg}</li>
    <li><strong>Background Background:</strong> ${backgroundBg}</li>
    <li><strong>Primary Computer:</strong> ${primaryCp}</li>
    <li>
        <strong>Courses I'm Taking, & Why:</strong>
        <ul>${coursesHtmlString}
        </ul>
    </li>
    <li><strong>Funny/Interesting Item to Remember Me by:</strong> ${interesting}</li>
    <li><strong>Something I'd also like to share:</strong> ${share}</li>
</ul>

<p class="quote">"${quote}"</p>
<p class="quote">${quoteAuthor}</p>

${linksHtmlString}
        `;

        const formContainer = document.getElementById('form-container');
        const resultsContainer = document.getElementById('intro-results');
        const formHeading3 = document.getElementById('form-heading3');
        const formHeading2 = document.getElementById('form-heading2');

        // Create the <pre> and <code> elements
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        
        code.className = 'language-html'; 
        
        code.textContent = htmlString;

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
            formHeading2.textContent = 'HTML Output';
        }
    });
});