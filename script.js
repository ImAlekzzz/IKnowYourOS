const heading = document.getElementById("heading");
const buttons = document.getElementById("buttons");

let firstChoice = null; // "yes" or "no"

function getOS() {
  if (navigator.userAgentData && navigator.userAgentData.platform) {
    return navigator.userAgentData.platform;
  }

  const ua = navigator.userAgent;
  const platform = navigator.platform || "";

  if (/Windows NT/i.test(ua) || /^Win/i.test(platform)) return "Windows";
  if (/Macintosh|Mac OS X/i.test(ua) || /^Mac/i.test(platform)) return "macOS";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua) || /^iP/i.test(platform)) return "iOS";
  if (/Linux/i.test(ua) || /^Linux/i.test(platform)) return "Linux";

  return "Unknown OS";
}

document.getElementById("yesBtn").addEventListener("click", () => {
  const os = getOS();

  heading.innerHTML = `<h1>${os}</h1>`;

  if (firstChoice === "no") {
    buttons.innerHTML = `<img src="no.png" alt="ATTENTION CCP MEMBER, YOUR CRITICAL LOW SOCIAL CREDIT NEEDS FIXING 叮噹叮叮噹噹
⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄" style="max-width: 200px;">`;
  } else {
    buttons.innerHTML = `<img src="ok.png" alt="ok" style="max-width: 200px;">`;
  }
});

document.getElementById("noBtn").addEventListener("click", () => {
  if (firstChoice === null) {
    firstChoice = "no";
    heading.innerHTML = "<h1>Are you sure?</h1>";
  } else if (firstChoice === "no") {
    heading.innerHTML = "<h1>Are you sure?</h1>";
    buttons.innerHTML = `<img src="ok.png" alt="ok" style="max-width: 200px;">`;
  }
});
