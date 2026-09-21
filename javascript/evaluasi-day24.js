
function hitungFriends(arr){
    return arr.length;
}

let friends = ['rafi','hendra','abi','fauzan','ricky'];

console.log("Daftar Teman : ")
for(let i=0; i<friends.length; i++){
    console.log(friends[i]);
}

console.log("\nJumlah Teman saat ini : "+hitungFriends(friends))
 

// Setelah ditambah
console.log("\nDaftar teman setalah ditambah : ");
friends.push('panji','dimas','dani','labib');
for(let i=0; i<friends.length; i++){
    console.log(friends[i]);
}
console.log("\nJumlah Teman saat setelah ditambah : "+hitungFriends(friends))

// Seletah dikurangi
console.log("\nDaftar Teman setelah dikurangi 1 : ");
friends.pop()
for(let i=0; i<friends.length; i++){
    console.log(friends[i]);
}
console.log("\nJumlah Teman saat setelah dikurangi : "+hitungFriends(friends))

