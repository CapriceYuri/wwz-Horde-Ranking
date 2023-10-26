const summary = document.querySelector("#btnradio0") as HTMLInputElement;
const summaryBox = document.querySelector(".BOX0") as HTMLInputElement;

const hardSelect = document.querySelector("#btnradio1") as HTMLInputElement;
const hardBox = document.querySelector(".BOX1") as HTMLInputElement;

const normalSelect = document.querySelector("#btnradio2") as HTMLInputElement;
const normalBox = document.querySelector(".BOX2") as HTMLInputElement;

// Content Tabs Logic
summary.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    normalSelect.checked = false;;
    normalBox.style.display = 'none';
    summaryBox.style.display = 'block';
})
normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    summary.checked = false;
    summaryBox.style.display = 'none'
    normalBox.style.display = 'block'
})
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    hardBox.style.display = 'block'
})

// Content Entry Logic

class RecordInfo {
    constructor(
        map: string,
        player: string,
        wave: number,
        src: string,
        team?: string,
        medal?: string
    ) { }
}
const player1 = new RecordInfo('Tokyo', "CapriceYuri", 99, "http://www.youtube.com")

console.log(player1)