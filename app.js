var pilihAva = 1;
var lokasiImage = 'aset/img/';
var barMakan = document.getElementById('pro_makan');
var barMasak = document.getElementById('pro_masak');
var barMain = document.getElementById('pro_main');
var barTidur = document.getElementById('pro_tidur');
var barBelajar = document.getElementById('pro_belajar');
var barKampus = document.getElementById('pro_kampus');
var barMAktifitas = document.getElementById('pro_maktifitas');
var semester = 1;
var Hari = 1;
var idle;
var progres_belajar = 299;
//set lama aktivitas
var t_belajar = 15;
var t_tidur = 30;
var t_makan = 10;
var t_masak = 5;
var t_kampus = 30;
var t_kafe = 20;
var t_supermarket = 30;
var t_warnet = 15;
document.getElementById('Hari').innerHTML = Hari;
window.onload = function (event) {
  bgLogin();
  setInterval(apiBerita, 10000);
  document.getElementById('utama').style.display = 'none';
  showImage(1);
  //showAktivitas("Diam",0);
  setProgress(barMakan, 50);
  setProgress(barMasak, 10);
  setProgress(barTidur, 50);
  setProgress(barMain, 50);
  setProgress(barBelajar, 5);
  setProgress(barMAktifitas, 0);
  idle = 1;
};
function showImage(pilihan) {
  namaAva = 'Avatar_' + pilihan + '.png';
  document.getElementById('avatar').src = lokasiImage + namaAva;
}
function showAktivitas(pilihan, waktu, pilihAva) {
  namaAva = pilihan + '.png';
  document.getElementById('aktivitas').src =
    lokasiImage + pilihan + '/' + pilihan + '_' + pilihAva + '.png';
  if (pilihan == 'Diam') {
    document.getElementById('ketAktivitas').innerHTML = pilihan;
  } else {
    if (pilihan == 'Masak') {
      document.getElementById('ketAktivitas').innerHTML =
        'Bermain = ' + waktu + ' menit';
    } else {
      document.getElementById('ketAktivitas').innerHTML =
        pilihan + '= ' + waktu + ' menit';
    }
  }
}
function aktivitas(act) {
  switch (act) {
    case 'Makan':
      if (barMakan.ariaValueNow <= 100 && barMakan.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pBelajar = barBelajar.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressBelajar = parseInt(pBelajar);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (progressMakan == 0 || progressMain == 0 || progres_belajar == 0) {
            gameOver();
          } else if (
            progressMakan >= 100 &&
            barBelajar.ariaValueNow > 0 &&
            barMain.ariaValueNow > 0 &&
            barTidur.ariaValueNow > 0
          ) {
            Swal.fire(
              'Oke!',
              'Kamu sudah Kenyang, Lakukan aktifitas lain !',
              'success'
            );
          }
          else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressMakan < 100) progressMakan = progressMakan + 1;
          if (progressTidur > 0 && i % 5 == 0)
            progressTidur = progressMakan - 1;
          if (progressTidur > 0 && i % 9 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressBelajar > 0 && i % 10 == 0)
            progressBelajar = progressBelajar - 1;
          if (progressMain > 0 && i % 5 == 0) progressMain = progressMain - 1;
          console.log(progressMain);
          setProgress(barBelajar, progressBelajar);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          setProgress(barMAktifitas, progressMAktifitas);
          showAktivitas(act, i, pilihAva);
          
          if (progres_belajar != 299) progres_belajar = progressBelajar;
          if (
            i >= t_belajar ||
            progressBelajar == 100 ||
            progressMakan == 0 ||
            progressMain == 0 ||
            progres_Tidur == 0
          ) {
            if (progressMakan == 100) {
              progressMAktifitas=progressMAktifitas +5
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                'Kamu sudah Kenyang, Lakukan aktifitas lain !',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (progressMakan == 0 || progres_belajar == 0 || progressMain == 0)
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', 'Kamu sudah Kenyang, Lakukan aktifitas lain !', 'success');
      }
      break;
      case 'Belajar':
        if (barBelajar.ariaValueNow <= 100 && barBelajar.ariaValueNow >= 0) {
          var i = 0;
          var interval = setInterval(function () {
            btnDisable();
            idle = 2;
            var pBelajar = barBelajar.ariaValueNow;
            var pMakan = barMakan.ariaValueNow;
            var pTidur = barTidur.ariaValueNow;
            var pMain = barMain.ariaValueNow;
            var pMAktifitas = barMAktifitas.ariaValueNow;
            let progressMAktifitas = parseInt(pMAktifitas);
            let progressBelajar = parseInt(pBelajar);
            let progressTidur = parseInt(pTidur);
            let progressMakan = parseInt(pMakan);
            let progressMain = parseInt(pMain);
            
            i++;
            if (progressTidur == 0 || progressMakan == 0 || progressMain == 0) {
              gameOver();
            }else if (
              progressTidur >= 100 &&
              barBelajar.ariaValueNow > 0 &&
              barMain.ariaValueNow > 0 &&
              barMakan.ariaValueNow > 0
            ) {
              Swal.fire(
                'Oke!',
                'Kamu sudah cukup untuk belajar saat ini , silahkan main / Makan !',
                'success'
              );
            } else if (
              progressMAktifitas >= 100
            ) {
              gantihari();
            }
            if (progressBelajar < 100) {
              progressBelajar = progressBelajar + 1;
              progres_belajar = progressBelajar;
            }
            if (progressTidur > 0 && i % 2 == 0)
              progressTidur = progressTidur - 1;
            if (progressTidur > 0 && i % 14 == 0)
              progressMAktifitas=progressMAktifitas +5;
            if (progressMakan > 0 && i % 3 == 0)
              progressMakan = progressMakan - 1;
            if (progressMain > 0 && i % 4 == 0) progressMain = progressMain - 1;
            console.log(progressBelajar);
            setProgress(barBelajar, progressBelajar);
            setProgress(barTidur, progressTidur);
            setProgress(barMakan, progressMakan);
            setProgress(barMain, progressMain);
            setProgress(barMAktifitas, progressMAktifitas);
            showAktivitas(act, i, pilihAva);
            if (
              i >= t_belajar ||
              progressBelajar == 100 ||
              progressTidur == 0 ||
              progressMakan == 0 ||
              progressMain == 0
            ) {
              if (progressBelajar == 100) {
                progressMAktifitas=progressMAktifitas +5
                setProgress(barMAktifitas, progressMAktifitas);
                Swal.fire(
                  'Oke!',
                  'Kamu sudah cukup untuk belajar saat ini , silahkan main / Makan !',
                  'success'
                );
              }
              if (progressMAktifitas == 100) gantihari();
              if (progressTidur == 0 || progressMakan == 0 || progressMain == 0)
                gameOver();
              showAktivitas(act, i, pilihAva);
              btnEnable();
              idle = 1;
              i = 0;
              window.clearInterval(interval);
              setTimeout(() => {
                showAktivitas('Diam', i, pilihAva);
              }, 200);
            }
          }, 1000);
        }
        break;
    case 'Istirahat':
      if (barTidur.ariaValueNow <= 100 && barTidur.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pBelajar = barBelajar.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressBelajar = parseInt(pBelajar);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (progressMakan == 0 || progressMain == 0 || progres_belajar == 0) {
            gameOver();
          } else if (
            progressTidur >= 100 &&
            barBelajar.ariaValueNow > 0 &&
            barMain.ariaValueNow > 0 &&
            barMakan.ariaValueNow > 0
          ) {
            Swal.fire(
              'Oke!',
              'Suduh cukup tidurnya, saatnya bangun !',
              'success'
            );
          }
          else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressTidur < 100) progressTidur = progressTidur + 1;
          if (progressMakan > 0 && i % 5 == 0)
            progressMakan = progressMakan - 1;
          if (progressTidur > 0 && i % 29 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressBelajar > 0 && i % 10 == 0)
            progressBelajar = progressBelajar - 1;
          if (progressMain > 0 && i % 3 == 0) progressMain = progressMain - 1;
          console.log(progressMain);
          setProgress(barBelajar, progressBelajar);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          setProgress(barMAktifitas, progressMAktifitas);
          showAktivitas(act, i, pilihAva);
          
          if (progres_belajar != 299) progres_belajar = progressBelajar;
          if (
            i >= t_tidur ||
            progressTidur == 100 ||
            progressMakan == 0 ||
            progressMain == 0 ||
            progres_belajar == 0
          ) {
            if (progressTidur == 100) {
              progressMAktifitas=progressMAktifitas +5
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                'Suduh cukup tidurnya, saatnya bangun !',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (progressMakan == 0 || progres_belajar == 0 || progressMain == 0)
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', 'Suduh cukup tidurnya, saatnya bangun !', 'success');
      }
      break;
   
      case 'Masak':
      if (barTidur.ariaValueNow <= 100 && barTidur.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pMasak = barMasak.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressMasak = parseInt(pMasak);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (
            progressMakan == 0 ||
            progressTidur == 0 ||
            progres_belajar == 0
          ) {
            gameOver();
          } else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressMain < 100) progressMasak = progressMasak + 1;
          if (progressMakan > 0 && i % 1 == 0)
          progressMakan = progressMakan - 1;
          if (progressTidur > 0 && i % 4 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressMain > 0 && i % 5 == 0)
            progressMasak = progressMasak - 1;
          if (progressTidur > 0 && i % 5 == 0)
            progressTidur = progressTidur - 1;
          console.log(progressMain);
          setProgress(barMasak, progressMasak);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          showAktivitas(act, i, pilihAva);
          setProgress(barMAktifitas, progressMAktifitas);
          if (progres_belajar != 299) progres_belajar = progressMasak;
          if (
            i >= t_masak ||
            progressMain == 100 ||
            progressMakan == 0 ||
            progressTidur == 0 ||
            progres_belajar == 0
          ) {
            if (progressMasak == 100) {
              progressMAktifitas=progressMAktifitas +5;
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                'Hebat , kamu sudah cukup jago memasak ! !',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (
              progressMakan == 0 ||
              progres_belajar == 0 ||
              progressTidur == 0
            )
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', 'Hebat , kamu sudah cukup jago memasak ! !', 'success');
      }
      break;
      case 'Kampus':
      if (barBelajar.ariaValueNow <= 100 && barBelajar.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pBelajar = barBelajar.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressBelajar = parseInt(pBelajar);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (progressMakan == 0 || progressMain == 0 || progres_belajar == 0) {
            gameOver();
          } else if (
            progressBelajar >= 100 &&
            barTidur.ariaValueNow > 0 &&
            barMain.ariaValueNow > 0 &&
            barMakan.ariaValueNow > 0
          ) {
            Swal.fire(
              'Oke!',
              'Sepertinya sudah cukup untuk belajar hari ini !',
              'success'
            );
          }
          else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressBelajar < 100) progressBelajar = progressBelajar + 1;
          if (progressMakan > 0 && i % 2 == 0)
            progressMakan = progressMakan - 1;
          if (progressTidur > 0 && i % 29 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressTidur > 0 && i % 5 == 0)
            progressTidur = progressTidur - 1;
          if (progressMain > 0 && i % 6 == 0) progressMain = progressMain - 1;
          console.log(progressMain);
          setProgress(barBelajar, progressBelajar);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          setProgress(barMAktifitas, progressMAktifitas);
          showAktivitas(act, i, pilihAva);
          
          if (progres_belajar != 299) progres_belajar = progressBelajar;
          if (
            i >= t_kampus ||
            progressBelajar == 100 ||
            progressMakan == 0 ||
            progressMain == 0 ||
            progres_Tidur == 0
          ) {
            if (progressBelajar == 100) {
              progressMAktifitas=progressMAktifitas +5
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                'Sepertinya sudah cukup untuk belajar hari ini !',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (progressMakan == 0 || progres_belajar == 0 || progressMain == 0)
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', 'Sepertinya sudah cukup untuk belajar hari ini !', 'success');
      }
      break;
      case 'Kafe':
      if (barTidur.ariaValueNow <= 100 && barTidur.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pBelajar = barBelajar.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressBelajar = parseInt(pBelajar);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (progressMakan == 0 || progressMain == 0 || progres_belajar == 0) {
            gameOver();
          } else if (
            progressTidur >= 100 &&
            barBelajar.ariaValueNow > 0 &&
            barMain.ariaValueNow > 0 &&
            barMakan.ariaValueNow > 0
          ) {
            Swal.fire(
              'Oke!',
              'Sudah cukup nongkrongnya, mari belajar kembali !',
              'success'
            );
          }
          else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressTidur < 100) progressTidur = progressTidur + 1;
          if (progressMakan > 0 && i % 5 == 0)
            progressMakan = progressMakan - 1;
          if (progressTidur > 0 && i % 19 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressBelajar > 0 && i % 4 == 0)
            progressBelajar = progressBelajar - 1;
          if (progressMain > 0 && i % 4 == 0) progressMain = progressMain - 1;
          console.log(progressMain);
          setProgress(barBelajar, progressBelajar);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          setProgress(barMAktifitas, progressMAktifitas);
          showAktivitas(act, i, pilihAva);
          
          if (progres_belajar != 299) progres_belajar = progressBelajar;
          if (
            i >= t_kafe ||
            progressTidur == 100 ||
            progressMakan == 0 ||
            progressMain == 0 ||
            progres_belajar == 0
          ) {
            if (progressTidur == 100) {
              progressMAktifitas=progressMAktifitas +5
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                'Sudah cukup nongkrongnya, mari belajar kembali !',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (progressMakan == 0 || progres_belajar == 0 || progressMain == 0)
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', 'Sudah cukup nongkrongnya, mari belajar kembali !', 'success');
      }
      break;
      case 'Supermarket':
      if (barTidur.ariaValueNow <= 100 && barTidur.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pBelajar = barBelajar.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressBelajar = parseInt(pBelajar);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (progressMakan == 0 || progressMain == 0 || progres_belajar == 0) {
            gameOver();
          } else if (
            progressTidur >= 100 &&
            barBelajar.ariaValueNow > 0 &&
            barMain.ariaValueNow > 0 &&
            barMakan.ariaValueNow > 0
          ) {
            Swal.fire(
              'Oke!',
              '',
              'success'
            );
          }
          else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressTidur < 100) progressTidur = progressTidur + -1;
          if (progressMakan > 0 && i % 2 == 0)
            progressMakan = progressMakan - 1;
          if (progressTidur > 0 && i % 29 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressBelajar > 0 && i % 5 == 0)
            progressBelajar = progressBelajar - 1;
          if (progressMain > 0 && i % 7 == 0) progressMain = progressMain - 1;
          console.log(progressMain);
          setProgress(barBelajar, progressBelajar);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          setProgress(barMAktifitas, progressMAktifitas);
          showAktivitas(act, i, pilihAva);
          
          if (progres_belajar != 299) progres_belajar = progressBelajar;
          if (
            i >= t_supermarket ||
            progressTidur == 100 ||
            progressMakan == 0 ||
            progressMain == 0 ||
            progres_belajar == 0
          ) {
            if (progressTidur == 100) {
              progressMAktifitas=progressMAktifitas +5
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                '',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (progressMakan == 0 || progres_belajar == 0 || progressMain == 0)
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', '', 'success');
      }
      break;
      case 'Warnet':
      if (barMain.ariaValueNow <= 100 && barMain.ariaValueNow >= 0) {
        var i = 0;
        var interval = setInterval(function () {
          btnDisable();
          idle = 2;
          var pBelajar = barBelajar.ariaValueNow;
          var pMakan = barMakan.ariaValueNow;
          var pTidur = barTidur.ariaValueNow;
          var pMain = barMain.ariaValueNow;
          var pMAktifitas = barMAktifitas.ariaValueNow;
          let progressMAktifitas = parseInt(pMAktifitas);
          let progressBelajar = parseInt(pBelajar);
          let progressTidur = parseInt(pTidur);
          let progressMakan = parseInt(pMakan);
          let progressMain = parseInt(pMain);
          i++;
          if (progressMakan == 0 || progressMain == 0 || progres_belajar == 0) {
            gameOver();
          } else if (
            progressMain >= 100 &&
            barBelajar.ariaValueNow > 0 &&
            barTidur.ariaValueNow > 0 &&
            barMakan.ariaValueNow > 0
          ) {
            Swal.fire(
              'Oke!',
              'Sudahi ngenetnya , mari belajar sekarang!',
              'success'
            );
          }
          else if (
            progressMAktifitas >= 100
          ) {
            gantihari();
          }
          if (progressMain < 100) progressMain = progressMain + 1;
          if (progressMakan > 0 && i % 10 == 0)
            progressMakan = progressMakan - 1;
          if (progressTidur > 0 && i % 14 == 0)
          progressMAktifitas=progressMAktifitas +5;
          if (progressBelajar > 0 && i % 3 == 0)
            progressBelajar = progressBelajar - 1;
          if (progressTidur > 0 && i % 5 == 0) progressTidur = progressTidur - 1;
          console.log(progressMain);
          setProgress(barBelajar, progressBelajar);
          setProgress(barTidur, progressTidur);
          setProgress(barMakan, progressMakan);
          setProgress(barMain, progressMain);
          setProgress(barMAktifitas, progressMAktifitas);
          showAktivitas(act, i, pilihAva);
          
          if (progres_belajar != 299) progres_belajar = progressBelajar;
          if (
            i >= t_warnet ||
            progressTidur == 100 ||
            progressMakan == 0 ||
            progressMain == 0 ||
            progres_belajar == 0
          ) {
            if (progressMain == 100) {
              progressMAktifitas=progressMAktifitas +5
              setProgress(barMAktifitas, progressMAktifitas);
              Swal.fire(
                'Oke!',
                'Sudahi ngenetnya , mari belajar sekarang !',
                'success'
              );
            }
            if (progressMAktifitas == 100) gantihari();
            if (progressMakan == 0 || progres_belajar == 0 || progressMain == 0)
              gameOver();
            showAktivitas(act, i, pilihAva);
            btnEnable();
            idle = 1;
            i = 0;
            window.clearInterval(interval);
            setTimeout(() => {
              showAktivitas('Diam', i, pilihAva);
            }, 200);
          }
        }, 1000);
      } else {
        Swal.fire('Oke!', 'Sudahi ngenetnya , mari belajar sekarang !', 'success');
      }
      break;
    default:
  }
}
function nextImage() {
  if (pilihAva < 6) {
    pilihAva = pilihAva + 1;
  } else if (pilihAva >= 6) {
    pilihAva = 1;
  }
  showImage(pilihAva);
}
function prevImage() {
  if (pilihAva > 1) {
    pilihAva = pilihAva - 1;
  } else {
    pilihAva = 6;
  }
  showImage(pilihAva);
}
function start() {
  nama = document.getElementById('inputName').value;
  if (nama == '') {
    alert('nama tidak boleh kosong');
  } else {
    document.getElementById('login').style.display = 'none';
    document.getElementById('utama').style.display = 'block';
    utama(nama);
  }
  showAktivitas('Diam', 0, pilihAva);
}
function bgLogin() {
  let textTime = new Date().toLocaleTimeString('en-US', { hour12: false });
  console.log(textTime);
  jam = textTime.split(':');
  if (jam[0] >= 5 && jam[0] <= 12) {
    document.getElementById('main').style.backgroundImage =
      "url('aset/img/morning.png')";
    document.getElementById('bgaktivitas').className =
      'card bg-light text-light bg-gradient';
    document.getElementById('bgbar').className = 'card-body text-dark bg-light';
  } else if (jam[0] > 12 && jam[0] <= 17) {
    document.getElementById('main').style.backgroundImage =
      "url('aset/img/afternoon.png')";
    document.getElementById('bgaktivitas').className =
      'card bg-light text-light bg-gradient';
    document.getElementById('bgbar').className = 'card-body text-dark bg-light';
  } else if (jam[0] > 17 || jam[0] < 5) {
    document.getElementById('main').style.backgroundImage =
      "url('aset/img/evening.png')";
    document.getElementById('bgaktivitas').className =
      'card bg-dark text-light bg-gradient';
    document.getElementById('bgbar').className = 'card-body text-light bg-dark';
    //document.getElementById("greeting").className="text-light"
    //document.getElementById("waktu").className="text-light"
  }
}
function tampilWaktu(nama) {
  let greeting;
  let textTime = new Date().toLocaleTimeString('en-US', { hour12: false });
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const d = new Date();
  let day = days[d.getDay()];

  console.log(textTime);
  jam = textTime.split(':');
  if (jam[0] >= 5 && jam[0] <= 12) {
    greeting = ' Good Morning, ' + nama + ' !';
    document.getElementById('main').style.backgroundImage =
      "url('aset/img/Home/Pagi.png')";
    document.getElementById('bgaktivitas').className =
      'card bg-light text-light bg-gradient';
    document.getElementById('bgbar').className = 'card-body text-dark bg-light';
  } else if (jam[0] > 12 && jam[0] <= 17) {
    greeting = ' Good Afternoon, ' + nama + ' !';
    document.getElementById('main').style.backgroundImage =
      "url('aset/img/Home/Siang.png')";
    document.getElementById('bgaktivitas').className =
      'card bg-light text-light bg-gradient';
    document.getElementById('bgbar').className = 'card-body text-dark bg-light';
  } else if (jam[0] > 17 || jam[0] < 5) {
    greeting = ' Good Evening, ' + nama + ' !';
    document.getElementById('main').style.backgroundImage =
      "url('aset/img/Home/Malam.png')";
    document.getElementById('bgaktivitas').className =
      'card bg-dark text-light bg-gradient';
    document.getElementById('bgbar').className = 'card-body text-light bg-dark';
    //document.getElementById("greeting").className="text-light"
    //document.getElementById("waktu").className="text-light"
  }

  var timeDisplay = document.getElementById('waktu');
  function refreshTime() {
    var dateString = new Date().toLocaleTimeString('en-US', { hour12: false });
    var formattedString = dateString.split(' ');
    timeDisplay.innerHTML = day + ', ' + formattedString[0];
    detik = formattedString[0].split(':');
    if (idle == 1) {
      prosesidle(detik[2]);
    }
  }
  setInterval(refreshTime, 1000);
  document.getElementById('greeting').innerHTML = greeting;
}
function utama(nama) {
  tampilWaktu(nama);
}

var pbar = document.getElementById('pro_makan');

function setProgress(bar, percent) {
  bar.style.width = percent + '%';
  bar.ariaValueNow = percent;
  bar.innerHTML = percent + '%';
  if (percent > 75 && percent <= 100)
    bar.className = 'progress-bar progress-bar-striped';
  else if (percent > 50 && percent <= 75)
    bar.className = 'progress-bar progress-bar-striped bg-info';
  else if (percent > 25 && percent <= 50)
    bar.className = 'progress-bar progress-bar-striped bg-warning';
  else if (percent >= 0 && percent <= 25)
    bar.className = 'progress-bar progress-bar-striped bg-danger';
}

function gameOver() {
  idle = 2;
  Swal.fire({
    title: 'Oh oh Anda kalah!',
    text: 'Permainan selesai !',
    icon: 'error',
    showCancelButton: false,
    confirmButtonColor: '#b10239',
    //cancelButtonColor: '#d33',
    confirmButtonText: 'Mulai permainan baru',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload(true);
    }
  });
}
function prosesidle(i) {
  //alert(i)
  var pBelajar = barBelajar.ariaValueNow;
  var pMakan = barMakan.ariaValueNow;
  var pTidur = barTidur.ariaValueNow;
  var pMain = barMain.ariaValueNow;
  let progressBelajar = parseInt(pBelajar);
  let progressTidur = parseInt(pTidur);
  let progressMakan = parseInt(pMakan);
  let progressMain = parseInt(pMain);
  if (progres_belajar != 299) progres_belajar = progressBelajar;
  if (
    progressTidur == 0 ||
    progressMakan == 0 ||
    progressMain == 0 ||
    progres_belajar == 0
  ) {
    gameOver();
  }
  if (progressMakan > 0 && i % 3 == 0) progressMakan = progressMakan - 1;
  if (progressTidur > 0 && i % 10 == 0) progressTidur = progressTidur - 1;
  if (progressBelajar > 0 && i % 30 == 0) progressBelajar = progressBelajar - 1;
  if (progressMain > 0 && i % 5 == 0) progressMain = progressMain - 1;

  setProgress(barBelajar, progressBelajar);
  setProgress(barTidur, progressTidur);
  setProgress(barMakan, progressMakan);
  setProgress(barMain, progressMain);
}
function gantihari() {
  if (Hari < 8) {
    Swal.fire({
      title: 'Good job!',
      text: 'Anda gantihari ke hari -' + Hari + ' !',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Lanjut ke Semester berikutnya!',
    });
    Hari = Hari + 1;
    document.getElementById('Hari').innerHTML = Hari;
    showAktivitas('Diam', 0, pilihAva);
    setProgress(barMAktifitas, 0);
    setProgress(barMAktifitas, progressMAktifitas);
    progres_belajar = 299;
  } else {
    Swal.fire({
      title: 'Congratulation!',
      text: 'Anda Telah selesai kuliah 7 hari ini ',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#44ff4b',
      confirmButtonText: 'Mulai bermain dari awal',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(true);
      }
    });
  }
}

function btnDisable() {
  document.getElementById('btnMakan').setAttribute('disabled', true);
  document.getElementById('btnMasak').setAttribute('disabled', true);
  document.getElementById('btnTidur').setAttribute('disabled', true);
  document.getElementById('btnBelajar').setAttribute('disabled', true);
}

function btnEnable() {
  document.getElementById('btnMakan').removeAttribute('disabled');
  document.getElementById('btnMasak').removeAttribute('disabled');
  document.getElementById('btnTidur').removeAttribute('disabled');
  document.getElementById('btnBelajar').removeAttribute('disabled');
}
