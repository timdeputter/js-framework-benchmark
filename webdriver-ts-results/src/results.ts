import {RawResult} from './Common';

export let results: RawResult[]=[
{"f":"preact-v8.4.2-keyed","b":"01_run1k","v":[168.918,150.48,147.388,157.226,147.251,146.693,144.608,144.091,145.053,142.139]},
{"f":"preact-v8.4.2-keyed","b":"02_replace1k","v":[143.971,144.207,143.713,141.024,150.973,144.367,154.127,147.829,142.376,141.573]},
{"f":"preact-v8.4.2-keyed","b":"03_update10th1k_x16","v":[563.043,490.658,495.555,557.469,493.909,577.134,484.796,486.749,492.805,491.369]},
{"f":"preact-v8.4.2-keyed","b":"04_select1k","v":[132.634,111.585,101.678,125.767,114.292,103.94,102.72,114.947,109.833,109.185]},
{"f":"preact-v8.4.2-keyed","b":"05_swap1k","v":[65.845,71.946,64.194,68.875,72.017,67.853,68.857,69.248,70.857,67.561]},
{"f":"preact-v8.4.2-keyed","b":"06_remove-one-1k","v":[42.681,40.154,40.765,43.78,42.013,40.377,40.624,40.823,40.212,41.273]},
{"f":"preact-v8.4.2-keyed","b":"07_create10k","v":[1636.25,1513.246,1641.136,1574.588,1635.019,1478.026,1485.85,1486.99,1489.921,1481.554]},
{"f":"preact-v8.4.2-keyed","b":"08_create1k-after1k_x2","v":[437.754,431.257,374.513,375.765,365.314,370.128,403.972,441.072,369.67,371.941]},
{"f":"preact-v8.4.2-keyed","b":"09_clear1k_x8","v":[372.9,348.024,367.619,362.562,335.549,373.838,367.577,350.81,352.708,354.032]},
{"f":"preact-v8.4.2-keyed","b":"21_ready-memory","v":[1.89251708984375,1.8925857543945312,1.892608642578125,1.8925628662109375,1.8925628662109375]},
{"f":"preact-v8.4.2-keyed","b":"22_run-memory","v":[4.8935546875,4.891151428222656,4.896675109863281,4.890846252441406,4.896087646484375]},
{"f":"preact-v8.4.2-keyed","b":"23_update5-memory","v":[5.242645263671875,5.2432861328125,5.2426605224609375,5.241874694824219,5.241912841796875]},
{"f":"preact-v8.4.2-keyed","b":"24_run5-memory","v":[7.64013671875,7.644462585449219,7.640800476074219,7.64007568359375,7.655006408691406]},
{"f":"preact-v8.4.2-keyed","b":"25_run-clear-memory","v":[5.792350769042969,5.789825439453125,5.781120300292969,5.7777099609375,5.781349182128906]},
{"f":"preact-v8.4.2-keyed","b":"31_startup-ci","v":[2145,2145,2145,2145]},
{"f":"preact-v8.4.2-keyed","b":"32_startup-bt","v":[17.435999999999996,16,16.731999999999996,17.599999999999998]},
{"f":"preact-v8.4.2-keyed","b":"34_startup-totalbytes","v":[152.619140625,152.619140625,152.619140625,152.619140625]},
{"f":"react-v16.8.6-keyed","b":"01_run1k","v":[171.021,164.088,161.071,166.055,164.206,159.644,158.461,158.349,157.849,158.377]},
{"f":"react-v16.8.6-keyed","b":"02_replace1k","v":[141.639,139.915,140.963,145.281,144.582,147.013,139.349,139.314,139.002,138.108]},
{"f":"react-v16.8.6-keyed","b":"03_update10th1k_x16","v":[446.874,418.487,416.077,440.863,432.766,419.653,427.306,429.491,423.04,426.18]},
{"f":"react-v16.8.6-keyed","b":"04_select1k","v":[63.861,61.703,64.152,63.607,66.461,73.907,64.552,64.489,61.699,63.433]},
{"f":"react-v16.8.6-keyed","b":"05_swap1k","v":[725.671,758.907,765.556,763.651,743.822,734.753,750.674,760.336,750.157,753.84]},
{"f":"react-v16.8.6-keyed","b":"06_remove-one-1k","v":[39.701,40.794,39.652,40.418,40.609,39.805,41.019,39.645,39.793,40.486]},
{"f":"react-v16.8.6-keyed","b":"07_create10k","v":[1634.554,1737.969,1676.472,1731.985,1665.688,1700.415,1709.409,1695.336,1683.979,1779.432]},
{"f":"react-v16.8.6-keyed","b":"08_create1k-after1k_x2","v":[397.509,412.661,389.986,390.903,383.45,389.43,408.384,414.684,395.405,391.167]},
{"f":"react-v16.8.6-keyed","b":"09_clear1k_x8","v":[330.442,345.136,311.712,341.385,325.949,331.203,346.197,333.879,335.858,317.768]},
{"f":"react-v16.8.6-keyed","b":"21_ready-memory","v":[2.3300857543945312,2.3300857543945312,2.3300857543945312,2.3300857543945312,2.3300399780273438]},
{"f":"react-v16.8.6-keyed","b":"22_run-memory","v":[6.923591613769531,6.915191650390625,6.916847229003906,6.9156494140625,6.9192657470703125]},
{"f":"react-v16.8.6-keyed","b":"23_update5-memory","v":[8.069503784179688,8.056137084960938,8.053451538085938,8.064659118652344,8.057098388671875]},
{"f":"react-v16.8.6-keyed","b":"24_run5-memory","v":[8.900497436523438,8.894393920898438,8.928131103515625,8.968246459960938,8.911552429199219]},
{"f":"react-v16.8.6-keyed","b":"25_run-clear-memory","v":[4.77886962890625,4.5369873046875,4.535026550292969,4.778282165527344,4.533378601074219]},
{"f":"react-v16.8.6-keyed","b":"31_startup-ci","v":[2623,2622,2622,2504.892]},
{"f":"react-v16.8.6-keyed","b":"32_startup-bt","v":[16,16,16,16]},
{"f":"react-v16.8.6-keyed","b":"34_startup-totalbytes","v":[260.9287109375,260.9287109375,260.9287109375,260.9287109375]},
{"f":"solid-v0.9.3-keyed","b":"01_run1k","v":[120.838,116.573,126.683,115.305,116.341,127.446,116.823,129.798,118,122.606]},
{"f":"solid-v0.9.3-keyed","b":"02_replace1k","v":[123.309,129.827,123.457,132.336,122.074,124.152,121.377,122.8,122.81,121.671]},
{"f":"solid-v0.9.3-keyed","b":"03_update10th1k_x16","v":[390.35,413.561,353.512,418.579,374.145,370.333,371.285,370.833,369.93,366.82]},
{"f":"solid-v0.9.3-keyed","b":"04_select1k","v":[45.025,42.448,43.175,42.343,50.828,42.627,43.059,41.615,42.624,42.072]},
{"f":"solid-v0.9.3-keyed","b":"05_swap1k","v":[66.714,72.751,70.275,65.557,71.567,62.307,64.893,67.388,63.828,66.082]},
{"f":"solid-v0.9.3-keyed","b":"06_remove-one-1k","v":[38.36,41.176,39.285,40.635,39.023,38.196,38.445,38.609,38.448,44.3]},
{"f":"solid-v0.9.3-keyed","b":"07_create10k","v":[1170.195,1143.16,1182.321,1180.067,1233.416,1321.442,1226.395,1140.752,1298.754,1268.711]},
{"f":"solid-v0.9.3-keyed","b":"08_create1k-after1k_x2","v":[326.213,338.25,299.263,321.393,306.608,298.538,305.734,303.074,304.695,323.64]},
{"f":"solid-v0.9.3-keyed","b":"09_clear1k_x8","v":[204.442,209.827,212.52,263.687,223.054,210.338,226.167,265.787,208.535,211.274]},
{"f":"solid-v0.9.3-keyed","b":"21_ready-memory","v":[1.8849105834960938,1.8849105834960938,1.8849105834960938,1.8849105834960938,1.8848876953125]},
{"f":"solid-v0.9.3-keyed","b":"22_run-memory","v":[3.8519973754882812,3.8510284423828125,3.8509521484375,3.8509597778320312,3.8509979248046875]},
{"f":"solid-v0.9.3-keyed","b":"23_update5-memory","v":[4.200965881347656,4.199317932128906,4.2002410888671875,4.2008056640625,4.1995391845703125]},
{"f":"solid-v0.9.3-keyed","b":"24_run5-memory","v":[4.489738464355469,4.502960205078125,4.506721496582031,4.4970703125,4.492485046386719]},
{"f":"solid-v0.9.3-keyed","b":"25_run-clear-memory","v":[3.5119247436523438,3.524200439453125,3.5229034423828125,3.5306472778320312,3.52398681640625]},
{"f":"solid-v0.9.3-keyed","b":"31_startup-ci","v":[2145,2145,2145,2145]},
{"f":"solid-v0.9.3-keyed","b":"32_startup-bt","v":[16,17.448,17.228,16.98]},
{"f":"solid-v0.9.3-keyed","b":"34_startup-totalbytes","v":[152.865234375,152.865234375,152.865234375,152.865234375]},
{"f":"mimbl-v0.1.8-non-keyed","b":"01_run1k","v":[184.452,165.015,159.871,168.347,167.307,182.556,164.889,166.231,166.612,166.106]},
{"f":"mimbl-v0.1.8-non-keyed","b":"02_replace1k","v":[108.835,68.292,72.301,71.588,66.617,63.447,74.033,58.082,71.788,72.054]},];
export let frameworks = [{"name":"angular-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angular-ivy-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angular-noopzone-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angular-optimized-vinvalid (no package-lock)-keyed","keyed":true},{"name":"angularjs-vinvalid (no package-lock)-keyed","keyed":true},{"name":"apprun-vinvalid (no package-lock)-keyed","keyed":true},{"name":"attodom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"aurelia-vinvalid (no package-lock)-keyed","keyed":true},{"name":"binding.scala-v10.0.1-keyed","keyed":true},{"name":"bobril-vinvalid (no package-lock)-keyed","keyed":true},{"name":"choo-vinvalid (no package-lock)-keyed","keyed":true},{"name":"crui-vinvalid (no package-lock)-keyed","keyed":true},{"name":"datum-vinvalid (no package-lock)-keyed","keyed":true},{"name":"dojo-vinvalid (no package-lock)-keyed","keyed":true},{"name":"domc-vinvalid (no package-lock)-keyed","keyed":true},{"name":"dominator-v0.5.0-keyed","keyed":true},{"name":"domvm-v3.4.12-keyed","keyed":true},{"name":"dyo-vinvalid (no package-lock)-keyed","keyed":true},{"name":"elm-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ember-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ember-sparkles-v3.5.1-keyed","keyed":true},{"name":"endorphin-vinvalid (no package-lock)-keyed","keyed":true},{"name":"etch-vinvalid (no package-lock)-keyed","keyed":true},{"name":"faster-dom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"fidan-v0.0.23-keyed","keyed":true},{"name":"glasgow-vinvalid (no package-lock)-keyed","keyed":true},{"name":"glimmer-vinvalid (no package-lock)-keyed","keyed":true},{"name":"hullo-v0.8.2-keyed","keyed":true},{"name":"hyperapp-vinvalid (no package-lock)-keyed","keyed":true},{"name":"hyperhtml-vinvalid (no package-lock)-keyed","keyed":true},{"name":"hyperoop-vinvalid (no package-lock)-keyed","keyed":true},{"name":"imba-vinvalid (no package-lock)-keyed","keyed":true},{"name":"inferno-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ivi-vinvalid (no package-lock)-keyed","keyed":true},{"name":"knockout-vinvalid (no package-lock)-keyed","keyed":true},{"name":"ko-jsx-vinvalid (no package-lock)-keyed","keyed":true},{"name":"lighterhtml-vinvalid (no package-lock)-keyed","keyed":true},{"name":"lit-html-vinvalid (no package-lock)-keyed","keyed":true},{"name":"maquette-vinvalid (no package-lock)-keyed","keyed":true},{"name":"marionette-vinvalid (no package-lock)-keyed","keyed":true},{"name":"marionette-jquery-vinvalid (no package-lock)-keyed","keyed":true},{"name":"marko-vinvalid (no package-lock)-keyed","keyed":true},{"name":"mikado-vinvalid (no package-lock)-keyed","keyed":true},{"name":"mimbl-v0.1.8-keyed","keyed":true},{"name":"miso-v1.1.0.0-keyed","keyed":true},{"name":"mithril-vinvalid (no package-lock)-keyed","keyed":true},{"name":"mobx-jsx-vinvalid (no package-lock)-keyed","keyed":true},{"name":"nervjs-vinvalid (no package-lock)-keyed","keyed":true},{"name":"petit-dom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"plastiq-vinvalid (no package-lock)-keyed","keyed":true},{"name":"preact-v8.4.2-keyed","keyed":true},{"name":"ractive-vinvalid (no package-lock)-keyed","keyed":true},{"name":"rawact-vinvalid (no package-lock)-keyed","keyed":true},{"name":"rax-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-v16.8.6-keyed","keyed":true},{"name":"react-djinn-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-easy-state-v16.1.0 + 5.0.0-keyed","keyed":true},{"name":"react-hooks-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-lite-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-mobX-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-redux-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-redux-combiner-vinvalid (no package-lock)-keyed","keyed":true},{"name":"react-redux-hooks-vinvalid (no package-lock)-keyed","keyed":true},{"name":"reagent-v0.8-keyed","keyed":true},{"name":"reason-react-vinvalid (no package-lock)-keyed","keyed":true},{"name":"redom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"reflex-dom-v0.4-keyed","keyed":true},{"name":"riot-vinvalid (no package-lock)-keyed","keyed":true},{"name":"san-vinvalid (no package-lock)-keyed","keyed":true},{"name":"scarletsframe-keyed","keyed":true},{"name":"sifrr-vinvalid (no package-lock)-keyed","keyed":true},{"name":"sinuous-vinvalid (no package-lock)-keyed","keyed":true},{"name":"solid-v0.9.3-keyed","keyed":true},{"name":"solid-signals-vinvalid (no package-lock)-keyed","keyed":true},{"name":"stage0-vinvalid (no package-lock)-keyed","keyed":true},{"name":"stdweb-v0.4.17-keyed","keyed":true},{"name":"surplus-vinvalid (no package-lock)-keyed","keyed":true},{"name":"svelte-vinvalid (no package-lock)-keyed","keyed":true},{"name":"vanillajs-keyed","keyed":true},{"name":"vanillajs-1-keyed","keyed":true},{"name":"vanillajs-wc-keyed","keyed":true},{"name":"vidom-vinvalid (no package-lock)-keyed","keyed":true},{"name":"vue-vinvalid (no package-lock)-keyed","keyed":true},{"name":"wasm-bindgen-v0.2.47-keyed","keyed":true},{"name":"angular-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"apprun-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"aurelia-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"cyclejs-dom-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"dojo-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"domc-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"domvm-v3.4.12-non-keyed","keyed":false},{"name":"elm-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"endorphin-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"etch-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"gruu-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"halogen-v4.0.0-non-keyed","keyed":false},{"name":"hullo-v0.8.2-non-keyed","keyed":false},{"name":"hyperapp-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"imba-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"inferno-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"lighterhtml-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"lit-html-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"lite-html-v0.2.4-non-keyed","keyed":false},{"name":"literaljs-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"mikado-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"mimbl-v0.1.8-non-keyed","keyed":false},{"name":"miso-v1.1.0.0-non-keyed","keyed":false},{"name":"moon-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"polymer-v2.0.0-non-keyed","keyed":false},{"name":"pux-v11.0.0-non-keyed","keyed":false},{"name":"ractive-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"rawact-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"react-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"redom-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"riot-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"san-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"scarletsframe-non-keyed","keyed":false},{"name":"sifrr-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"simi-v0.2.0-dev1-non-keyed","keyed":false},{"name":"simulacra-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"slim-js-v3.3.0-non-keyed","keyed":false},{"name":"stage0-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"stdweb-v0.4.17-non-keyed","keyed":false},{"name":"stem-v0.2.70-non-keyed","keyed":false},{"name":"surplus-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"svelte-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"thermite-v4.0.0-non-keyed","keyed":false},{"name":"vanilla-dom-framework-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"vanillajs-non-keyed","keyed":false},{"name":"vanillajs-1-non-keyed","keyed":false},{"name":"vue-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"vuera-vinvalid (no package-lock)-non-keyed","keyed":false},{"name":"yew-v0.7.0-non-keyed","keyed":false}];
export let benchmarks = [{"id":"01_run1k","label":"create rows","description":"creating 1,000 rows","type":0},{"id":"02_replace1k","label":"replace all rows","description":"updating all 1,000 rows (5 warmup runs).","type":0},{"id":"03_update10th1k_x16","label":"partial update","description":"updating every 10th row for 1,000 rows (3 warmup runs). 16x CPU slowdown.","type":0,"throttleCPU":16},{"id":"04_select1k","label":"select row","description":"highlighting a selected row. (5 warmup runs). 16x CPU slowdown.","type":0,"throttleCPU":16},{"id":"05_swap1k","label":"swap rows","description":"swap 2 rows for table with 1,000 rows. (5 warmup runs). 4x CPU slowdown.","type":0,"throttleCPU":4},{"id":"06_remove-one-1k","label":"remove row","description":"removing one row. (5 warmup runs).","type":0},{"id":"07_create10k","label":"create many rows","description":"creating 10,000 rows","type":0},{"id":"08_create1k-after1k_x2","label":"append rows to large table","description":"appending 1,000 to a table of 10,000 rows. 2x CPU slowdown","type":0,"throttleCPU":2},{"id":"09_clear1k_x8","label":"clear rows","description":"clearing a table with 1,000 rows. 8x CPU slowdown","type":0,"throttleCPU":8},{"id":"21_ready-memory","label":"ready memory","description":"Memory usage after page load.","type":1},{"id":"22_run-memory","label":"run memory","description":"Memory usage after adding 1000 rows.","type":1},{"id":"23_update5-memory","label":"update eatch 10th row for 1k rows (5 cycles)","description":"Memory usage after clicking update every 10th row 5 times","type":1},{"id":"24_run5-memory","label":"replace 1k rows (5 cycles)","description":"Memory usage after clicking create 1000 rows 5 times","type":1},{"id":"25_run-clear-memory","label":"creating/clearing 1k rows (5 cycles)","description":"Memory usage after creating and clearing 1000 rows 5 times","type":1},{"id":"31_startup-ci","label":"consistently interactive","description":"a pessimistic TTI - when the CPU and network are both definitely very idle. (no more CPU tasks over 50ms)","type":2,"property":"TimeToConsistentlyInteractive"},{"id":"32_startup-bt","label":"script bootup time","description":"the total ms required to parse/compile/evaluate all the page's scripts","type":2,"property":"ScriptBootUpTtime"},{"id":"34_startup-totalbytes","label":"total kilobyte weight","description":"network transfer cost (post-compression) of all the resources loaded into the page.","type":2,"property":"TotalKiloByteWeight"}];
