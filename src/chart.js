import { chart_dataH, chart_dataN } from './data.js';
import { imgData, imgPdata } from './data.js';
import { playerS, playerD } from './data.js';

const ctx = document.getElementById('pie');
const ctx2 = document.getElementById('pie2');
const ctx3 = document.getElementById('pie3');
const ctx4 = document.getElementById('pie4');
const ctxM = document.getElementById('radarM');


// Chart Hard
let totalH = 0;
let kill_headshot = 0;
let kill_explosive = 0;
let kill_melee = 0;
let kill_body = 0;
let kill_special = 0;
let kill_zeke = 0;

for (let x = 0; x < chart_dataH.length; x++) {
    if (chart_dataH[x].total !== undefined) {
        totalH += chart_dataH[x].total;
    }
    if (chart_dataH[x].head !== undefined) {
        kill_headshot += chart_dataH[x].head;
    }
    if (chart_dataH[x].explosive !== undefined) {
        kill_explosive += chart_dataH[x].explosive;
    }
    if (chart_dataH[x].melee !== undefined) {
        kill_melee += chart_dataH[x].melee;
    }
    if (chart_dataH[x].body !== undefined) {
        kill_body += chart_dataH[x].body;
    }
    if (chart_dataH[x].special !== undefined) {
        kill_special += chart_dataH[x].special;
    }
    if (chart_dataH[x].body !== undefined) {
        kill_zeke += chart_dataH[x].zeke;
    }
}
// Chart Normal
let totalN = 0;
let kill_Nheadshot = 0;
let kill_Nexplosive = 0;
let kill_Nmelee = 0;
let kill_Nbody = 0;
let kill_Nspecial = 0;
let kill_Nzeke = 0;

for (let x = 0; x < chart_dataN.length; x++) {
    if (chart_dataN[x].total !== undefined) {
        totalN += chart_dataN[x].total;
    }
    if (chart_dataN[x].head !== undefined) {
        kill_Nheadshot += chart_dataN[x].head;
    }
    if (chart_dataN[x].explosive !== undefined) {
        kill_Nexplosive += chart_dataN[x].explosive;
    }
    if (chart_dataN[x].melee !== undefined) {
        kill_Nmelee += chart_dataN[x].melee;
    }
    if (chart_dataN[x].body !== undefined) {
        kill_Nbody += chart_dataN[x].body;
    }
    if (chart_dataN[x].special !== undefined) {
        kill_Nspecial += chart_dataN[x].special;
    }
    if (chart_dataN[x].body !== undefined) {
        kill_Nzeke += chart_dataN[x].zeke;
    }
}

// Config Hard
const data = {
    labels: [
        'Headshot',
        'Explosive',
        'Melee',
        'Body'
    ],
    datasets: [{
        label: 'Hard Difficulty',
        data: [kill_headshot, kill_explosive, kill_melee, kill_body],
        backgroundColor: [
            '#7D3C98',
            '#3498DB',
            '#239B56',
            '#F8C471',
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
        label: 'Hard Difficulty',
        data: [kill_special, kill_zeke],
        backgroundColor: [
            '#922B21',
            '#2874A6',
        ],
        hoverOffset: 4
    }]
};

// Config Normal
const data3 = {
    labels: [
        'Headshot',
        'Explosive',
        'Melee',
        'Body'
    ],
    datasets: [{
        label: 'Normal Difficulty',
        data: [kill_Nheadshot, kill_Nexplosive, kill_Nmelee, kill_Nbody],
        backgroundColor: [
            '#7D3C98',
            '#3498DB',
            '#239B56',
            '#F8C471',
        ],
        hoverOffset: 4
    }]
};

const data4 = {
    labels: [
        'Special Zeke',
        'Regular Zeke',
    ],
    datasets: [{
        label: 'Normal Difficulty',
        data: [kill_Nspecial, kill_Nzeke],
        backgroundColor: [
            '#922B21',
            '#2874A6',
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
const config3 = {
    type: 'doughnut',
    data: data3,
};

const config4 = {
    type: 'doughnut',
    data: data4,
};


new Chart(ctx, config);
new Chart(ctx2, config2);
new Chart(ctx3, config3);
new Chart(ctx4, config4);

// Stats Variable

document.querySelector('.h-melee').textContent = `${(100 * (kill_melee / totalH)).toFixed(2)}%`;
document.querySelector('.h-explosive').textContent = `${(100 * (kill_explosive / totalH)).toFixed(2)}%`;
document.querySelector('.h-head').textContent = `${(100 * (kill_headshot / totalH)).toFixed(2)}%`;
document.querySelector('.h-body').textContent = `${(100 * (kill_body / totalH)).toFixed(2)}%`;
document.querySelector('.h-special').textContent = `${(100 * (kill_special / totalH)).toFixed(2)}%`;
document.querySelector('.h-zeke').textContent = `${(100 * (kill_zeke / totalH)).toFixed(2)}%`;
document.querySelector('.h-ratio').textContent = `1:${Math.trunc(kill_zeke / kill_special)}`;

document.querySelector('.n-melee').textContent = `${(100 * (kill_Nmelee / totalN)).toFixed(2)}%`;
document.querySelector('.n-explosive').textContent = `${(100 * (kill_Nexplosive / totalN)).toFixed(2)}%`;
document.querySelector('.n-head').textContent = `${(100 * (kill_Nheadshot / totalN)).toFixed(2)}%`;
document.querySelector('.n-body').textContent = `${(100 * (kill_Nbody / totalN)).toFixed(2)}%`;
document.querySelector('.n-special').textContent = `${(100 * (kill_Nspecial / totalN)).toFixed(2)}%`;
document.querySelector('.n-zeke').textContent = `${(100 * (kill_Nzeke / totalN)).toFixed(2)}%`;
document.querySelector('.n-ratio').textContent = `1:${Math.trunc(kill_Nzeke / kill_Nspecial)}`;

document.querySelector('.size-g').textContent = imgData.length;
document.querySelector('.size-p').textContent = imgPdata.length;
// Testing Radar Chart

// let dkill = 0;
// let dspec = 0;
// let dmelee = 0;
// let dexplo = 0
// let dhead = 0;
// let ddmg = 0;

// let skill = 0;
// let sspec = 0;
// let smelee = 0;
// let sexplo = 0;
// let shead = 0;
// let sdmg = 0;

// for (let d = 0; d < playerD.length; d++) {
//     dkill += playerD[d].kill;
//     dspec += playerD[d].special;
//     dmelee += playerD[d].melee;
//     dexplo += playerD[d].explosive;
//     dhead += playerD[d].headshot;
//     ddmg += playerD[d].damage;
// }
// console.log(dkill, dspec, dmelee, dhead, ddmg)

// for (let s = 0; s < playerS.length; s++) {
//     skill += playerS[s].kill;
//     sspec += playerS[s].special;
//     smelee += playerS[s].melee;
//     sexplo += playerS[s].explosive;
//     shead += playerS[s].headshot;
//     sdmg += playerS[s].damage;
// }
// console.log(skill, sspec, smelee, shead, sdmg)

// let dbody = (dkill - dmelee - dexplo - dhead);
// let sbody = (skill - smelee - sexplo - shead);
// console.log(dbody, sbody)

// const dkill_melee = `${Math.trunc(100 * (dmelee) / (dkill))}`;
// const dkill_explosive = `${Math.trunc(100 * (dexplo) / (dkill))}`;
// const dkill_head = `${Math.trunc(100 * (dhead) / (dkill))}`;
// const dkill_body = `${Math.trunc(100 * (dbody) / (dkill))}`;

// const skill_melee = `${Math.trunc(100 * (smelee) / (skill))}`;
// const skill_explosive = `${Math.trunc(100 * (sexplo) / (skill))}`;
// const skill_head = `${Math.trunc(100 * (shead) / (skill))}`;
// const skill_body = `${Math.trunc(100 * (sbody) / (skill))}`;



// // Variables MOD
// const dataM = {
//     labels: [
//         'MELEE',
//         'BODY',
//         'HEADSHOT',
//         'EXPLOSIVE',
//     ],
//     datasets: [{
//         label: 'xD3viLz',
//         data: [dkill_melee, dkill_body, dkill_explosive, dkill_head],
//         fill: true,
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgb(255, 99, 132)',
//         pointBackgroundColor: 'rgb(255, 99, 132)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: 'green',
//     }, {
//         label: 'SiberianPsych0',
//         data: [skill_melee, skill_body, skill_explosive, skill_head],
//         fill: true,
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgb(54, 162, 235)',
//         pointBackgroundColor: 'rgb(54, 162, 235)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: '#f96d00',
//     }]
// };

// const configM = {
//     type: 'polarArea',
//     data: dataM,
//     options: {
//         elements: {
//             line: {
//                 borderWidth: 4,
//             },
//         },
//         scales: {
//             r: {
//                 angleLines: {
//                     color: '#a2a8d3',
//                 },
//                 grid: {
//                     color: '#a2a8d3',
//                 },
//                 pointLabels: {
//                     color: 'Orange'
//                 },
//                 ticks: {
//                     color: 'orange',
//                     backdropColor: '#1e1e1e'
//                 }
//             }
//         }
//     },
// };

// new Chart(ctxM, configM)
