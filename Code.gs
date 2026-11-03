/**
 * BACKEND CBT - MA Jamiat Kheir (Ekonomi)
 * Database: Google Sheets (sheet: Soal, Siswa, Hasil, Pelanggaran, Sesi)
 * Deploy sebagai Web App: Execute as "Me", Who has access "Anyone".
 */
const ADMIN_PASS = 'admincbt123';
const DURASI_MENIT = 120;
const MAX_VIOL = 3;
const TZ = 'Asia/Jakarta';

const DEF_SOAL = [{"t":"pg","q":"Ilmu ekonomi adalah ilmu yang mempelajari cara manusia ....","o":["memperoleh kekayaan tanpa batas","memenuhi kebutuhan dengan sumber daya yang terbatas","menghasilkan barang sebanyak-banyaknya tanpa memperhatikan biaya","menghindari seluruh bentuk pengeluaran","menguasai seluruh sumber daya yang tersedia"],"k":1},{"t":"pg","q":"Masalah pokok yang menjadi dasar munculnya persoalan ekonomi adalah ....","o":["keinginan manusia selalu sama","seluruh barang tersedia secara gratis","kebutuhan manusia terbatas, sedangkan alat pemuas kebutuhan tidak terbatas","kebutuhan manusia tidak terbatas, sedangkan alat pemuas kebutuhan terbatas","semua manusia memiliki pendapatan yang sama"],"k":3},{"t":"pg","q":"Contoh kebutuhan primer bagi seorang siswa adalah ....","o":["pakaian yang layak untuk dikenakan","mobil sport","perhiasan berlian","tiket konser internasional","koleksi jam tangan mewah"],"k":0},{"t":"pg","q":"Barang yang secara langsung digunakan untuk memenuhi kebutuhan manusia disebut ....","o":["barang produksi","barang modal","barang konsumsi","barang bebas","barang antara"],"k":2},{"t":"pg","q":"Udara bebas di alam dalam kondisi normal dan tersedia melimpah tanpa pengorbanan untuk memperolehnya merupakan contoh ....","o":["barang ekonomi","barang modal","barang produksi","barang substitusi","barang bebas"],"k":4},{"t":"pg","q":"Kelangkaan dalam ilmu ekonomi terjadi karena ....","o":["semua barang hanya boleh dimiliki pemerintah","sumber daya terbatas dibandingkan dengan kebutuhan manusia","manusia tidak memiliki kebutuhan","produsen selalu menolak membuat barang","semua barang memiliki harga yang sama"],"k":1},{"t":"pg","q":"Biaya peluang adalah ....","o":["seluruh uang yang dimiliki seseorang","biaya yang dikeluarkan untuk memproduksi semua barang","jumlah barang yang dibeli dalam satu hari","nilai alternatif terbaik yang dikorbankan ketika memilih suatu tindakan","keuntungan yang selalu diperoleh dari setiap pilihan"],"k":3},{"t":"pg","q":"Sistem ekonomi yang memberikan kebebasan luas kepada individu dan mekanisme pasar dalam kegiatan ekonomi disebut sistem ekonomi ....","o":["komando","tradisional","pasar","terpusat mutlak","barter"],"k":2},{"t":"pg","q":"Dalam sistem ekonomi komando, keputusan utama mengenai produksi dan distribusi umumnya ditentukan oleh ....","o":["pemerintah atau otoritas pusat","setiap konsumen secara terpisah","seluruh perusahaan swasta tanpa campur tangan pemerintah","pedagang di pasar tradisional","organisasi konsumen internasional"],"k":0},{"t":"pg","q":"Kegiatan ekonomi yang bertujuan menghasilkan atau menambah nilai guna barang dan jasa disebut ....","o":["konsumsi","distribusi","investasi","spesialisasi","produksi"],"k":4},{"t":"pg","q":"Rina memiliki uang Rp100.000. Ia ingin membeli buku pelajaran seharga Rp60.000 dan tas seharga Rp80.000. Jika ia hanya dapat memilih salah satu barang, tindakan tersebut menunjukkan ....","o":["kelimpahan sumber daya","pilihan ekonomi akibat keterbatasan sumber daya","tidak adanya biaya peluang","semua kebutuhan dapat dipenuhi sekaligus","kegiatan distribusi barang"],"k":1},{"t":"pg","q":"Berdasarkan intensitas penggunaannya, kebutuhan seseorang untuk memperoleh makanan dan pakaian yang layak umumnya termasuk kebutuhan ....","o":["tersier","masa depan","kolektif","primer","rohani"],"k":3},{"t":"pg","q":"Obat yang digunakan untuk mengobati penyakit merupakan contoh kebutuhan berdasarkan sifatnya yang termasuk kebutuhan ....","o":["jasmani","rohani","masa depan","kolektif","tersier"],"k":0},{"t":"pg","q":"Hubungan yang tepat antara buku tulis dan pena sebagai alat pemuas kebutuhan adalah ....","o":["keduanya merupakan barang bebas","keduanya selalu merupakan barang produksi","keduanya merupakan barang komplementer karena dapat digunakan bersama untuk menulis","keduanya merupakan barang substitusi karena kegunaannya sama persis","keduanya tidak memiliki hubungan dalam pemenuhan kebutuhan"],"k":2},{"t":"pg","q":"Kopi dan teh dapat menjadi barang substitusi karena ....","o":["harus selalu digunakan secara bersamaan","keduanya tidak dapat dikonsumsi manusia","keduanya hanya digunakan sebagai bahan baku pabrik","keduanya selalu memiliki harga yang sama","salah satunya dapat menggantikan yang lain untuk memenuhi kebutuhan minuman tertentu"],"k":4},{"t":"pg","q":"Seorang petani memiliki lahan terbatas. Ia memilih menanam padi daripada jagung karena memperkirakan keuntungan padi lebih tinggi. Biaya peluang dari keputusan tersebut adalah ....","o":["seluruh hasil panen padi","nilai keuntungan terbaik dari alternatif jagung yang dikorbankan","seluruh modal yang dimiliki petani tanpa pengecualian","jumlah pekerja yang menanam padi","harga seluruh alat pertanian yang pernah dibeli"],"k":1},{"t":"pg","q":"Ketika harga suatu barang naik, konsumen mengurangi pembeliannya dan mencari barang pengganti. Perilaku tersebut menunjukkan bahwa konsumen ....","o":["tidak menghadapi kelangkaan","tidak perlu membuat pilihan","selalu membeli barang yang paling mahal","menyesuaikan keputusan untuk memenuhi kebutuhan dengan sumber daya terbatas","tidak mempertimbangkan harga barang"],"k":3},{"t":"pg","q":"Salah satu ciri sistem ekonomi tradisional adalah ....","o":["kegiatan ekonomi banyak mengikuti adat istiadat dan kebiasaan turun-temurun","seluruh keputusan ditentukan melalui bursa saham","semua alat produksi wajib dimiliki perusahaan multinasional","seluruh harga ditentukan oleh persaingan global","kegiatan ekonomi sepenuhnya menggunakan teknologi modern"],"k":0},{"t":"pg","q":"Dalam sistem ekonomi pasar, harga barang pada umumnya terbentuk melalui ....","o":["keputusan sepihak setiap produsen tanpa mempertimbangkan pembeli","penetapan harga yang sama oleh seluruh negara","interaksi permintaan dan penawaran","larangan melakukan kegiatan jual beli","kebiasaan turun-temurun saja"],"k":2},{"t":"pg","q":"Salah satu alasan pemerintah tetap berperan dalam perekonomian adalah ....","o":["agar seluruh kebutuhan setiap orang selalu terpenuhi tanpa batas","agar tidak ada individu yang boleh melakukan kegiatan ekonomi","agar seluruh harga barang selalu gratis","agar kegiatan produksi tidak perlu menggunakan sumber daya","untuk menyediakan barang publik dan membantu mengatasi kegagalan pasar"],"k":4},{"t":"pg","q":"Perhatikan kegiatan berikut: (1) Rumah tangga membeli beras untuk dikonsumsi. (2) Pabrik mengolah gandum menjadi tepung. (3) Pedagang menyalurkan sayuran dari petani ke pasar. (4) Rumah tangga menerima upah dari perusahaan. Urutan kegiatan ekonomi yang tepat untuk produksi, distribusi, dan konsumsi adalah ....","o":["1, 2, 3","2, 3, 1","3, 1, 4","4, 2, 1","1, 4, 3"],"k":1},{"t":"pg","q":"Dalam arus kegiatan ekonomi sederhana, rumah tangga konsumen berperan sebagai ....","o":["satu-satunya penghasil seluruh barang di pasar","pihak yang hanya mengatur kebijakan moneter","pihak yang selalu menetapkan harga pasar","penyedia faktor produksi dan pengguna barang atau jasa","pihak yang tidak berhubungan dengan perusahaan"],"k":3},{"t":"pg","q":"Budi memiliki waktu luang selama dua jam. Ia dapat bekerja paruh waktu dengan upah Rp40.000 atau mengikuti kursus yang tidak menghasilkan uang secara langsung, tetapi bermanfaat untuk meningkatkan keterampilannya. Jika Budi memilih kursus dan tidak melakukan pekerjaan paruh waktu, biaya peluang yang dapat diukur secara langsung adalah ....","o":["Rp40.000 yang tidak jadi diperoleh dari pekerjaan paruh waktu","seluruh biaya pendidikan Budi sejak sekolah dasar","jumlah uang yang dimiliki seluruh peserta kursus","harga semua perlengkapan kursus","seluruh manfaat masa depan yang pasti diperoleh Budi"],"k":0},{"t":"pg","q":"Sebuah daerah mengalami kekeringan sehingga produksi air bersih menurun. Pemerintah harus menentukan prioritas penggunaan air yang tersedia. Keputusan ekonomi yang paling tepat adalah ....","o":["membagikan air hanya kepada penduduk dengan pendapatan tertinggi","menggunakan seluruh air untuk kegiatan rekreasi","memprioritaskan kebutuhan dasar dan layanan penting dengan pembagian yang adil","menghentikan semua distribusi air tanpa pengecualian","membiarkan seluruh air dikuasai satu perusahaan tanpa pengawasan"],"k":2},{"t":"pg","q":"Perhatikan karakteristik berikut: (1) Kepemilikan pribadi diakui. (2) Pemerintah mengatur kegiatan ekonomi tertentu. (3) Mekanisme pasar tetap digunakan. (4) Pemerintah dapat menyediakan layanan publik dan mengawasi persaingan. Karakteristik tersebut paling sesuai dengan sistem ekonomi ....","o":["tradisional murni","komando murni","pasar murni tanpa peran pemerintah","barter","campuran"],"k":4},{"t":"pg","q":"Sebuah perusahaan mampu menghasilkan 100 unit barang dengan 10 pekerja. Setelah menerapkan teknologi baru, perusahaan dapat menghasilkan 150 unit dengan jumlah pekerja yang sama. Kesimpulan yang paling tepat adalah ....","o":["kelangkaan pasti telah hilang","produktivitas tenaga kerja meningkat","seluruh kebutuhan manusia telah terpenuhi","biaya peluang selalu menjadi nol","distribusi tidak lagi diperlukan"],"k":1},{"t":"pg","q":"Ketika pemerintah menetapkan harga maksimum beras di bawah harga keseimbangan pasar dan permintaan melebihi penawaran, kondisi yang mungkin terjadi adalah ....","o":["kelebihan penawaran beras","seluruh konsumen memperoleh beras tanpa batas","harga keseimbangan otomatis naik tanpa perubahan kebijakan","kekurangan pasokan pada harga yang ditetapkan","tidak ada perubahan pada jumlah yang diminta maupun ditawarkan"],"k":3},{"t":"pg","q":"Sebuah perusahaan memilih memproduksi meja daripada kursi karena permintaan meja meningkat. Namun, kayu yang tersedia terbatas. Analisis ekonomi yang paling tepat adalah ....","o":["perusahaan harus mempertimbangkan biaya peluang, permintaan, dan keterbatasan bahan baku","perusahaan dapat memproduksi kedua barang tanpa batas","kelangkaan kayu tidak memengaruhi keputusan produksi","biaya produksi tidak perlu diperhitungkan","keputusan produksi hanya ditentukan oleh keinginan pemilik tanpa mempertimbangkan kondisi pasar"],"k":0},{"t":"pg","q":"Perhatikan pernyataan berikut tentang sistem ekonomi: (1) Sistem tradisional banyak dipengaruhi adat dan kebiasaan. (2) Sistem komando memberikan peran besar kepada otoritas pusat. (3) Sistem pasar mengandalkan interaksi permintaan dan penawaran. (4) Sistem campuran tidak mengenal kepemilikan swasta sama sekali. Pernyataan yang benar ditunjukkan oleh ....","o":["1 dan 4","2 dan 4","1, 2, dan 3","1, 3, dan 4","1, 2, 3, dan 4"],"k":2},{"t":"pg","q":"Suatu negara memiliki sumber daya alam melimpah, tetapi banyak penduduk masih mengalami kesulitan memperoleh kebutuhan pokok karena distribusi tidak merata dan keterampilan tenaga kerja rendah. Kebijakan yang paling menyeluruh untuk mengatasi persoalan tersebut adalah ....","o":["hanya meningkatkan ekspor sumber daya alam","membatasi pendidikan agar biaya negara berkurang","memusatkan seluruh barang pada satu kelompok masyarakat","menghentikan kegiatan perdagangan antardaerah","memperbaiki distribusi, meningkatkan keterampilan tenaga kerja, dan mengelola sumber daya secara produktif serta adil"],"k":4},{"t":"is","q":"Ilmu ekonomi mempelajari cara manusia memenuhi kebutuhan yang tidak terbatas dengan sumber daya yang ....","k":["terbatas"]},{"t":"is","q":"Kebutuhan yang harus dipenuhi agar manusia dapat mempertahankan kelangsungan hidupnya, seperti makanan dan pakaian yang layak, disebut kebutuhan ....","k":["primer"]},{"t":"is","q":"Kegiatan menggunakan atau menghabiskan nilai guna barang dan jasa untuk memenuhi kebutuhan disebut ....","k":["konsumsi"]},{"t":"is","q":"Nilai alternatif terbaik yang dikorbankan ketika seseorang memilih suatu tindakan disebut ....","k":["biayapeluang","opportunitycost"]},{"t":"is","q":"Barang yang jumlahnya terbatas dan untuk memperolehnya diperlukan pengorbanan disebut ....","k":["barangekonomi"]},{"t":"is","q":"Sistem ekonomi yang kegiatan ekonominya banyak dipengaruhi adat istiadat dan kebiasaan turun-temurun disebut sistem ekonomi ....","k":["tradisional"]},{"t":"is","q":"Kegiatan menyalurkan barang dari produsen kepada konsumen disebut ....","k":["distribusi"]},{"t":"is","q":"Seorang siswa memiliki uang Rp50.000. Ia memilih membeli buku seharga Rp35.000 daripada membeli kaus seharga Rp30.000. Jika kaus merupakan alternatif terbaik yang dikorbankan, berapakah biaya peluang dari keputusan tersebut? (tulis angka rupiah)","k":["30000"]},{"t":"is","q":"Sebuah pabrik menghasilkan 200 unit barang dengan 10 pekerja dalam sehari. Setelah menggunakan teknologi baru, jumlah produksi meningkat menjadi 300 unit dengan jumlah pekerja yang sama. Berapa persen peningkatan produktivitas per pekerja?","k":["50"]},{"t":"is","q":"Sebutkan dua peran pemerintah dalam sistem ekonomi campuran! (pisahkan dengan koma)","k":[],"g":[["atur","regulasi","kebijakan"],["awas"],["barangpublik","layananpublik","fasilitaspublik"],["stabil"],["lindung"],["subsidi","pajak"],["sediakan"]]},{"t":"bs","q":"Kelangkaan terjadi karena sumber daya yang tersedia terbatas dibandingkan dengan kebutuhan manusia.","k":true},{"t":"bs","q":"Barang bebas adalah barang yang selalu harus dibeli dengan harga tinggi untuk memperolehnya.","k":false},{"t":"bs","q":"Produksi merupakan kegiatan menghasilkan atau menambah nilai guna barang dan jasa.","k":true},{"t":"bs","q":"Barang substitusi adalah barang yang harus digunakan secara bersamaan untuk memenuhi satu kebutuhan.","k":false},{"t":"bs","q":"Dalam sistem ekonomi pasar, interaksi permintaan dan penawaran berperan dalam pembentukan harga.","k":true},{"t":"bs","q":"Distribusi merupakan kegiatan menggunakan barang dan jasa untuk memenuhi kebutuhan pribadi.","k":false},{"t":"bs","q":"Dalam sistem ekonomi komando, pemerintah atau otoritas pusat memiliki peran utama dalam menentukan keputusan ekonomi.","k":true},{"t":"bs","q":"Jika seseorang memilih bekerja dengan upah Rp100.000 daripada mengikuti kegiatan lain yang tidak memberikan penghasilan uang, biaya peluangnya selalu sama dengan seluruh biaya pendidikan yang pernah dikeluarkan orang tersebut.","k":false},{"t":"bs","q":"Sistem ekonomi campuran dapat menggabungkan mekanisme pasar dengan campur tangan pemerintah dalam kegiatan ekonomi.","k":true},{"t":"bs","q":"Peningkatan produktivitas selalu menghilangkan kelangkaan karena jumlah barang yang dihasilkan menjadi lebih banyak.","k":false}];
const DEF_SISWA = [['Ahmad Fauzi','X','ECO001'],['Siti Aisyah','X','ECO002'],['Muhammad Rizki','X','ECO003'],['Nur Halimah','X','ECO004'],['Abdul Rahman','X','ECO005']];

const H_SOAL = ['No','Jenis','Teks_Soal','Pilihan_A','Pilihan_B','Pilihan_C','Pilihan_D','Pilihan_E','Kunci_Jawaban','Bobot','Grup_JSON'];
const H_SISWA = ['Nama_Siswa','Kelas','Token_Akses'];
const H_HASIL = ['Timestamp','Nama_Siswa','Kelas','Nilai_Akhir','Total_Benar','Total_Salah','Pelanggaran_Tab','Status'];
const H_VIOL = ['Key','Nama_Siswa','Jumlah','Diblokir','Waktu'];
const H_SESI = ['Key','Mulai'];

/** Jalankan SEKALI dari editor (pilih setupDatabase lalu Run) untuk membuat semua sheet + data contoh. */
function setupDatabase() {
  sh_('Soal', H_SOAL); sh_('Siswa', H_SISWA); sh_('Hasil', H_HASIL); sh_('Pelanggaran', H_VIOL); sh_('Sesi', H_SESI);
  if (sh_('Soal', H_SOAL).getLastRow() < 2) writeSoal_(DEF_SOAL);
  if (sh_('Siswa', H_SISWA).getLastRow() < 2) writeSiswa_(DEF_SISWA);
}

function doGet() {
  return json_({ ok: true, msg: 'CBT API aktif' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(25000);
    const d = JSON.parse(e.postData.contents);
    return json_(route_(d));
  } catch (err) {
    return json_({ ok: false, msg: 'Server error: ' + err });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function route_(d) {
  switch (d.action) {
    case 'login': return login_(d);
    case 'viol': return viol_(d);
    case 'submit': return submit_(d);
  }
  if (d.pass !== ADMIN_PASS) return { ok: false, msg: 'Password salah.' };
  switch (d.action) {
    case 'aget': return adminGet_();
    case 'asoal': writeSoal_(d.soal || []); return { ok: true };
    case 'asiswa': writeSiswa_(d.siswa || []); return { ok: true };
    case 'areset': writeSoal_(DEF_SOAL); return { ok: true };
    case 'aunblock': unblock_(d.key); return { ok: true };
    case 'ahapus': clearSheet_('Hasil', H_HASIL); clearSheet_('Sesi', H_SESI); return { ok: true };
  }
  return { ok: false, msg: 'Aksi tidak dikenal.' };
}

/* ---------- Helper ---------- */
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function norm_(s) { return String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9]/g, ''); }
function now_() { return Utilities.formatDate(new Date(), TZ, 'dd/MM/yyyy HH:mm:ss'); }
function sh_(name, header) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(name);
  if (!s) { s = ss.insertSheet(name); s.appendRow(header); s.setFrozenRows(1); }
  return s;
}
function rows_(name, header) {
  const s = sh_(name, header), n = s.getLastRow();
  return n < 2 ? [] : s.getRange(2, 1, n - 1, header.length).getValues();
}
function clearSheet_(name, header) {
  const s = sh_(name, header);
  if (s.getLastRow() > 1) s.getRange(2, 1, s.getLastRow() - 1, header.length).clearContent();
}
function writeRows_(name, header, rows) {
  const s = sh_(name, header);
  clearSheet_(name, header);
  if (rows.length) {
    const r = s.getRange(2, 1, rows.length, header.length);
    r.setNumberFormat('@');
    r.setValues(rows);
  }
}

/* ---------- Soal ---------- */
function readSoal_() {
  if (sh_('Soal', H_SOAL).getLastRow() < 2) writeSoal_(DEF_SOAL);
  return rows_('Soal', H_SOAL).filter(r => String(r[2]).trim()).map(r => {
    const t = String(r[1]).trim(), q = { t: t, q: String(r[2]), w: Number(r[9]) || 2 };
    const key = String(r[8]).trim();
    if (t === 'pg') { q.o = [r[3], r[4], r[5], r[6], r[7]].map(String); q.k = Math.max(0, 'ABCDE'.indexOf(key.toUpperCase())); }
    else if (t === 'bs') { q.k = key.toLowerCase() === 'benar'; }
    else { q.k = key.split(',').map(norm_).filter(Boolean); }
    if (String(r[10]).trim()) { try { q.g = JSON.parse(r[10]); } catch (e) {} }
    return q;
  });
}
function writeSoal_(arr) {
  const rows = arr.map((q, i) => [
    i + 1, q.t, q.q,
    q.t === 'pg' ? (q.o[0] || '') : '', q.t === 'pg' ? (q.o[1] || '') : '', q.t === 'pg' ? (q.o[2] || '') : '',
    q.t === 'pg' ? (q.o[3] || '') : '', q.t === 'pg' ? (q.o[4] || '') : '',
    q.t === 'pg' ? 'ABCDE'.charAt(q.k) : q.t === 'bs' ? (q.k ? 'Benar' : 'Salah') : (q.k || []).join(', '),
    q.w || 2, q.g ? JSON.stringify(q.g) : ''
  ]);
  writeRows_('Soal', H_SOAL, rows);
}

/* ---------- Siswa ---------- */
function readSiswa_() {
  if (sh_('Siswa', H_SISWA).getLastRow() < 2) writeSiswa_(DEF_SISWA);
  return rows_('Siswa', H_SISWA).filter(r => String(r[0]).trim()).map(r => [String(r[0]), String(r[1]), String(r[2])]);
}
function writeSiswa_(arr) { writeRows_('Siswa', H_SISWA, arr.map(s => [s[0], s[1] || 'X', String(s[2]).toUpperCase()])); }
function findSiswa_(nama, token) {
  const n = norm_(nama), t = String(token || '').trim().toUpperCase();
  return readSiswa_().find(s => norm_(s[0]) === n && s[2].toUpperCase() === t);
}

/* ---------- Pelanggaran & sesi ---------- */
function getViol_(key) {
  const r = rows_('Pelanggaran', H_VIOL).find(x => x[0] === key);
  return r ? { count: Number(r[2]) || 0, blocked: String(r[3]) === 'true' } : { count: 0, blocked: false };
}
function setViol_(key, nama, count, blocked) {
  const s = sh_('Pelanggaran', H_VIOL), data = rows_('Pelanggaran', H_VIOL);
  const row = ['' + key, nama, '' + count, '' + !!blocked, now_()];
  const i = data.findIndex(x => x[0] === key);
  const rg = s.getRange(i >= 0 ? i + 2 : s.getLastRow() + 1, 1, 1, 5);
  rg.setNumberFormat('@'); rg.setValues([row]);
}
function viol_(d) {
  const s = findSiswa_(d.nama, d.token);
  if (!s) return { ok: false, msg: 'Akun tidak valid.' };
  const key = norm_(s[0]), cur = getViol_(key), c = Math.max(cur.count, Number(d.count) || 0);
  setViol_(key, s[0], c, cur.blocked || c >= MAX_VIOL);
  return { ok: true };
}
function unblock_(key) {
  const del = (name, header, test) => {
    const s = sh_(name, header), data = rows_(name, header);
    for (let i = data.length - 1; i >= 0; i--) if (test(data[i])) s.deleteRow(i + 2);
  };
  del('Pelanggaran', H_VIOL, r => r[0] === key);
  del('Hasil', H_HASIL, r => norm_(r[1]) === key && String(r[7]) === 'DIBLOKIR');
  del('Sesi', H_SESI, r => r[0] === key);
}

/* ---------- Login siswa (TANPA kunci jawaban) ---------- */
function login_(d) {
  const s = findSiswa_(d.nama, d.token);
  if (!s) return { ok: false, msg: 'Nama atau token salah.' };
  const key = norm_(s[0]), v = getViol_(key);
  if (v.blocked) return { ok: false, msg: 'Akun diblokir karena pelanggaran. Hubungi guru.' };
  if (rows_('Hasil', H_HASIL).some(r => norm_(r[1]) === key)) return { ok: false, msg: 'Siswa ini sudah mengerjakan ujian.' };
  const soal = readSoal_();
  if (!soal.length) return { ok: false, msg: 'Soal belum tersedia. Hubungi guru.' };
  let start, sesi = rows_('Sesi', H_SESI).find(r => r[0] === key);
  if (sesi) start = Number(sesi[1]);
  else { start = Date.now(); const ws = sh_('Sesi', H_SESI), rg = ws.getRange(ws.getLastRow() + 1, 1, 1, 2); rg.setNumberFormat('@'); rg.setValues([[key, '' + start]]); }
  return {
    ok: true, nama: s[0], kelas: s[1], viol: v.count, now: Date.now(), end: start + DURASI_MENIT * 60000,
    soal: soal.map(q => ({ t: q.t, q: q.q, o: q.o, w: q.w }))   // kunci & grup TIDAK dikirim
  };
}

/* ---------- Penilaian di server ---------- */
function benar_(q, a) {
  if (a === undefined || a === null || a === '') return false;
  if (q.t === 'pg' || q.t === 'bs') return a === q.k;
  const n = norm_(a);
  if (q.g) return q.g.filter(g => g.some(k => n.indexOf(k) >= 0)).length >= 2;
  return (q.k || []).some(k => n.indexOf(k) >= 0);
}
function submit_(d) {
  const s = findSiswa_(d.nama, d.token);
  if (!s) return { ok: false, msg: 'Akun tidak valid.' };
  const key = norm_(s[0]);
  if (rows_('Hasil', H_HASIL).some(r => norm_(r[1]) === key)) return { ok: true, already: true, nilai: '-', benar: '-', salah: '-' };
  const soal = readSoal_(), ans = d.ans || {}, vi = getViol_(key);
  let sc = 0, max = 0, ok = 0;
  soal.forEach((q, i) => { const w = q.w || 2; max += w; if (benar_(q, ans[i])) { sc += w; ok++; } });
  const nilai = max ? Math.round(sc / max * 1000) / 10 : 0;
  const viol = Math.max(vi.count, Number(d.viol) || 0), blocked = vi.blocked || viol >= MAX_VIOL;
  if (blocked) setViol_(key, s[0], viol, true);
  const sh = sh_('Hasil', H_HASIL), rg = sh.getRange(sh.getLastRow() + 1, 1, 1, 8);
  rg.setNumberFormat('@');
  rg.setValues([[now_(), s[0], s[1], '' + nilai, '' + ok, '' + (soal.length - ok), '' + viol, blocked ? 'DIBLOKIR' : 'Selesai']]);
  return { ok: true, blocked: blocked, nilai: nilai, benar: ok, salah: soal.length - ok };
}

/* ---------- Data untuk dashboard guru ---------- */
function adminGet_() {
  return {
    ok: true,
    soal: readSoal_(),
    siswa: readSiswa_(),
    hasil: rows_('Hasil', H_HASIL).map(r => ({ waktu: String(r[0]), nama: String(r[1]), kelas: String(r[2]), nilai: String(r[3]), benar: String(r[4]), salah: String(r[5]), viol: String(r[6]), status: String(r[7]) })),
    viol: rows_('Pelanggaran', H_VIOL).map(r => ({ key: String(r[0]), nama: String(r[1]), count: Number(r[2]) || 0, blocked: String(r[3]) === 'true', waktu: String(r[4]) }))
  };
}
