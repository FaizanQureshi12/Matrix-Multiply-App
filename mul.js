function gpt() {

    mt1.innerHTML = "";
    mt2.innerHTML = "";
    rmt.innerHTML = "";
    // message.innerHTML = "";
    
    gp1 = +document.querySelector("#gp1").value;
    gp2 = +document.querySelector("#gp2").value;
    
    if (gp1 !== gp2) {
        msg.innerText = "Please enter the same number for both inputs";
        return;
    }
    if (isNaN(gp1) || isNaN(gp2)) {
        msg.innerText = "Please enter a number";
        return;
    }
    if (gp1 < 2 || gp2 < 2) {
        msg.innerText = "Please enter a number greater than 1";
        return;
    }
    for (let i = 0; i < gp1; i++) {
        for (let j = 0; j < gp2; j++) {
            console.log("running");
            mt1.innerHTML +=
                `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value="0">`;
            mt2.innerHTML +=
                `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value="0">`;
            rmt.innerHTML +=
                `<input type="number" readonly required min="0" max="100" id="rmt-${i}-${j}" value="0">`;
        }
        mt1.innerHTML += `<br>`;
        mt2.innerHTML += `<br>`;
        rmt.innerHTML += `<br>`;
    }
    document.querySelector("#osf").classList.remove ("hide");
    }
    
            function multiply() {
    
    let matrixa = [];
    let matrixb = [];
    let intermediate = document.querySelector("#intermediate");
    intermediate.innerHTML = "";
    
    for (let i = 0; i < gp1; i++) {
        for (let j = 0; j < gp2; j++) {
            if (!matrixa[i]) matrixa[i] = [];
            if (!matrixb[i]) matrixb[i] = [];
    
            matrixa[i][j] = +document.querySelector(`#m1-${i}-${j}`).value;
            matrixb[i][j] = +document.querySelector(`#m2-${i}-${j}`).value;
        }
    }
    let returnValue = matrixMultiply(matrixa, matrixb);
    let result = returnValue[0]
    let intermediateHtml = returnValue[1]
    
    console.log("intermediateHtml: ", intermediateHtml);
    intermediate.innerHTML = intermediateHtml
    
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            console.log(i, j);
            document.querySelector(`#rmt-${i}-${j}`).value = result[i][j]
        }
    }
    }
    
    // https://stackoverflow.com/a/62605311/4378475
    
    function matrixMultiply(a, b) {
    
    let intermediateHtml = "";
    let aRows = a.length;
    let aCols = a[0].length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    for (let r = 0; r < aRows; ++r) {
        const row = new Array(bCols);
        result[r] = row;
        const ar = a[r];
        for (let c = 0; c < bCols; ++c) {
            let sum = 0.;
            for (let i = 0; i < aCols; ++i) {
                sum += ar[i] * b[i][c];
                intermediateHtml += `${ar[i]} * ${b[i][c]} + `;
            }
            intermediateHtml = intermediateHtml.slice(0, -2);
            intermediateHtml += `&nbsp;&nbsp;&nbsp;&nbsp;`;
            row[c] = sum;
        }
        intermediateHtml += `<br>`
    }
    return [result, intermediateHtml];
    }
    
     // document.getElementById('osf').style.visibility = 'hidden'
             
            //  let gp1 =''
            //  let gp2 =''
    
            // function gpt() {
            //     mt1.innerHTML = '';
            //     mt2.innerHTML = '';
            //     rmt.innerHTML = '';
            //     msg.innerHTML = ''
                 
            //     document.querySelector('#msg')
            //     value1 = +document.querySelector('#gp1').value
            //     value2 = +document.querySelector('#gp2').value
    
            //     if (value1 !== value2) {
            //         msg.innerText='Value Must be Same';
            //         return;
            //     }
            //     if(value1 <2 || value2 <2){
            //         msg.innerText='Enter a Number Greater Than 1';
            //         return;
            //     }
            //     for (let i = 0; i < value1; i++) {
            //         for (let j = 0; j < value2; j++) {
            //             console.log('running')
            //             mt1.innerHTML +=
            //                 // ` <input  class="m1${i} m1${j}" id="m1${i}${j}" type="number" min="0">`
            //                 ` <input  id="m1-${i}-${j}" type="number" min="0">`
            //             mt2.innerHTML +=
            //                 ` <input   id="m1-${i}-${j}" type="number" min="0">`
            //             rmt.innerHTML +=
            //                 ` <input   id="m1-${i}-${j}" readonly type="number" min="0">`;
            //         }
            //         mt1.innerHTML += `<br>`
            //         mt2.innerHTML += `<br>`
            //         rmt.innerHTML += `<br>`
            //     }
            //     document.getElementById('osf').style.visibility = 'visible'
            // }
    
            // function Multiply() {
            //     let mul1 = []
            //     let mul2 = []
            //     let mul3 = []
    
            //     for (let i = 0; i < value1; i++) {
            //         for (let j = 0; j < value2; j++) {
            //             let m1value = +document.querySelector(`#m1${i}${j}`).value;
            //             let m2value = +document.querySelector(`#m2${i}${j}`).value
            //             mul1.push(m1value);
            //             mul2.push(m2value);
            //         }
            //     }
                
            //     for (let i = 0; i < value1; i++) {
            //         for (let j = 0; j < value2; j++) {
            //             let m3sum = 0
            //             for (let k = 0; k < value1; k++) {
            //                 m3sum += mul1[i * value1 + k] * mul2[k * value2 + j]
            //             }
            //             mul3.push(m3sum);
            //         }
            //     }
            //     for (let i = 0; i < value1; i++) {
            //         for (let j = 0; j < value2; j++) {
            //             document.querySelector(`#m3${i}${j}`).value = mul3[i * value1 + j]
            //         }
            //     }
            // }
    