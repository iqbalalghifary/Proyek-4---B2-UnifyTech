
## Proyek-4 <B2-UnifyTech/>

# Data Kelompok:

1. Nama: Adhitia Zain Nurrizki, NIM: 201511034, email: alifah.fisalsabilawati.tif20@polban.ac.id
2. Nama: Ikbal Alghifary, NIM: 201511042, email: ikbal.alghifary.tif20@polban.ac.id
3. Nama: Irfan Pertrio Nugroho, NIM: 201511044, email: irfan.pertrio.tif20@polban.ac.id
4. Nama: Jihan Afifah Yanriyani, NIM: 201511046, email: jihan.afifah.tif20@polban.ac.id
5. Nama: Paqih Teguh Maulana, NIM: 201511056, email: paqih.teguh.tif20@polban.ac.id
6. Nama: Salma Aulia Suherman, NIM: 201511060, email: salma.aulia.tif20@polban.ac.id

# Introduce Deployemnt Diagram

Deployment adalah istilah yang mencakup semua proses yang terlibat dalam mendapatkan software (perangkat lunak) atau hardware (perangkat keras) baru dan berjalan dengan baik di lingkungannya, termasuk instalasi, konfigurasi, pengoperasian, pengujian dan membuat perubahan yang diperlukan.

# Step by step how to deploy website FP. PLN
1. Siapkan project aplikasi web
   - Untuk langkah awal, kami menyiapkan satu aplikasi web FP. PLN yang akan kita deploy. Aplikasi web ini bisa berinteraksi dengan user
2. Menentukan metode deployment.
   - Blue/Green Deployment Strategy, Konsepnya cukup sederhana, pertama-tama, kita akan membuat satu environment yang serupa dengan yang sedang aktif/live, kemudian kita pun melakukan switching request ke environment baru tersebut. Meskipun terdapat beberapa kekurangan, namun kami menyadari bahwa metode ini memiliki kelebihan yang cukup baik diantaranya Perubahan sangat cepat (sekali switch service langsung berubah 100%), Tidak ada issue beda versi pada service seperti yang terjadi pada Rollout Deployment.
3. Melakukan deployment pada (Github)




