"use strict";
const summary = document.querySelector("#btnradio0");
const summaryBox = document.querySelector(".BOX0");
const hardSelect = document.querySelector("#btnradio1");
const hardBox = document.querySelector(".BOX1");
const normalSelect = document.querySelector("#btnradio2");
const normalBox = document.querySelector(".BOX2");
// Content Tabs Logic
summary.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    normalSelect.checked = false;
    ;
    normalBox.style.display = 'none';
    summaryBox.style.display = 'block';
});
normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    normalBox.style.display = 'block';
});
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    hardBox.style.display = 'block';
});
// Hard/Normal Maps
const japanH = document.querySelector(".h-japan");
function addRecord(obj) {
    const tempRow = document.createElement("tr");
    tempRow.classList.add("text-center", "align-middle");
    japanH.appendChild(tempRow);
    const map = document.createElement("td");
    let group = undefined;
    let whitespace = undefined;
    map.textContent = "";
    tempRow.appendChild(map);
    if (obj.medal !== undefined) {
        if (obj.medal === "First") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/firstPlace.png");
            map.appendChild(medalGold);
        }
        if (obj.medal === "Second") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/secondPlace.png");
            map.appendChild(medalGold);
        }
        if (obj.medal === "Third") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/thirdPlace.png");
            map.appendChild(medalGold);
        }
    }
    if (obj.team === "Solo") {
        group = document.createElement("i");
        whitespace = document.createElement("span");
        whitespace.textContent = " ";
        map.appendChild(whitespace);
        group.classList.add('fa-solid', 'fa-person-rifle', 'text-danger');
        map.appendChild(group);
    }
    else {
        group = document.createElement("i");
        whitespace = document.createElement("span");
        whitespace.textContent = " ";
        map.appendChild(whitespace);
        group.classList.add('fa-solid', 'fa-people-group', 'text-success');
        map.appendChild(group);
    }
    const player = document.createElement("td");
    player.textContent = obj.player;
    tempRow.appendChild(player);
    const waves = document.createElement("td");
    waves.textContent = obj.wave;
    tempRow.appendChild(waves);
    const src = document.createElement("td");
    const link = document.createElement("a");
    link.textContent = 'Full';
    link.href = obj.src;
    link.target = "_blank";
    src.appendChild(link);
    tempRow.appendChild(src);
}
let obj1 = {
    player: 'Cap',
    wave: '99',
    src: 'http://www.youtube.com',
    medal: "First"
};
let userData = [
    {
        player: 'PlayerOne',
        wave: '99',
        src: 'http://www.youtube.com',
        medal: "First"
    },
    {
        player: 'PlayerTwo',
        wave: '23',
        src: 'http://www.youtube.com',
        medal: "Second"
    },
    {
        player: 'PlayerThree',
        wave: '50',
        src: 'http://www.youtube.com',
        medal: "Third"
    },
];
for (let i = 0; i < userData.length; i++) {
    addRecord(userData[i]);
}
