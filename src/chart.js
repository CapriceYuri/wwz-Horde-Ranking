import { chart_dataH, chart_dataN } from './data.js';
import { imgData, imgPdata } from './data.js';

const pg_head = document.querySelector(".pg-head")
const pg_body = document.querySelector(".pg-body")
const pg_ex = document.querySelector(".pg-ex")
const pg_melee = document.querySelector(".pg-melee")

const pg_headN = document.querySelector(".pg-headN")
const pg_bodyN = document.querySelector(".pg-bodyN")
const pg_exN = document.querySelector(".pg-exN")
const pg_meleeN = document.querySelector(".pg-meleeN")


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

// Progress Bat
pg_head.setAttribute('style', `width: ${(100 * (kill_headshot / totalH)).toFixed(2)}%;`);
pg_body.setAttribute('style', `width: ${(100 * (kill_body / totalH)).toFixed(2)}%`);
pg_ex.setAttribute('style', `width: ${(100 * (kill_explosive / totalH)).toFixed(2)}%`);
pg_melee.setAttribute('style', `width: ${(100 * (kill_melee / totalH)).toFixed(2)}%`);

pg_headN.setAttribute('style', `width: ${(100 * (kill_Nheadshot / totalN)).toFixed(2)}%;`);
pg_bodyN.setAttribute('style', `width: ${(100 * (kill_Nbody / totalN)).toFixed(2)}%`);
pg_exN.setAttribute('style', `width: ${(100 * (kill_Nexplosive / totalN)).toFixed(2)}%`);
pg_meleeN.setAttribute('style', `width: ${(100 * (kill_Nmelee / totalN)).toFixed(2)}%`);