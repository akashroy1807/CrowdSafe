(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=34)})({34:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(35);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},35:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.XaisombounProvince.1.06-19-2019 10:59:11
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"XaisombounProvince",revision:1,creditLabel:false,standaloneInit:false,baseWidth:500,baseHeight:318,baseScaleFactor:10,firstEntity:"LA.XS.AN",entities:{"LA.XS.AN":{outlines:[[M,2485,771,Q,2475,785,2465,799,2445,830,2445,844,L,2448,890,Q,2448,913,2426,914,2399,911,2389,915,2388,916,2381,930,2375,944,2375,949,2373,965,2371,994,2370,1006,2372,1038,2372,1067,2358,1076,2336,1090,2322,1108,2306,1128,2306,1146,2306,1166,2316,1176,2324,1186,2324,1199,2324,1199,2292,1221,2266,1238,2262,1253,2261,1257,2261,1260,L,2254,1291,Q,2245,1326,2231,1326,2224,1318,2216,1307,2197,1287,2179,1282,2165,1279,2146,1271,2124,1262,2114,1255,2110,1253,2080,1202,2055,1159,2028,1159,2007,1159,1992,1174,1974,1195,1962,1209,1954,1217,1938,1249,1924,1277,1917,1282,1909,1289,1885,1295,1856,1301,1842,1305,1832,1308,1819,1308,1805,1308,1801,1308,1800,1308,1784,1323,1767,1338,1760,1338,1745,1338,1735,1329,1725,1320,1713,1320,1700,1320,1697,1328,1696,1331,1697,1346,1700,1372,1662,1372,1648,1372,1637,1364,1627,1354,1618,1354,1612,1354,1565,1371,1516,1389,1501,1391,1422,1410,1387,1410,1365,1410,1363,1403,1356,1381,1346,1369,1340,1361,1317,1350,1300,1341,1300,1329,1300,1325,1308,1316,1315,1306,1315,1299,1315,1288,1307,1277,1299,1266,1299,1259,L,1302,1221,Q,1302,1205,1288,1197,1276,1189,1257,1189,1238,1189,1208,1207,1176,1226,1150,1229,1097,1233,1076,1236,1042,1242,1017,1261,1006,1269,1e3,1284,997,1292,992,1308,987,1317,973,1332,961,1346,958,1358,950,1387,948,1392,944,1399,928,1412,921,1418,901,1422,889,1424,889,1439,889,1461,894,1493,899,1524,899,1532,899,1553,897,1555,893,1562,869,1562,856,1562,836,1560,816,1557,802,1557,788,1557,770,1546,751,1535,742,1535,737,1535,707,1555,677,1574,630,1570,590,1566,562,1597,532,1628,528,1628,521,1628,510,1612,498,1595,467,1595,393,1599,383,1599,341,1599,316,1597,313,1604,312,1614,309,1641,307,1644,306,1649,292,1670,278,1691,280,1705,281,1716,278,1733,276,1754,276,1766,276,1775,280,1807,281,1814,270,1856,L,270,1928,Q,260,1949,252,1957,251,1958,251,1975,251,1990,259,1998,268,2006,260,2033,252,2059,224,2093,197,2127,176,2143,176,2150,190,2164,204,2178,204,2188,204,2204,192,2221,179,2238,179,2249,179,2255,185,2288,185,2313,168,2347,150,2381,150,2403,150,2425,197,2442,244,2459,251,2465,259,2471,281,2498,307,2530,313,2536,337,2556,396,2577,402,2579,407,2583,410,2578,423,2555,431,2541,435,2524,440,2502,446,2496,453,2494,458,2492,469,2488,471,2482,483,2455,484,2419,483,2379,482,2359,482,2305,485,2283,493,2242,520,2233,537,2227,546,2218,556,2207,560,2187,561,2181,565,2168,569,2153,571,2152,584,2144,585,2142,586,2141,586,2131,586,2125,581,2112,575,2099,575,2089,575,2026,623,2008,647,1998,715,1998,725,1998,765,2004,780,2004,815,1980,849,1956,884,1956,921,1956,921,1976,921,1998,896,2016,871,2033,871,2055,871,2078,879,2097,889,2117,890,2142,891,2156,891,2189,895,2216,916,2216,934,2216,973,2211,987,2211,997,2225,1008,2238,1023,2238,1050,2238,1065,2200,1080,2161,1099,2161,1105,2161,1143,2174,1182,2187,1185,2187,1201,2188,1230,2191,1253,2194,1274,2194,1298,2194,1331,2178,1348,2170,1372,2157,1385,2152,1414,2135,1424,2126,1432,2118,1449,2104,1457,2104,1463,2104,1488,2128,1508,2147,1523,2153,1527,2155,1531,2156,1585,2164,1609,2183,1622,2193,1648,2193,1662,2193,1696,2192,1724,2194,1744,2206,1762,2216,1788,2216,1798,2216,1827,2204,1857,2192,1868,2192,1889,2192,1921,2217,1954,2242,1985,2242,2014,2242,2055,2217,2095,2192,2119,2192,2141,2192,2157,2217,2172,2241,2192,2241,2241,2241,2243,2166,2242,2128,2242,2114,2243,2091,2252,2091,2253,2091,2280,2098,2306,2105,2312,2105,2325,2105,2341,2097,2354,2091,2364,2083,2366,2080,2367,2078,2444,1980,2478,1963,2500,1952,2598,1952,2625,1952,2631,1950,2647,1944,2660,1918,2666,1906,2682,1882,2698,1860,2702,1851,2713,1828,2721,1820,2735,1805,2768,1796,2777,1793,2811,1796,2841,1794,2846,1774,2891,1597,3073,1597,3091,1597,3102,1596,3107,1597,3135,1607,3140,1609,3164,1612,3181,1614,3189,1625,3205,1645,3206,1646,3218,1657,3239,1663,L,3304,1681,Q,3377,1702,3379,1771,3379,1778,3375,1829,3372,1864,3379,1884,3384,1872,3406,1854,3437,1828,3461,1828,3464,1828,3496,1884,3528,1939,3560,1939,3571,1939,3581,1925,3592,1910,3592,1893,3557,1760,3524,1747,3439,1712,3432,1705,3424,1696,3424,1630,3424,1584,3427,1573,3433,1549,3453,1547,3448,1515,3446,1499,3440,1471,3426,1466,3375,1447,3330,1422,3316,1414,3296,1390,3279,1367,3260,1359,3243,1352,3225,1328,3201,1297,3192,1289,3176,1275,3144,1263,3109,1249,3102,1245,3095,1239,3090,1228,3085,1215,3077,1209,3070,1203,3053,1198,3032,1191,3028,1189,2934,1155,2914,1142,2887,1125,2887,1050,2891,974,2891,945,L,2890,945,Q,2886,926,2883,911,2877,882,2869,873,2857,857,2842,846,2836,842,2815,830,2795,818,2783,811,2762,798,2751,787,2722,756,2697,716,2688,722,2676,740,2665,755,2663,757,2649,757,2596,753,2544,748,2543,748,2530,748,2512,760,2499,767,2487,770,Q,2486,770,2485,771,Z]],label:"Anouvong District",shortLabel:"AN",labelPosition:[187.1,170.2],labelAlignment:[CEN,MID],nextId:"LA.XS.LO"},"LA.XS.LO":{outlines:[[M,1032,164,Q,990,150,987,148,969,139,960,134,944,126,929,116,920,109,897,80,878,55,853,49,824,46,808,43,803,42,756,38,708,34,700,34,673,45,641,63,577,100,548,137,536,152,519,192,507,220,493,224,487,227,466,223,449,221,440,229,433,235,426,248,419,259,419,265,419,280,439,308,459,337,459,387,459,424,457,432,454,449,441,476,443,515,417,559,394,595,366,618,348,632,310,695,272,758,272,772,272,786,280,809,287,833,287,853,287,901,280,913,269,931,219,941,189,947,162,967,126,992,122,1023,119,1044,109,1095,101,1141,104,1158,100,1167,89,1191,79,1212,74,1217,57,1232,42,1243,35,1249,35,1264,35,1269,37,1278,40,1290,43,1295,44,1298,52,1308,62,1319,68,1322,98,1337,115,1344,142,1354,168,1358,182,1360,217,1364,248,1369,265,1384,279,1397,284,1426,287,1442,287,1474,287,1503,322,1512,356,1521,356,1527,356,1541,347,1550,330,1567,321,1582,318,1587,316,1597,341,1599,383,1599,393,1599,467,1595,498,1595,510,1612,521,1628,528,1628,532,1628,562,1597,590,1566,630,1570,677,1574,707,1555,737,1535,742,1535,751,1535,770,1546,788,1557,802,1557,816,1557,836,1560,856,1562,869,1562,893,1562,897,1555,899,1553,899,1532,899,1524,894,1493,889,1461,889,1439,889,1424,901,1422,921,1418,928,1412,944,1399,948,1392,950,1387,958,1358,961,1346,973,1332,987,1317,992,1308,997,1292,1e3,1284,1006,1269,1017,1261,1042,1242,1076,1236,1097,1233,1150,1229,1176,1226,1208,1207,1238,1189,1257,1189,1276,1189,1288,1197,1302,1205,1302,1221,L,1299,1259,Q,1299,1266,1307,1277,1315,1288,1315,1299,1315,1306,1308,1316,1300,1325,1300,1329,1300,1341,1317,1350,1340,1361,1346,1369,1356,1381,1363,1403,1365,1410,1387,1410,1422,1410,1501,1391,1516,1389,1565,1371,1612,1354,1618,1354,1627,1354,1637,1364,1648,1372,1662,1372,1700,1372,1697,1346,1696,1331,1697,1328,1700,1320,1713,1320,1725,1320,1735,1329,1745,1338,1760,1338,1767,1338,1784,1323,1800,1308,1801,1308,1805,1308,1819,1308,1832,1308,1842,1305,1856,1301,1885,1295,1909,1289,1917,1282,1924,1277,1938,1249,1954,1217,1962,1209,1974,1195,1992,1174,2007,1159,2028,1159,2055,1159,2080,1202,2110,1253,2114,1255,2124,1262,2146,1271,2165,1279,2179,1282,2197,1287,2216,1307,2224,1318,2231,1326,2245,1326,2254,1291,L,2261,1260,Q,2261,1257,2262,1253,2266,1238,2292,1221,2324,1199,2324,1199,2324,1186,2316,1176,2306,1166,2306,1146,2306,1128,2322,1108,2336,1090,2358,1076,2372,1067,2372,1038,2370,1006,2371,994,2373,965,2375,949,2375,944,2381,930,2388,916,2389,915,2399,911,2426,914,2448,913,2448,890,L,2445,844,Q,2445,830,2465,799,2475,785,2485,771,2480,771,2476,771,2436,771,2401,727,2366,684,2333,684,2311,684,2294,689,2277,693,2252,693,2220,693,2191,676,2162,659,2134,659,2119,659,2099,672,2077,688,2085,702,L,2057,702,Q,2045,698,2032,683,2017,664,2011,661,2009,659,1986,657,1966,656,1953,647,1940,637,1927,595,1913,553,1898,541,1882,528,1842,522,1837,521,1770,514,1742,511,1739,475,1737,440,1717,440,1710,440,1671,465,1631,489,1613,489,1592,489,1579,461,1567,434,1539,434,1503,434,1448,451,1393,468,1365,468,1345,468,1338,466,1320,460,1320,442,1320,441,1327,431,1334,422,1334,418,1334,401,1311,388,1284,377,1276,373,1264,367,1246,345,1230,325,1214,323,1056,279,1056,261,1072,216,1072,205,Q,1072,181,1032,164,Z]],label:"Longchaeng District",shortLabel:"LO",labelPosition:[98,72.6],labelAlignment:[CEN,MID],nextId:"LA.XS.LX"},"LA.XS.LX":{outlines:[[M,1432,2118,Q,1424,2126,1414,2135,1385,2152,1372,2157,1348,2170,1331,2178,1298,2194,1274,2194,1253,2194,1230,2191,1201,2188,1185,2187,1182,2187,1143,2174,1105,2161,1099,2161,1080,2161,1065,2200,1050,2238,1023,2238,1008,2238,997,2225,987,2211,973,2211,934,2216,916,2216,895,2216,891,2189,891,2156,890,2142,889,2117,879,2097,871,2078,871,2055,871,2033,896,2016,921,1998,921,1976,921,1956,884,1956,849,1956,815,1980,780,2004,765,2004,725,1998,715,1998,647,1998,623,2008,575,2026,575,2089,575,2099,581,2112,586,2125,586,2131,586,2141,585,2142,584,2144,571,2152,569,2153,565,2168,561,2181,560,2187,556,2207,546,2218,537,2227,520,2233,493,2242,485,2283,482,2305,482,2359,483,2379,484,2419,483,2455,471,2482,469,2488,458,2492,453,2494,446,2496,440,2502,435,2524,431,2541,423,2555,410,2578,407,2583,445,2607,445,2659,445,2712,464,2766,486,2828,525,2865,559,2897,571,2953,586,3031,601,3060,608,3111,607,3126,606,3142,634,3136,662,3130,689,3139,713,3147,720,3147,732,3147,758,3131,781,3117,803,3122,818,3125,853,3113,872,3107,903,3097,986,3076,1027,3040,L,1050,3018,Q,1062,3010,1080,3010,1091,3010,1129,3019,1168,3027,1204,3027,1232,3027,1275,3030,1318,3034,1339,3034,1394,3034,1454,3030,1459,3029,1494,3017,1528,3004,1549,3004,1564,3004,1601,3015,1638,3027,1651,3027,1743,3030,1774,3034,1873,3043,1905,3060,1929,3073,1992,3073,2065,3073,2105,3069,2144,3065,2181,3057,2171,3040,2150,3016,2129,2993,2124,2985,2123,2982,2122,2964,2120,2947,2117,2942,2112,2931,2100,2930,2082,2929,2079,2927,2038,2908,2011,2849,1986,2780,1975,2750,1972,2742,1962,2735,1946,2723,1940,2717,1933,2710,1928,2697,1922,2681,1918,2672,1913,2660,1887,2632,1860,2603,1855,2593,1851,2583,1848,2545,1845,2501,1847,2483,1849,2465,1831,2454,1814,2444,1794,2417,1794,2415,1794,2414,1793,2406,1785,2390,1773,2369,1772,2364,1760,2323,1756,2316,1749,2302,1741,2295,1731,2288,1714,2287,L,1666,2283,Q,1635,2281,1605,2271,1571,2260,1559,2246,1543,2227,1536,2199,1525,2160,1523,2153,1508,2147,1488,2128,1463,2104,1457,2104,Q,1449,2104,1432,2118,Z]],label:"Longxan District",shortLabel:"LX",labelPosition:[129.4,262.2],labelAlignment:[CEN,MID],nextId:"LA.XS.HO"},"LA.XS.HO":{outlines:[[M,3304,1681,L,3239,1663,Q,3218,1657,3206,1646,3205,1645,3189,1625,3181,1614,3164,1612,3140,1609,3135,1607,3107,1597,3102,1596,3091,1597,3073,1597,2891,1597,2846,1774,2841,1794,2811,1796,2777,1793,2768,1796,2735,1805,2721,1820,2713,1828,2702,1851,2698,1860,2682,1882,2666,1906,2660,1918,2647,1944,2631,1950,2625,1952,2598,1952,2500,1952,2478,1963,2444,1980,2367,2078,2366,2080,2364,2083,2354,2091,2341,2097,2325,2105,2312,2105,2306,2105,2280,2098,2253,2091,2252,2091,2243,2091,2242,2114,2242,2128,2243,2166,2241,2241,2192,2241,2172,2241,2157,2217,2141,2192,2119,2192,2095,2192,2055,2217,2014,2242,1985,2242,1954,2242,1921,2217,1889,2192,1868,2192,1857,2192,1827,2204,1798,2216,1788,2216,1762,2216,1744,2206,1724,2194,1696,2192,1662,2193,1648,2193,1622,2193,1609,2183,1585,2164,1531,2156,1527,2155,1523,2153,1525,2160,1536,2199,1543,2227,1559,2246,1571,2260,1605,2271,1635,2281,1666,2283,L,1714,2287,Q,1731,2288,1741,2295,1749,2302,1756,2316,1760,2323,1772,2364,1773,2369,1785,2390,1793,2406,1794,2414,1794,2415,1794,2417,1814,2444,1831,2454,1849,2465,1847,2483,1845,2501,1848,2545,1851,2583,1855,2593,1860,2603,1887,2632,1913,2660,1918,2672,1922,2681,1928,2697,1933,2710,1940,2717,1946,2723,1962,2735,1972,2742,1975,2750,1986,2780,2011,2849,2038,2908,2079,2927,2082,2929,2100,2930,2112,2931,2117,2942,2120,2947,2122,2964,2123,2982,2124,2985,2129,2993,2150,3016,2171,3040,2181,3057,2207,3051,2233,3042,2272,3029,2339,3024,2414,3018,2445,3010,2481,3001,2547,3002,2641,3002,2651,3001,2728,2997,2791,2973,2849,2950,2899,2950,2923,2950,2961,2967,3011,2989,3036,2995,3138,3023,3182,3024,3290,3030,3364,3086,3376,3095,3407,3123,3425,3139,3434,3139,3456,3139,3508,3107,3566,3073,3566,3049,3566,3044,3551,3016,3536,2987,3534,2982,3531,2952,3507,2911,3479,2864,3451,2852,3388,2830,3346,2813,3268,2781,3268,2759,3268,2742,3361,2658,3461,2569,3468,2554,3493,2507,3493,2433,3490,2349,3495,2305,3495,2304,3495,2302,3496,2290,3500,2243,3503,2212,3495,2197,3480,2165,3435,2152,3395,2141,3395,2122,3395,2107,3413,2094,3431,2081,3431,2054,3431,2019,3404,1958,3377,1896,3377,1890,3377,1887,3379,1884,3372,1864,3375,1829,3379,1778,3379,1771,Q,3377,1702,3304,1681,Z]],label:"Hom District",shortLabel:"HO",labelPosition:[275.4,236.8],labelAlignment:[CEN,MID],nextId:"LA.XS.TH"},"LA.XS.TH":{outlines:[[M,3994,946,Q,3932,886,3908,886,3891,886,3831,904,3770,921,3742,921,3704,921,3709,891,3716,849,3697,831,3691,826,3651,801,3609,774,3591,758,3572,746,3564,740,3550,730,3549,709,3549,700,3536,687,3521,673,3506,673,3481,673,3445,656,3409,638,3407,638,3402,638,3369,649,3334,660,3326,661,3306,660,3294,660,3273,660,3265,675,3247,712,3233,740,3204,795,3195,795,3169,795,3141,742,3114,689,3107,689,3106,689,3085,713,3064,737,3041,737,3011,737,2999,695,2987,652,2974,652,2966,652,2926,689,2887,726,2863,726,2839,726,2807,710,2775,694,2759,694,2744,694,2721,703,2707,710,2697,716,2722,756,2751,787,2762,798,2783,811,2795,818,2815,830,2836,842,2842,846,2857,857,2869,873,2877,882,2883,911,2886,926,2890,945,L,2891,945,Q,2891,974,2887,1050,2887,1125,2914,1142,2934,1155,3028,1189,3032,1191,3053,1198,3070,1203,3077,1209,3085,1215,3090,1228,3095,1239,3102,1245,3109,1249,3144,1263,3176,1275,3192,1289,3201,1297,3225,1328,3243,1352,3260,1359,3279,1367,3296,1390,3316,1414,3330,1422,3375,1447,3426,1466,3440,1471,3446,1499,3448,1515,3453,1547,3460,1547,3470,1549,3470,1519,3495,1489,3517,1464,3530,1464,3530,1464,3554,1474,3580,1485,3590,1485,3628,1485,3659,1446,3690,1407,3721,1407,3743,1407,3767,1449,3792,1494,3818,1499,3823,1500,3860,1506,3883,1509,3889,1514,3904,1524,3902,1551,3898,1584,3900,1589,3908,1609,3955,1617,4012,1627,4022,1632,4023,1633,4054,1693,4083,1747,4116,1747,4128,1747,4145,1736,4162,1725,4186,1725,4216,1725,4227,1736,4236,1744,4269,1779,4284,1792,4301,1800,4325,1811,4336,1818,4340,1820,4400,1884,4456,1943,4465,1943,4496,1943,4608,1865,4666,1825,4737,1775,4768,1760,4818,1749,4890,1733,4895,1732,4909,1728,4915,1709,4926,1678,4927,1675,4941,1653,4945,1636,4948,1622,4948,1596,4948,1565,4944,1525,4938,1487,4938,1478,4938,1445,4949,1422,4959,1399,4959,1376,4959,1362,4937,1314,4911,1259,4891,1249,4877,1242,4840,1188,4805,1138,4802,1138,4792,1138,4775,1148,4758,1159,4744,1159,4738,1159,4715,1152,4687,1144,4677,1141,L,4521,1141,Q,4520,1141,4519,1142,4492,1144,4458,1107,4420,1068,4372,1070,4351,1071,4329,1053,4317,1043,4299,1020,4283,1001,4266,998,4245,999,4232,999,4213,999,4208,990,4202,981,4178,981,4168,981,4126,993,4085,1006,4076,1006,Q,4057,1006,3994,946,Z]],label:"Thathom District",shortLabel:"TH",labelPosition:[382.8,120.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"xaisombounprovince",type:"maps"}}})});