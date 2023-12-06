interface playerInfo {
    player: string,
    wave: string,
    src: string,
    src2?: string,
    team?: string,
    medal?: string
    member?: Array<string>
    date?: string
}

interface imgInfo {
    imgAuthor: string,
    imgUrl: string,
    totalK?: number,
    totalS?: number,
    totalA?: number,
    totalPvP?: number,
}

interface topTen {
    map: string,
    total: number,
    special: number,
    zeke: number,
    melee: number,
    explosive: number,
    head: number,
    body: number,
}

// HORDE HARD DIFFICULTY
const userData_JapanH: Array<playerInfo> = [
    {
        player: 'SiberianPsych0',
        wave: '57',
        src: 'https://www.youtube.com/watch?v=vPT_K6OQxbE&t=63s&ab_channel=SiberianPsych0',
        date: "2/24/2023"
    },
    {
        player: 'ABA-180MM',
        wave: '28',
        src: 'https://www.youtube.com/watch?v=rz3vFs1akc4&ab_channel=JYSoon',
        team: 'solo'
    },
    {
        player: 'Renegade LK',
        wave: '22',
        src: 'https://www.youtube.com/watch?v=uqYB9sQ6lXM&ab_channel=RenegadeLK',
    },
]
const userData_RomeH: Array<playerInfo> = [
    {
        player: 'Horde Legends Team',
        wave: '91',
        src: 'https://www.twitch.tv/videos/1956988311',
        member: ['gogu7382', 'LegioX_Wintersky', 'HiRUnknown', 'Crispokringle'],
        date: "10/21/2023"

    },
    {
        player: 'Maobai Pro Team',
        wave: '81',
        src: 'https://www.youtube.com/watch?v=6Mu7rN6Kka8&list=PLDYihq39QKsn5ne3G3smRkvW-3hd8zOmi&index=2&ab_channel=%E8%B2%93%E7%99%BD',
        src2: 'https://www.youtube.com/watch?v=6Mu7rN6Kka8&list=PLDYihq39QKsn5ne3G3smRkvW-3hd8zOmi&index=2&ab_channel=%E8%B2%93%E7%99%BD'
    },
    {
        player: 'Senku_Jo',
        wave: '58',
        src: 'https://www.youtube.com/watch?v=5h_vln-4_BY&ab_channel=Senku_Jo'
    },
    {
        player: 'ChristDior',
        wave: '55',
        src: 'https://www.youtube.com/watch?v=oACXgWaRPcs&ab_channel=WenHalloWen'
    },
    {
        player: 'Villainize',
        wave: '38',
        src: 'https://www.youtube.com/watch?v=_FMtQh0cYBQ&ab_channel=Villainize'
    },
    {
        player: 'Rabi Knights',
        wave: '35',
        src: 'https://www.youtube.com/watch?v=sGksBUE_05U&ab_channel=%E3%83%A9%E3%83%93%E3%82%A6%E3%82%A3%E3%83%AA%E3%82%A2%E3%83%A0-RabiWilliam-',
        member: ['Rabi William', 'BtypeSasoriza', 'akachan', 'kozaakuracom']
    },
    {
        player: 'KR WWZ Team',
        wave: '34',
        src: 'https://www.youtube.com/watch?v=VQnrGE4ixkY',
        member: ['모나헌스', 'ChickenBritto', 'Zaitsev_SFC', 'мεясεdεѕ εїз']
    },
    {
        player: 'Bens',
        wave: '21',
        src: 'https://www.youtube.com/watch?v=MYpAjIDUjyM&ab_channel=Bensu%C3%B6zg%C3%BCr',
    },
    {
        player: 'SiberianPsych0',
        wave: '20',
        src: 'https://www.youtube.com/watch?v=xvGjaTjMauM&ab_channel=SiberianPsych0',
        team: 'solo'
    },
]
const userData_SKH: Array<playerInfo> = [
    {
        player: 'FengChen1998',
        wave: '97',
        src: 'https://www.bilibili.com/video/BV1Yz4y1w7GA?p=1',
        src2: 'https://www.bilibili.com/video/BV1Yz4y1w7GA?p=3',
        date: "11/14/2023"
    },
    {
        player: 'Horde Legends Team',
        wave: '86',
        src: 'https://www.twitch.tv/videos/1963207322',
        member: ['gogu7382', 'HiRUnknown', 'LegioX_Wintersky', 'Crispokringle']
    },
    {
        player: 'Humildad',
        wave: '64',
        src: 'https://www.youtube.com/watch?v=usyUM4H49_s&t=8779s&ab_channel=KimPetrasandGames',
        member: ['tokuhime1582', 'LegioX_Wintersky', 'MVP_popeye', 'PsychoPenetrador']
    },
    {
        player: 'WesleyAnge',
        wave: '61',
        src: 'https://www.youtube.com/watch?v=zGT5wC5MUBI&ab_channel=WesleyAnge',
    },
    {
        player: 'SiberianPsych0',
        wave: '41',
        src: 'https://www.youtube.com/watch?v=8wIvRcx-KJg&ab_channel=SiberianPsych0',
    },
    {
        player: 'FmeABA',
        wave: '28',
        src: 'https://www.youtube.com/watch?v=9T2hIIwFRNA&ab_channel=JYSoon',
        team: 'solo'
    },
    {
        player: 'VenaTix',
        wave: '24',
        src: 'https://www.youtube.com/watch?v=NddhpAdhLss&ab_channel=Venatix',
    },
    {
        player: 'Rainiere13',
        wave: '21',
        src: 'https://www.youtube.com/watch?v=S_Mr8DdkNX4&ab_channel=Rainiere888',
        team: 'solo'
    },
    {
        player: 'ChristDior',
        wave: '44',
        src: 'https://www.youtube.com/watch?v=tFKrW7J7DDk',
    },
    // {
    //     player: '睡姿决定发型',
    //     wave: '86',
    //     src: 'https://www.youtube.com/watch?v=ALT7tc8lYTA&ab_channel=yyz',
    // },
    {
        player: 'Maobai Pro Team',
        wave: '94',
        src: 'https://www.youtube.com/watch?v=miwXKuSSlco&t=407s',
        date: "9/28/2023"
    },
]
const userData_NYH: Array<playerInfo> = [
    {
        player: 'Maobai Pro Team',
        wave: '82',
        src: 'https://www.youtube.com/watch?v=KCjRrQSbEWQ',
        date: "9/23/2023"
    },
    {
        player: 'SiberianPsych0',
        wave: '70',
        src: 'https://www.youtube.com/watch?v=Ao2Fd6WEdB4&ab_channel=SiberianPsych0',
    },
    {
        player: 'Senku_Jo',
        wave: '50',
        src: 'https://www.youtube.com/watch?v=phaws8OfxVY&t=38s&ab_channel=Senku_Jo',
    },
    {
        player: ` `,
        wave: '2',
        src: 'https://www.twitch.tv/videos/1966672798',
    },
    {
        player: 'ChristDior',
        wave: '36',
        src: 'https://www.youtube.com/watch?v=tl7vDhrzoq4&ab_channel=WenHalloWen',
    },
]
const userData_JH: Array<playerInfo> = [
    {
        player: 'Maobai Pro Team',
        wave: '90',
        src: 'https://www.bilibili.com/video/BV1bc411Q71D/?spm_id_from=333.337.search-card.all.click',
        date: "11/30/2023"
    },
    // {
    //     player: 'Maobai Pro Team',
    //     wave: '81',
    //     src: 'https://www.youtube.com/watch?v=AkU3kfc2TLU&ab_channel=yyz',
    //     date: "10/22/2023"
    // },
    {
        player: 'SiberianPsych0',
        wave: '60',
        src: 'https://www.youtube.com/watch?v=in3Vo60pWzo',
    },
    {
        player: 'ChristDior',
        wave: '39',
        src: 'https://www.youtube.com/watch?v=OM_aEhlP_z8&ab_channel=WenHalloWen',
    },
]


// HORDE NORMAL DIFFICULTY
const userData_JapanN: Array<playerInfo> = [
    {
        player: 'Senku_Jo',
        wave: '66',
        src: 'https://www.youtube.com/watch?v=guZsazMirJI&ab_channel=Senku_Jo',
        date: "6/9/2023"
    },
    {
        player: 'LG Feared',
        wave: '39',
        src: 'https://www.youtube.com/watch?v=WDDavXYXxgw&t=430s&ab_channel=LGFeared',
    },
    {
        player: 'bomicbon',
        wave: '34',
        src: 'https://www.youtube.com/watch?v=CjFBEdCUWmE&ab_channel=bomicbon',
    },
    {
        player: 'titojimmyyy',
        wave: '32',
        src: 'https://www.youtube.com/watch?v=hwuhoOitGNI',
    },
    {
        player: 'ZelexFPS',
        wave: '21',
        src: 'https://www.youtube.com/watch?v=E_GUah51jFI&ab_channel=ZelexFPS',
    },
    {
        player: 'RD_1998',
        wave: '27',
        src: 'https://www.youtube.com/watch?v=pPBRclSTVQA&ab_channel=Pickledrice',
    },
    {
        player: 'Gamexia',
        wave: '24',
        src: 'https://www.youtube.com/watch?v=JEyxMAF1HSM&ab_channel=GAMEXIA',
    },
    {
        player: 'Bonushoe',
        wave: '24',
        src: 'https://www.youtube.com/watch?v=V3VBannYs2U&ab_channel=BonusGamingBattleGround',
    },
]
const userData_RomeN: Array<playerInfo> = [
    {
        player: 'E7S4',
        wave: '49',
        src: 'https://www.twitch.tv/videos/1963898798',
        date: "10/29/2023"
    },
    {
        player: 'PheaktraCapo',
        wave: '35',
        src: 'https://www.youtube.com/watch?v=W4Si4I8kVt4&ab_channel=GamingHouse-byCAPO',
    },
    {
        player: 'ebabyz',
        wave: '33',
        src: 'https://www.youtube.com/watch?v=AHNBx1e54m4&ab_channel=EBABYZ',
    },
    {
        player: 'Gamexia',
        wave: '33',
        src: 'https://www.youtube.com/watch?v=SeG1MoI8ByA&ab_channel=GAMEXIA',
    },
    {
        player: 'Teee-I',
        wave: '26',
        src: 'https://www.youtube.com/watch?v=r5KWOwO2ol0&ab_channel=Tee-I',
        src2: 'https://www.youtube.com/watch?v=cUrL47_PffM&ab_channel=Tee-I'
    },
    {
        player: 'NieR 777',
        wave: '24',
        src: 'https://www.youtube.com/watch?v=kpsTejPLUsY&ab_channel=NieRGaming',
    },
    {
        player: 'GreatDragolas',
        wave: '19',
        src: 'https://www.youtube.com/watch?v=WY3A_7or2jI&ab_channel=FireTeamShooters',
    },
]
const userData_SKN: Array<playerInfo> = [
    {
        player: 'BiggiBossss',
        wave: '69',
        src: 'https://www.youtube.com/watch?v=OHzrAOsY7C4&ab_channel=BiggiBossss-%D0%9D%D0%B5%D0%94%D0%BE%D0%A1%D1%82%D1%80%D0%B8%D0%BC%D1%8B',
        src2: 'https://www.youtube.com/watch?v=ARLNlsqMN0I&ab_channel=BiggiBossss-%D0%9D%D0%B5%D0%94%D0%BE%D0%A1%D1%82%D1%80%D0%B8%D0%BC%D1%8B'
    },
    {
        player: 'WarCrabft',
        wave: '55',
        src: 'https://www.youtube.com/watch?v=tjRUXaquzTg&t=2551s&ab_channel=ManaGroveNoCommentaryGameplays',
    },
    {
        player: 'A.damz',
        wave: '39',
        src: 'https://www.youtube.com/watch?v=6umXwNlY7A4&t=1421s&ab_channel=Qu%C3%A2nQuanhQu%E1%BA%A9n',
    },
    {
        player: 'HunkGeniX59',
        wave: '27',
        src: 'https://www.youtube.com/watch?v=vyfBu5ZlGRY&ab_channel=HunkGeniX59',
    },
    {
        player: 'Abiyu',
        wave: '20',
        src: 'https://www.youtube.com/watch?v=03BiVciXuew&ab_channel=AbiyyuChannel',
    },
    {
        player: 'Avoki',
        wave: '101',
        src: 'https://www.youtube.com/watch?v=KgaB9Hxr0_A&ab_channel=luisfelipemognon',
        member: ['bolaxadomar', 'CristianKD_', 'Mano_Pipoca'],
        date: "10/23/2023"
    },

]
const userData_NYN: Array<playerInfo> = [
    {
        player: 'ChristDior',
        wave: '60',
        src: 'https://www.youtube.com/watch?v=FeasDPsB5Fg&ab_channel=WenHalloWen',
        date: "4/1/2023"
    },
    {
        player: 'Renegade LK',
        wave: '31',
        src: 'https://www.youtube.com/watch?v=oXVFK3sWhAE&t=28s&ab_channel=RenegadeLK',
    },
    {
        player: 'yahowyada',
        wave: '30',
        src: 'https://www.youtube.com/watch?v=Zg-UzLFCNjc&t=8160s&ab_channel=yahowyadaTV',
    },
    {
        player: 'SGTBrianTheYoshi',
        wave: '23',
        src: 'https://www.youtube.com/watch?v=aWv8QJW8wQw',
    },
    {
        player: 'Sherm',
        wave: '22',
        src: 'https://www.youtube.com/watch?v=GSXyLCjqqT4&t=2288s&ab_channel=Wenox',
        team: 'solo'
    },
]
const userData_JN: Array<playerInfo> = [
    {
        player: 'Senku_Jo',
        wave: '55',
        src: 'https://www.youtube.com/watch?v=VRUy7Q9YTqg&ab_channel=Senku_Jo2',
        date: "6/2/2023"
    },
    {
        player: 'Renegade LK',
        wave: '30',
        src: 'https://www.youtube.com/watch?v=BixQEj5t5eo&ab_channel=RenegadeLK',
    },
    {
        player: 'ApSingh01',
        wave: '30',
        src: 'https://www.youtube.com/watch?v=H3sfQw7BB8A&ab_channel=ApSinghGaming',
    },
    {
        player: 'Gamexia',
        wave: '17',
        src: 'https://www.youtube.com/watch?v=53kbtUlM2Dk&ab_channel=GAMEXIA',
    },
    {
        player: 'Mr.Mimo',
        wave: '17',
        src: 'https://www.youtube.com/watch?v=Deg5QdBUBv8&ab_channel=GamingTamari',
    },
]

const data = [userData_JapanH, userData_RomeH, userData_SKH, userData_NYH, userData_JH, userData_JapanN, userData_RomeN, userData_SKN, userData_NYN, userData_JN]

// EXPORT DATA , RECORD (H)
export { userData_JapanH, userData_RomeH, userData_SKH, userData_NYH, userData_JH };
// EXPORT DATA, RECORD (N)
export { userData_JapanN, userData_RomeN, userData_SKN, userData_NYN, userData_JN };
// FULL DATA
export { data }

// BOX GALLERY

const imgData: Array<imgInfo> = [
    {
        imgAuthor: "Maobai",
        imgUrl: "img14",
        totalK: 151814,
        totalS: 2291,
        totalA: 5785,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img1",
        totalK: 118244,
        totalS: 1698,
        totalA: 4165,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img2",
        totalK: 153373,
        totalS: 2745,
        totalA: 4439,
    },
    {
        imgAuthor: "Wintersky_Legendary",
        imgUrl: "img3",
        totalK: 108484,
        totalS: 1972,
        totalA: 6508,
    },
    {
        imgAuthor: "lol",
        imgUrl: "img4",
        totalK: 152590,
        totalS: 2303,
        totalA: 4999,
    },
    {
        imgAuthor: "XxFriction",
        imgUrl: "img5",
        totalK: 89711,
        totalS: 1572,
        totalA: 3293,
    },
    {
        imgAuthor: "XxFriction",
        imgUrl: "img12",
        totalK: 52084,
        totalS: 1013,
        totalA: 1494,
    },
    {
        imgAuthor: "gogu",
        imgUrl: "img6",
        totalK: 127690,
        totalS: 1972,
        totalA: 6508,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img7",
        totalK: 126434,
        totalS: 1300,
        totalA: 2740,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img8",
        totalK: 122247,
        totalS: 2421,
        totalA: 1579,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img9",
        totalK: 126747,
        totalS: 1926,
        totalA: 882,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img10",
        totalK: 29463,
        totalS: 313,
        totalA: 1610,
    },
    {
        imgAuthor: "Maobai",
        imgUrl: "img11",
        totalK: 130097,
        totalS: 1925,
        totalA: 4087,
    },
    {
        imgAuthor: "BudiPratomo",
        imgUrl: "img13",
        totalK: 77546,
        totalS: 1314,
        totalA: 1878,
    },
]

const imgPdata: Array<imgInfo> = [
    {
        imgAuthor: 'ABA-180MM',
        imgUrl: "p24",
        totalK: 2308,
        totalS: 33,
        totalPvP: 0,
    },
    {
        imgAuthor: 'ABA-180MM',
        imgUrl: "p23",
        totalK: 2032,
        totalS: 40,
        totalPvP: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p22",
        totalK: 213,
        totalS: 0,
        totalPvP: 82,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p21",
        totalK: 353,
        totalS: 0,
        totalPvP: 104,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p20",
        totalK: 389,
        totalS: 0,
        totalPvP: 136,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p19",
        totalK: 317,
        totalS: 0,
        totalPvP: 132,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p18",
        totalK: 122,
        totalS: 0,
        totalPvP: 71,
    },
    {
        imgAuthor: 'Aedonis',
        imgUrl: "p17",
        totalK: 2576,
        totalS: 38,
        totalPvP: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p15",
        totalK: 262,
        totalS: 0,
        totalPvP: 80,
    },
    {
        imgAuthor: 'Aedonis',
        imgUrl: "p14",
        totalK: 1842,
        totalS: 40,
        totalPvP: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p13",
        totalK: 93,
        totalS: 0,
        totalPvP: 16,
    },
    {
        imgAuthor: "ABA",
        imgUrl: "p12",
        totalK: 1192,
        totalS: 24,
        totalPvP: 0,
    },
    {
        imgAuthor: 'Mewtality',
        imgUrl: "p1",
        totalK: 186,
        totalPvP: 40,
        totalS: 0,
    },
    {
        imgAuthor: 'Mewtality',
        imgUrl: "p2",
        totalK: 191,
        totalPvP: 102,
        totalS: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p3",
        totalK: 3056,
        totalS: 47,
        totalPvP: 0,
    },
    {
        imgAuthor: 'Zim',
        imgUrl: "p4",
        totalK: 2923,
        totalS: 36,
        totalPvP: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p5",
        totalK: 2114,
        totalS: 54,
        totalPvP: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p6",
        totalK: 200,
        totalPvP: 72,
        totalS: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p7",
        totalK: 433,
        totalPvP: 77,
        totalS: 0,
    },
    {
        imgAuthor: 'Mewtality',
        imgUrl: "p8",
        totalK: 341,
        totalPvP: 106,
        totalS: 0,
    },
    {
        imgAuthor: 'ACE 𝔗𝔦𝔫𝔞 𓆩♡𓆪',
        imgUrl: "p9",
        totalK: 3276,
        totalS: 86,
        totalPvP: 0,
    },
    {
        imgAuthor: 'xD3viLzx',
        imgUrl: "p10",
        totalPvP: 0,
        totalS: 0,
        totalK: 0,
    },
    {
        imgAuthor: 'xD3viLzx',
        imgUrl: "p11",
        totalPvP: 0,
        totalS: 0,
        totalK: 0,
    },
]

export { imgData, imgPdata }

// Charting Data
const chart_dataH: Array<topTen> = [
    {
        map: 'tokyoH',
        total: 74704,
        special: 1435,
        zeke: 73269,
        melee: 559,
        explosive: 5881,
        head: 3802,
        body: 64462,
    },
    {
        map: 'romeH',
        total: 122835,
        special: 2106,
        zeke: 120729,
        melee: 1306,
        explosive: 15759,
        head: 2377,
        body: 103393,
    },
    {
        map: 'koreaH',
        total: 134002,
        special: 1956,
        zeke: 132046,
        melee: 300,
        explosive: 26838,
        head: 4174,
        body: 102690,
    },
    {
        map: 'newyorkH',
        total: 109383,
        special: 1563,
        zeke: 107820,
        melee: 139,
        explosive: 9376,
        head: 2732,
        body: 97136,
    },
    {
        map: 'jerusalem',
        total: 85388,
        special: 1388,
        zeke: 84000,
        melee: 241,
        explosive: 1301,
        head: 4610,
        body: 79236,
    },
]

const chart_dataN: Array<topTen> = [
    {
        map: 'tokyoN',
        total: 69416,
        special: 562,
        zeke: 68854,
        melee: 612,
        explosive: 9640,
        head: 1632,
        body: 57532,
    },
    {
        map: 'romeN',
        total: 13531,
        special: 105,
        zeke: 13426,
        melee: 183,
        explosive: 930,
        head: 451,
        body: 11967,
    },
    {
        map: 'koreaN',
        total: 116632,
        special: 1659,
        zeke: 114973,
        melee: 1140,
        explosive: 11252,
        head: 5411,
        body: 98829,
    },
    {
        map: 'newyorkN',
        total: 53261,
        special: 390,
        zeke: 52871,
        melee: 481,
        explosive: 4806,
        head: 2702,
        body: 45272,
    },
    {
        map: 'jerusalemN',
        total: 39329,
        special: 335,
        zeke: 38994,
        melee: 360,
        explosive: 1642,
        head: 1512,
        body: 35815,
    },
]

export { chart_dataH, chart_dataN }