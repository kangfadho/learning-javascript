let nilai = [60, 85, 70, 95, 45, 80];

function tampikanLulus(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]>= 75) {
            console.log("NilaiMu Bagus Wok "+ data[i])
        }
    
    }

}
function hitungLulus(data) {
    let jumlah = 0;
    for(let i = 0; i<data.length; i++){
        if(data[i]>=75){
            jumlah++;
        }
    }
    return jumlah;

}
tampikanLulus(nilai)
console.log(hitungLulus(nilai))

