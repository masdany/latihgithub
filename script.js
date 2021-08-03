var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("mybody");

// console.log(css);

// console.log(color1);


// console.log(color2);

// console.log(body);

function gantiwarnabg() {
    body.style.background = "linear-gradient(to right, " + color1.value + ","
        + color2.value + ")";

    css.textContent = body.style.background + ";";
}
// function jika di tambah () =gantiwarnabg() berarti langsung dijalankan
// tapi jika tidak di pasang () = gantiwarnabg berarti menunggu di jalankan berdasarkan
// event yang men triger nya
color1.addEventListener("input", gantiwarnabg);

color2.addEventListener("input", gantiwarnabg);

var button = document.getElementById("btnData");
var input = document.getElementById("inpData");
var outputWhat = document.querySelectorAll("h4");
// console.log(button);
// console.log(input);
// console.log(outputWhat);



button.addEventListener("click", cekLetCons);

let experience = 1000;
let wizardlevel = false;



function cekLetCons() {
    let experience = input.value;
    let wizardlevel = false;

    var inpVal = parseInt(input.value);

    const pangkat2 = (inpVal) => {
        if (inpVal > 0) {
            return inpVal * 2;
        }
    };

    if (experience > 90) {
        wizardlevel = true;
    }
    // dibawah ini dulu, ecmas6 pakai yang bawahnya lagi
    // outputWhat[0].innerText = "ini dari let di didalam {} nilainya di pengaruhi input text" + wizardlevel + " level at " + experience;
    outputWhat[0].innerText = `ini dari let di didalam {} nilainya di pengaruhi input text ${wizardlevel} level at ${experience}`;
    inpVal = pangkat2;
    outputWhat[2].innerText = `ini pangkat 2 dari ${inpVal} = ${pangkat2}`;
};

// outputWhat[1].innerText = "ini dari let di luar {} tidak di pengaruhi input text" + wizardlevel + " level at " + experience;

outputWhat[1].innerText = `ini dari let di luar {} tidak di pengaruhi input text ${wizardlevel} level at ${experience}`;






