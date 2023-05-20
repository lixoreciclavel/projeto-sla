const likeButton = document.getElementById('button-like');
const likeCount = document.getElementById('likeCount')

let count = 0;

likeButton.addEventListener("click", () =>{
    count++
    likeCount.innerHTML = `${count}`
    likeButton.style.borderColor = "red"
    document.getElementById("coracao").setAttribute("fill", "red")
});
