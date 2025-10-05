function showForm() {
  const selected = document.getElementById("subject").value;
  document.querySelectorAll(".form-section").forEach(sec => sec.style.display = "none");
  if (selected) document.getElementById(selected).style.display = "block";
}

function showMathSubForm() {
  const kategori = document.getElementById("kategori-mtk").value;
  document.querySelectorAll(".sub-form").forEach(sec => sec.style.display = "none");
  if (kategori === "datar") document.getElementById("bangun-datar").style.display = "block";
  if (kategori === "ruang") document.getElementById("bangun-ruang").style.display = "block";
}

// Matematika
function hitungSegitiga() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(alas) || isNaN(tinggi)) return alert("Isi alas dan tinggi!");
  const luas = (alas * tinggi) / 2;
  document.getElementById("hasil-segitiga").innerText = `Luas = ${luas} cm²`;
}

function hitungLingkaran() {
  let phi = document.getElementById("phi").value;
  phi = phi === "22/7" ? 22/7 : 3.14;
  const r = parseFloat(document.getElementById("jari").value);
  if (isNaN(r)) return alert("Masukkan jari-jari!");
  const luas = phi * r * r;
  document.getElementById("hasil-lingkaran").innerText = `Luas = ${luas.toFixed(2)} cm²`;
}

function hitungKubus() {
  const s = parseFloat(document.getElementById("sisi").value);
  if (isNaN(s)) return alert("Masukkan sisi!");
  document.getElementById("hasil-kubus").innerText = `Volume = ${Math.pow(s,3)} cm³`;
}

function hitungTabung() {
  let phi = document.getElementById("phi-tabung").value;
  phi = phi === "22/7" ? 22/7 : 3.14;
  const r = parseFloat(document.getElementById("r-tabung").value);
  const t = parseFloat(document.getElementById("t-tabung").value);
  if (isNaN(r) || isNaN(t)) return alert("Masukkan jari-jari dan tinggi!");
  const v = phi * r * r * t;
  document.getElementById("hasil-tabung").innerText = `Volume = ${v.toFixed(2)} cm³`;
}

// Fisika
function hitungFisika() {
  const v0 = parseFloat(document.getElementById("v0").value);
  const a = parseFloat(document.getElementById("a").value);
  const t = parseFloat(document.getElementById("t").value);
  if (isNaN(v0) || isNaN(a) || isNaN(t)) return alert("Lengkapi semua nilai!");
  document.getElementById("hasil-fisika").innerText = `v = ${v0 + a * t} m/s`;
}

// Kimia
function hitungKimia() {
  const mol = parseFloat(document.getElementById("mol").value);
  const mr = parseFloat(document.getElementById("mr").value);
  if (isNaN(mol) || isNaN(mr)) return alert("Isi mol dan Mr!");
  document.getElementById("hasil-kimia").innerText = `Massa = ${(mol * mr).toFixed(2)} gram`;
}

// Ekonomi
function hitungEkonomi() {
  const pendapatan = parseFloat(document.getElementById("pendapatan").value);
  const modal = parseFloat(document.getElementById("modal").value);
  if (isNaN(pendapatan) || isNaN(modal)) return alert("Isi pendapatan & modal!");
  const laba = pendapatan - modal;
  document.getElementById("hasil-ekonomi").innerText = laba >= 0 ? `Laba = Rp${laba}` : `Rugi = Rp${Math.abs(laba)}`;
}
