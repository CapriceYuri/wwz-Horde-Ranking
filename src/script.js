import { userData_JapanH, userData_RomeH, userData_SKH, userData_NYH, userData_JH } from "./data.js";
import { userData_JapanN, userData_RomeN, userData_SKN, userData_NYN, userData_JN } from "./data.js";
import { data } from "./data.js";
import { imgData, imgPdata } from "./data.js";
const summary = document.querySelector("#btnradio0");
const summaryBox = document.querySelector(".BOX0");
const hardSelect = document.querySelector("#btnradio1");
const hardBox = document.querySelector(".BOX1");
const normalSelect = document.querySelector("#btnradio2");
const normalBox = document.querySelector(".BOX2");
const gallerySelect = document.querySelector("#btnradioG");
const galleryBox = document.querySelector(".BOXG");
const galleryImgBox = document.querySelector(".gallery-box");
const galleryPSelect = document.querySelector("#btnradioP");
const galleryPBox = document.querySelector(".BOXP");
const galleryPImgBox = document.querySelector(".galleryP-box");
// Content Tabs Logic
summary.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    normalSelect.checked = false;
    ;
    normalBox.style.display = 'none';
    gallerySelect.checked = false;
    galleryBox.style.display = 'none';
    galleryPSelect.checked = false;
    galleryPBox.style.display = 'none';
    summaryBox.style.display = 'block';
});
normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    gallerySelect.checked = false;
    galleryBox.style.display = 'none';
    galleryPSelect.checked = false;
    galleryPBox.style.display = 'none';
    normalBox.style.display = 'block';
});
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    gallerySelect.checked = false;
    galleryBox.style.display = 'none';
    galleryPSelect.checked = false;
    galleryPBox.style.display = 'none';
    hardBox.style.display = 'block';
});
gallerySelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    galleryPSelect.checked = false;
    galleryPBox.style.display = 'none';
    galleryBox.style.display = 'block';
    galleryCount();
    galleryHTCount();
});
galleryPSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    gallerySelect.checked = false;
    galleryBox.style.display = 'none';
    galleryPBox.style.display = 'block';
    galleryPCount();
    galleryCTCount();
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
// LEADERBOARD
const xltH_board = document.querySelector('#leaderboard_xltH');
const xlrH_board = document.querySelector('#leaderboard_xlrH');
const skH_board = document.querySelector('#leaderboard_skH');
const nyH_board = document.querySelector('#leaderboard_nyH');
const jH_board = document.querySelector('#leaderboard_jH');
const xltHV = document.querySelector("#xltHV");
const xlrHV = document.querySelector("#xlrHV");
const skHV = document.querySelector("#skHV");
const nyHV = document.querySelector("#nyHV");
const jHV = document.querySelector("#jHV");
const xltN_board = document.querySelector('#leaderboard_xltN');
const xlrN_board = document.querySelector('#leaderboard_xlrN');
const skN_board = document.querySelector('#leaderboard_skN');
const nyN_board = document.querySelector('#leaderboard_nyN');
const jN_board = document.querySelector('#leaderboard_jN');
const xltNV = document.querySelector("#xltNV");
const xlrNV = document.querySelector("#xlrNV");
const skNV = document.querySelector("#skNV");
const nyNV = document.querySelector("#nyNV");
const jNV = document.querySelector("#jNV");
const galleryValue = document.querySelectorAll(".gsection");
const galleryPValue = document.querySelectorAll(".psection");
const hordeTK = document.querySelector('.horde-totalK');
const hordeTA = document.querySelector('.horde-totalA');
const hordeTS = document.querySelector('.horde-totalS');
const casualTK = document.querySelector('.casual-TK');
const casualTPvp = document.querySelector('.casual-TPvp');
const casualTS = document.querySelector('.casual-TS');
const hordeT = document.querySelectorAll('.hordeT');
const casualT = document.querySelectorAll('.casualT');
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
        teamBtn.classList.add("btn", "dropdown-toggle", "text-light", "rounded-pill");
        teamBtn.textContent = obj.player;
        teamBtn.style.backgroundColor = "#1e1e1e";
        teamBtn.style.borderRadius = "0";
        teamBtn.style.borderColor = "#1e1e1e";
        teamBtn.setAttribute("type", "btn");
        teamBtn.setAttribute("data-bs-toggle", "dropdown");
        const teamUL = document.createElement("ul");
        teamUL.classList.add("dropdown-menu", "z-3", "bg-dark", "text-center", "fw-bold");
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
        link.textContent = 'P1';
        link.href = obj.src;
        link.target = "_blank";
        link2.textContent = ' P2';
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
function checkSameStanding(obj) {
    let first = parseInt(obj[0].wave);
    let second = 0;
    let third = 0;
    for (let i = 1; i < obj.length; i++) {
        if (parseInt(obj[i].wave) > first) {
            second = first;
            first = parseInt(obj[i].wave);
        }
        else if (parseInt(obj[i].wave) > second && parseInt(obj[i].wave) < first) {
            third = second;
            second = parseInt(obj[i].wave);
        }
        else if (parseInt(obj[i].wave) > third && parseInt(obj[i].wave) < second) {
            third = parseInt(obj[i].wave);
        }
    }
    const finalizedfirst = first.toString();
    const finalizedsecond = second.toString();
    const finalizedthird = third.toString();
    for (let j = 0; j < obj.length; j++) {
        if (obj[j].wave === finalizedfirst) {
            obj[j].medal = 'First';
        }
        if (obj[j].wave === finalizedsecond) {
            obj[j].medal = 'Second';
        }
        if (obj[j].wave === finalizedthird) {
            obj[j].medal = 'Third';
        }
    }
}
// DATA ENTRY FUNCTION
function dataSubmission(arr, location) {
    let sorting = arr.sort(recordSort).reverse();
    checkSameStanding(arr);
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
// LEADERBOARD ENTRY
const skullType = document.querySelectorAll(".skull");
const leaderboardRecord = [xltH_board, xlrH_board, skH_board, nyH_board, jH_board, xltN_board, xlrN_board, skN_board, nyN_board, jN_board];
const leaderboardRecordValue = [userData_JapanH[0].player, userData_RomeH[0].player, userData_SKH[0].player, userData_NYH[0].player, userData_JH[0].player, userData_JapanN[0].player, userData_RomeN[0].player, userData_SKN[0].player, userData_NYN[0].player, userData_JN[0].player];
for (let i = 0; i < leaderboardRecord.length; i++) {
    leaderboardRecord[i].textContent = leaderboardRecordValue[i];
}
// Simplified Entry
const leaderboardHardWave = [xltHV, xlrHV, skHV, nyHV, jHV, xltNV, xlrNV, skNV, nyNV, jNV];
const leaderboardHardWaveValue = [userData_JapanH[0].wave, userData_RomeH[0].wave, userData_SKH[0].wave, userData_NYH[0].wave, userData_JH[0].wave, userData_JapanN[0].wave, userData_RomeN[0].wave, userData_SKN[0].wave, userData_NYN[0].wave, userData_JN[0].wave];
for (let i = 0; i < leaderboardHardWave.length; i++) {
    if (parseInt(leaderboardHardWaveValue[i]) >= 90) {
        skullType[i].attributes[0].value = "images/yellowskull.png";
        skullType[i].classList.add("vibrate");
        leaderboardHardWave[i].classList.add("h2", "text-bold", "text-warning");
        leaderboardHardWave[i].textContent = leaderboardHardWaveValue[i];
    }
    else if (parseInt(leaderboardHardWaveValue[i]) >= 70) {
        skullType[i].attributes[0].textContent = "images/redskull.png";
        skullType[i].classList.add("flick");
        leaderboardHardWave[i].classList.add("h4", "text-bold", "text-danger");
        leaderboardHardWave[i].textContent = leaderboardHardWaveValue[i];
    }
    else {
        skullType[i].attributes[0].value = "images/whiteskull.png";
        leaderboardHardWave[i].textContent = leaderboardHardWaveValue[i];
    }
}
// Countup for Record Run
function countUpRecord() {
    leaderboardHardWave.forEach((array) => {
        const target = +array.textContent;
        array.textContent = '0';
        const updateCountRecord = () => {
            const c = +array.textContent;
            if (c < target) {
                array.textContent = `${Math.ceil(c + 1)}`;
                setTimeout(updateCountRecord, 50);
            }
            else {
                array.textContent = target.toString();
            }
        };
        updateCountRecord();
    });
}
countUpRecord();
// LIGHT & DARK MODE
const lightModeBtn = document.querySelector("#light-mode");
const darkModeBtn = document.querySelector("#dark-mode");
const pageBody = document.querySelector("body");
lightModeBtn.addEventListener('click', () => {
    pageBody.style.backgroundColor = "#696969";
    darkModeBtn.style.display = "block";
    lightModeBtn.style.display = "none";
    leaderboardRecord.forEach(ele => ele.classList.add("text-dark", "transition"));
});
darkModeBtn.addEventListener('click', () => {
    pageBody.style.backgroundColor = "#1e1e1e";
    darkModeBtn.style.display = "none";
    lightModeBtn.style.display = "block";
    leaderboardRecord.forEach(ele => ele.classList.remove("text-dark"));
    leaderboardRecord.forEach(ele => ele.classList.add("text-light"));
});
// Calculate Record Time
const timeAgo = document.querySelectorAll(".timeago");
const todayDate = new Date();
const getMonth = (todayDate.getMonth()) + 1;
const getDay = todayDate.getDate();
const getYear = todayDate.getFullYear();
const formattedToday = new Date(`${getMonth}/${getDay}/${getYear}`);
for (let x = 0; x < timeAgo.length; x++) {
    const temp = new Date(`${data[x][0].date}`);
    const tempNum = (Math.floor((formattedToday.getTime() - temp.getTime()) / (86400000))).toString();
    if (+tempNum > 60) {
        timeAgo[x].classList.add("text-danger", "h3");
    }
    else if (+tempNum > 30) {
        timeAgo[x].classList.add("text-warning", "h5");
    }
    timeAgo[x].textContent = tempNum;
}
// CountUp for Record Days
function countUp() {
    timeAgo.forEach((array) => {
        const target = +array.textContent;
        array.textContent = '0';
        const updateCount = () => {
            const c = +array.textContent;
            if (c < target) {
                array.textContent = `${Math.ceil(c + 1)}`;
                setTimeout(updateCount, 50);
            }
            else {
                array.textContent = target.toString();
            }
        };
        updateCount();
    });
}
countUp();
const saberprank = document.createElement("img");
saberprank.setAttribute("src", "images/saber.png");
const saberprankName = document.createElement("span");
saberprankName.textContent = " Saber Interactive";
saberprankName.classList.add("text-warning");
nyH.childNodes[5].childNodes[1].appendChild(saberprank);
nyH.childNodes[5].childNodes[1].appendChild(saberprankName);
function addGalleyImage(obj) {
    const tempCol = document.createElement("div");
    tempCol.classList.add("col-xl-6", "col-12", "p-2");
    const tempColCard = document.createElement("div");
    tempColCard.classList.add('card', 'text-bg-dark');
    const imgContent = document.createElement('img');
    imgContent.classList.add('card-img', 'card-fluid');
    imgContent.setAttribute('src', `images/${obj.imgUrl}.png`);
    const imgContentAuthor = document.createElement('div');
    imgContentAuthor.classList.add('card-img-overlay');
    imgContentAuthor.innerText = `@ ${obj.imgAuthor}`;
    tempColCard.appendChild(imgContent);
    tempColCard.appendChild(imgContentAuthor);
    tempCol.appendChild(tempColCard);
    galleryImgBox.appendChild(tempCol);
}
function addGalleyPImage(obj) {
    const tempCol = document.createElement("div");
    tempCol.classList.add("col-xl-6", "col-12", "p-2", "align-items-center", "d-flex");
    const tempColCard = document.createElement("div");
    tempColCard.classList.add('card', 'text-bg-dark');
    const imgContent = document.createElement('img');
    imgContent.classList.add('card-img', 'card-fluid');
    imgContent.setAttribute('src', `images/${obj.imgUrl}.png`);
    const imgContentAuthor = document.createElement('div');
    imgContentAuthor.classList.add('card-img-overlay');
    imgContentAuthor.innerText = `@ ${obj.imgAuthor}`;
    tempColCard.appendChild(imgContent);
    tempColCard.appendChild(imgContentAuthor);
    tempCol.appendChild(tempColCard);
    galleryPImgBox.appendChild(tempCol);
}
imgData.forEach(obj => addGalleyImage(obj));
imgPdata.forEach(obj => addGalleyPImage(obj));
// SCRIPT FOR COUNTUP BOTH GALLERY
function galleryCount() {
    galleryValue.forEach(ele => {
        const tempV = +ele.textContent;
        const step = tempV / 100;
        ele.textContent = "0";
        const updateC = () => {
            const c = +ele.textContent;
            if (c < tempV) {
                ele.textContent = `${Math.ceil(c + step)}`;
                setTimeout(updateC, 50);
            }
            else {
                ele.textContent = tempV.toString();
            }
        };
        updateC();
    });
}
function galleryPCount() {
    galleryPValue.forEach(ele => {
        const tempV = +ele.textContent;
        const step = tempV / 100;
        ele.textContent = "0";
        const updateC = () => {
            const c = +ele.textContent;
            if (c < tempV) {
                ele.textContent = `${Math.ceil(c + step)}`;
                setTimeout(updateC, 50);
            }
            else {
                ele.textContent = tempV.toString();
            }
        };
        updateC();
    });
}
function galleryHTCount() {
    hordeT.forEach(ele => {
        const tempV = +ele.textContent;
        const step = tempV / 250;
        ele.textContent = "0";
        const updateC = () => {
            const c = +ele.textContent;
            if (c < tempV) {
                ele.textContent = `${Math.ceil(c + step)}`;
                setTimeout(updateC, 50);
            }
            else {
                ele.textContent = tempV.toString();
            }
        };
        updateC();
    });
}
function galleryCTCount() {
    casualT.forEach(ele => {
        const tempV = +ele.textContent;
        const step = tempV / 150;
        ele.textContent = "0";
        const updateC = () => {
            const c = +ele.textContent;
            if (c < tempV) {
                ele.textContent = `${Math.ceil(c + step)}`;
                setTimeout(updateC, 50);
            }
            else {
                ele.textContent = tempV.toString();
            }
        };
        updateC();
    });
}
// SCRIPTS for Gallery Object Data
console.log(imgData[0]);
let totalKillSum = 0;
for (let x = 0; x < imgData.length; x++) {
    let tempValue = imgData[x].totalK;
    totalKillSum += tempValue;
    hordeTK.textContent = totalKillSum.toString();
}
let totalSSum = 0;
for (let x = 0; x < imgData.length; x++) {
    let tempValue = imgData[x].totalS;
    totalSSum += tempValue;
    hordeTS.textContent = totalSSum.toString();
}
let totalASum = 0;
for (let x = 0; x < imgData.length; x++) {
    let tempValue = imgData[x].totalA;
    totalASum += tempValue;
    hordeTA.textContent = totalASum.toString();
}
let casualKillSum = 0;
for (let x = 0; x < imgPdata.length; x++) {
    let tempValue = imgPdata[x].totalK;
    casualKillSum += tempValue;
    casualTK.textContent = casualKillSum.toString();
}
let casualSSum = 0;
for (let x = 0; x < imgPdata.length; x++) {
    let tempValue = imgPdata[x].totalS;
    casualSSum += tempValue;
    casualTS.textContent = casualSSum.toString();
}
let casualPvpSum = 0;
for (let x = 0; x < imgPdata.length; x++) {
    let tempValue = imgPdata[x].totalPvP;
    casualPvpSum += tempValue;
    casualTPvp.textContent = casualPvpSum.toString();
}
