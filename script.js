function showForm() {
  const selected = document.getElementById("subject").value;
  const sections = document.querySelectorAll(".form-section");
  sections.forEach(section => section.style.display = "none");

  if (selected) {
    document.getElementById(selected).style.display = "block";
  }
}

function hitungMatematika() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  if (!alas || !tinggi) {
    alert("Masukkan nilai alas dan tinggi!");
    return;
  }
  const luas = (alas * tinggi) / 2;
  document.getElementById("hasil-matematika").innerText = `Luas segitiga adalah ${luas}`;
}

function hitungFisika() {
  const v0 = parseFloat(document.getElementById("v0").value);
  const a = parseFloat(document.getElementById("a").value);
  const t = parseFloat(document.getElementById("t").value);
  if (isNaN(v0) || isNaN(a) || isNaN(t)) {
    alert("Masukkan semua nilai!");
    return;
  }
  const v = v0 + a * t;
  document.getElementById("hasil-fisika").innerText = `Kecepatan akhir adalah ${v} m/s`;
}

function hitungKimia() {
  const mol = parseFloat(document.getElementById("mol").value);
  const mr = parseFloat(document.getElementById("mr").value);
  if (isNaN(mol) || isNaN(mr)) {
    alert("Masukkan jumlah mol dan Mr!");
    return;
  }
  const massa = mol * mr;
  document.getElementById("hasil-kimia").innerText = `Massa zat adalah ${massa} gram`;
}
