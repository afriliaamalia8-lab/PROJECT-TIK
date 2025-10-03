// Menunggu semua elemen HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function () {
    // Mengambil elemen display dari HTML
    const display = document.getElementById('display');
    // Mengambil semua tombol dari HTML
    const buttons = document.querySelectorAll('button');

    let currentInput = ''; // Menyimpan angka yang sedang diketik
    let operator = ''; // Menyimpan operator (+, -, *, /)
    let previousInput = ''; // Menyimpan angka pertama sebelum operator ditekan

    // Fungsi untuk mengupdate tampilan di layar
    function updateDisplay(value) {
        display.value = value;
    }

    // Melakukan loop untuk setiap tombol dan menambahkan event listener 'click'
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText; // Mendapatkan teks dari tombol yang diklik (misal: '7', '+', 'C')

            // Logika untuk menangani klik tombol
            if (!isNaN(value) || value === '.') { // Jika yang diklik adalah angka atau titik
                currentInput += value;
                updateDisplay(currentInput);
            } else if (value === 'C') { // Jika yang diklik adalah 'C' (Clear)
                currentInput = '';
                operator = '';
                previousInput = '';
                updateDisplay('0');
            } else if (value === '=') { // Jika yang diklik adalah '='
                if (currentInput && previousInput && operator) {
                    // Hitung hasilnya dan tampilkan
                    const result = calculate(previousInput, operator, currentInput);
                    updateDisplay(result);
                    // Siapkan untuk perhitungan selanjutnya
                    previousInput = result;
                    currentInput = '';
                    operator = '';
                }
            } else { // Jika yang diklik adalah operator (+, -, *, /)
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                }
                operator = value;
            }
        });
    });

    // Fungsi untuk melakukan kalkulasi
    function calculate(num1, op, num2) {
        // Mengubah string menjadi angka untuk perhitungan
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) return 'Error'; // Menangani pembagian dengan nol
                return a / b;
            default:
                return 0;
        }
    }
});
