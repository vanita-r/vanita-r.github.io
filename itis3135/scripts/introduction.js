document.addEventListener("DOMContentLoaded", function() {
    const introForm = document.getElementById("intro-form");
    const coursesFieldset = document.getElementById("courses-fieldset");
    const errorElement = document.getElementById("form-error");
    const formContainer = document.getElementById("form-container");
    const resultsContainer = document.getElementById("intro-results");
    const resetButton = document.getElementById("reset-btn");
    const addCourseButton = document.getElementById("add-course-btn");
    const resetPageLink = document.getElementById("reset-page-link");

    //counter to keep track of new courses
    let newCourseCounter = 6;

    /**
     * finds and removes all the extra course boxes that were added by the user
     */
    function removeDynamicCourses() {
        //find all elements inside 'coursesFieldset' that have the class ".dynamic-course-group"
        const dynamicCourses = coursesFieldset.querySelectorAll(".dynamic-course-group");
        
        //loop through each one
        dynamicCourses.forEach(function(course) {
            //and remove it from the page.
            course.remove();
        });
        
        //reset counter back to 6 for the next time
        newCourseCounter = 6;
    }

    /**
     * Creates a new set of input fields for a course and adds them to the page
     */
    function addNewCourseFields() {
        //create a new <div> element in JavaScript's memory
        const newCourseGroup = document.createElement("div");
        
        //give it a class name so it picks up CSS styles
        newCourseGroup.className = "dynamic-course-group";

        //create a new <button> element for removing this specific course
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-course-btn";
        removeButton.title = "Remove this course";
        removeButton.textContent = "X";

        //add a click listener to this new button*.
        removeButton.addEventListener("click", function() {
            newCourseGroup.remove();
        });

        newCourseGroup.innerHTML = `
            <label for="department${newCourseCounter}">Department:</label>
            <input type="text" id="department${newCourseCounter}" name="department${newCourseCounter}" placeholder="ITSC" required>

            <label for="number${newCourseCounter}">Number:</label>
            <input type="text" id="number${newCourseCounter}" name="number${newCourseCounter}" placeholder="3688" required>

            <label for="name${newCourseCounter}">Name:</label>
            <input type="text" id="name${newCourseCounter}" name="name${newCourseCounter}" placeholder="Computers & Their Impact on Society" required>

            <label for="reason${newCourseCounter}">Reason for taking course:</label>
            <input type="text" id="reason${newCourseCounter}" name="reason${newCourseCounter}" placeholder="Why are you taking this course?" required>
        `;
        
        //add new "Remove" button into the new <div>
        newCourseGroup.appendChild(removeButton);

        //add the entire new <div> (with all its contents) to the 'coursesFieldset'
        // on the webpage.
        coursesFieldset.appendChild(newCourseGroup);

        //increment the counter so the *next* course added will be number 7, then 8, etc.
        newCourseCounter++;
    }

    function displayResults() {
        
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const mascotAdj = document.getElementById("mascot-adj").value;
        const mascotAnimal = document.getElementById("mascot-animal").value;
        const divider = document.getElementById("divider").value;
        
        const fullName = `${firstName} ${lastName}`;
        const mascot = `${mascotAdj} ${mascotAnimal}`;
                    
        const imgElement = document.getElementById("loadImage").querySelector("img");
        const imageUrl = imgElement ? imgElement.src : "";        
        const caption = document.getElementById("pic-caption").value;       
        const personalStat = document.getElementById("personal-stat").value;
        const personalBg = document.getElementById("personal-bg").value;
        const profBg = document.getElementById("prof-bg").value;
        const academicBg = document.getElementById("academic-bg").value;
        const primaryCp = document.getElementById("primary-cp").value;
        const interesting = document.getElementById("interesting").value;
        const quote = document.getElementById("quote").value;
        const quoteAuthor = document.getElementById("quote-author").value;

        let coursesHtml = "";
        const departmentInputs = introForm.querySelectorAll("input[id^='department']");
        
        departmentInputs.forEach(function(deptInput) {
            const num = deptInput.id.replace('department', '');
            const dept = deptInput.value;
            const number = document.getElementById(`number${num}`).value;
            const name = document.getElementById(`name${num}`).value;
            const reason = document.getElementById(`reason${num}`).value;

            //check if all fields for a course are filled
            if (dept && number && name && reason) {
                //format: <li><strong>CODE - Name:</strong> Reason</li>
                coursesHtml += `
                    <li>
                        <strong>${dept} ${number} - ${name}:</strong> ${reason}
                    </li>
                `;
            }
        });

        let linkElements = [];
        //find all the link inputs from the form
        const linkInputs = introForm.querySelectorAll(".last-fieldset input[id^='link']");
        
        linkInputs.forEach(function(link) {
            if (link.value) {
                //create an <a> tag. Since the form has no custom text,
                //we use the URL (link.value) as the text
                linkElements.push(`<a href="${link.value}" target="_blank">${link.value}</a>`);
            }
        });

        //join the array of <a> tags with the divider, adding spaces
        const linksHtml = linkElements.join(` &nbsp;${divider.trim()}&nbsp; `);

        const resultsHtml = `
            <h2>Introduction</h2>
            <h2>${fullName} ${divider} ${mascot}</h2>

            ${imageUrl ? `
                <figure>
                    <img src="${imageUrl}" alt="${caption}">
                    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
                </figure>
            ` : ''}
            
            <ul>
                <li><strong>${personalStat}</strong></li>
                <li><strong>Personal Background:</strong> ${personalBg}</li>
                <li><strong>Professional Background:</strong> ${profBg}</li>
                <li><strong>Academic Background:</strong> ${academicBg}</li>
                <li><strong>Primary Computer:</strong> ${primaryCp}</li>
                <li>
                    <strong>Courses I'm Taking, & Why:</strong>
                    <ul>
                        ${coursesHtml}
                    </ul>
                </li>
                <li><strong>Funny/Interesting Item to Remember Me by:</strong> ${interesting}</li>
            </ul>

            <p class="quote">"${quote}"</p>
            <p class="quote">${quoteAuthor}</p>

            <p>${linksHtml}</p>
        `;

        resultsContainer.innerHTML = resultsHtml;

        //hide the form container
        formContainer.style.display = "none";
        
        //show the results container
        resultsContainer.style.display = "block";
        
        //show the "Reset form?" link
        resetPageLink.style.display = "block";
    }

    function showFormAgain() {
        //hide the results and the reset link
        resultsContainer.style.display = "none";
        resetPageLink.style.display = "none";

        //show the form container
        formContainer.style.display = "block";

        introForm.reset();
        
        //remove any extra courses
        removeDynamicCourses();
    }

    // --- EVENT LISTENERS ARE NOW *AFTER* DEFINITIONS ---

    //check if the 'introForm' element actually exists before trying to use it
    if (introForm) {
        
        //listens for the "submit" event (when the user clicks the "Submit" button).
        introForm.addEventListener("submit", function(event) {
            
            //stops the form from resetting when the form is submitted
            event.preventDefault();

            if (introForm.checkValidity()) {
                //if all required fields are filled, hide any old error messages
                errorElement.style.display = "none";
                
                displayResults();
            } else {
                //if the form is NOT valid, show an error message.
                errorElement.textContent = "Please fill out all required fields before submitting.";
                errorElement.style.display = "block";
            }
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function() {
            removeDynamicCourses();
            
            //hide the error message, just in case it was showing.
            errorElement.style.display = "none";
        });
    }

    if (addCourseButton) {
        addCourseButton.addEventListener("click", function() {
            //when clicked, run our function to add the new fields.
            addNewCourseFields();
        });
    }

    if (resetPageLink) {
        resetPageLink.addEventListener("click", function(event) {
            //stop the link from trying to navigate (its default behavior)
            event.preventDefault();
            
            showFormAgain();
        });
    }
});