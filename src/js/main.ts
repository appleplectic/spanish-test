import $ from "jquery";

const inputElement = $("#formFile").get(0);
if (inputElement instanceof HTMLInputElement) {
    inputElement.addEventListener("change", function (event) {
        const fileInput = event.target as HTMLInputElement;
        if ((fileInput.files == null) || fileInput.files.length === 0) {
            console.error("No file selected.");
            return;
        }
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (readEvent) {
            const text = readEvent.target?.result;
            console.log(text);
        };
        reader.onerror = function (error) {
            console.error("Error reading file:", error);
        };

        reader.readAsText(file);
    });
}

