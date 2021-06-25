let counter = 0;

function count(){
    counter += 1;

    document.getElementById("counts").innerText = counter;


}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("increment-btn").onclick = count

});