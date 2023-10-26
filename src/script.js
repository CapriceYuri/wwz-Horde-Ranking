import { userData_JapanH, userData_RomeH, userData_SKH, userData_NYH, userData_JH } from "./data.js";
import { userData_JapanN, userData_RomeN, userData_SKN, userData_NYN, userData_JN } from "./data.js";
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
const romeH = document.querySelector(".h-rome");
const skH = document.querySelector(".h-sk");
const nyH = document.querySelector(".h-ny");
const jH = document.querySelector(".h-j");
const japanN = document.querySelector(".n-japan");
const romeN = document.querySelector(".n-rome");
const skN = document.querySelector(".n-sk");
const nyN = document.querySelector(".n-ny");
const jN = document.querySelector(".n-j");
function addRecord(obj, chapter) {
    const tempRow = document.createElement("tr");
    tempRow.classList.add("text-center", "align-middle");
    chapter.appendChild(tempRow);
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
    if (obj.team === "solo") {
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
    if (obj.member !== undefined) {
        const teamBtn = document.createElement('button');
        teamBtn.classList.add("btn", "dropdown-toggle", "text-light");
        teamBtn.textContent = obj.player;
        teamBtn.style.backgroundColor = "#1e1e1e";
        teamBtn.style.borderRadius = "0";
        teamBtn.style.borderColor = "#1e1e1e";
        teamBtn.setAttribute("type", "btn");
        teamBtn.setAttribute("data-bs-toggle", "dropdown");
        const teamUL = document.createElement("ul");
        teamUL.classList.add("dropdown-menu", "z-3", "bg-secondary", "text-center", "fw-bold");
        const member1 = document.createElement("li");
        member1.classList.add('dropdown-item-text', 'text-light');
        const member2 = document.createElement("li");
        member2.classList.add('dropdown-item-text', 'text-light');
        const member3 = document.createElement("li");
        member3.classList.add('dropdown-item-text', 'text-light');
        const member4 = document.createElement("li");
        member4.classList.add('dropdown-item-text', 'text-light');
        const member5 = document.createElement("li");
        member5.classList.add('dropdown-item-text', 'text-light');
        member1.textContent = obj.member[0];
        member2.textContent = obj.member[1];
        member3.textContent = obj.member[2];
        member4.textContent = obj.member[3];
        member5.textContent = obj.member[4];
        teamUL.appendChild(member1);
        teamUL.appendChild(member2);
        teamUL.appendChild(member3);
        teamUL.appendChild(member4);
        teamUL.appendChild(member5);
        teamBtn.appendChild(teamUL);
        tempRow.classList.add('dropup');
        tempRow.appendChild(teamBtn);
    }
    else {
        const player = document.createElement("td");
        player.textContent = obj.player;
        tempRow.appendChild(player);
    }
    const waves = document.createElement("td");
    waves.textContent = obj.wave;
    tempRow.appendChild(waves);
    const src = document.createElement("td");
    const link = document.createElement("a");
    const link2 = document.createElement("a");
    if (obj.src2 !== undefined) {
        link.textContent = 'Part 1 ';
        link.href = obj.src;
        link.target = "_blank";
        link2.textContent = ' Part 2';
        link2.href = obj.src2;
        link2.target = "_blank";
        src.appendChild(link);
        src.appendChild(link2);
        tempRow.appendChild(src);
    }
    else {
        link.textContent = 'Full';
        link.href = obj.src;
        link.target = "_blank";
        src.appendChild(link);
        tempRow.appendChild(src);
    }
}
// INITIAL ENTRY SORT,ORDER,CHECK
function recordSort(a, b) {
    return a.wave - b.wave;
}
// DATA ENTRY FUNCTION
function dataSubmission(arr, location) {
    let sorting = arr.sort(recordSort).reverse();
    for (let i = 0; i < sorting.length; i++) {
        if (i === 0) {
            sorting[i].medal = "First";
        }
        if (i === 1) {
            sorting[i].medal = "Second";
        }
        if (i === 2) {
            sorting[i].medal = "Third";
        }
    }
    for (let i = 0; i < sorting.length; i++) {
        addRecord(sorting[i], location);
    }
}
// CALLING FOR HARD
dataSubmission(userData_JapanH, japanH);
dataSubmission(userData_RomeH, romeH);
dataSubmission(userData_SKH, skH);
dataSubmission(userData_NYH, nyH);
dataSubmission(userData_JH, jH);
// CALLING FOR NORMAL
dataSubmission(userData_JapanN, japanN);
dataSubmission(userData_RomeN, romeN);
dataSubmission(userData_SKN, skN);
dataSubmission(userData_NYN, nyN);
dataSubmission(userData_JN, jN);
