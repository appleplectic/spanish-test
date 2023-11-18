// @ts-nocheck
// Enable All Tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]"));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: "hover"
    });
});

// Positioning of Sliders
const checkDef = $("#checkDef")[0] as HTMLInputElement;
const checkConj = $("#checkConj")[0] as HTMLInputElement;
const defHide = $("#defHide")[0];
const conjHide = $("#conjHide")[0];

checkDef.checked = true;
checkConj.checked = true;

checkDef.addEventListener("change", () => {
    onChange(checkDef);
});
checkConj.addEventListener("change", () => {
    onChange(checkConj);
});

function onChange(check: HTMLInputElement) {
    if (!checkDef.checked && !checkConj.checked) {
        if (check === checkDef) {
            checkConj.checked = true;
        } else {
            checkDef.checked = true;
        }
    }
    conjHide.hidden = !checkConj.checked;
    defHide.hidden = !checkDef.checked;
}

// CSV Configuration
let csv: [string[]];
let firstLine: string[];

function parseCSV(results: { data: [string[]]; }) {
    const data: [string[]] = results.data as [string[]];
    firstLine = data.shift() as string[];
    if (data[data.length - 1][0] === "") {
        data.pop();
    }

    $("#hid")[0].classList.toggle("invisible", false);

    csv = data;

    $("#frontH")[0].innerHTML = csv[0][0];
    $("#backH")[0].innerHTML = csv[0][1];

    newConjugation();
}

function loadCSVFromOnline(url: string) {
    // @ts-expect-error types broken
    Papa.parse(url, {
        download: true,
        complete: parseCSV
    });
}

$("#useDefault")[0].addEventListener("click", function () {
    loadCSVFromOnline("https://raw.githubusercontent.com/appleplectic/spanish-csv/main/1127quiz.csv");
});

$("#regPresent")[0].addEventListener("click", function () {
    loadCSVFromOnline("https://raw.githubusercontent.com/appleplectic/spanish-csv/main/regular.csv");
});

$("#irregPresent")[0].addEventListener("click", function () {
    loadCSVFromOnline("https://raw.githubusercontent.com/appleplectic/spanish-csv/main/irregpres.csv");
});

$("#regPast")[0].addEventListener("click", function () {
    loadCSVFromOnline("https://raw.githubusercontent.com/appleplectic/spanish-csv/main/regpreterite.csv");
});

const inputElement = $("#formFile")[0] as HTMLInputElement;
inputElement.addEventListener("change", function (event) {
    const fileInput = event.target as HTMLInputElement;
    if ((fileInput.files == null) || fileInput.files.length === 0) {
        console.error("No file selected.");
        return;
    }
    const file = fileInput.files[0];
    // @ts-expect-error types broken
    Papa.parse(file, {
        complete: parseCSV
    });
});

// Conjugation/Definition Stuff
let conjAnswer: string, defAnswer: string;
let numCorrect: number = 0, numTotal: number = 0;
const conj = $("#conjInput")[0] as HTMLInputElement;
const def = $("#defInput")[0] as HTMLInputElement;

function newConjugation() {
    conj.value = "";
    def.value = "";
    const verbIndex = Math.floor(Math.random() * csv.length);
    const subjects = firstLine.slice(2);
    const subjectIndex = Math.floor(Math.random() * 6);
    let extraNotes = csv[verbIndex][9];
    if (extraNotes === undefined) {
        extraNotes = "";
    }
    $("#conj")[0].innerHTML = subjects[subjectIndex] + " " + csv[verbIndex][0];

    if (checkDef.checked) {
        def.focus();
    } else {
        conj.focus();
    }

    conjAnswer = csv[verbIndex][2 + subjectIndex];
    defAnswer = csv[verbIndex][1];

    $("#defAnswer")[0].innerHTML = defAnswer;
    $("#conjAnswer")[0].innerHTML = conjAnswer;
    $("#extra")[0].innerHTML = extraNotes;
}

conj.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        $("#sub")[0].click();
    }
});

def.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        if (!checkConj.checked) {
            $("#sub")[0].click();
        } else {
            $("#conjInput")[0].focus();
        }
    }
});

$("#sub")[0].addEventListener("click", function () {
    if (conj.value === "" && checkConj.checked) {
        $("#result")[0].innerHTML = "Conjugation box is empty!";
        conj.focus();
        return;
    }
    if (def.value === "" && checkDef.checked) {
        $("#result")[0].innerHTML = "Definition box is empty!";
        def.focus();
        return;
    }
    if ((conj.value === conjAnswer || !checkConj.checked) && (def.value === defAnswer || !checkDef.checked)) {
        $("#result")[0].innerHTML = "Correct!";
        numCorrect++;
        numTotal++;
        newConjugation();
    } else {
        $("#result")[0].innerHTML = "Incorrect.";
        numTotal++;
        conj.focus();
    }
    $("#numResult")[0].innerHTML = `${numCorrect} / ${numTotal} - ${Math.round((numCorrect / numTotal) * 100)}%`;
});

// Generation of Practice Sentences
function getSentence(csv: [string[]], i: number, refAnswerList: { [id: number]: string }, tryAgain: boolean = true) {
    const verbIndex = Math.floor(Math.random() * csv.length);
    let wrongVerbIndex = Math.floor(Math.random() * csv.length);
    while (wrongVerbIndex === verbIndex) {
        wrongVerbIndex = Math.floor(Math.random() * csv.length);
    }
    const verb = csv[verbIndex][0];
    const possibleVerbs = csv[verbIndex].slice(2, 8);
    const wrongVerb = csv[wrongVerbIndex][0];
    const verbTense = csv[verbIndex][8];

    const url = new URL("https://api-backend.appleplectic.org:3030/");
    const params = {
        verb: verb,
        tense: verbTense
    };
    url.search = new URLSearchParams(params).toString();
    fetch(url)
        .then(response => {
            if (response.status === 500) {
                throw new Error("Internal Server Error: 500");
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            let answer = "";
            for (const pverb of possibleVerbs) {
                if (data.includes(pverb)) {
                    const splitted = data.split(" " + pverb + " ");
                    if (splitted[0] === data) {
                        continue;
                    }
                    answer = pverb;
                    break;
                }
            }
            const sentence = $(`#sentence${i}`)[0];
            sentence.style.color = "rgb(0,0,0)";
            sentence.classList.toggle("invisible", false);

            if (answer === "") {
                throw new Error("Verb Not Found");
            }

            const splitted = data.split(" " + answer + " ");

            let randomArr = [wrongVerb, verb];
            if (Math.round(Math.random()) === 1) {
                randomArr = randomArr.reverse();
            }

            sentence.innerHTML = `${splitted[0]}
<input class="form-control d-inline-block" id="blank${i}" type="text">
${splitted[1]} (${randomArr[0]}/${randomArr[1]})`;
            refAnswerList[i] = answer;
        })
        .catch(error => {
            console.error("Error: ", error);
            const sentence = $(`#sentence${i}`)[0];
            sentence.classList.toggle("invisible", false);

            if (error.toString().includes("Verb Not Found")) {
                if (tryAgain) {
                    getSentence(csv, i, refAnswerList, false);
                } else {
                    sentence.innerHTML = "";
                }
            } else {
                sentence.innerHTML = "Errored. Try waiting a few minutes before pressing again; if the error recurs, contact Levin or donate!";
            }
        });
    return "";
}

const genSentence = $("#genSentences")[0] as HTMLButtonElement;
genSentence.addEventListener("click", function () {
    genSentence.disabled = true;
    setTimeout(function () {
        genSentence.disabled = false;
    }, 120000);

    const subSentences = $("#subSentences")[0];
    subSentences.classList.toggle("invisible", false);

    const answerList: { [id: number]: string; } = {};

    for (let i = 1; i < 6; i++) {
        const answer = getSentence(csv, i, answerList);
        if (answer) {
            answerList[i] = answer;
        }
    }

    subSentences.addEventListener("click", function () {
        let numCorrect = 0;
        let numTotal = 0;
        for (const [key, answer] of Object.entries(answerList)) {
            const hElem = $(`#sentence${key}`)[0];
            const inputElem = $(`#blank${key}`)[0] as HTMLInputElement;
            if (inputElem.value === answer) {
                hElem.style.color = "rgb(0,255,0)";
                numCorrect++;
            } else {
                hElem.style.color = "rgb(255,0,0)";
            }
            numTotal++;
        }

        $("#senResult")[0].innerHTML = `${numCorrect} / ${numTotal} - ${Math.round((numCorrect / numTotal) * 100)}%`;
    });
});

// Debounce
function debounce(func: () => void, wait: number) {
    let canClick = true;

    return function () {
        if (!canClick) {
            return;
        }
        func();

        canClick = false;
        setTimeout(() => canClick = true, wait);
    };
}

// Flashcard
$(".flashcard")[0].addEventListener("click", function () {
    this.classList.toggle("flip");
});

const debouncedLeftArrowClick = debounce(handleLeftArrowClick, 200);
const debouncedRightArrowClick = debounce(handleRightArrowClick, 200);

// Flashcard Arrows
$("#leftArrow")[0].addEventListener("click", debouncedLeftArrowClick);
$("#rightArrow")[0].addEventListener("click", debouncedRightArrowClick);

let index = 0;

function handleLeftArrowClick() {
    index--;
    if (index < 0) {
        index = csv.length - 1;
    }
    handleArrowClick(false);
}

function handleRightArrowClick() {
    index++;
    if (index > csv.length - 1) {
        index = 0;
    }
    handleArrowClick(true);
}

function handleArrowClick(left: boolean) {
    const currentFlashcard = document.querySelector(".flashcard") as HTMLElement;
    currentFlashcard.classList.remove("fly-off-left");
    currentFlashcard.classList.remove("fly-off-right");
    currentFlashcard.classList.remove("fly-on-left");
    currentFlashcard.classList.remove("fly-on-right");

    if (left) {
        currentFlashcard.classList.add("fly-off-left");
    } else {
        currentFlashcard.classList.add("fly-off-right");
    }

    setTimeout(() => {
        currentFlashcard.remove();

        const newFlashcard = document.createElement("div");
        if (left) {
            newFlashcard.className = "flashcard fly-on-left";
        } else {
            newFlashcard.className = "flashcard fly-on-right";
        }

        const front = document.createElement("div");
        front.className = "front";
        const frontP = document.createElement("h2");
        frontP.innerHTML = csv[index][0];
        front.appendChild(frontP);
        newFlashcard.appendChild(front);

        const back = document.createElement("div");
        back.className = "back";
        const backP = document.createElement("h2");
        backP.innerHTML = csv[index][1];
        back.appendChild(backP);
        newFlashcard.appendChild(back);

        $("#hid")[0].prepend(newFlashcard);

        newFlashcard.addEventListener("click", function () {
            this.classList.toggle("flip");
        });

    }, 200);
}
