// heartcount scetion 

let allHeartCounts = 0;
const heartCount = document.getElementById("allHeartCount");

for (const btn of document.querySelectorAll(".heart-button")) {
  btn.addEventListener("click", () => {
    allHeartCounts++;
    heartCount.textContent = allHeartCounts ;
  });
}

// copySection
let copyNumCount = 0;

const copyCount = document.getElementById("countCopyNumber");

for (const btn of document.querySelectorAll(".copy-button")) {
  btn.addEventListener("click", (e) => {
    const number = e.target.closest(".main-card").querySelector(".service-number").textContent;
    navigator.clipboard.writeText(number);
    copyNumCount++;
    copyCount.textContent = copyNumCount;
    alert(`Code copied successfully: ${number}`);
  });
}


// call button section 
let totalcoins = 100;
const coinNumCount = document.getElementById("coinCount");
const callsHistory = document.getElementById("callHistoryDetails");

for (const btn of document.querySelectorAll(".call-button")) {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".main-card"); // parent card
    const serviceName = card.querySelector("h5").textContent;
    const number = card.querySelector(".service-number").textContent;

    if (totalcoins < 20) {
      alert("You don't have enough coins at least 20 coins are required to make a call");
      return;
    }

    totalcoins -= 20;
    coinNumCount.textContent = totalcoins;

    const time = new Date().toLocaleTimeString();
    alert(` Calling ${serviceName} (${number})`);


    const div = document.createElement("div");
    div.innerHTML =` <div class="flex justify-between gap-2 bg-gray-100  m-5 shadow-md rounded-md items-center p-3  "><h5 class=" text-[18px] font-semibold p-2">
    ${serviceName} <br>
     <span class=" text-[18px] font-normal p-2"> ${number} </span> </h5> <span class=" text-[18px] font-normal p-2"> ${time} </span></div>
    ` 
    callsHistory.appendChild(div);
  });
}

// clearHistory section 
const clearHistoryBtn = document.getElementById("callHistoryDelet");

clearHistoryBtn.addEventListener("click", () => {
  callsHistory.innerHTML = "";
});

















