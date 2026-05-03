const input = document.getElementById("image");
const previewImg = document.getElementById("previewImage");

input.addEventListener("change",function() {
    const file = this.files[0];
    if(file){
        previewImg.src = URL.createObjectURL(file);
        previewImg.style.display = "block";
    }
});