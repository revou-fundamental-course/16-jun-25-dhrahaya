alert("Welcome to My Website");

// Fungsi hitung luas
document.getElementById('btnLuas').addEventListener('click', function () {
  const alas = parseFloat(document.getElementById('Alas').value);
  const tinggi = parseFloat(document.getElementById('Tinggi').value);

  // Validasi input
  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert("Masukkan angka yang valid untuk alas dan tinggi.");
    return;
  }

  const luas = 0.5 * alas * tinggi;

  let rumus = document.getElementById('rumus-luas');
  if (!rumus) {
    rumus = document.createElement('p');
    rumus.id = 'rumus-luas';
    rumus.style.textAlign = 'left';
    document.getElementById('btnLuas').parentElement.appendChild(rumus);
  }

  let hasil = document.getElementById('hasil-luas');
  if (!hasil) {
    hasil = document.createElement('p');
    hasil.id = 'hasil-luas';
    hasil.style.textAlign = 'left';
    document.getElementById('btnLuas').parentElement.appendChild(hasil);
  }

  rumus.innerText = `Rumus : 
  ½ x Alas x Tinggi
  ½ × ${alas} × ${tinggi}`;
  hasil.innerText = `Luas Segitiga = ${luas} cm²`;
});

// Fungsi hitung keliling
document.getElementById('btnKeliling').addEventListener('click', function () {
  const sisiA = parseFloat(document.getElementById('sisi-a').value);
  const sisiB = parseFloat(document.getElementById('sisi-b').value);
  const sisiC = parseFloat(document.getElementById('sisi-c').value);

  // Validasi input
  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
    alert("Masukkan angka yang valid untuk ketiga sisi.");
    return;
  }

  const keliling = sisiA + sisiB + sisiC;

  let rumus = document.getElementById('rumus-keliling');
  if (!rumus) {
    rumus = document.createElement('p');
    rumus.id = 'rumus-keliling';
    rumus.style.textAlign = 'left';
    document.getElementById('btnKeliling').parentElement.appendChild(rumus);
  }

  let hasil = document.getElementById('hasil-keliling');
  if (!hasil) {
    hasil = document.createElement('p');
    hasil.id = 'hasil-keliling';
    hasil.style.textAlign = 'left';
    document.getElementById('btnKeliling').parentElement.appendChild(hasil);
  }

  rumus.innerText = `Rumus : 
  Sisi A + Sisi B + Sisi C 
  ${sisiA} + ${sisiB} + ${sisiC}`;
  hasil.innerText = `Keliling Segitiga = ${keliling} cm`;
});
alret("Welcome to My Website");

document.getElementById("hitung").addEventListener("click", function () {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasilEl = document.getElementById("hasil");

  if (isNaN(alas) || isNaN(tinggi)) {
    hasilEl.textContent = "Masukkan angka yang valid untuk alas dan tinggi!";
  } else {
    const Luas = 0.5 * alas * tinggi;
    hasilEl.textContent = `Luas segitiga adalah ${luas} cm²`;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("Sisi A").value = "";
  document.getElementById("Sisi B").value = "";
  document.getElementById("Sisi C").value = "";
  document.getElementById("hasil").textContent = "";

  const sisiA = parseFloat(document.getElementById("Sisi A").value);
  const sisiB = parseFloat(document.getElementById("Sisi B").value);
  const sisiC = parseFloat(document.getElementById("Sisi C").value);
  const hasilEl = document.getElementById("hasil");

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    hasilEl.textContent = "Masukkan angka yang valid untuk sisi-sisi segitiga!";
  } else {
    const Keliling = sisiA + sisiB + sisiC;
    hasilEl.textContent = `Keliling segitiga adalah ${Keliling} cm`;
  }
});
