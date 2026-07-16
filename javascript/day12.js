let saldo = 10000;
let biayaAdmin = 5000;
let tarikTunai = 5000;
let sisaSaldo = saldo - biayaAdmin - tarikTunai;

if (saldo >= tarikTunai){
  console.log('Saldo Anda: '+ saldo + (' Tarik Tunai: '+ tarikTunai + 'Sisa Saldo Lu: ' + sisaSaldo ));
} else {
  console.log('Saldo tidak Cukup AJg');
  console.log('Saldo lU Segini Ajg :' + saldo)
}
