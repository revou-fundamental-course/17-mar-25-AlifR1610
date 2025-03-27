// script.js
function showSquare() {
    document.getElementById('calculator').innerHTML = `
        <h2>Luas Persegi</h2>
        <p>Rumus Luas Persegi: L = S x S</p>
        <div class="section-image1"></div> 
        <input type="number" id="side" placeholder="Nilai Sisi" />
        <button onclick="calculateSquareArea()">Hitung</button>
        <button onclick="hapusLuasPersegi()">Hapus</button>
        <div id="result"></div>

        <div>
        <h2>Keliling Persegi</h2>
        <p>Rumus Keliling Persegi: K = 4 × S</p>
        <div class="section-image1"></div> 
        <input type="number" id="sisiKeliling" placeholder="Nilai Sisi">
        <button onclick="hitungKelilingPersegi()">Hitung</button>
        <button onclick="hapusKelilingPersegi()">Hapus</button>
        <p id="hasilKelilingPersegi"></p>
        </div>

        
    `;
    document.querySelector('.calculator').style.display = 'block';
}

function showRectangle() {
    document.getElementById('calculator').innerHTML = `
        <h2>Luas Persegi Panjang</h2>
        <p>Rumus Luas Persegi Panjang: L = P x L</p>
        <div class="section-image2"></div>
        <input type="number" id="length" placeholder="Panjang" />
        <input type="number" id="width" placeholder="Lebar" />
        <button onclick="calculateRectangleArea()">Hitung</button>
        <button onclick="hapusLuasPersegiPanjang()">Hapus</button>
        <div id="result"></div>

        <div>
        <h2>Keliling Persegi Panjang</h2>
        <p>Rumus Keliling Persegi Panjang: K = 2 × (P + L)</p>
        <div class="section-image2"></div>
        <input type="number" id="panjangKeliling" placeholder="Panjang">
        <input type="number" id="lebarKeliling" placeholder="Lebar">
        <button onclick="hitungKelilingPersegiPanjang()">Hitung</button>
        <button onclick="hapusKelilingPersegiPanjang()">Hapus</button>
        <p id="hasilKelilingPersegiPanjang"></p>
        </div>
    `;
    document.querySelector('.calculator').style.display = 'block';
}

function calculateSquareArea() {
    const sisiInput = document.getElementById('side');

    // Check if the input is empty
    if (sisiInput.value == '') {
        alert('Sisi harus diisi!');
    } else {
        let side = parseFloat(document.getElementById('side').value);
        let area = side * side;
        document.getElementById('result').innerText = `L = ${side} x ${side} = ${area}`;
    }
}
    

function hitungKelilingPersegi() {
    const sisiInput = document.getElementById('sisiKeliling');
    if (sisiInput.value == '') {
        alert('Sisi harus diisi!');
    } else {
    let sisi = document.getElementById("sisiKeliling").value;
    let keliling = 4 * sisi;
    document.getElementById("hasilKelilingPersegi").innerText = "K = 4 x " + sisi + " = " + keliling;
}
}

function calculateRectangleArea() {
    const sisiInput1 = document.getElementById('length');
    const sisiInput2 = document.getElementById('width');
    if (sisiInput1.value == '' || sisiInput2.value == '') {
        alert('Sisi harus diisi!');
    } else {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `L = ${length} x ${width} = ${area}`;
}
}

function hitungKelilingPersegiPanjang() {
    const sisiInput1 = document.getElementById('panjangKeliling');
    const sisiInput2 = document.getElementById('lebarKeliling');
    if (sisiInput1.value == '' || sisiInput2.value == '') {
        alert('Sisi harus diisi!');
    } else {
    let panjang = document.getElementById("panjangKeliling").value;
    let lebar = document.getElementById("lebarKeliling").value;
    let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
    document.getElementById("hasilKelilingPersegiPanjang").innerText = "K = 2 x (" + panjang + " + " + lebar + ") = " + keliling;
}
}

function resetCalculator() {
    document.getElementById('calculator').innerHTML = '';
    document.querySelector('.calculator').style.display = 'none';
}

function hapusLuasPersegi() {
    document.getElementById("side").value = "";
    document.getElementById("result").innerText = "";
}

function hapusKelilingPersegi() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKelilingPersegi").innerText = "";
}

function hapusLuasPersegiPanjang() {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("result").innerText = "";
}

function hapusKelilingPersegiPanjang() {
    document.getElementById("panjangKeliling").value = "";
    document.getElementById("lebarKeliling").value = "";
    document.getElementById("hasilKelilingPersegiPanjang").innerText = "";
}

