function cekNilai(nilai){
    if (nilai >= 80){
        return "Nilai A";
    } else if (nilai >= 70){
        return "Nilai B";
    } else if (nilai >= 60){
        return "Nilai C";
    } else 
        return "Lu Bodoh banget sih Anjggg";
}

let hasil = cekNilai(0);
console.log(hasil);