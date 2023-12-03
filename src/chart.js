import { chart_dataH, chart_dataN } from './data.js';
import { modA, modM, modT } from './data.js';

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
console.log(kill_zeke / kill_special)

document.querySelector('.n-melee').textContent = `${(100 * (kill_Nmelee / totalN)).toFixed(2)}%`;
document.querySelector('.n-explosive').textContent = `${(100 * (kill_Nexplosive / totalN)).toFixed(2)}%`;
document.querySelector('.n-head').textContent = `${(100 * (kill_Nheadshot / totalN)).toFixed(2)}%`;
document.querySelector('.n-body').textContent = `${(100 * (kill_Nbody / totalN)).toFixed(2)}%`;
document.querySelector('.n-special').textContent = `${(100 * (kill_Nspecial / totalN)).toFixed(2)}%`;
document.querySelector('.n-zeke').textContent = `${(100 * (kill_Nzeke / totalN)).toFixed(2)}%`;
document.querySelector('.n-ratio').textContent = `1:${Math.trunc(kill_Nzeke / kill_Nspecial)}`;
console.log(kill_Nzeke / kill_Nspecial)

// Testing Radar Chart

// Variables MOD
let t_head = 0;
let t_melee = 0;
let t_ex = 0;
let t_special = 0;
let t_common = 0;
let t_pvp = 0;

let m_head = 0;
let m_melee = 0;
let m_ex = 0;
let m_special = 0;
let m_common = 0;
let m_pvp = 0;


let a_head = 0;
let a_melee = 0;
let a_ex = 0;
let a_special = 0;
let a_common = 0;
let a_pvp = 0;


// TINA
for (let t = 0; t < modT.length; t++) {
    if (modT[t].headshot !== undefined) {
        t_head += modT[t].headshot
    }
    if (modT[t].melee !== undefined) {
        t_melee += modT[t].melee
    }
    if (modT[t].explosive !== undefined) {
        t_ex += modT[t].explosive
    }
    if (modT[t].special !== undefined) {
        t_special += modT[t].special
    }
    if (modT[t].common !== undefined) {
        t_common += modT[t].common
    }
    if (modT[t].pvp !== undefined) {
        t_pvp += modT[t].pvp
    }
}

// MEW
for (let m = 0; m < modM.length; m++) {
    if (modM[m].headshot !== undefined) {
        m_head += modM[m].headshot
    }
    if (modM[m].melee !== undefined) {
        m_melee += modM[m].melee
    }
    if (modM[m].explosive !== undefined) {
        m_ex += modM[m].explosive
    }
    if (modM[m].special !== undefined) {
        m_special += modM[m].special
    }
    if (modM[m].common !== undefined) {
        m_common += modM[m].common
    }
    if (modM[m].pvp !== undefined) {
        m_pvp += modM[m].pvp
    }
}

// AEDONIS
for (let a = 0; a < modA.length; a++) {
    if (modA[a].headshot !== undefined) {
        a_head += modA[a].headshot
    }
    if (modA[a].melee !== undefined) {
        a_melee += modA[a].melee
    }
    if (modA[a].explosive !== undefined) {
        a_ex += modA[a].explosive
    }
    if (modA[a].special !== undefined) {
        a_special += modA[a].special
    }
    if (modA[a].common !== undefined) {
        a_common += modA[a].common
    }
    if (modA[a].pvp !== undefined) {
        a_pvp += modA[a].pvp
    }
}

console.log(t_common, t_ex, t_head, t_melee, t_pvp, t_special)
console.log(m_common, m_ex, m_head, m_melee, m_pvp, m_special)
console.log(a_common, a_ex, a_head, a_melee, a_pvp, a_special)

// Percentage Variables
const t_z = `${Math.round(100 * (t_common / (t_common + t_special)))}`
const m_z = `${Math.round(100 * (m_common / (m_common + m_special)))}`
const a_z = `${Math.round(100 * (a_common / (a_common + a_special)))}`

const t_s = `${Math.round(100 * (t_special / (t_common + t_special)))}`
const m_s = `${Math.round(100 * (m_special / (m_common + m_special)))}`
const a_s = `${Math.round(100 * (a_special / (a_common + a_special)))}`

const t_e = `${Math.round(100 * (t_ex / (t_ex + t_head + t_melee + 1)))}`
const m_e = `${Math.round(100 * (m_ex / (m_ex + m_head + m_melee + 1)))}`
const a_e = `${Math.round(100 * (a_ex / (a_ex + a_head + a_melee)))}`

const t_h = `${Math.round(100 * (t_head / (t_ex + t_head + t_melee + 1)))}`
const m_h = `${Math.round(100 * (m_head / (m_ex + m_head + m_melee + 1)))}`
const a_h = `${Math.round(100 * (a_head / (a_ex + a_head + a_melee)))}`

const t_m = `${Math.round(100 * (t_melee / (t_ex + t_head + t_melee + 1)))}`
const m_m = `${Math.round(100 * (m_melee / (m_ex + m_head + m_melee + 1)))}`
const a_m = `${Math.round(100 * (a_melee / (a_ex + a_head + a_melee)))}`

const t_pv = `${Math.round(100 * (t_pvp / (t_pvp + m_pvp + a_pvp)))}`
const m_pv = `${Math.round(100 * (m_pvp / (t_pvp + m_pvp + a_pvp)))}`
const a_pv = `${Math.round(100 * (a_pvp / (t_pvp + m_pvp + a_pvp)))}`

console.log(a_z)

const dataM = {
    labels: [
        'SPECIAL',
        'MELEE',
        'HEADSHOT',
        'EXPLOSIVE',
        'COMMON',
        'PVP',
    ],
    datasets: [{
        label: 'TINA',
        data: [t_s, t_m, t_h, t_e, t_z, t_pv],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: 'green',
    }, {
        label: 'MEW',
        data: [m_s, m_m, m_h, m_e, m_z, m_pv],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#f96d00',
    }, {
        label: 'AEDONIS',
        data: [a_s, a_m, a_h, a_e, a_z, a_pv],
        fill: true,
        backgroundColor: 'rgba(60,179,113,0.2)',
        borderColor: '	rgb(60,179,113)',
        pointBackgroundColor: '	rgb(60,179,113)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#f96d00',
    }]
};

const configM = {
    type: 'radar',
    data: dataM,
    options: {
        elements: {
            line: {
                borderWidth: 4,
            },
        },
        scales: {
            r: {
                angleLines: {
                    color: '#a2a8d3',
                },
                grid: {
                    color: '#a2a8d3',
                },
                pointLabels: {
                    color: 'Orange'
                },
                ticks: {
                    color: 'orange',
                    backdropColor: '#1e1e1e'
                }
            }
        }
    },
};

new Chart(ctxM, configM)

console.log(modA)
console.log(modM)
console.log(modT)