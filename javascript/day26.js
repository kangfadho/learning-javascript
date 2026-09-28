let nilai = [60, 85, 70, 95, 45, 80];

function cekNilai(data){
    for(let i=0; i<data.length; i++){
       if(data[i]>=75){
        console.log(data[i])
       } 
    } 
}
cekNilai(nilai);














// function cekAngkaGenap(dataArray){
//     // melakukan perulangan untuk setiap elemen dalam array
//     for(let i=0; i<dataArray.length; i++){
//         // mengecek apakah array pada indeks ke-i adalah bilangan genap
//         if(dataArray[i] %2===0){
//             console.log("angka genap");
//         } else {
//             console.log("ganjil ini mah");  
//         }
//     } 
// }

// let angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
// cekAngkaGenap(angka);