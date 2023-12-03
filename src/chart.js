import { chart_dataH } from './data.js';

const ctx = document.getElementById('pie');
const ctx2 = document.getElementById('pie2');

// Chart Data Info
console.log(chart_dataH)

let kill_total = 0;

let kill_headshot = 0;
let kill_explosive = 0;
let kill_melee = 0;
let kill_body = 0;

let kill_special = 0;
let kill_zeke = 0;


for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].head !== undefined) {
        kill_headshot += chart_dataH[x].head;
    }
}
for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].explosive !== undefined) {
        kill_explosive += chart_dataH[x].explosive;
    }
}
for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].melee !== undefined) {
        kill_melee += chart_dataH[x].melee;
    }
}
for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].body !== undefined) {
        kill_body += chart_dataH[x].body;
    }
}
for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].special !== undefined) {
        kill_special += chart_dataH[x].special;
    }
}
for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].body !== undefined) {
        kill_zeke += chart_dataH[x].zeke;
    }
}


const data = {
    labels: [
        'Headshot',
        'Explosive',
        'Melee',
        'Body'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [kill_headshot, kill_explosive, kill_melee, kill_body],
        backgroundColor: [
            '#E74C3C',
            '#45B39D',
            '#3498DB',
            '#F4D03F',
        ],
        hoverOffset: 4
    }]
};

const data2 = {
    labels: [
        'Special Zeke',
        'Regular Zeke',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [kill_special, kill_zeke],
        backgroundColor: [
            '#E74C3C',
            '#45B39D',
        ],
        hoverOffset: 4
    }]
};


const config = {
    type: 'doughnut',
    data: data,
};

const config2 = {
    type: 'doughnut',
    data: data2,
};


new Chart(ctx, config);
new Chart(ctx2, config2)


