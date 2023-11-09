let divContainerById = document.getElementById('container');

function soal1(){
    let angka = 3;
    let string = "Andika";
    let array = ["HTML", "CSS", "Javascript"];
    let object = {
        nama: "Andika",
        kelas: "XI PPLG 7",
        noAbsen: 3
    }
    let boolean = true;

    console.log(angka, string, array, object, boolean);
}

function soal2(){
    let hari = "Senin";

    switch(hari){
        case "Senin":
            console.log("Saya pilih hari Sabtu.");
            break;
    }
}

function soal3(){
    let nilai = document.getElementById('nilai');
    nilai = nilai.value;
    let result;
    
    if(nilai >= 90){
        result = "A";
    }else if(nilai > 79 && nilai < 90){
        result = "B";
    }else if (nilai > 69 && nilai < 80){
        result = "C";
    }else if (nilai > 59 && nilai < 70){
        result = "D";
    }else if (nilai < 60){
        result = "E";
    }
    
    if(document.querySelector('p') == null){
        let teksKategori = divContainerById.appendChild(document.createElement('p'))
        teksKategori.id = 'kategori-nilai';
    }
    
    document.getElementById('kategori-nilai').innerHTML = `Kategori nilaimu adalah <b>${result}</b>.`;
    if(nilai < 0){
        document.getElementById('kategori-nilai').remove();
        nilai.value = 0;
    }
}

function soal4(){
    let sisi = document.getElementById('sisi-kubus');
    if(sisi.value < 0){
        sisi.value = sisi = 0;
    }else{
        sisi = sisi.value;
    }

    let volume = Math.pow(sisi, 3);

    if(document.querySelector('p') == null){
        let teksVolume = divContainerById.appendChild(document.createElement('p'))
        teksVolume.id = 'volume';
    }
    
    document.getElementById('volume').innerHTML = `Volume kubusnya adalah <b>${volume}</b> m<sup>3</sup>.`;
}

function soal5(){
    let listInput = document.querySelectorAll('input');
    for(let input of listInput){
        if(input.value == ""){
            alert("Isi form dengan lengkap!");
            return;
        }
    }
}

function soal6(){
    let usia = document.getElementById('usia');
    if(usia.value < 0){
        usia.value = usia = 0;
    }else{
        usia = usia.value;
    }
    let keputusan;
    
    if(usia > 17){
        keputusan = "Kamu sudah boleh membuat KTP.";
    }else{
        keputusan = "Kamu belum boleh membuat KTP.";
    }

    if(document.querySelector('p') == null){
        let teksKeputusan = divContainerById.appendChild(document.createElement('p'))
        teksKeputusan.id = 'keputusan';
    }
    
    document.getElementById('keputusan').textContent = keputusan;
}

function soal7(){
    let harga_makanan = 25_000;
    let harga_minuman = 16_000;

    let jumlah_makanan = prompt("Masukkan jumlah makanan");
    let jumlah_minuman = prompt("Masukkan jumlah minuman");

    jumlah_makanan = jumlah_makanan == "" ? 0 : jumlah_makanan == null ? 0 : jumlah_makanan;
    jumlah_minuman = jumlah_minuman == "" ? 0 : jumlah_minuman == null ? 0 : jumlah_minuman; 
    
    let total_harga = (harga_makanan * jumlah_makanan + harga_minuman * jumlah_minuman).toLocaleString();
    document.getElementById('informasi-pesanan').innerHTML += `<p>Jumlah makanan: ${jumlah_makanan}</p><p>Jumlah minuman: ${jumlah_minuman}</p>` 

    divContainerById.innerHTML += `<p>Jumlah yang harus dibayarkan: <b>Rp. ${total_harga}</b>.`;
}

function soal8(){
    let tahun = document.getElementById('tahun');
    if(tahun.value < 0){
        tahun.value = 0;
        tahun = 0;
    }else{
        tahun = tahun.value;
    }
    let keputusan;

    if((tahun % 4) == 0){
        keputusan = `Tahun ${tahun} ADALAH tahun kabisat.`;
    }else{
        keputusan = `Tahun ${tahun} BUKAN tahun kabisat.`;
    }

    if(document.querySelector('p') == null){
        let teksKeputusan = divContainerById.appendChild(document.createElement('p'))
        teksKeputusan.id = 'keputusan';
    }
    
    document.getElementById('keputusan').textContent = keputusan;
}

function soal9(){
    let arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    divContainerById.innerHTML = null;
    divContainerById.className = 'container-flex-kolom tengah-horizontal';
    arrBulan.forEach(function(bulan){
        divContainerById.innerHTML +=`<p>${bulan}</p>`;
    })
    divContainerById.innerHTML += '<a href="soal-9B.html"><button>Kembali</button></a>';
}

function soal10(){
    let jumlahLoop = document.getElementById('jumlah-loop');
    if(jumlahLoop.value < 0){
        jumlahLoop.value = 0;
        jumlahLoop = 0;
    }else{
        jumlahLoop = jumlahLoop.value;
    }
    divContainerById.innerHTML = null;
    divContainerById.className = 'container-flex-kolom tengah-horizontal'

    for(let i = 0; i < jumlahLoop; i++){
        divContainerById.innerHTML += '<p>Saya bisa jadi orang yang hebat!</p>';
    }
    divContainerById.innerHTML += '<a href="soal-10B.html"><button>Kembali</button></a>';
}