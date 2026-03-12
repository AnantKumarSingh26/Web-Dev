const fileInput = document.querySelector("#fileInput");
const fileUpload = document.querySelector(".fileUpload");



fileUpload.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (data) => {
    console.log(data.target.files[0].name);
    const file = fileInput.files[0];

    if (file) {
        fileUpload.textContent = file.name;
    } else {
        fileUpload.textContent = "Click to Upload";
    }
});
