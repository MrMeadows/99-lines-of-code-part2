window.addEventListener("DOMContentLoaded", function() {
    let friends = ["Hannah", "Taylor", "Clayton", "Jordan", "Candace"];
    let singBtn = document.createElement("button");
    let singBtnText = document.createTextNode("Sing!");
    document.body.appendChild(singBtn);
    singBtn.appendChild(singBtnText);

    singBtn.addEventListener('click', function() {
        for (let i = 0; i < friends.length; i++){
            for (let j = 99; j > 0; j--) {
                if (j > 2) {
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                } else if (j == 2) {
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
                } else if (j == 1){
                    console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes it out, clears it all out, no more lines of code in the file");
                }
            }
        }
    });
});