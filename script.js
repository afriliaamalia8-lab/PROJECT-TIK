// data.js: Master Formula Database Module

export const SUBJECT_DATA = {
    matematika: {
        title: "📘 Matematika",
        isCategory: true,
        categories: {
            bangunDatar: {
                title: "📏 Bangun Datar",
                slides: [
                    { 
                        id: "persegi", title: "Persegi", desc: "Menghitung Luas (L) dan Keliling (K).",
                        inputs: [
                            { id: "sisi_persegi", label: "Sisi (cm)", type: "number", required: true }
                        ]
                    },
                    { 
                        id: "persegipanjang", title: "Persegi Panjang", desc: "Menghitung Luas (L) dan Keliling (K).",
                        inputs: [
                            { id: "panjang_pp", label: "Panjang (cm)", type: "number", required: true },
                            { id: "lebar_pp", label: "Lebar (cm)", type: "number", required: true }
                        ]
                    },
                    { 
                        id: "segitiga", title: "Segitiga", desc: "Rumus: L = ½ × alas × tinggi",
                        inputs: [
                            { id: "alas_s", label: "Alas (cm)", type: "number", required: true },
                            { id: "tinggi_s", label: "Tinggi (cm)", type: "number", required: true }
                        ]
                    },
                    // ... dan seterusnya untuk semua rumus
                ]
            },
            bangunRuang: {
                title: "🧊 Bangun Ruang",
                slides: [
                     { 
                        id: "kubus", title: "Kubus", desc: "Menghitung Volume (V) dan Luas Permukaan (Lp).",
                        inputs: [
                            { id: "sisi_kubus", label: "Sisi (cm)", type: "number", required: true }
                        ]
                    },
                    // ... dan seterusnya
                ]
            }
        }
    },
    fisika: {
        title: "🔭 Fisika",
        isCategory: false,
        slides: [
            { 
                id: "glbb", title: "Gerak Lurus (GLBB)", desc: "v = v₀ + a·t dan s = v₀t + ½at²",
                inputs: [
                    { id: "v0", label: "Kecepatan Awal v₀ (m/s)", type: "number", required: true },
                    { id: "af", label: "Percepatan a (m/s²)", type: "number", required: true },
                    { id: "tf", label: "Waktu t (s)", type: "number", required: true }
                ]
            },
             { 
                id: "ohm", title: "Hukum Ohm", desc: "Menghitung Tegangan (V), Arus (I), atau Hambatan (R). Isi dua nilai untuk mencari yang ketiga.",
                inputs: [
                    { id: "v_ohm", label: "Tegangan (V)", type: "number", required: false },
                    { id: "i_ohm", label: "Arus (A)", type: "number", required: false },
                    { id: "r_ohm", label: "Hambatan (Ω)", type: "number", required: false }
                ]
            },
            // ... dan seterusnya
        ]
    },
    // ... data untuk Kimia dan Ekonomi
};
