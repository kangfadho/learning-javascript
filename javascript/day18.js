function nilaiDiskon(harga, diskon){
    let nilaiDiskon = harga * (diskon / 100);
    let hargaSetelahDiskon = harga - nilaiDiskon;
    return hargaSetelahDiskon;
}

let hasil = nilaiDiskon(100000, 10)
console.log("ini adalah harga diskonya: " + hasil);