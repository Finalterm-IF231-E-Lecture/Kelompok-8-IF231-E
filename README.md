# Kelompok-8-IF231-E

GamePlay/Aturan Bermain  
Kelompok 8


Data anggota kelompok:
1. Gavin Yodha Maheswara - 000 000 61680
2. Hadi Bagus Permana - 000 000 12226
3. Karsten Samuel Shallom - 000 000 60496
4. Zaki Naufal Faturrahman - 000 000 61490


Peraturan / ketentuan:
* Waktu yang kami gunakan di sini yaitu 1 detik di dunia nyata = 1 Menit di in game
* Jika antara Makan , Main , dan juga tidur mencapai 0 , game akan berakhir dan akan memunculkan popup beserta tombol untuk nantinya pemain dapat memulai permainan dari awal
* Berikut adalah kondisi dari setiap aktifitas yang ada :
        
Kondisi keadaan : Diam
Kondisi :
Makan: -1/3 Menit in game (3 detik)
Tidur :-1/10 Menit in game (10 detik)
Main : -1/5 Menit in game (5 detik)
Belajar : -1/30 Menit in game (30 detik)

List dari kondisi per 1x klik tombol Makan , Tidur, Main ,Belajar ,ke kafe ,ke kampus, belanja , masak   dalam halaman game  :



Kondisi : Makan
Cycle yang dijalankan : 10 cycle (10 Menit in game)
Makan: +1% / 1cycle Total /1x Click +10%
Tidur :-1% / 5cycle Total /1x Click -2%
Main: -1% / 5cycle Total /1x Click -2%
Belajar : -1% / 10cycle Total /1x Click -1%

Kondisi : Tidur / Istirahat
Cycle yang dijalankan : 30 cycle (25 Menit in game)
Tidur: +1% / 1cycle Total /1x Click +30%
Makan :-1% / 5cycle Total /1x Click -6%
Main: -1% / 3cycle Total /1x Click -10%
Belajar : -1% / 10cycle Total /1x Click -3%

Kondisi : Masak
Cycle yang dijalankan : 5 cycle ( Menit in game)
Skill Masak: +1% / 1cycle Total /1x Click +5%
Makan:-1% / 1cycle Total /1x Click -5%
Tidur: -1% / 5cycle Total /1x Click -1%
Main : -1% / 2cycle Total /1x Click -2%

Kondisi : Belajar
Cycle yang dijalankan : 15 cycle ( Menit in game)
Belajar: +1% / 1cycle Total /1x Click +15%
Makan:-1% / 3cycle Total /1x Click -3%
Tidur: -1% / 2 cycle Total /1x Click -7%
Main : -1% / 4 cycle Total /1x Click -3%


GO TO:
Go To : Kampus
Cycle yang dijalankan : 30 cycle ( Menit in game)
Belajar: +1% / 1cycle Total /1x Click +30%
Makan:-1% / 2cycle Total /1x Click -10%
Tidur: -1% / 5cycle Total /1x Click -6%
Main : -1% / 6cycle Total /1x Click -5%

Go To : Kafe
Cycle yang dijalankan : 20 cycle ( Menit in game)
Tidur: +1% / 1cycle Total /1x Click +20%
Belajar: -1% / 4cycle Total /1x Click +5%
Makan:-1% / 5cycle Total /1x Click -4%
Main : -1% / 4cycle Total /1x Click -5%

Go To : Supermarket
Cycle yang dijalankan : 30 cycle ( Menit in game)
Tidur: +1% / 1cycle Total /1x Click -30%
Makan:-1% / 2cycle Total /1x Click -10%
Belajar: -1% / 5cycle Total /1x Click -4%
Main : -1% / 7cycle Total /1x Click -2%
    
Go To : Warnet (Tambahan)
Cycle yang dijalankan : 15 cycle ( Menit in game)
Main : -1% / 1cycle Total /1x Click -15%
Belajar: -1% / 3cycle Total /1x Click -5%
Makan:-1% / 10cycle Total /1x Click -1%
Tidur: -1% / 5cycle Total /1x Click -3%


Cara Bermain :


1. DI awal permainan , User akan diminta untuk memilih avatar (tersedia total 6 Avatar yaitu 3 karakter laki laki dan juga 3 karakter perempuan)


2. Lalu selain memilih Avatar/Karakter , User akan diminta untuk memilih Prodi yang ada (Total ada 13 Prodi yang bisa di pilih Sistem Informasi ,Teknik Informatika ,Teknik Komputer, Teknik Elektro, Teknik Fisika ,Manajemen ,Akuntansi,Komunikasi Strategis,Jurnalistik ,Desain Komunikasi Visual (DKV),Arsitektur, Film & Animasi Dan juga perhotelan)


3. Setelah User sudah memilih avatar dan prodi yang diinginkan , User dapat mengklik tombol play yang nantinya akan masuk ke halaman awal game 


4. Di halaman awal game ini , user dapat melihat tampilan interface yang dapat di lihat mulai dari 5 bar yang ada yaitu makan,tidur,main,belajar,dan skill Memasak (untuk default awal dimulai dari 50% untuk makan,50% untuk tidur,50% untuk main,5 untuk belajar dan juga 10 untuk skill memasak) 


5. Setiap hari , player akan diberikan batasan aktifitas 20 hari , jika sudah memenuhi syarat tersebut , makan game akan melanjutkan hari ke hari berikutnya.


6. lalu user juga dapat melihat aktifitas yang dapat dilakukan dari Go to yang terdiri dari Kampus, Kafe , Supermarket dan juga warnet dan juga aktifitas yang di dalam rumah terdiri dari Makan , tidur , dan masak


7. Dan yang terakhir , terdapat tampilan Handphone yang akan menampilkan Berita dari API 


8. Pada awal game,Character akan berposisi Diam/Idle.dan Apabila User terus berposisi Idle,maka poin makan,tidur,belajar dan bermain akan berkurang,apabila salah satu bar Gameplay berkurang sampai 0,maka user akan mati.


9. User/Pemain dapat memilih aktivitas yang ada , dimana aktivitas yang dipilih akan ada pengurangan dan penambahan sesuai peraturan di atas kalian bisa liat.


10. Setiap 1 hari terdiri dari 24 jam , dimana 24 jam ini dapat dipakai untuk semua aktifitas, dan untuk berganti hari , pemain harus melakukan aktifitas yang melebihi jam yang ada di 1 hari itu


11. Setelah sampai ke hari ke 7 , game akan mengeluarkan pesan , bahwa game sudah selesai dan sudah melebihi 7 hari
