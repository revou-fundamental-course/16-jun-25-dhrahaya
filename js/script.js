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
