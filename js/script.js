alert("Welcome to Thematic");

//  Event untuk menghitung luas segitiga
document.getElementById('btnLuas').addEventListener('click', function () {
  const alas = parseFloat(document.getElementById('Alas').value);
  const tinggi = parseFloat(document.getElementById('Tinggi').value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert("Masukkan angka yang valid untuk alas dan tinggi.");
    return;
  }

  // Rumus
  const luas = 0.5 * alas * tinggi;

  let rumus = document.getElementById('rumus-luas');
  if (!rumus) {
    rumus = document.createElement('p');
    rumus.id = 'rumus-luas';
    rumus.style.textAlign = 'left';
    document.getElementById('btnLuas').parentElement.appendChild(rumus);
  }

  // Hasil
  let hasil = document.getElementById('hasil-luas');
  if (!hasil) {
    hasil = document.createElement('p');
    hasil.id = 'hasil-luas';
    hasil.style.textAlign = 'left';
    document.getElementById('btnLuas').parentElement.appendChild(hasil);
  }


  // Menampilkan rumus dan hasil
  rumus.innerText = `Rumus : 
  ½ x Alas x Tinggi
  ½ × ${alas} × ${tinggi}`;
  hasil.innerText = `Luas Segitiga = ${luas} cm²`;
});

  console.log(alas, tinggi);
  if (alas != '' && tinggi != '') {
    console.log("Calculator area....");
    /// Calculating area
    const area = 0.5 * alas * tinggi;
  }
  else {
    alert("Please fill in both fields.");
  }

// Event untuk menghitung keliling segitiga
document.getElementById('btnKeliling').addEventListener('click', function () {
  const sisiA = parseFloat(document.getElementById('sisi-a').value);
  const sisiB = parseFloat(document.getElementById('sisi-b').value);
  const sisiC = parseFloat(document.getElementById('sisi-c').value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
    alert("Masukkan angka yang valid untuk ketiga sisi.");
    return;
  }

  // Rumus
  const keliling = sisiA + sisiB + sisiC;

  let rumus = document.getElementById('rumus-keliling');
  if (!rumus) {
    rumus = document.createElement('p');
    rumus.id = 'rumus-keliling';
    rumus.style.textAlign = 'left';
    document.getElementById('btnKeliling').parentElement.appendChild(rumus);
  }
  // Hasil
  let hasil = document.getElementById('hasil-keliling');
  if (!hasil) {
    hasil = document.createElement('p');
    hasil.id = 'hasil-keliling';
    hasil.style.textAlign = 'left';
    document.getElementById('btnKeliling').parentElement.appendChild(hasil);
  }
  // Menampilkan rumus dan hasil
  rumus.innerText = `Rumus : 
  Sisi A + Sisi B + Sisi C 
  ${sisiA} + ${sisiB} + ${sisiC}`;
  hasil.innerText = `Keliling Segitiga = ${keliling} cm`;
});

console.log(sisiA, sisiB, sisiC);
  if (sisiA != '' && sisiB != '' && sisiC != '') {
    console.log("Calculator area....");
    /// Calculating area
    const area = sisiA + sisiB + sisiC;
  }
  else {
    alert("Please fill in both fields.");
  }
