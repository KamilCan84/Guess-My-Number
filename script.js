'use strict'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Doğru sayı'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 15
// // console.log(document.querySelector('.number'))
// document.querySelector('.score').textContent = 10

// console.log(document.querySelector('.guess').value)

// document.querySelector('.guess').value = 25

let gizliNumara = Math.trunc(Math.random() * 20) + 1

let puan = 20
let yüksekPuan = 0
const ekranMesajı = function (mesaj) {
  document.querySelector('.message').textContent = mesaj
}
document.querySelector('.check').addEventListener('click', function () {
  const tahmin = Number(document.querySelector('.guess').value)
  console.log(tahmin, typeof tahmin)
  //Değer girilmemiş
  if (!tahmin) {
    // document.querySelector('.message').textContent = 'Sayı yok'
    ekranMesajı('Sayı Yok')
    //Oyuncu kazanır
  } else if (tahmin === gizliNumara) {
    // document.querySelector('.message').textContent = 'Doğru sayı'
    ekranMesajı('Doğru Sayı')
    document.querySelector('.number').textContent = gizliNumara
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    if (puan > yüksekPuan) {
      yüksekPuan = puan
      document.querySelector('.highscore').textContent = yüksekPuan
    }
    //Tahmin yanlış olduğunda
  } else if (tahmin !== gizliNumara) {
    if (puan > 1) {
      // document.querySelector('.message').textContent =
      //   tahmin > gizliNumara ? 'Çok yüksek' : 'Çok Düşük'
      ekranMesajı(tahmin > gizliNumara ? 'Çok yüksek' : 'Çok Düşük')
      puan--
      document.querySelector('.score').textContent = puan
    } else {
      // document.querySelector('.message').textContent = 'Oyunu kaybettiniz'
      ekranMesajı('Oyunu kaybettiniz')
      document.querySelector('.score').textContent = 0
    }
  }

  //Yüksek tahmin
  // else if (tahmin > gizliNumara) {
  //   if (puan > 1) {
  //     document.querySelector('.message').textContent = 'Çok yüksek'
  //     puan--
  //     document.querySelector('.score').textContent = puan
  //   } else {
  //     document.querySelector('.message').textContent = 'Oyunu kaybettiniz'
  //     document.querySelector('.score').textContent = 0
  //   }
  //   //Düşük tahmin
  // } else if (tahmin < gizliNumara) {
  //   if (puan > 1) {
  //     document.querySelector('.message').textContent = 'Çok düşük'
  //     puan--
  //     document.querySelector('.score').textContent = puan
  //   } else {
  //     document.querySelector('.message').textContent = 'Oyunu kaybettiniz'
  //     document.querySelector('.score').textContent = 0
  //   }
  // }
  // document.querySelector('.message').textContent = 'Doğru sayı'
})

document.querySelector('.again').addEventListener('click', function () {
  puan = 20
  gizliNumara = Math.trunc(Math.random() * 20) + 1
  // document.querySelector('.message').textContent = 'Tahmin et'
  ekranMesajı('Tahmin et')
  document.querySelector('.score').textContent = puan
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})



