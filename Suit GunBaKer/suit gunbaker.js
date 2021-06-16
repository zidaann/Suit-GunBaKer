// ========================Start without Loops and long codes========================
// var p = prompt(' Game Suit Gunting - Batu - Kertas '+ '\n Pilih : (cth : Gunting)' );
// var comp= Math.random();

//     //Membangkitkan bilangan random
//     if( comp < 0.33){
//         comp= 'Gunting';
//     }
//     else if(comp >= 0.33 && comp < 0.66){
//         comp= 'Batu';
//     }
//     else{
//         comp= 'Kertas';
//     }

//     //Rules
//     if(p == comp){
//         alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : SERI! ' );
//     }
//     else if(p == 'Gunting' ){
//         if(comp == 'Kertas'){
//             alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : Anda Menang! ');
//         }
//         else{
//             alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : Anda Kalah! ');
//         }
//     }
//     else if(p == 'Kertas'){
//         if(comp == 'Gunting'){
//             alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : Anda Kalah! ');
//         }
//         else{
//             alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : Anda Menang! ');
//         }
//     }
//     else if(p == 'Batu'){
//         if(comp == 'Gunting'){
//             alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : Anda Menang! '+ ' Kesempatan anda tinggal ' +tebak);
//         }
//         else{
//             alert(' Anda memilih ' + p + '\n Computer memilih ' + comp + '\n Maka hasilnya : Anda Kalah! '+ ' Kesempatan anda tinggal ' +tebak);
//         }
//     }   
//     else{
//         alert(' Anda salah memasukkan inputan');
//     }
// alert('Terima kasih');
// ========================Finish without Loops and long codes========================



// ========================Start using Loops and short Codes (Using Ternary)========================
alert(' Game Suit Gunting - Batu - Kertas '+ '\n Pilih : (cth : Gunting)' + '\n Anda memiliki 3 kesempatan' );
var tebak= 3;
while(tebak){
    var p=prompt('Tebakan anda : ');
    var comp= Math.random();
        //Membangkitkan bilangan random
        if( comp < 0.33){
            comp= 'Gunting';
        }
        else if(comp >= 0.33 && comp < 0.66){
            comp= 'Batu';
        }
        else{
            comp= 'Kertas';
        }
// ==================================
        //Rules
        var hasil=' ';
        if(p == comp){
            hasil = 'SERI!';
        }
        else if(p == 'Gunting'){
            hasil = (comp == 'Batu')? 'Kalah' : 'Menang';    //Ternary
        }
        else if(p == 'Kertas'){
            hasil = (comp == 'Gunting')? 'Kalah' : 'Menang';
        }
        else if(p == 'Batu'){
            hasil = (comp == 'Gunting')? 'Menang' : 'Kalah';
        }   
        else{
            hasil = ' Anda salah memasukkan inputan!';
        }
tebak--;
        alert(' Anda memilih : ' + p + '\n Computer memilih : ' + comp + ' \n Maka hasilnya : ' + hasil + '\n Kesempatan anda tinggal '+ tebak);
        hasil = confirm(' Main lagi ?');
}
alert(' Terima Kasih')
// ========================Finish using Loops and short Codes (Using Ternary)========================