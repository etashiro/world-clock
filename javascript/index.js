function updateTime() {
  let sanFranciscoElement = document.querySelector("#san-francisco");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFranciscoCurrentTime = moment().tz("America/Los_Angeles");

  sanFranciscoDateElement.innerHTML =
    sanFranciscoCurrentTime.format("MMMM Do, YYYY");

  sanFranciscoTimeElement.innerHTML = sanFranciscoCurrentTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoCurrentTime.format("MMMM Do, YYYY");

  tokyoTimeElement.innerHTML = tokyoCurrentTime.format(
    "h:mm:ss [<small>]A[</small]"
  );
}

updateTime();
setInterval(updateTime, 1000);
