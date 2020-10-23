var isNotClicked= true;
var answers=document.getElementsByClassName("arrow-down");
var i;

for (i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function() {

    var content = this.parentNode.nextElementSibling;
    console.log(content);

    if (content.style.display === "block") {
      content.style.display = "none";
      this.style.transform="rotate(360deg)";
      content.previousElementSibling.style.fontWeight="400";
    } else {
      content.style.display = "block";
      this.style.transform="rotate(180deg)";
      content.previousElementSibling.style.fontWeight="bold";
    }
  });
}
