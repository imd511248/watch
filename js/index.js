function digitalWatch() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("mins").innerHTML = min;
  document.getElementById("secs").innerHTML = second;
}

setInterval(() => {
  digitalWatch();
}, 1000);
