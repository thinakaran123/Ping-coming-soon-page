function check() {
  mailinput = document.getElementById("mailinputbox").value;

  regexp = /[a-z0-9]+[@]{1}[a-z]+[.][a-z]+/;

  if (mailinput === "") {
    document.getElementById("emptymsg").classList.remove("hidden");
    document.getElementById("mailinputbox").style.borderColor =
      "hsl(354, 100%, 66%)";
  } else if (!regexp.test(mailinput)) {
    document.getElementById("mailinputbox").style.borderColor =
      "hsl(354, 100%, 66%)";
    document.getElementById("errormsg").classList.remove("hidden");
  }
}
