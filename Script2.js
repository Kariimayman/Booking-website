// JavaScript source code\
var count =0;
function LearnMore() {
  if (count%2 == 0)
  {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("LearnMore").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "learn.html", true);
  xhttp.send();
  document.getElementById("H3").innerHTML = "Learn More"
}
else
{
  document.getElementById("LearnMore").innerHTML ="";
  document.getElementById("H3").innerHTML = "";
}
count++;
}
