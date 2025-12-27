const input = document.getElementById("countryInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.onclick = () => {
  const country = input.value.trim().toLowerCase();

  if (!country) {
    showResult("Please enter a country name", false);
    return;
  }

  if (country === "india") {
    showResult("Safety Score: 7.5 / 10\nModerate Risk", true);
  } else {
    showResult("Safety data coming soon", false);
  }
};

function showResult(text, safe) {
  result.classList.remove("hidden");
  result.innerText = text;
  result.style.background = safe ? "#ecfeff" : "#fff7ed";
}
