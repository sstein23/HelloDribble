
var varp = document.querySelector(".hmmmmm")
var mmm = document.querySelector(".mmm");
varp.addEventListener("click", noHackOptions);
function noHackOptions() {
varp.classList.add('hrm');
var timeout = window.setTimeout(hackOptions, 3000);
}
function hackOptions() {
  varp.classList.remove('hrm');
  mmm.src = "hello-dribble(1).gif";
}
