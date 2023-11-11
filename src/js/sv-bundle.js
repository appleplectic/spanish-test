(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * @license
 * Copyright 2019 Ludan Stoecklé, 2017, HealthTap, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.endingsAux = exports.endingsSuffix = void 0;
exports.endingsSuffix = {
    ar: {
        infinitive: 'ar',
        gerund: 'ando',
        'past participle': {
            singular: {
                masculine: 'ado',
                feminine: 'ada',
            },
            plural: {
                masculine: 'ados',
                feminine: 'adas',
            },
        },
        first: {
            singular: {
                indicative: {
                    present: 'o',
                    imperfect: 'aba',
                    preterite: 'é',
                    future: 'aré',
                },
                subjunctive: {
                    present: 'e',
                    'imperfect -ra': 'ara',
                    'imperfect -se': 'ase',
                    future: 'are',
                },
                conditional: 'aría',
            },
            plural: {
                indicative: {
                    present: 'amos',
                    imperfect: 'ábamos',
                    preterite: 'amos',
                    future: 'aremos',
                },
                subjunctive: {
                    present: 'emos',
                    'imperfect -ra': 'áramos',
                    'imperfect -se': 'ásemos',
                    future: 'áremos',
                },
                conditional: 'aríamos',
                imperative: 'emos',
            },
        },
        second: {
            singular: {
                indicative: {
                    present: {
                        tu: 'as',
                        vos: 'ás',
                    },
                    imperfect: 'abas',
                    preterite: 'aste',
                    future: 'arás',
                },
                subjunctive: {
                    present: {
                        tu: 'es',
                        vos: 'és',
                    },
                    'imperfect -ra': 'aras',
                    'imperfect -se': 'ases',
                    future: 'ares',
                },
                conditional: 'arías',
                imperative: {
                    affirmative: {
                        tu: 'a',
                        vos: 'á',
                    },
                    negative: {
                        tu: 'es',
                        vos: 'és',
                    },
                },
            },
            plural: {
                indicative: {
                    present: 'áis',
                    imperfect: 'abais',
                    preterite: 'asteis',
                    future: 'aréis',
                },
                subjunctive: {
                    present: 'éis',
                    'imperfect -ra': 'arais',
                    'imperfect -se': 'aseis',
                    future: 'areis',
                },
                conditional: 'aríais',
                imperative: {
                    affirmative: 'ad',
                    negative: 'éis',
                },
            },
        },
        third: {
            singular: {
                indicative: {
                    present: 'a',
                    imperfect: 'aba',
                    preterite: 'ó',
                    future: 'ará',
                },
                subjunctive: {
                    present: 'e',
                    'imperfect -ra': 'ara',
                    'imperfect -se': 'ase',
                    future: 'are',
                },
                conditional: 'aría',
                imperative: 'e',
            },
            plural: {
                indicative: {
                    present: 'an',
                    imperfect: 'aban',
                    preterite: 'aron',
                    future: 'arán',
                },
                subjunctive: {
                    present: 'en',
                    'imperfect -ra': 'aran',
                    'imperfect -se': 'asen',
                    future: 'aren',
                },
                conditional: 'arían',
                imperative: 'en',
            },
        },
    },
    ir: {
        infinitive: 'ir',
        gerund: 'iendo',
        'past participle': {
            singular: {
                masculine: 'ido',
                feminine: 'ida',
            },
            plural: {
                masculine: 'idos',
                feminine: 'idas',
            },
        },
        first: {
            singular: {
                indicative: {
                    present: 'o',
                    imperfect: 'ía',
                    preterite: 'í',
                    future: 'iré',
                },
                subjunctive: {
                    present: 'a',
                    'imperfect -ra': 'iera',
                    'imperfect -se': 'iese',
                    future: 'iere',
                },
                conditional: 'iría',
            },
            plural: {
                indicative: {
                    present: 'imos',
                    imperfect: 'íamos',
                    preterite: 'imos',
                    future: 'iremos',
                },
                subjunctive: {
                    present: 'amos',
                    'imperfect -ra': 'iéramos',
                    'imperfect -se': 'iésemos',
                    future: 'iéremos',
                },
                conditional: 'iríamos',
                imperative: 'amos',
            },
        },
        second: {
            singular: {
                indicative: {
                    present: {
                        tu: 'es',
                        vos: 'ís',
                    },
                    imperfect: 'ías',
                    preterite: {
                        tu: 'iste',
                        vos: 'istes',
                    },
                    future: 'irás',
                },
                subjunctive: {
                    present: {
                        tu: 'as',
                        vos: 'ás',
                    },
                    'imperfect -ra': 'ieras',
                    'imperfect -se': 'ieses',
                    future: 'ieres',
                },
                conditional: 'irías',
                imperative: {
                    affirmative: {
                        tu: 'e',
                        vos: 'í',
                    },
                    negative: {
                        tu: 'as',
                        vos: 'ás',
                    },
                },
            },
            plural: {
                indicative: {
                    present: 'ís',
                    imperfect: 'íais',
                    preterite: 'isteis',
                    future: 'iréis',
                },
                subjunctive: {
                    present: 'áis',
                    'imperfect -ra': 'ierais',
                    'imperfect -se': 'ieseis',
                    future: 'iereis',
                },
                conditional: 'iríais',
                imperative: {
                    affirmative: 'id',
                    negative: 'áis',
                },
            },
        },
        third: {
            singular: {
                indicative: {
                    present: 'e',
                    imperfect: 'ía',
                    preterite: 'ió',
                    future: 'irá',
                },
                subjunctive: {
                    present: 'a',
                    'imperfect -ra': 'iera',
                    'imperfect -se': 'iese',
                    future: 'iere',
                },
                conditional: 'iría',
                imperative: 'a',
            },
            plural: {
                indicative: {
                    present: 'en',
                    imperfect: 'ían',
                    preterite: 'ieron',
                    future: 'irán',
                },
                subjunctive: {
                    present: 'an',
                    'imperfect -ra': 'ieran',
                    'imperfect -se': 'iesen',
                    future: 'ieren',
                },
                conditional: 'irían',
                imperative: 'an',
            },
        },
    },
    er: {
        infinitive: 'er',
        gerund: 'iendo',
        'past participle': {
            singular: {
                masculine: 'ido',
                feminine: 'ida',
            },
            plural: {
                masculine: 'idos',
                feminine: 'idas',
            },
        },
        first: {
            singular: {
                indicative: {
                    present: 'o',
                    imperfect: 'ía',
                    preterite: 'í',
                    future: 'eré',
                },
                subjunctive: {
                    present: 'a',
                    'imperfect -ra': 'iera',
                    'imperfect -se': 'iese',
                    future: 'iere',
                },
                conditional: 'ería',
            },
            plural: {
                indicative: {
                    present: 'emos',
                    imperfect: 'íamos',
                    preterite: 'imos',
                    future: 'eremos',
                },
                subjunctive: {
                    present: 'amos',
                    'imperfect -ra': 'iéramos',
                    'imperfect -se': 'iésemos',
                    future: 'iéremos',
                },
                conditional: 'eríamos',
                imperative: 'amos',
            },
        },
        second: {
            singular: {
                indicative: {
                    present: {
                        tu: 'es',
                        vos: 'és',
                    },
                    imperfect: 'ías',
                    preterite: {
                        tu: 'iste',
                        vos: 'istes',
                    },
                    future: 'erás',
                },
                subjunctive: {
                    present: {
                        tu: 'as',
                        vos: 'ás',
                    },
                    'imperfect -ra': 'ieras',
                    'imperfect -se': 'ieses',
                    future: 'ieres',
                },
                conditional: 'erías',
                imperative: {
                    affirmative: {
                        tu: 'e',
                        vos: 'é',
                    },
                    negative: {
                        tu: 'as',
                        vos: 'ás',
                    },
                },
            },
            plural: {
                indicative: {
                    present: 'éis',
                    imperfect: 'íais',
                    preterite: 'isteis',
                    future: 'eréis',
                },
                subjunctive: {
                    present: 'áis',
                    'imperfect -ra': 'ierais',
                    'imperfect -se': 'ieseis',
                    future: 'iereis',
                },
                conditional: 'eríais',
                imperative: {
                    affirmative: 'ed',
                    negative: 'áis',
                },
            },
        },
        third: {
            singular: {
                indicative: {
                    present: 'e',
                    imperfect: 'ía',
                    preterite: 'ió',
                    future: 'erá',
                },
                subjunctive: {
                    present: 'a',
                    'imperfect -ra': 'iera',
                    'imperfect -se': 'iese',
                    future: 'iere',
                },
                conditional: 'ería',
                imperative: 'a',
            },
            plural: {
                indicative: {
                    present: 'en',
                    imperfect: 'ían',
                    preterite: 'ieron',
                    future: 'erán',
                },
                subjunctive: {
                    present: 'an',
                    'imperfect -ra': 'ieran',
                    'imperfect -se': 'iesen',
                    future: 'ieren',
                },
                conditional: 'erían',
                imperative: 'an',
            },
        },
    },
};
exports.endingsAux = {
    first: {
        singular: {
            indicative: {
                perfect: 'he',
                pluperfect: 'había',
                'future perfect': 'habré',
                'preterite perfect': 'hube',
            },
            subjunctive: {
                perfect: 'haya',
                pluperfect: 'hubiera',
                'future perfect': 'hubiere',
            },
            conditional: {
                perfect: 'habría',
            },
        },
        plural: {
            indicative: {
                perfect: 'hemos',
                pluperfect: 'habíamos',
                'future perfect': 'habremos',
                'preterite perfect': 'hubimos',
            },
            subjunctive: {
                perfect: 'hayamos',
                pluperfect: 'hubiéramos',
                'future perfect': 'hubiéremos',
            },
            conditional: {
                perfect: 'habríamos',
            },
        },
    },
    second: {
        singular: {
            indicative: {
                perfect: 'has',
                pluperfect: 'habías',
                'future perfect': 'habrás',
                'preterite perfect': 'hubiste',
            },
            subjunctive: {
                perfect: 'hayas',
                pluperfect: 'hubieras',
                'future perfect': 'hubieres',
            },
            conditional: {
                perfect: 'habrías',
            },
        },
        plural: {
            indicative: {
                perfect: 'habéis',
                pluperfect: 'habíais',
                'future perfect': 'habréis',
                'preterite perfect': 'hubisteis',
            },
            subjunctive: {
                perfect: 'hayáis',
                pluperfect: 'hubierais',
                'future perfect': 'hubiereis',
            },
            conditional: {
                perfect: 'habríais',
            },
        },
    },
    third: {
        singular: {
            indicative: {
                perfect: 'ha',
                pluperfect: 'había',
                'future perfect': 'habrá',
                'preterite perfect': 'hubo',
            },
            subjunctive: {
                perfect: 'haya',
                pluperfect: 'hubiera',
                'future perfect': 'hubiere',
            },
            conditional: {
                perfect: 'habría',
            },
        },
        plural: {
            indicative: {
                perfect: 'han',
                pluperfect: 'habían',
                'future perfect': 'habrán',
                'preterite perfect': 'hubieron',
            },
            subjunctive: {
                perfect: 'hayan',
                pluperfect: 'hubieran',
                'future perfect': 'hubieren',
            },
            conditional: {
                perfect: 'habrían',
            },
        },
    },
};

},{}],2:[function(require,module,exports){
"use strict";
/**
 * @license
 * Copyright 2019 Ludan Stoecklé, 2017, HealthTap, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptions = void 0;
exports.exceptions = {
    estar: {
        indicative: {
            present: {
                singular: {
                    first: 'estoy',
                    second: 'estás',
                    third: 'está',
                },
                plural: {
                    third: 'están',
                },
            },
            preterite: {
                singular: {
                    first: 'estuve',
                    second: 'estuviste',
                    third: 'estuvo',
                },
                plural: {
                    first: 'estuvimos',
                    second: 'estuvisteis',
                    third: 'estuvieron',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'esté',
                    second: 'estés',
                    third: 'esté',
                },
                plural: {
                    third: 'estén',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'estuviera',
                    second: 'estuvieras',
                    third: 'estuviera',
                },
                plural: {
                    first: 'estuviéramos',
                    second: 'estuvierais',
                    third: 'estuvieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'estuviese',
                    second: 'estuvieses',
                    third: 'estuviese',
                },
                plural: {
                    first: 'estuviésemos',
                    second: 'estuvieseis',
                    third: 'estuviesen',
                },
            },
            future: {
                singular: {
                    first: 'estuviere',
                    second: 'estuvieres',
                    third: 'estuviere',
                },
                plural: {
                    first: 'estuviéremos',
                    second: 'estuviereis',
                    third: 'estuvieren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'está',
                    third: 'esté',
                },
                plural: {
                    third: 'estén',
                },
            },
            negative: {
                singular: {
                    second: 'estés',
                    third: 'esté',
                },
                plural: {
                    third: 'estén',
                },
            },
        },
    },
    ser: {
        indicative: {
            present: {
                singular: {
                    first: 'soy',
                    second: 'eres',
                    third: 'es',
                },
                plural: {
                    first: 'somos',
                    second: 'sois',
                    third: 'son',
                },
            },
            preterite: {
                singular: {
                    first: 'fui',
                    second: 'fuiste',
                    third: 'fue',
                },
                plural: {
                    first: 'fuimos',
                    second: 'fuisteis',
                    third: 'fueron',
                },
            },
            imperfect: {
                singular: {
                    first: 'era',
                    second: 'eras',
                    third: 'era',
                },
                plural: {
                    first: 'éramos',
                    second: 'erais',
                    third: 'eran',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'sea',
                    second: 'seas',
                    third: 'sea',
                },
                plural: {
                    first: 'seamos',
                    second: 'seáis',
                    third: 'sean',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'fuera',
                    second: 'fueras',
                    third: 'fuera',
                },
                plural: {
                    first: 'fuéramos',
                    second: 'fuéramos',
                    third: 'fueran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'fuese',
                    second: 'fueses',
                    third: 'fuese',
                },
                plural: {
                    first: 'fuésemos',
                    second: 'fueseis',
                    third: 'fuesen',
                },
            },
            future: {
                singular: {
                    first: 'fuere',
                    second: 'fueres',
                    third: 'fuere',
                },
                plural: {
                    first: 'fuéremos',
                    second: 'fuereis',
                    third: 'fueren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'sé',
                    third: 'sea',
                },
                plural: {
                    first: 'seamos',
                    second: 'sed',
                    third: 'sean',
                },
            },
            negative: {
                singular: {
                    second: 'seas',
                    third: 'sea',
                },
                plural: {
                    first: 'seamos',
                    second: 'seáis',
                    third: 'sean',
                },
            },
        },
    },
    haber: {
        indicative: {
            present: {
                singular: {
                    first: 'he',
                    second: 'has',
                    third: 'hay',
                },
                plural: {
                    first: 'hemos',
                    third: 'han',
                },
            },
            preterite: {
                singular: {
                    first: 'hube',
                    second: 'hubiste',
                    third: 'hubo',
                },
                plural: {
                    first: 'hubimos',
                    second: 'hubisteis',
                    third: 'hubieron',
                },
            },
            future: {
                singular: {
                    first: 'habré',
                    second: 'habrás',
                    third: 'habrá',
                },
                plural: {
                    first: 'habremos',
                    second: 'habréis',
                    third: 'habrán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'haya',
                    second: 'hayas',
                    third: 'haya',
                },
                plural: {
                    first: 'hayamos',
                    second: 'hayáis',
                    third: 'hayan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'hubiera',
                    second: 'hubieras',
                    third: 'hubiera',
                },
                plural: {
                    first: 'hubiéramos',
                    second: 'hubierais',
                    third: 'hubieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'hubiese',
                    second: 'hubieses',
                    third: 'hubiese',
                },
                plural: {
                    first: 'hubiésemos',
                    second: 'hubieseis',
                    third: 'hubiesen',
                },
            },
            future: {
                singular: {
                    first: 'hubiere',
                    second: 'hubieres',
                    third: 'hubiere',
                },
                plural: {
                    first: 'hubiéremos',
                    second: 'hubiereis',
                    third: 'hubieren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'he',
                    third: 'haya',
                },
                plural: {
                    first: 'hayamos',
                    second: 'habed',
                    third: 'hayan',
                },
            },
            negative: {
                singular: {
                    second: 'hayes',
                    third: 'haya',
                },
                plural: {
                    first: 'hayamos',
                    second: 'hayáis',
                    third: 'hayan',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'habría',
                    second: 'habrías',
                    third: 'habría',
                },
                plural: {
                    first: 'habríamos',
                    second: 'habríais',
                    third: 'habrían',
                },
            },
            future: {
                singular: {
                    first: 'habré',
                    second: 'habrás',
                    third: 'habrá',
                },
                plural: {
                    first: 'habremos',
                    second: 'habréis',
                    third: 'habrán',
                },
            },
        },
    },
    tener: {
        indicative: {
            present: {
                singular: {
                    first: 'tengo',
                    second: 'tienes',
                    third: 'tiene',
                },
                plural: {
                    third: 'tienen',
                },
            },
            preterite: {
                singular: {
                    first: 'tuve',
                    second: 'tuviste',
                    third: 'tuvo',
                },
                plural: {
                    first: 'tuvimos',
                    second: 'tuvisteis',
                    third: 'tuvieron',
                },
            },
            future: {
                singular: {
                    first: 'tendré',
                    second: 'tendrás',
                    third: 'tendrá',
                },
                plural: {
                    first: 'tendremos',
                    second: 'tendréis',
                    third: 'tendrán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'tenga',
                    second: 'tengas',
                    third: 'tenga',
                },
                plural: {
                    first: 'tengamos',
                    second: 'tengáis',
                    third: 'tengan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'tuviera',
                    second: 'tuvieras',
                    third: 'tuviera',
                },
                plural: {
                    first: 'tuviéramos',
                    second: 'tuvierais',
                    third: 'tuvieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'tuviese',
                    second: 'tuvieses',
                    third: 'tuviese',
                },
                plural: {
                    first: 'tuviésemos',
                    second: 'tuvieseis',
                    third: 'tuviesen',
                },
            },
            future: {
                singular: {
                    first: 'tuviere',
                    second: 'tuvieres',
                    third: 'tuviere',
                },
                plural: {
                    first: 'tuviéremos',
                    second: 'tuviereis',
                    third: 'tuvieren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'tendría',
                    second: 'tendrías',
                    third: 'tendría',
                },
                plural: {
                    first: 'tendríamos',
                    second: 'tendríais',
                    third: 'tendrían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'ten',
                    third: 'tenga',
                },
                plural: {
                    first: 'tengamos',
                    third: 'tengan',
                },
            },
            negative: {
                singular: {
                    second: 'tengas',
                    third: 'tenga',
                },
                plural: {
                    first: 'tengamos',
                    second: 'tengáis',
                    third: 'tengan',
                },
            },
        },
    },
    poder: {
        indicative: {
            present: {
                singular: {
                    first: 'puedo',
                    second: 'puedes',
                    third: 'puede',
                },
                plural: {
                    third: 'pueden',
                },
            },
            preterite: {
                singular: {
                    first: 'pude',
                    second: 'pudiste',
                    third: 'pudo',
                },
                plural: {
                    first: 'pudimos',
                    second: 'pudisteis',
                    third: 'pudieron',
                },
            },
            future: {
                singular: {
                    first: 'podré',
                    second: 'podrás',
                    third: 'podrá',
                },
                plural: {
                    first: 'podremos',
                    second: 'podréis',
                    third: 'podrán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'pueda',
                    second: 'puedas',
                    third: 'pueda',
                },
                plural: {
                    third: 'puedan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'pudiera',
                    second: 'pudieras',
                    third: 'pudiera',
                },
                plural: {
                    first: 'pudiéramos',
                    second: 'pudierais',
                    third: 'pudieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'pudiese',
                    second: 'pudieses',
                    third: 'pudiese',
                },
                plural: {
                    first: 'pudiésemos',
                    second: 'pudieseis',
                    third: 'pudiesen',
                },
            },
            future: {
                singular: {
                    first: 'pudiere',
                    second: 'pudieres',
                    third: 'pudiere',
                },
                plural: {
                    first: 'pudiéremos',
                    second: 'pudiereis',
                    third: 'pudieren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'podría',
                    second: 'podrías',
                    third: 'podría',
                },
                plural: {
                    first: 'podríamos',
                    second: 'podríais',
                    third: 'podrían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'puede',
                    third: 'pueda',
                },
                plural: {
                    third: 'puedan',
                },
            },
            negative: {
                singular: {
                    second: 'puedas',
                    third: 'pueda',
                },
                plural: {
                    third: 'puedan',
                },
            },
        },
    },
    ir: {
        gerund: 'yendo',
        indicative: {
            present: {
                singular: {
                    first: 'voy',
                    second: 'vas',
                    third: 'va',
                },
                plural: {
                    first: 'vamos',
                    second: 'vais',
                    third: 'van',
                },
            },
            preterite: {
                singular: {
                    first: 'fui',
                    second: 'fuiste',
                    third: 'fue',
                },
                plural: {
                    first: 'fuimos',
                    second: 'fuisteis',
                    third: 'fueron',
                },
            },
            imperfect: {
                singular: {
                    first: 'iba',
                    second: 'ibas',
                    third: 'iba',
                },
                plural: {
                    first: 'íbamos',
                    second: 'ibais',
                    third: 'iban',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'vaya',
                    second: 'vayas',
                    third: 'vaya',
                },
                plural: {
                    first: 'vayamos',
                    second: 'vayáis',
                    third: 'vayan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'fuera',
                    second: 'fueras',
                    third: 'fuera',
                },
                plural: {
                    first: 'fuéramos',
                    second: 'fuerais',
                    third: 'fueran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'fuese',
                    second: 'fueses',
                    third: 'fuese',
                },
                plural: {
                    first: 'fuésemos',
                    second: 'fueseis',
                    third: 'fuesen',
                },
            },
            future: {
                singular: {
                    first: 'fuere',
                    second: 'fueres',
                    third: 'fuere',
                },
                plural: {
                    first: 'fuéremos',
                    second: 'fuereis',
                    third: 'fueren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 've',
                    third: 'vaya',
                },
                plural: {
                    first: 'vayamos',
                    third: 'vayan',
                },
            },
            negative: {
                singular: {
                    second: 'vayas',
                    third: 'vaya',
                },
                plural: {
                    first: 'vayamos',
                    second: 'vayáis',
                    third: 'vayan',
                },
            },
        },
    },
    dar: {
        indicative: {
            present: {
                singular: {
                    first: 'doy',
                },
                plural: {
                    second: 'dais',
                },
            },
            preterite: {
                singular: {
                    first: 'di',
                    second: 'diste',
                    third: 'dio',
                },
                plural: {
                    first: 'dimos',
                    second: 'disteis',
                    third: 'dieron',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'dé',
                    third: 'dé',
                },
                plural: {
                    second: 'deis',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'diera',
                    second: 'dieras',
                    third: 'diera',
                },
                plural: {
                    first: 'diéramos',
                    second: 'dierais',
                    third: 'dieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'diese',
                    second: 'dieses',
                    third: 'diese',
                },
                plural: {
                    first: 'diésemos',
                    second: 'dieseis',
                    third: 'diesen',
                },
            },
            future: {
                singular: {
                    first: 'diere',
                    second: 'dieres',
                    third: 'diere',
                },
                plural: {
                    first: 'diéremos',
                    second: 'diereis',
                    third: 'dieren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    third: 'dé',
                },
            },
            negative: {
                singular: {
                    third: 'dé',
                },
                plural: {
                    second: 'deis',
                },
            },
        },
    },
    saber: {
        indicative: {
            present: {
                singular: {
                    first: 'sé',
                },
            },
            preterite: {
                singular: {
                    first: 'supe',
                    second: 'supiste',
                    third: 'supo',
                },
                plural: {
                    first: 'supimos',
                    second: 'supisteis',
                    third: 'supieron',
                },
            },
            future: {
                singular: {
                    first: 'sabré',
                    second: 'sabrás',
                    third: 'sabrá',
                },
                plural: {
                    first: 'sabremos',
                    second: 'sabréis',
                    third: 'sabrán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'sepa',
                    second: 'sepas',
                    third: 'sepa',
                },
                plural: {
                    first: 'sepamos',
                    second: 'sepáis',
                    third: 'sepan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'supiera',
                    second: 'supieras',
                    third: 'supiera',
                },
                plural: {
                    first: 'supiéramos',
                    second: 'supierais',
                    third: 'supieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'supiese',
                    second: 'supieses',
                    third: 'supiese',
                },
                plural: {
                    first: 'supiésemos',
                    second: 'supieseis',
                    third: 'supiesen',
                },
            },
            future: {
                singular: {
                    first: 'supiere',
                    second: 'supieres',
                    third: 'supiere',
                },
                plural: {
                    first: 'supiéremos',
                    second: 'supiereis',
                    third: 'supieren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'sabría',
                    second: 'sabrías',
                    third: 'sabría',
                },
                plural: {
                    first: 'sabríamos',
                    second: 'sabríais',
                    third: 'sabrían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    third: 'sepa',
                },
                plural: {
                    first: 'sepamos',
                    third: 'sepan',
                },
            },
            negative: {
                singular: {
                    second: 'sepas',
                    third: 'sepa',
                },
                plural: {
                    first: 'sepamos',
                    second: 'sepáis',
                    third: 'sepan',
                },
            },
        },
    },
    querer: {
        indicative: {
            present: {
                singular: {
                    first: 'quiero',
                    second: 'quieres',
                    third: 'quiere',
                },
                plural: {
                    third: 'quieren',
                },
            },
            preterite: {
                singular: {
                    first: 'quise',
                    second: 'quisiste',
                    third: 'quiso',
                },
                plural: {
                    first: 'quisimos',
                    second: 'quisisteis',
                    third: 'quisieron',
                },
            },
            future: {
                singular: {
                    first: 'querré',
                    second: 'querrás',
                    third: 'querrá',
                },
                plural: {
                    first: 'querremos',
                    second: 'querréis',
                    third: 'querrán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'quiera',
                    second: 'quieras',
                    third: 'quiera',
                },
                plural: {
                    third: 'quieran',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'quisiera',
                    second: 'quisieras',
                    third: 'quisiera',
                },
                plural: {
                    first: 'quisiéramos',
                    second: 'quisierais',
                    third: 'quisieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'quisiese',
                    second: 'quisieses',
                    third: 'quisiese',
                },
                plural: {
                    first: 'quisiésemos',
                    second: 'quisieseis',
                    third: 'quisiesen',
                },
            },
            future: {
                singular: {
                    first: 'quisiere',
                    second: 'quisieres',
                    third: 'quisiere',
                },
                plural: {
                    first: 'quisiéremos',
                    second: 'quisiereis',
                    third: 'quisieren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'querría',
                    second: 'querrías',
                    third: 'querría',
                },
                plural: {
                    first: 'querríamos',
                    second: 'querríais',
                    third: 'querrían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'quiere',
                    third: 'quiera',
                },
                plural: {
                    third: 'quieran',
                },
            },
            negative: {
                singular: {
                    second: 'quieras',
                    third: 'quiera',
                },
                plural: {
                    third: 'quieran',
                },
            },
        },
    },
    creer: {
        'past participle': 'creido',
        gerund: 'creyendo',
        indicative: {
            preterite: {
                singular: {
                    third: 'creyó',
                },
                plural: {
                    third: 'creyeron',
                },
            },
        },
        subjunctive: {
            'imperfect -ra': {
                singular: {
                    first: 'creyera',
                    second: 'creyeras',
                    third: 'creyera',
                },
                plural: {
                    first: 'creyéramos',
                    second: 'creyerais',
                    third: 'creyeran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'creyese',
                    second: 'creyeses',
                    third: 'creyese',
                },
                plural: {
                    first: 'creyésemos',
                    second: 'creyeseis',
                    third: 'creyesen',
                },
            },
            future: {
                singular: {
                    first: 'creyere',
                    second: 'creyeres',
                    third: 'creyere',
                },
                plural: {
                    first: 'creyéremos',
                    second: 'creyereis',
                    third: 'creyeren',
                },
            },
        },
    },
    seguir: {
        indicative: {
            present: {
                singular: {
                    first: 'sigo',
                    second: 'sigues',
                    third: 'sigue',
                },
                plural: {
                    third: 'siguen',
                },
            },
            preterite: {
                singular: {
                    third: 'siguió',
                },
                plural: {
                    third: 'siguieron',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'siga',
                    second: 'sigas',
                    third: 'siga',
                },
                plural: {
                    third: 'sigan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'siguiera',
                    second: 'siguieras',
                    third: 'siguiera',
                },
                plural: {
                    first: 'siguiéramos',
                    second: 'siguierais',
                    third: 'siguieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'siguiese',
                    second: 'siguieses',
                    third: 'siguiese',
                },
                plural: {
                    first: 'siguiésemos',
                    second: 'siguieseis',
                    third: 'siguiesen',
                },
            },
            future: {
                singular: {
                    first: 'siguiere',
                    second: 'siguieres',
                    third: 'siguiere',
                },
                plural: {
                    first: 'siguiéremos',
                    second: 'siguiereis',
                    third: 'siguieren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'sigue',
                    third: 'siga',
                },
                plural: {
                    first: 'sigamos',
                    third: 'sigan',
                },
            },
            negative: {
                singular: {
                    second: 'sigas',
                    third: 'siga',
                },
                plural: {
                    first: 'sigamos',
                    second: 'sigáis',
                    third: 'sigan',
                },
            },
        },
    },
    conseguir: {
        indicative: {
            present: {
                singular: {
                    first: 'consigo',
                    second: 'consigues',
                    third: 'consigue',
                },
                plural: {
                    third: 'consiguen',
                },
            },
            preterite: {
                singular: {
                    third: 'consiguió',
                },
                plural: {
                    third: 'consiguieron',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'consiga',
                    second: 'consigas',
                    third: 'consiga',
                },
                plural: {
                    third: 'consigan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'consiguiera',
                    second: 'consiguieras',
                    third: 'consiguiera',
                },
                plural: {
                    first: 'consiguiéramos',
                    second: 'consiguierais',
                    third: 'consiguieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'consiguiese',
                    second: 'consiguieses',
                    third: 'consiguiese',
                },
                plural: {
                    first: 'consiguiésemos',
                    second: 'consiguieseis',
                    third: 'consiguiesen',
                },
            },
            future: {
                singular: {
                    first: 'consiguiere',
                    second: 'consiguieres',
                    third: 'consiguiere',
                },
                plural: {
                    first: 'consiguiéremos',
                    second: 'consiguiereis',
                    third: 'consiguieren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'consigue',
                    third: 'consiga',
                },
                plural: {
                    first: 'consigamos',
                    third: 'consigan',
                },
            },
            negative: {
                singular: {
                    second: 'consigas',
                    third: 'consiga',
                },
                plural: {
                    first: 'consigamos',
                    second: 'consigáis',
                    third: 'consigan',
                },
            },
        },
    },
    abrir: {
        'past participle': 'abierto',
    },
    cubrir: {
        'past participle': 'cubierto',
    },
    decir: {
        'past participle': 'dicho',
        gerund: 'diciendo',
        indicative: {
            present: {
                singular: {
                    first: 'digo',
                    second: 'dices',
                    third: 'dice',
                },
                plural: {
                    third: 'dicen',
                },
            },
            preterite: {
                singular: {
                    first: 'dije',
                    second: 'dijiste',
                    third: 'dijo',
                },
                plural: {
                    first: 'dijimos',
                    second: 'dijisteis',
                    third: 'dijeron',
                },
            },
            future: {
                singular: {
                    first: 'diré',
                    second: 'dirás',
                    third: 'dirá',
                },
                plural: {
                    first: 'diremos',
                    second: 'diréis',
                    third: 'dirán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'diga',
                    second: 'digas',
                    third: 'diga',
                },
                plural: {
                    first: 'digamos',
                    second: 'digáis',
                    third: 'digan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'dijera',
                    second: 'dijeras',
                    third: 'dijera',
                },
                plural: {
                    first: 'dijéramos',
                    second: 'dijerais',
                    third: 'dijeran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'dijese',
                    second: 'dijeses',
                    third: 'dijese',
                },
                plural: {
                    first: 'dijésemos',
                    second: 'dijeseis',
                    third: 'dijesen',
                },
            },
            future: {
                singular: {
                    first: 'dijere',
                    second: 'dijeres',
                    third: 'dijere',
                },
                plural: {
                    first: 'dijéremos',
                    second: 'dijereis',
                    third: 'dijeren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'diría',
                    second: 'dirías',
                    third: 'diría',
                },
                plural: {
                    first: 'diríamos',
                    second: 'diríais',
                    third: 'dirían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'di',
                    third: 'diga',
                },
                plural: {
                    first: 'digamos',
                    third: 'digan',
                },
            },
            negative: {
                singular: {
                    second: 'digas',
                    third: 'diga',
                },
                plural: {
                    first: 'digamos',
                    second: 'digáis',
                    third: 'digan',
                },
            },
        },
    },
    escribir: {
        'past participle': 'escrito',
    },
    hacer: {
        'past participle': 'hecho',
        indicative: {
            present: {
                singular: {
                    first: 'hago',
                },
            },
            preterite: {
                singular: {
                    first: 'hice',
                    second: 'hiciste',
                    third: 'hizo',
                },
                plural: {
                    first: 'hicimos',
                    second: 'hicisteis',
                    third: 'hicieron',
                },
            },
            future: {
                singular: {
                    first: 'haré',
                    second: 'harás',
                    third: 'hará',
                },
                plural: {
                    first: 'haremos',
                    second: 'haréis',
                    third: 'harán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'haga',
                    second: 'hagas',
                    third: 'haga',
                },
                plural: {
                    first: 'tengamos',
                    second: 'tengáis',
                    third: 'tengan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'hiciera',
                    second: 'hicieras',
                    third: 'hiciera',
                },
                plural: {
                    first: 'hiciéramos',
                    second: 'hicierais',
                    third: 'hicieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'hiciese',
                    second: 'hicieses',
                    third: 'hiciese',
                },
                plural: {
                    first: 'hiciésemos',
                    second: 'hicieseis',
                    third: 'hiciesen',
                },
            },
            future: {
                singular: {
                    first: 'hiciere',
                    second: 'hicieres',
                    third: 'hiciere',
                },
                plural: {
                    first: 'hiciéremos',
                    second: 'hiciereis',
                    third: 'hicieren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'haría',
                    second: 'harías',
                    third: 'haría',
                },
                plural: {
                    first: 'haríamos',
                    second: 'haríais',
                    third: 'harían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'haz',
                    third: 'haga',
                },
                plural: {
                    first: 'hagamos',
                    third: 'hagan',
                },
            },
            negative: {
                singular: {
                    second: 'hagas',
                    third: 'haga',
                },
                plural: {
                    first: 'hagamos',
                    second: 'hagáis',
                    third: 'hagan',
                },
            },
        },
    },
    morir: {
        'past participle': 'muerto',
    },
    poner: {
        'past participle': 'puesto',
        indicative: {
            present: {
                singular: {
                    first: 'pongo',
                },
            },
            preterite: {
                singular: {
                    first: 'puse',
                    second: 'pusiste',
                    third: 'puso',
                },
                plural: {
                    first: 'pusimos',
                    second: 'pusisteis',
                    third: 'pusieron',
                },
            },
            future: {
                singular: {
                    first: 'pondré',
                    second: 'pondrás',
                    third: 'pondrá',
                },
                plural: {
                    first: 'pondremos',
                    second: 'pondréis',
                    third: 'pondrán',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'ponga',
                    second: 'pongas',
                    third: 'ponga',
                },
                plural: {
                    first: 'pongamos',
                    second: 'pongáis',
                    third: 'pongan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'pusiera',
                    second: 'pusieras',
                    third: 'pusiera',
                },
                plural: {
                    first: 'pusiéramos',
                    second: 'pusierais',
                    third: 'pusieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'pusiese',
                    second: 'pusieses',
                    third: 'pusiese',
                },
                plural: {
                    first: 'pusiésemos',
                    second: 'pusieseis',
                    third: 'pusiesen',
                },
            },
            future: {
                singular: {
                    first: 'pusiere',
                    second: 'pusieres',
                    third: 'pusiere',
                },
                plural: {
                    first: 'pusiéremos',
                    second: 'pusiereis',
                    third: 'pusieren',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'pondría',
                    second: 'pondrías',
                    third: 'pondría',
                },
                plural: {
                    first: 'pondríamos',
                    second: 'pondríais',
                    third: 'pondrían',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'pon',
                    third: 'ponga',
                },
                plural: {
                    first: 'pongamos',
                    third: 'pongan',
                },
            },
            negative: {
                singular: {
                    second: 'pongas',
                    third: 'ponga',
                },
                plural: {
                    first: 'pongamos',
                    second: 'pongáis',
                    third: 'pongan',
                },
            },
        },
    },
    romper: {
        'past participle': 'roto',
    },
    ver: {
        'past participle': 'visto',
        indicative: {
            present: {
                singular: {
                    first: 'veo',
                },
                plural: {
                    second: 'veis',
                },
            },
            preterite: {
                singular: {
                    first: 'vi',
                    third: 'vio',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'vea',
                    second: 'veas',
                    third: 'vea',
                },
                plural: {
                    first: 'veamos',
                    second: 'veáis',
                    third: 'vean',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    third: 'vea',
                },
                plural: {
                    first: 'veamos',
                },
            },
            negative: {
                singular: {
                    second: 'veas',
                    third: 'vea',
                },
                plural: {
                    first: 'veamos',
                    second: 'veáis',
                    third: 'vean',
                },
            },
        },
    },
    pudrir: {
        'past participle': 'podrido',
    },
    volver: {
        'past participle': 'vuelto',
    },
    producir: {
        indicative: {
            preterite: {
                singular: {
                    first: 'produje',
                    third: 'produjo',
                },
            },
        },
    },
    conducir: {
        indicative: {
            preterite: {
                singular: {
                    third: 'condujo',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    third: 'conduzca',
                },
            },
            future: {
                singular: {
                    third: 'condujere',
                },
            },
            imperfect: {
                singular: {
                    third: 'condujese',
                },
            },
        },
    },
    venir: {
        indicative: {
            present: {
                singular: {
                    first: 'vengo',
                    second: 'vienes',
                    third: 'viene',
                },
                plural: {
                    third: 'vienen',
                },
            },
            preterite: {
                singular: {
                    first: 'vine',
                    second: 'viniste',
                    third: 'vino',
                },
                plural: {
                    first: 'vinimos',
                    second: 'vinisteis',
                    third: 'vinieron',
                },
            },
        },
        conditional: {
            present: {
                singular: {
                    first: 'vendría',
                    second: 'vendrías',
                    third: 'vendría',
                },
                plural: {
                    first: 'vendríamos',
                    second: 'vendríais',
                    third: 'vendrían',
                },
            },
        },
        subjunctive: {
            present: {
                singular: {
                    first: 'venga',
                    second: 'vengas',
                    third: 'venga',
                },
                plural: {
                    first: 'vengamos',
                    second: 'vengáis',
                    third: 'vengan',
                },
            },
            'imperfect -ra': {
                singular: {
                    first: 'viniera',
                    second: 'vinieras',
                    third: 'viniera',
                },
                plural: {
                    first: 'viniéramos',
                    second: 'vinierais',
                    third: 'vinieran',
                },
            },
            'imperfect -se': {
                singular: {
                    first: 'viniese',
                    second: 'vinieses',
                    third: 'viniese',
                },
                plural: {
                    first: 'viniésemos',
                    second: 'vinieseis',
                    third: 'viniesen',
                },
            },
            future: {
                singular: {
                    first: 'viniere',
                    second: 'vinieres',
                    third: 'viniere',
                },
                plural: {
                    first: 'viniéremos',
                    second: 'viniereis',
                    third: 'vinieren',
                },
            },
        },
        imperative: {
            affirmative: {
                singular: {
                    second: 'ven',
                    third: 'venga',
                },
                plural: {
                    first: 'vengamos',
                    third: 'vengan',
                },
            },
            negative: {
                singular: {
                    second: 'venga',
                    third: 'vengamos',
                },
                plural: {
                    second: 'vengáis',
                    third: 'vengan',
                },
            },
        },
    },
};

},{}],3:[function(require,module,exports){
"use strict";
/**
 * @license
 * Copyright 2019 Ludan Stoecklé, 2017, HealthTap, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConjugation = exports.validTenses = void 0;
const inflect_1 = require("./inflect");
exports.validTenses = [
    'INDICATIVE_PRESENT',
    'INDICATIVE_IMPERFECT',
    'INDICATIVE_PRETERITE',
    'INDICATIVE_FUTURE',
    'INDICATIVE_PERFECT',
    'INDICATIVE_PLUPERFECT',
    'INDICATIVE_FUTURE_PERFECT',
    'INDICATIVE_PRETERITE_PERFECT',
    'SUBJUNCTIVE_PRESENT',
    'SUBJUNCTIVE_IMPERFECT_RA',
    'SUBJUNCTIVE_IMPERFECT_SE',
    'SUBJUNCTIVE_FUTURE',
    'SUBJUNCTIVE_PERFECT',
    'SUBJUNCTIVE_PLUPERFECT',
    'SUBJUNCTIVE_FUTURE_PERFECT',
    'CONDITIONAL_PRESENT',
    'CONDITIONAL_PERFECT',
];
function getConjugation(verb, tense, person) {
    if (!verb) {
        const err = new Error();
        err.name = 'TypeError';
        err.message = 'verb must not be null';
        throw err;
    }
    if (person != 0 && person != 1 && person != 2 && person != 3 && person != 4 && person != 5) {
        const err = new Error();
        err.name = 'TypeError';
        err.message = 'person must be 0 1 2 3 4 or 5';
        throw err;
    }
    if (!tense || exports.validTenses.indexOf(tense) === -1) {
        const err = new Error();
        err.name = 'TypeError';
        err.message = `tense must be ${exports.validTenses.join()}`;
        throw err;
    }
    const person1to5toOptions = {
        0: ['first', 'singular'],
        1: ['second', 'singular'],
        2: ['third', 'singular'],
        3: ['first', 'plural'],
        4: ['second', 'plural'],
        5: ['third', 'plural'],
    };
    const tenseToMoodTense = {
        INDICATIVE_PRESENT: ['indicative', 'present'],
        INDICATIVE_IMPERFECT: ['indicative', 'imperfect'],
        INDICATIVE_PRETERITE: ['indicative', 'preterite'],
        INDICATIVE_FUTURE: ['indicative', 'future'],
        INDICATIVE_PERFECT: ['indicative', 'perfect'],
        INDICATIVE_PLUPERFECT: ['indicative', 'pluperfect'],
        INDICATIVE_FUTURE_PERFECT: ['indicative', 'future perfect'],
        INDICATIVE_PRETERITE_PERFECT: ['indicative', 'preterite perfect'],
        SUBJUNCTIVE_PRESENT: ['subjunctive', 'present'],
        SUBJUNCTIVE_IMPERFECT_RA: ['subjunctive', 'imperfect -ra'],
        SUBJUNCTIVE_IMPERFECT_SE: ['subjunctive', 'imperfect -se'],
        SUBJUNCTIVE_FUTURE: ['subjunctive', 'future'],
        SUBJUNCTIVE_PERFECT: ['subjunctive', 'perfect'],
        SUBJUNCTIVE_PLUPERFECT: ['subjunctive', 'pluperfect'],
        SUBJUNCTIVE_FUTURE_PERFECT: ['subjunctive', 'future perfect'],
        CONDITIONAL_PRESENT: ['conditional', 'present'],
        CONDITIONAL_PERFECT: ['conditional', 'perfect'],
    };
    const options = {
        person: person1to5toOptions[person][0],
        number: person1to5toOptions[person][1],
        mood: tenseToMoodTense[tense][0],
        tense: tenseToMoodTense[tense][1],
        positivity: null,
        formality: null,
        style: 'castillano',
    };
    return (0, inflect_1.inflect)(verb, options);
}
exports.getConjugation = getConjugation;

},{"./inflect":4}],4:[function(require,module,exports){
"use strict";
/**
 * @license
 * Copyright 2019 Ludan Stoecklé, 2017, HealthTap, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inflect = void 0;
const stylesFile = __importStar(require("./styles"));
const verbsOUEFile = __importStar(require("./verbsOUE"));
const exceptionsFile = __importStar(require("./exceptions"));
const endings_1 = require("./endings");
const styles = stylesFile.styles;
const verbsOUE = verbsOUEFile.verbsOUE;
const exceptions = exceptionsFile.exceptions;
function fixStem(stem, ending, suffixAllLetters, options) {
    const suffix = suffixAllLetters[0];
    const whole = stem + ending;
    const lastLetter1Stem = stem.substring(stem.length - 1);
    const lastLetter2Stem = stem.substring(stem.length - 2);
    if ((options.mood === 'imperative' || options.tense === 'present') &&
        verbsOUE.indexOf(whole) > -1 &&
        (options.person === 'third' || options.number === 'singular')) {
        stem = stem.replace('o', 'ue');
    }
    switch (ending) {
        case 'ar': {
            if (lastLetter1Stem === 'c' && (suffix === 'e' || suffix === 'é')) {
                stem = stem.substring(0, stem.length - 1) + 'qu';
            }
            else if (lastLetter1Stem === 'g' && (suffix === 'e' || suffix === 'é')) {
                stem = stem.substring(0, stem.length - 1) + 'gu';
            }
            else if (lastLetter1Stem === 'z' && (suffix === 'e' || suffix === 'é')) {
                stem = stem.substring(0, stem.length - 1) + 'c';
            }
            break;
        }
        case 'er': {
            if ((lastLetter2Stem === 'oc' || lastLetter2Stem === 'ec') &&
                (suffix === 'a' || suffix === 'á' || suffix === 'o')) {
                stem = stem.substring(0, stem.length - 1) + 'zc';
            }
            break;
        }
        case 'ir': {
            if (lastLetter2Stem === 'uc' && (suffix === 'a' || suffix === 'á' || suffix === 'o')) {
                stem = stem.substring(0, stem.length - 1) + 'zc';
            }
            break;
        }
    }
    return stem;
}
const validTenses = [
    'present',
    'imperfect',
    'preterite',
    'future',
    'perfect',
    'pluperfect',
    'future perfect',
    'preterite perfect',
    'imperfect -ra',
    'imperfect -se',
];
/**
 * Inflect the given verb according to the given parameters.
 * The parameters are given as an object that contains
 * any of the following properties:
 *
 * <ul>
 * <li>person
 * <li>number
 * <li>mood
 * <li>tense
 * <li>gender
 * <li>positivity
 * <li>formality
 * <li>style
 * <li>reflection
 * </ul>
 * <p>
 * The person is given as one of the following strings:
 *
 * <ul>
 * <li>first - "I" and "we"
 * <li>second - "you" (singular) and "you" (plural)
 * <li>third - "he/she/it" and "they" (plural)
 * </ul>
 *
 * Default: first
 * <p>
 *
 * The number is given as any one of the following strings:
 *
 * <ul>
 * <li>singular - one person
 * <li>plural - multiple people
 * </ul>
 *
 * Default: singular
 * <p>
 *
 * The mood is given as any one of the following strings:
 *
 * <ul>
 * <li>indicative
 * <li>subjunctive
 * <li>conditional
 * <li>imperative
 * </ul>
 *
 * Default: indicative
 * <p>
 *
 * The tense is given as any one of the following strings depending
 * on the mood:
 *
 * <ul>
 * <li>indicative
 *   <ul>
 *   <li>present
 *   <li>imperfect
 *   <li>preterite
 *   <li>future
 *   <li>perfect
 *   <li>pluperfect
 *   <li>future perfect
 *   <li>preterite perfect
 *   </ul>
 * <li>subjunctive
 *   <ul>
 *   <li>present
 *   <li>imperfect -ra
 *   <li>imperfect -se
 *   <li>future
 *   <li>perfect
 *   <li>pluperfect
 *   <li>future perfect
 *   </ul>
 * <li>conditional
 *   <ul>
 *   <li>present
 *   <li>perfect
 *   </ul>
 * </ul>
 *
 * Default: present
 * <p>
 *
 * The gender is only necessary when the mood is "perfect" or "perfect subjunctive"
 * and indicates the gender of the person being spoken of:
 *
 * <ul>
 * <li>masculine
 * <li>feminine
 * </ul>
 *
 * Default: masculine
 * <p>
 *
 * The positivity is only necessary when the mood is imperative and is specified
 * with one of the following strings:
 *
 * <ul>
 * <li>affirmative - a command to do something
 * <li>negative - a command not to do something
 * </ul>
 *
 * Default: affirmative
 * <p>
 * The style parameter specifies which style of Spanish to use. This controls how
 * a verb is conjugated, especially for the second person forms. Valid values are:
 *
 * <ul>
 * <li>castillano - Spanish as spoken in Spain
 * <li>rioplatense - Spanish as spoken around the Rio de la Plata in South America. This
 * includes Argentina, Uruguay, Eastern Bolivia, and Paraguay
 * <li>chileano - Spanish as spoken in Chile
 * <li>centroamericano - Spanish as spoken in Central America
 * <li>mexicano - Spanish as spoken in Mexico
 * <li>caribeno - Spanish as spoken in Caribbean nations such as Cuba and Puerto Rico
 * <li>andino - Spanish as spoken in various Pacific Andean nations such as Peru and Ecuador
 * </ul>
 *
 * Default: castillano
 *
 * @param {String} verb the infinitive form of the verb to inflect
 * @param {Object} options optional parameters as per above
 * @returns {String} the inflected verb
 */
function inflect(verb, options) {
    if (!verb || verb.length < 2) {
        const err = new Error();
        err.name = 'TypeError';
        err.message = `invalid verb`;
        throw err;
    }
    let ret = null;
    const ending = verb.substring(verb.length - 2);
    if (!(ending in endings_1.endingsSuffix)) {
        // not a verb -- can't inflect it!
        return verb;
    }
    let stem = verb.substring(0, verb.length - 2);
    let person = options.person;
    if (person != 'first' && person != 'second' && person != 'third') {
        const err = new Error();
        err.name = 'TypeError';
        err.message = `person must be first second or third`;
        throw err;
    }
    const number = options.number;
    if (number != 'singular' && number != 'plural') {
        const err = new Error();
        err.name = 'TypeError';
        err.message = `number must be singular or plural`;
        throw err;
    }
    const mood = options.mood;
    if (mood != 'indicative' && mood != 'subjunctive' && mood != 'conditional' && mood != 'imperative') {
        const err = new Error();
        err.name = 'TypeError';
        err.message = `invalid mood`;
        throw err;
    }
    const tense = options.tense;
    if (mood != 'imperative' && validTenses.indexOf(tense) == -1) {
        const err = new Error();
        err.name = 'TypeError';
        err.message = `invalid tense`;
        throw err;
    }
    const positivity = (options && options.positivity) || 'affirmative';
    const styling = (options && options.style && styles[options.style]) || styles['castillano'];
    const formality = options.formality || 'informal';
    // ignore for castillano
    // istanbul ignore next
    if (styling.tuteo && person === 'second' && number === 'singular' && formality === 'formal') {
        // in tuteo regions, you always use tu instead of usted
        // for castillano we don't care
        // istanbul ignore next
        // formality = 'informal';
    }
    // ignore for castillano
    // istanbul ignore next
    if (styling.ustedes && person === 'second' && number === 'plural') {
        // in ustedes regions, the plural of tu is not vosotros, but ustedes instead,
        // which is the same as the third person plural
        // for castillano we don't care
        // istanbul ignore next
        person = 'third';
    }
    if (tense === 'perfect' || tense === 'pluperfect' || tense === 'future perfect' || tense === 'preterite perfect') {
        const personObj = endings_1.endingsAux[person];
        const pluralityObj = personObj[number];
        const moodObj = pluralityObj[mood];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const aux = moodObj[tense];
        const suffix = endings_1.endingsSuffix[ending]['past participle'].singular.masculine;
        const pastParticiple = (exceptions[verb] && exceptions[verb]['past participle']) || stem + suffix;
        ret = aux + ' ' + pastParticiple;
    }
    else {
        if (exceptions[verb]) {
            // see if the requested options cause an exceptional inflection, else generate the regular inflection below
            if (exceptions[verb] && exceptions[verb][mood]) {
                const moodObj = exceptions[verb][mood];
                const property = mood === 'imperative' ? positivity : tense;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const tenseObj = moodObj[property];
                if (tenseObj && tenseObj[number] && tenseObj[number][person]) {
                    const exc = tenseObj[number][person];
                    // istanbul ignore next
                    if (typeof exc === 'string') {
                        ret = exc;
                    }
                    else {
                        // no such thing in exceptions - it is not used
                        // istanbul ignore next
                        ret = exc[styling.voseo ? 'vos' : 'tu'];
                    }
                }
            }
        }
        if (!ret) {
            const personObj = endings_1.endingsSuffix[ending][person];
            const pluralityObj = personObj[number];
            const moodObj = pluralityObj[mood];
            if (typeof moodObj === 'string') {
                stem = fixStem(stem, ending, moodObj, options);
                ret = stem + moodObj;
            }
            else {
                const property = mood === 'imperative' ? positivity : tense;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const tenseObj = moodObj[property];
                // istanbul ignore else
                if (tenseObj) {
                    if (typeof tenseObj === 'string') {
                        stem = fixStem(stem, ending, tenseObj, options);
                        ret = stem + tenseObj;
                    }
                    else {
                        // only castillano at the moment
                        // istanbul ignore next
                        const tuVoKey = styling.voseo ? 'vos' : 'tu';
                        const suffix = tenseObj[tuVoKey];
                        stem = fixStem(stem, ending, suffix, options);
                        ret = stem + suffix;
                    }
                }
                else {
                    const err = new Error();
                    err.name = 'DictError';
                    err.message = `no ${property} property for ${JSON.stringify(moodObj)}`;
                    throw err;
                }
            }
            // fixes
            // eyeron-eieron-morph construction https://www.fcg-net.org/demos/morphology/inflectional-patterns/
            if (ret && ret.endsWith('eieron')) {
                ret = ret.replace(/eieron$/, 'eyeron');
            }
        }
    }
    return ret;
}
exports.inflect = inflect;

},{"./endings":1,"./exceptions":2,"./styles":5,"./verbsOUE":6}],5:[function(require,module,exports){
"use strict";
/**
 * @license
 * Copyright 2019 Ludan Stoecklé, 2017, HealthTap, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
exports.styles = {
    castillano: {
        voseo: false,
        tuteo: false,
        ustedes: false,
    },
    rioplatense: {
        voseo: true,
        tuteo: false,
        ustedes: true,
    },
    chileano: {
        voseo: false,
        tuteo: false,
        ustedes: true,
    },
    centroamericano: {
        voseo: true,
        tuteo: false,
        ustedes: true,
    },
    mexicano: {
        voseo: false,
        tuteo: false,
        ustedes: true,
    },
    caribeno: {
        voseo: false,
        tuteo: true,
        ustedes: true,
    },
    andino: {
        voseo: false,
        tuteo: false,
        ustedes: true,
    },
};

},{}],6:[function(require,module,exports){
"use strict";
/**
 * @license
 * Copyright 2019 Ludan Stoecklé, 2017, HealthTap, Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verbsOUE = void 0;
exports.verbsOUE = [
    'absolver',
    'acordar',
    'acostar',
    'almorzar',
    'alongar',
    'amoblar',
    'apostar',
    'aprobar',
    'asolar',
    'avergonzarse',
    'cocer',
    'colar',
    'colgar',
    'concordar',
    'conmover',
    'consolar',
    'contar',
    'costar',
    'degollar',
    'demoler',
    'demostrar',
    'desaprobar',
    'descolgar',
    'descontar',
    'desosar',
    'destorcer',
    'devolver',
    'disolver',
    'doler',
    'dormir',
    'encontrar',
    'engrosar',
    'envolver',
    'forzar',
    'holgar',
    'hollar',
    'llover',
    'moler',
    'morder',
    'morir',
    'mostrar',
    'mover',
    'oler	o-hue		huel-			to smell',
    'poblar',
    'probar',
    'promover',
    'recordar',
    'reforzar',
    'remorder',
    'remover',
    'renovar',
    'repoblar',
    'resolver',
    'resollar',
    'resonar',
    'retorcer',
    'revolcar',
    'revolver',
    'rodar',
    'rogar',
    'solar',
    'soldar',
    'soler',
    'soltar',
    'sonar',
    'soñar',
    'torcer',
    'tostar',
    'tronar',
    'volar',
    'volcar',
    'volver',
];

},{}],7:[function(require,module,exports){
(function (global){(function (){
var spanishVerbs = require("spanish-verbs");
global.window.spanishVerbs = spanishVerbs;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"spanish-verbs":3}]},{},[7]);
