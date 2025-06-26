//  Event untuk menghitung luas segitiga
function calculateluas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert("Masukkan angka yang valid untuk alas dan tinggi.");
    return;
  }

  const luas = 0.5 * alas * tinggi;
  const hasil = document.getElementById('hasil-luas');
  hasil.style.textAlign = 'left';
  hasil.innerHTML = `
    <b>Rumus:</b><br>
    ½ x Alas x Tinggi<br>
    ½ × ${alas} × ${tinggi} = <b>${luas} cm²</b>
  `;
}

// Fungsi untuk mereset input dan hasil perhitungan luas segitiga
function resetluas() {
  document.getElementById('alas').value = "";
  document.getElementById('tinggi').value = "";
  const hasil = document.getElementById('hasil-luas');
  if (hasil) hasil.innerHTML = "";
}

// Event untuk menghitung keliling segitiga
function calculatekeliling() {
  const sisiA = parseFloat(document.getElementById('sisi-a').value);
  const sisiB = parseFloat(document.getElementById('sisi-b').value);
  const sisiC = parseFloat(document.getElementById('sisi-c').value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
    alert("Masukkan angka yang valid untuk ketiga sisi.");
    return;
  }

  const keliling = sisiA + sisiB + sisiC;
  const hasil = document.getElementById('hasil-keliling');
  hasil.style.textAlign = 'left';
  hasil.innerHTML = `
    <b>Rumus:</b><br>
    Sisi A + Sisi B + Sisi C<br>
    ${sisiA} + ${sisiB} + ${sisiC} = <b>${keliling} cm</b>
  `;
}

// Fungsi untuk mereset input dan hasil perhitungan keliling segitiga
function resetkeliling() {
  document.getElementById('sisi-a').value = "";
  document.getElementById('sisi-b').value = "";
  document.getElementById('sisi-c').value = "";
  const hasil = document.getElementById('hasil-keliling');
  if (hasil) hasil.innerHTML = "";
}
