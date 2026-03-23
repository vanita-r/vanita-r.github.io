function loadImage() {
    const fileInput = document.getElementById('introImage');
    const displayContainer = document.getElementById("loadImage");

    if (fileInput.files && fileInput.files[0]) {
        const imageUrl = URL.createObjectURL(fileInput.files[0]);
        displayContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Preview" style="max-width: 200px; display: block; margin-top: 10px;">`;
    }
}