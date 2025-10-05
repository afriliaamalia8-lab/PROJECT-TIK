function showForm() {
  const selected = document.getElementById("subject").value;
  const sections = document.querySelectorAll(".form-section");
  sections.forEach(s => s.style.display = "none");
  if (selected) document.getElementById(selected).style.display = "block";
}

function showSub(id) {
  document.querySelectorAll('.sub-form').forEach(f => f.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function hitungLingkaran() {
  let phiValue = document.getElementById("phi").value === "22/7" ? 22/7 : 3.14;
  let r = parseFloat(document.getElementById("r").value);
  if (isNaN(r)) return alert("Masukkan jari-jari!");
  let luas = phiValue * r * r;
  document.getElementById("hasilLingkaran").innerText = `Luas = ${luas.toFixed(2)} cm²`;
}

function hitungPolinomial() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  let x = +document.getElementById("x").value;
  if ([a,b,c,x].some(isNaN)) return alert("Lengkapi semua nilai!");
  let fx = a*x*x + b*x + c;
  document.getElementById("hasilPolinomial").innerText = `f(x) = ${fx}`;
}

function hitungFisika() {
  let v0 = +document.getElementById("v0").value;
  let a = +document.getElementById("aF").value;
  let t = +document.getElementById("tF").value;
  if ([v0,a,t].some(isNaN)) return alert("Isi semua data!");
  let v = v0 + a*t;
  document.getElementById("hasilFisika").innerText = `Kecepatan akhir = ${v} m/s`;
}

function hitungKimia() {
  let mol = +document.getElementById("mol").value;
  let mr = +document.getElementById("mr").value;
  if ([mol,mr].some(isNaN)) return alert("Isi mol & Mr!");
  let massa = mol * mr;
  document.getElementById("hasilKimia").innerText = `Massa zat = ${massa} gram`;
}

function hitungEkonomi() {
  let p = +document.getElementById("pendapatan").value;
  let b = +document.getElementById("biaya").value;
  if ([p,b].some(isNaN)) return alert("Masukkan data lengkap!");
  let laba = p - b;
  document.getElementById("hasilEkonomi").innerText = `Laba = Rp ${laba.toLocaleString()}`;
}

// KALKULATOR UMUM
function append(v){ document.getElementById("display").value += v; }
function clearDisplay(){ document.getElementById("display").value = ""; }
function del(){
  let d = document.getElementById("display");
  d.value = d.value.slice(0,-1);
}
function calculate(){
  try{
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  }catch{
    alert("Input tidak valid!");
  }
}
