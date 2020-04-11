(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=6)})({6:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(7);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},7:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Champasak.1.06-19-2019 10:37:58
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Champasak",revision:1,creditLabel:false,standaloneInit:false,baseWidth:600,baseHeight:608,baseScaleFactor:10,firstEntity:"LA.CH.PE",entities:{"LA.CH.PE":{outlines:[[M,2368,1151,Q,2368,1145,2335,1158,2331,1159,2321,1164,2312,1168,2310,1169,2270,1190,2254,1190,2247,1190,2243,1187,2229,1189,2193,1183,2155,1175,2147,1174,2065,1158,2048,1158,2027,1158,2014,1169,1999,1187,1984,1198,1955,1220,1952,1223,1940,1233,1931,1247,1937,1253,1944,1259,1984,1292,2007,1313,2029,1333,2051,1341,2074,1348,2076,1356,2079,1365,2083,1376,2086,1386,2092,1393,2105,1411,2123,1422,2132,1428,2154,1439,2156,1440,2158,1441,2171,1452,2191,1458,2212,1464,2232,1465,2253,1466,2281,1481,2308,1495,2313,1507,2322,1529,2326,1546,2331,1563,2331,1587,2332,1602,2357,1626,2370,1638,2388,1655,2391,1659,2395,1665,L,2395,1653,Q,2405,1617,2405,1615,2411,1592,2411,1577,2411,1569,2409,1550,2406,1529,2405,1522,L,2405,1477,Q,2405,1442,2408,1435,2413,1420,2442,1405,2470,1390,2479,1373,2485,1361,2485,1330,2485,1287,2478,1265,2471,1244,2448,1210,2437,1193,2434,1190,2426,1180,2414,1172,2394,1159,2393,1159,Q,2380,1152,2368,1151,Z]],label:"Pak Sé District",shortLabel:"PE",labelPosition:[222.2,130.5],labelAlignment:[CEN,MID],nextId:"LA.CH.SA"},"LA.CH.SA":{outlines:[[M,2044,141,Q,2019,116,2008,107,1990,92,1978,92,1963,92,1906,141,1851,190,1814,190,1777,190,1718,136,1660,82,1632,82,1600,82,1560,128,1525,176,1518,182,1510,192,1491,194,1482,195,1455,195,1445,195,1416,202,1386,209,1380,214,1316,281,1240,290,1224,292,1151,310,1107,321,1049,315,1033,313,1012,335,998,348,978,375,964,395,961,410,960,416,960,450,960,476,971,531,985,595,1e3,610,1002,613,1025,628,1049,645,1057,649,1084,664,1112,670,1140,674,1140,664,1150,664,1181,658,1215,652,1222,652,1257,652,1296,649,1335,645,1351,643,1366,641,1374,643,1380,644,1392,644,1405,630,1428,599,1449,573,1473,573,1492,573,1507,591,1514,602,1533,627,1542,635,1561,661,1579,684,1588,692,1638,730,1651,744,1688,783,1688,825,1688,844,1687,850,1686,861,1684,866,L,1683,871,Q,1684,873,1684,875,1686,891,1685,915,1683,942,1688,959,1693,983,1707,1004,1716,1016,1736,1040,1748,1056,1767,1085,1783,1108,1800,1118,1813,1124,1841,1144,1847,1149,1865,1153,1881,1159,1885,1172,1900,1217,1931,1247,1940,1233,1952,1223,1955,1220,1984,1198,1999,1187,2014,1169,2027,1158,2048,1158,2065,1158,2147,1174,2155,1175,2193,1183,2229,1189,2243,1187,2241,1185,2240,1183,2237,1178,2237,1167,2237,1162,2239,1156,2240,1151,2241,1148,2241,1146,2242,1145,2250,1128,2257,1107,2266,1082,2271,1070,2272,1067,2276,1061,2280,1056,2281,1054,L,2281,996,Q,2281,976,2294,955,2305,939,2318,929,2328,921,2348,909,2362,897,2362,882,2362,861,2337,844,2305,828,2293,818,2287,813,2272,807,2258,801,2253,797,2246,791,2245,774,2244,771,2244,745,2244,714,2251,707,2254,703,2291,685,2296,683,2310,675,2324,668,2336,663,2360,654,2374,647,2376,646,2377,646,2391,641,2394,638,2400,629,2397,602,2394,581,2405,560,2418,533,2432,519,2447,506,2478,493,2495,486,2528,470,2556,459,2576,462,2591,464,2619,463,2635,463,2665,462,2667,462,2687,461,2700,461,2706,462,2713,462,2725,460,2732,458,2745,454,2751,452,2784,431,2793,425,2797,413,2801,403,2800,392,2800,379,2811,348,2819,322,2828,306,2830,301,2851,270,2865,249,2867,233,2869,218,2868,190,2867,163,2862,152,2856,142,2845,138,2827,175,2803,175,2766,175,2741,146,2716,117,2697,117,2683,117,2644,140,2605,163,2574,163,2547,163,2527,144,2509,124,2491,124,2474,124,2396,152,2321,180,2319,180,2306,180,2292,163,2278,145,2247,145,2234,145,2192,168,2150,190,2140,190,Q,2095,190,2044,141,Z]],label:"Sanasomboun District",shortLabel:"SA",labelPosition:[191.4,51.9],labelAlignment:[CEN,MID],nextId:"LA.CH.BA"},"LA.CH.BA":{outlines:[[M,3237,272,Q,3293,235,3293,217,3293,185,3225,109,3157,33,3128,33,3107,33,3090,47,3084,53,3063,79,3025,124,2971,124,2953,124,2941,116,2929,107,2921,103,2920,102,2919,102,2916,101,2909,93,2902,87,2884,90,2865,93,2856,115,2846,137,2845,138,2856,142,2862,152,2867,163,2868,190,2869,218,2867,233,2865,249,2851,270,2830,301,2828,306,2819,322,2811,348,2800,379,2800,392,2801,403,2797,413,2793,425,2784,431,2751,452,2745,454,2732,458,2725,460,2713,462,2706,462,2700,461,2687,461,2667,462,2665,462,2635,463,2619,463,2591,464,2576,462,2556,459,2528,470,2495,486,2478,493,2447,506,2432,519,2418,533,2405,560,2394,581,2397,602,2400,629,2394,638,2391,641,2377,646,2376,646,2374,647,2360,654,2336,663,2324,668,2310,675,2296,683,2291,685,2254,703,2251,707,2244,714,2244,745,2244,771,2245,774,2246,791,2253,797,2258,801,2272,807,2287,813,2293,818,2305,828,2337,844,2362,861,2362,882,2362,897,2348,909,2328,921,2318,929,2305,939,2294,955,2281,976,2281,996,L,2281,1054,Q,2280,1056,2276,1061,2272,1067,2271,1070,2266,1082,2257,1107,2250,1128,2242,1145,2241,1146,2241,1148,2240,1151,2239,1156,2237,1162,2237,1167,2237,1178,2240,1183,2241,1185,2243,1187,2247,1190,2254,1190,2270,1190,2310,1169,2312,1168,2321,1164,2331,1159,2335,1158,2368,1145,2368,1151,2380,1152,2393,1159,2394,1159,2414,1172,2426,1180,2434,1190,2437,1193,2448,1210,2471,1244,2478,1265,2485,1287,2485,1330,2485,1361,2479,1373,2470,1390,2442,1405,2413,1420,2408,1435,2405,1442,2405,1477,L,2405,1522,Q,2406,1529,2409,1550,2411,1569,2411,1577,2411,1592,2405,1615,2405,1617,2395,1653,L,2395,1665,Q,2395,1665,2396,1666,2410,1688,2434,1731,2435,1733,2436,1734,L,2436,1734,Q,2443,1730,2467,1708,L,2484,1697,Q,2490,1691,2499,1692,2504,1692,2507,1693,L,2547,1696,Q,2565,1696,2593,1682,2641,1662,2658,1655,2665,1653,2732,1632,2776,1617,2805,1605,2831,1592,2872,1580,2879,1579,2942,1561,2958,1557,3017,1547,3076,1537,3078,1541,3079,1544,3101,1546,3123,1548,3140,1552,3169,1556,3193,1550,3199,1550,3202,1552,3206,1554,3207,1561,3208,1563,3209,1566,3212,1540,3214,1526,3216,1502,3216,1485,L,3216,1310,Q,3216,1298,3216,1291,3216,1278,3214,1272,3213,1269,3193,1239,3188,1239,3163,1263,3133,1292,3126,1297,3093,1322,3078,1333,3052,1351,3036,1351,2993,1351,2976,1322,2965,1302,2965,1264,2965,1245,2968,1235,2972,1225,2988,1202,3009,1173,3008,1149,3014,1138,3030,1100,3042,1069,3054,1048,3059,1037,3061,996,3062,953,3062,939,3064,899,3064,883,3066,855,3079,826,3087,807,3105,782,3127,751,3132,743,3133,742,3134,742,3141,738,3146,727,3148,724,3154,704,3160,686,3172,665,3173,662,3184,648,3195,634,3199,629,3209,618,3214,609,3217,607,3230,607,3245,607,3268,625,3279,635,3295,649,3304,655,3327,671,3349,682,3371,679,3370,677,3370,676,3366,623,3357,608,3336,567,3325,550,3306,521,3279,517,3154,495,3154,473,3154,464,3170,444,3187,426,3186,402,3184,341,3184,329,Q,3182,308,3237,272,Z]],label:"Bachiangchaleunsouk District",shortLabel:"BA",labelPosition:[268.8,88.4],labelAlignment:[CEN,MID],nextId:"LA.CH.PG"},"LA.CH.PG":{outlines:[[M,4995,656,Q,4970,650,4917,651,L,4765,654,Q,4730,654,4689,630,4668,617,4626,583,4607,567,4581,518,4553,463,4543,444,4524,411,4483,327,4461,285,4449,273,4435,260,4407,258,4360,258,4319,258,4211,258,4193,280,L,4172,337,Q,4155,380,4133,380,4126,380,4091,366,4056,351,4039,351,4014,351,3971,408,3931,466,3924,471,3905,485,3841,510,3764,538,3758,541,3711,564,3686,597,3669,620,3643,676,3615,738,3589,760,3567,778,3529,778,3486,778,3470,772,3439,753,3396,730,3374,718,3371,679,3349,682,3327,671,3304,655,3295,649,3279,635,3268,625,3245,607,3230,607,3217,607,3214,609,3209,618,3199,629,3195,634,3184,648,3173,662,3172,665,3160,686,3154,704,3148,724,3146,727,3141,738,3134,742,3133,742,3132,743,3127,751,3105,782,3087,807,3079,826,3066,855,3064,883,3064,899,3062,939,3062,953,3061,996,3059,1037,3054,1048,3042,1069,3030,1100,3014,1138,3008,1149,3009,1173,2988,1202,2972,1225,2968,1235,2965,1245,2965,1264,2965,1302,2976,1322,2993,1351,3036,1351,3052,1351,3078,1333,3093,1322,3126,1297,3133,1292,3163,1263,3188,1239,3193,1239,3213,1269,3214,1272,3216,1278,3216,1291,3216,1298,3216,1310,L,3216,1485,Q,3216,1502,3214,1526,3212,1540,3209,1566,3212,1580,3212,1586,3213,1600,3213,1637,3213,1669,3213,1679,3212,1705,3209,1724,3209,1726,3209,1728,3207,1747,3217,1755,3225,1761,3250,1761,3272,1761,3288,1755,3304,1750,3333,1750,3391,1750,3420,1757,3425,1758,3498,1785,3524,1795,3538,1805,3557,1821,3562,1844,3565,1862,3571,1888,3574,1909,3574,1928,3574,1949,3569,1983,3561,2031,3560,2037,3555,2070,3567,2115,3578,2158,3600,2194,3603,2199,3640,2265,3662,2303,3683,2328,3690,2317,3704,2303,3730,2278,3734,2271,3744,2254,3751,2227,3758,2201,3764,2189,3782,2155,3824,2125,3865,2095,3901,2088,3977,2070,3990,2063,4024,2046,4024,2003,4024,1982,4013,1957,4002,1932,4002,1920,L,4030,1903,Q,4060,1883,4067,1873,4068,1870,4087,1830,4107,1792,4118,1792,4124,1792,4159,1818,4195,1844,4215,1844,4228,1844,4252,1838,4275,1832,4293,1832,4330,1832,4372,1875,4396,1898,4438,1945,4468,1973,4470,1976,4486,1994,4497,2017,4501,2029,4509,2058,4519,2082,4539,2082,4569,2082,4580,2073,4590,2066,4592,2048,4594,2026,4596,2011,4601,1985,4616,1963,4623,1951,4653,1935,4664,1929,4698,1914,4706,1910,4742,1883,4772,1861,4785,1861,4801,1861,4803,1875,4803,1875,4803,1898,4803,1939,4782,1997,4760,2054,4760,2116,4760,2147,4774,2180,4780,2197,4787,2213,4787,2232,4735,2249,4682,2266,4682,2276,4682,2296,4725,2321,4768,2345,4768,2370,4768,2388,4739,2408,4710,2429,4710,2455,4710,2480,4725,2500,4733,2511,4737,2523,4737,2524,4737,2525,4737,2526,4738,2528,4743,2550,4761,2573,4793,2614,4813,2632,4832,2650,4834,2656,4835,2662,4861,2677,4887,2692,4899,2693,4912,2693,4914,2690,L,4914,2690,Q,4950,2689,5008,2662,5068,2635,5071,2635,5090,2635,5098,2658,5101,2666,5107,2710,5118,2785,5173,2785,5194,2785,5210,2762,5234,2730,5238,2727,5245,2722,5267,2692,5290,2664,5308,2664,5342,2664,5354,2695,5357,2702,5362,2716,5367,2725,5375,2725,5376,2725,5426,2692,5478,2659,5489,2654,5512,2642,5532,2628,5567,2602,5567,2578,5567,2547,5533,2525,5498,2503,5498,2478,5498,2454,5542,2404,5567,2376,5618,2326,5621,2323,5690,2269,5737,2232,5743,2203,5755,2203,5804,2208,5829,2211,5840,2199,5856,2184,5870,2158,5875,2151,5899,2107,5900,2105,5932,2065,5959,2031,5959,2020,L,5956,1921,Q,5956,1919,5956,1917,5957,1875,5954,1836,5950,1776,5949,1762,5953,1715,5953,1691,5952,1647,5924,1608,5900,1573,5892,1525,5883,1466,5875,1449,5868,1431,5814,1380,5754,1324,5729,1324,5717,1324,5702,1341,5685,1359,5660,1359,L,5620,1351,Q,5615,1351,5581,1366,5546,1380,5521,1380,5471,1380,5402,1363,5314,1342,5314,1311,5314,1292,5365,1246,5406,1209,5431,1195,5462,1176,5470,1133,5472,1109,5472,1060,5472,1002,5471,996,5470,973,5460,959,5451,947,5350,876,5348,873,5345,872,5308,843,5225,793,5124,732,5071,693,Q,5031,664,4995,656,Z]],label:"Paksong District",shortLabel:"PG",labelPosition:[446.2,125.2],labelAlignment:[CEN,MID],nextId:"LA.CH.PT"},"LA.CH.PT":{outlines:[[M,3209,1566,Q,3208,1563,3207,1561,3206,1554,3202,1552,3199,1550,3193,1550,3169,1556,3140,1552,3123,1548,3101,1546,3079,1544,3078,1541,3076,1537,3017,1547,2958,1557,2942,1561,2879,1579,2872,1580,2831,1592,2805,1605,2776,1617,2732,1632,2665,1653,2658,1655,2641,1662,2593,1682,2565,1696,2547,1696,L,2507,1693,2507,1694,Q,2507,1693,2506,1693,L,2507,1693,Q,2504,1692,2499,1692,2490,1691,2484,1697,L,2467,1708,Q,2443,1730,2436,1734,2474,1805,2483,1819,2503,1854,2522,1906,2526,1917,2533,1948,2538,1968,2550,1986,2550,1987,2551,1988,2551,2044,2543,2157,2538,2201,2514,2254,2491,2303,2491,2339,2491,2421,2496,2449,2499,2461,2505,2505,2514,2544,2531,2547,2546,2562,2581,2599,2614,2631,2633,2642,2659,2657,2680,2690,2700,2722,2700,2747,2700,2791,2681,2831,2666,2864,2627,2915,2586,2971,2566,3005,2550,3034,2493,3098,2493,3099,2492,3100,2486,3119,2453,3207,2446,3225,2439,3245,2389,3390,2389,3438,2389,3476,2398,3504,2408,3541,2413,3590,2414,3599,2423,3673,2427,3709,2427,3741,L,2426,3795,Q,2426,3794,2427,3793,L,2428,3793,Q,2585,3865,2646,3897,2647,3897,2648,3898,2656,3903,2701,3933,2732,3954,2765,3982,2776,3991,2789,4005,2796,4013,2809,4028,2819,4039,2830,4048,2837,4054,2853,4066,2860,4072,2876,4088,2889,4103,2896,4107,2901,4110,2924,4120,2943,4128,2956,4140,2989,4170,2998,4187,3006,4203,3006,4236,3006,4267,3005,4275,3004,4290,2994,4322,3005,4332,3024,4352,3070,4397,3103,4397,3119,4397,3137,4386,3155,4376,3169,4376,3178,4376,3199,4393,3220,4410,3238,4410,3260,4410,3279,4359,3308,4285,3308,4284,3316,4289,3341,4314,3359,4330,3383,4330,3401,4330,3422,4315,3443,4299,3465,4299,3478,4299,3490,4310,3497,4315,3512,4330,3545,4361,3596,4361,3624,4361,3650,4343,3691,4317,3701,4312,3719,4304,3764,4260,3806,4218,3808,4211,3824,4172,3831,4150,3845,4111,3845,4092,3846,4052,3866,4032,3885,4012,3885,3987,3885,3967,3880,3936,3876,3906,3876,3889,3876,3861,3876,3860,3878,3845,3892,3845,3905,3845,3931,3859,3959,3872,4007,3875,4027,3877,4035,3905,4040,3922,4047,3955,4058,3989,4138,4007,4167,4013,4208,4019,4247,4025,4259,4025,4274,4025,4285,4019,4297,4012,4297,4e3,4297,3985,4256,3933,4214,3881,4214,3851,4214,3820,4236,3784,4257,3747,4257,3722,4257,3708,4242,3702,4233,3699,4206,3697,4147,3694,4129,3667,4122,3657,4123,3637,4126,3615,4126,3604,4126,3593,4112,3581,4089,3559,4083,3552,4039,3498,4001,3462,3970,3435,3962,3426,3951,3414,3950,3392,3949,3386,3949,3311,3949,3274,3949,3267,3947,3248,3940,3238,L,3938,3238,3938,3174,Q,3937,3161,3918,3155,3893,3150,3883,3147,3865,3141,3866,3121,3871,3098,3874,3089,3876,3080,3875,3053,3874,3027,3861,3020,3849,3013,3808,3013,3769,3013,3752,3012,3706,3009,3678,2938,3645,2858,3587,2855,3562,2854,3555,2847,3543,2835,3543,2793,3543,2766,3584,2727,3625,2688,3625,2685,3625,2674,3601,2641,3576,2608,3576,2572,3576,2551,3584,2538,3600,2515,3605,2505,3606,2503,3607,2500,3651,2457,3678,2339,3679,2334,3683,2328,3662,2303,3640,2265,3603,2199,3600,2194,3578,2158,3567,2115,3555,2070,3560,2037,3561,2031,3569,1983,3574,1949,3574,1928,3574,1909,3571,1888,3565,1862,3562,1844,3557,1821,3538,1805,3524,1795,3498,1785,3425,1758,3420,1757,3391,1750,3333,1750,3304,1750,3288,1755,3272,1761,3250,1761,3225,1761,3217,1755,3207,1747,3209,1728,3209,1726,3209,1724,3212,1705,3213,1679,3213,1669,3213,1637,3213,1600,3212,1586,Q,3212,1580,3209,1566,Z]],label:"Pathoumphone District",shortLabel:"PT",labelPosition:[314,297.5],labelAlignment:[CEN,MID],nextId:"LA.CH.PH"},"LA.CH.PH":{outlines:[[M,1685,915,Q,1686,891,1684,875,1684,873,1683,871,L,1684,866,Q,1686,861,1687,850,1688,844,1688,825,1688,783,1651,744,1638,730,1588,692,1579,684,1561,661,1542,635,1533,627,1514,602,1507,591,1492,573,1473,573,1449,573,1428,599,1405,630,1392,644,1396,644,1401,643,1419,642,1442,677,1465,713,1465,762,1465,805,1462,811,1454,826,1411,832,1369,833,1351,836,1321,840,1301,862,1282,885,1219,940,1163,989,1143,1015,1092,1081,1083,1096,1054,1142,1045,1188,1043,1206,1037,1241,1031,1271,1024,1286,1017,1302,999,1335,987,1363,985,1383,986,1383,986,1386,987,1390,987,1401,987,1453,1039,1480,1080,1501,1146,1505,1170,1505,1188,1547,1206,1590,1219,1593,1243,1600,1281,1594,1307,1595,1307,1630,1307,1638,1301,1691,1301,1714,1316,1724,1326,1731,1358,1748,1375,1759,1385,1790,1396,1825,1399,1827,1419,1852,1492,1874,1554,1893,1554,1914,1554,1925,1528,1957,1557,1971,1638,2013,1695,2042,1767,2061,1806,2073,1833,2073,1859,2073,1876,2064,1888,2058,1922,2036,1962,2011,1962,2010,1973,2005,1984,2004,1999,2001,2005,1999,2028,1992,2066,1940,2099,1895,2139,1894,L,2139,1893,2140,1894,Q,2141,1892,2151,1893,2164,1895,2176,1905,2193,1918,2193,1940,2192,1946,2196,1956,2200,1966,2207,1970,2218,1976,2226,1983,2231,1985,2240,1985,2250,1985,2281,1966,2304,1952,2317,1942,2332,1930,2342,1902,2352,1872,2357,1861,2369,1831,2372,1826,2374,1822,2375,1808,2376,1794,2378,1789,2384,1776,2402,1760,2411,1751,2433,1737,L,2436,1734,Q,2435,1733,2434,1731,2410,1688,2396,1666,L,2395,1666,2395,1665,Q,2391,1659,2388,1655,2370,1638,2357,1626,2332,1602,2331,1587,2331,1563,2326,1546,2322,1529,2313,1507,2308,1495,2281,1481,2253,1466,2232,1465,2212,1464,2191,1458,2171,1452,2158,1441,2156,1440,2154,1439,2132,1428,2123,1422,2105,1411,2092,1393,2086,1386,2083,1376,2079,1365,2076,1356,2074,1348,2051,1341,2029,1333,2007,1313,1984,1292,1944,1259,1937,1253,1931,1247,1900,1217,1885,1172,1881,1159,1865,1153,1847,1149,1841,1144,1813,1124,1800,1118,1783,1108,1767,1085,1748,1056,1736,1040,1716,1016,1707,1004,1693,983,1688,959,Q,1683,942,1685,915,Z]],label:"Phonthong District",shortLabel:"PH",labelPosition:[162,145.8],labelAlignment:[CEN,MID],nextId:"LA.CH.CH"},"LA.CH.CH":{outlines:[[M,2402,1760,Q,2384,1776,2378,1789,2376,1794,2375,1808,2374,1822,2372,1826,2369,1831,2357,1861,2352,1872,2342,1902,2332,1930,2317,1942,2304,1952,2281,1966,2250,1985,2240,1985,2231,1985,2226,1983,2218,1976,2207,1970,2200,1966,2196,1956,2192,1946,2193,1940,2193,1918,2176,1905,2164,1895,2151,1893,2141,1892,2140,1894,2140,1894,2141,1894,2140,1894,2139,1894,2099,1895,2066,1940,2028,1992,2005,1999,1999,2001,1984,2004,1973,2005,1962,2010,1962,2011,1922,2036,1888,2058,1876,2064,1859,2073,1833,2073,1806,2073,1767,2061,1695,2042,1638,2013,1557,1971,1528,1957,1516,1973,1499,1992,1438,2059,1400,2059,1388,2059,1366,2053,1345,2046,1334,2046,1313,2046,1301,2062,1292,2073,1292,2088,1292,2107,1311,2128,1321,2138,1353,2166,1414,2217,1414,2259,1414,2297,1370,2316,1346,2327,1273,2342,L,1273,2366,Q,1278,2374,1296,2401,1313,2427,1313,2441,1313,2463,1305,2470,1300,2475,1286,2494,1284,2495,1283,2496,1271,2506,1219,2536,1189,2557,1175,2576,1193,2580,1230,2603,1279,2631,1304,2641,1313,2643,1369,2671,1427,2697,1456,2697,1460,2697,1511,2685,1564,2673,1581,2671,1607,2668,1650,2663,1686,2660,1717,2660,1731,2660,1756,2659,1777,2658,1789,2659,1804,2660,1818,2658,1842,2657,1849,2649,1884,2612,1897,2603,1915,2589,1951,2589,1991,2589,2004,2607,2011,2618,2033,2654,2045,2669,2055,2697,2061,2713,2073,2746,2073,2747,2074,2748,2078,2760,2086,2784,2093,2806,2099,2820,2103,2829,2121,2853,2138,2877,2142,2886,2148,2900,2163,2919,2171,2930,2182,2944,2183,2945,2210,2974,2215,2979,2227,2986,2237,2992,2243,3e3,2257,3018,2283,3059,2309,3101,2326,3125,2352,3159,2387,3180,2413,3195,2453,3207,2486,3119,2492,3100,2493,3099,2493,3098,2550,3034,2566,3005,2586,2971,2627,2915,2666,2864,2681,2831,2700,2791,2700,2747,2700,2722,2680,2690,2659,2657,2633,2642,2614,2631,2581,2599,2546,2562,2531,2547,2514,2544,2505,2505,2499,2461,2496,2449,2491,2421,2491,2339,2491,2303,2514,2254,2538,2201,2543,2157,2551,2044,2551,1988,2550,1987,2550,1986,2538,1968,2533,1948,2526,1917,2522,1906,2503,1854,2483,1819,2474,1805,2436,1734,L,2436,1734,2433,1737,Q,2411,1751,2402,1760,Z]],label:"Champassack District",shortLabel:"CH",labelPosition:[193.7,231.3],labelAlignment:[CEN,MID],nextId:"LA.CH.SU"},"LA.CH.SU":{outlines:[[M,1756,2659,Q,1731,2660,1717,2660,1686,2660,1650,2663,1607,2668,1581,2671,1564,2673,1511,2685,1460,2697,1456,2697,1427,2697,1369,2671,1313,2643,1304,2641,1279,2631,1230,2603,1193,2580,1175,2576,1164,2590,1164,2604,1164,2610,1175,2645,1185,2679,1185,2683,1185,2717,1175,2731,1164,2745,1164,2768,1164,2792,1201,2825,1237,2858,1237,2876,1237,2900,1211,2934,1187,2965,1192,2997,1195,3020,1191,3067,1185,3125,1185,3132,1185,3164,1200,3196,1215,3228,1215,3266,1215,3354,1234,3396,1252,3439,1252,3477,1252,3527,1237,3560,1226,3586,1196,3616,1178,3634,1135,3679,1092,3724,1070,3776,1068,3779,1034,3830,1020,3851,1008,3867,1021,3874,1073,3890,L,1146,3911,Q,1195,3924,1313,3938,1345,3942,1398,3948,1442,3953,1472,3958,1538,3968,1572,3975,1584,3977,1635,3977,1696,3977,1716,3974,1787,3964,1823,3961,1840,3957,1879,3947,1920,3934,1939,3929,1958,3924,1965,3922,1972,3920,1977,3918,1981,3917,1990,3916,2013,3913,2016,3912,2029,3908,2044,3904,2046,3903,2075,3879,2111,3856,2129,3827,2151,3789,2165,3777,2203,3741,2224,3731,2241,3724,2279,3724,2309,3724,2314,3730,2319,3736,2338,3779,2369,3837,2404,3837,2409,3837,2412,3836,2419,3832,2420,3822,2419,3805,2426,3795,L,2427,3741,Q,2427,3709,2423,3673,2414,3599,2413,3590,2408,3541,2398,3504,2389,3476,2389,3438,2389,3390,2439,3245,2446,3225,2453,3207,2413,3195,2387,3180,2352,3159,2326,3125,2309,3101,2283,3059,2257,3018,2243,3e3,2237,2992,2227,2986,2215,2979,2210,2974,2183,2945,2182,2944,2171,2930,2163,2919,2148,2900,2142,2886,2138,2877,2121,2853,2103,2829,2099,2820,2093,2806,2086,2784,2078,2760,2074,2748,2073,2747,2073,2746,2061,2713,2055,2697,2045,2669,2033,2654,2011,2618,2004,2607,1991,2589,1951,2589,1915,2589,1897,2603,1884,2612,1849,2649,1842,2657,1818,2658,1804,2660,1789,2659,Q,1777,2658,1756,2659,Z]],label:"Soukhouma District",shortLabel:"SU",labelPosition:[173.1,327.6],labelAlignment:[CEN,MID],nextId:"LA.CH.MO"},"LA.CH.MO":{outlines:[[M,1823,3961,Q,1787,3964,1716,3974,1696,3977,1635,3977,1584,3977,1572,3975,1538,3968,1472,3958,1442,3953,1398,3948,1345,3942,1313,3938,1195,3924,1146,3911,L,1073,3890,Q,1021,3874,1008,3867,995,3883,985,3895,953,3927,941,3943,906,3988,906,4016,906,4020,909,4036,912,4052,907,4062,901,4072,887,4092,855,4090,824,4097,793,4103,776,4105,759,4106,728,4118,698,4131,645,4197,607,4244,565,4244,517,4244,491,4206,479,4188,475,4180,467,4168,459,4168,444,4168,426,4198,416,4214,392,4262,341,4354,283,4354,269,4354,245,4339,221,4324,205,4324,192,4324,158,4374,125,4424,105,4424,100,4424,85,4419,70,4415,62,4415,35,4415,34,4440,33,4454,38,4485,38,4512,35,4575,35,4640,78,4677,89,4688,117,4710,140,4732,156,4757,156,4758,157,4759,179,4795,203,4841,237,4909,246,4925,253,4938,264,4964,275,4992,280,5001,292,5024,367,5043,420,5055,454,5088,472,5105,512,5160,573,5246,588,5262,630,5309,668,5309,674,5309,713,5290,752,5271,772,5271,780,5271,807,5282,834,5294,850,5293,869,5292,887,5299,906,5305,919,5305,957,5305,1009,5272,1039,5253,1105,5199,1168,5146,1202,5126,1257,5092,1299,5092,1340,5092,1361,5121,1383,5149,1395,5149,1410,5149,1424,5136,1438,5123,1460,5123,1484,5123,1497,5136,1505,5144,1515,5166,1536,5210,1576,5210,1605,5210,1621,5269,1637,5328,1648,5328,1660,5328,1683,5293,1705,5259,1717,5259,1726,5259,1789,5313,1851,5366,1865,5366,1891,5366,1909,5324,1927,5282,1954,5282,1975,5282,2002,5305,2041,5338,2111,5353,2129,5357,2140,5367,2124,5327,2102,5248,2075,5151,2075,5107,2075,5081,2078,5059,2079,5054,2088,5007,L,2092,4980,Q,2094,4961,2098,4952,2102,4945,2111,4936,2118,4928,2124,4923,2131,4919,2154,4905,2173,4894,2195,4877,2221,4856,2235,4832,2250,4804,2259,4789,2274,4764,2298,4703,2317,4659,2337,4640,2368,4609,2410,4587,2448,4567,2456,4549,2465,4528,2466,4481,2467,4424,2468,4408,2468,4406,2468,4404,2468,4375,2469,4359,2469,4329,2467,4309,2462,4263,2426,4224,2391,4184,2386,4177,2371,4156,2366,4125,2359,4083,2359,4033,2359,3997,2370,3955,2381,3912,2397,3888,2408,3879,2411,3862,2412,3856,2412,3836,2409,3837,2404,3837,2369,3837,2338,3779,2319,3736,2314,3730,2309,3724,2279,3724,2241,3724,2224,3731,2203,3741,2165,3777,2151,3789,2129,3827,2111,3856,2075,3879,2046,3903,2044,3904,2029,3908,2016,3912,2013,3913,1990,3916,1981,3917,1977,3918,1972,3920,1965,3922,1958,3924,1939,3929,1920,3934,1879,3947,Q,1840,3957,1823,3961,Z]],label:"Mounlapamok District",shortLabel:"MO",labelPosition:[125.1,454.5],labelAlignment:[CEN,MID],nextId:"LA.CH.KH"},"LA.CH.KH":{outlines:[[M,2765,3982,Q,2732,3954,2701,3933,2656,3903,2648,3898,2647,3897,2646,3897,2585,3865,2428,3793,L,2427,3793,Q,2426,3794,2426,3795,2419,3805,2420,3822,2419,3832,2412,3836,2412,3856,2411,3862,2408,3879,2397,3888,2381,3912,2370,3955,2359,3997,2359,4033,2359,4083,2366,4125,2371,4156,2386,4177,2391,4184,2426,4224,2462,4263,2467,4309,2469,4329,2469,4359,2468,4375,2468,4404,2468,4406,2468,4408,2467,4424,2466,4481,2465,4528,2456,4549,2448,4567,2410,4587,2368,4609,2337,4640,2317,4659,2298,4703,2274,4764,2259,4789,2250,4804,2235,4832,2221,4856,2195,4877,2173,4894,2154,4905,2131,4919,2124,4923,2118,4928,2111,4936,2102,4945,2098,4952,2094,4961,2092,4980,L,2088,5007,Q,2079,5054,2078,5059,2075,5081,2075,5107,2075,5151,2102,5248,2124,5327,2140,5367,2172,5392,2150,5458,2120,5546,2138,5605,2157,5663,2211,5689,2256,5711,2336,5741,2404,5774,2451,5841,2458,5853,2549,5915,2651,5985,2686,5985,2696,5985,2782,5978,2808,5978,2834,5990,2860,6001,2871,6001,2889,6001,2938,5976,2987,5951,3023,5951,3099,5951,3161,6001,3196,6028,3208,6035,3236,6050,3268,6050,3304,6050,3321,6042,3344,6033,3344,6006,3344,6001,3335,5950,3325,5898,3325,5892,3324,5846,3324,5826,3325,5793,3333,5758,3337,5736,3379,5728,3431,5717,3447,5704,3481,5674,3492,5666,3504,5658,3538,5640,3610,5552,3610,5506,3610,5469,3595,5449,3584,5436,3556,5420,3488,5381,3462,5320,3454,5304,3405,5222,3367,5159,3363,5123,3348,5009,3298,4963,3267,4935,3200,4924,3132,4914,3110,4895,3070,4861,3070,4765,3078,4656,3078,4647,3078,4593,3071,4572,3064,4545,3032,4514,3020,4502,3004,4496,2985,4491,2978,4488,2956,4480,2953,4449,2953,4443,2953,4438,2951,4378,2951,4372,2955,4306,2975,4306,2977,4306,2994,4322,3004,4290,3005,4275,3006,4267,3006,4236,3006,4203,2998,4187,2989,4170,2956,4140,2943,4128,2924,4120,2901,4110,2896,4107,2889,4103,2876,4088,2860,4072,2853,4066,2837,4054,2830,4048,2819,4039,2809,4028,2796,4013,2789,4005,Q,2776,3991,2765,3982,Z]],label:"Khong District",shortLabel:"KH",labelPosition:[275.2,525.9],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"champasak",type:"maps"}}})});