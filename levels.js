/**
 * DATABASE LEVEL & TANTANGAN EKSPEDISI ROBOT STUDUINO (10 LEVELS)
 * Kalibrasi terverifikasi: Wheel Base 36px, Kecepatan 75px/detik, Rasio belok 1.0.
 */

window.GAME_LEVELS = [
  {
    id: 1,
    title: "Level 1: Garis Lurus",
    subtitle: "Dasar Penggerak Motor",
    brief: "Beri daya kedua motor dan atur M1 & M2 SEARAH (CW) untuk meluncur lurus ke lingkaran hijau.",
    starsRule: { threeStarsSec: 2.5, twoStarsSec: 4.0 },
    start: { xRel: 0.5, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.5, yRel: 0.18, radius: 26 },
    obstacles: []
  },
  {
    id: 2,
    title: "Level 2: Belokan Sudut L",
    subtitle: "Tikungan 90 Derajat",
    brief: "Maju lurus, belok kanan 90° (M1 CW & M2 CCW selama ~0.75 detik), lalu meluncur ke finis.",
    starsRule: { threeStarsSec: 3.8, twoStarsSec: 5.5 },
    start: { xRel: 0.22, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.78, yRel: 0.22, radius: 24 },
    obstacles: [
      { xRel: 0.44, yRel: 0.48, wRel: 0.12, hRel: 0.52, label: "TEMBOK" }
    ]
  },
  {
    id: 3,
    title: "Level 3: Manuver Menghindar",
    subtitle: "Menghindari Rintangan Tunggal",
    brief: "Satu balok rintangan ada di tengah lintasan. Belok sedikit ke samping sebelum meluncur ke titik target.",
    starsRule: { threeStarsSec: 4.5, twoStarsSec: 6.5 },
    start: { xRel: 0.5, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.5, yRel: 0.15, radius: 24 },
    obstacles: [
      { xRel: 0.35, yRel: 0.45, wRel: 0.30, hRel: 0.10, label: "PENGHALANG" }
    ]
  },
  {
    id: 4,
    title: "Level 4: Slalom Zig-Zag",
    subtitle: "Dua Belokan Beruntun",
    brief: "Lewati celah di antara dua balok. Lakukan belokan pertama ke kanan lalu belokan kedua ke kiri.",
    starsRule: { threeStarsSec: 5.5, twoStarsSec: 8.0 },
    start: { xRel: 0.5, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.5, yRel: 0.15, radius: 22 },
    obstacles: [
      { xRel: 0.15, yRel: 0.60, wRel: 0.45, hRel: 0.08, label: "RINTANGAN A" },
      { xRel: 0.40, yRel: 0.38, wRel: 0.45, hRel: 0.08, label: "RINTANGAN B" }
    ]
  },
  {
    id: 5,
    title: "Level 5: Putaran Balik Huruf U",
    subtitle: "Putaran 180 Derajat",
    brief: "Melaju ke lorong atas, lakukan putar balik 180° di ruang terbuka, lalu turun ke finis sebelah kanan.",
    starsRule: { threeStarsSec: 6.5, twoStarsSec: 9.5 },
    start: { xRel: 0.22, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.78, yRel: 0.82, radius: 24 },
    obstacles: [
      { xRel: 0.44, yRel: 0.28, wRel: 0.12, hRel: 0.72, label: "PEMBATAS" }
    ]
  },
  {
    id: 6,
    title: "Level 6: Bumper Sentuh Rebound",
    subtitle: "Deteksi Tabrakan Otomatis",
    brief: "Dinding beton menghalangi jalur. Gunakan 'JIKA [SENTUH] DITEKAN' untuk otomatis mundur dan membelokkan mobil!",
    starsRule: { threeStarsSec: 5.5, twoStarsSec: 8.5 },
    start: { xRel: 0.28, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.80, yRel: 0.80, radius: 22 },
    obstacles: [
      { xRel: 0.10, yRel: 0.38, wRel: 0.80, hRel: 0.08, label: "TEMBOK SENSOR" }
    ]
  },
  {
    id: 7,
    title: "Level 7: Lintasan Z",
    subtitle: "Navigasi Tiga Segmen",
    brief: "Bermanuver melintasi lorong berbentuk huruf Z: maju, belok kanan 90°, maju, belok kiri 90°, lalu ke finis.",
    starsRule: { threeStarsSec: 6.5, twoStarsSec: 9.5 },
    start: { xRel: 0.20, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.80, yRel: 0.15, radius: 22 },
    obstacles: [
      { xRel: 0.05, yRel: 0.35, wRel: 0.65, hRel: 0.08, label: "DINDING ATAS" },
      { xRel: 0.30, yRel: 0.62, wRel: 0.65, hRel: 0.08, label: "DINDING BAWAH" }
    ]
  },
  {
    id: 8,
    title: "Level 8: Koridor Cincin Kotak",
    subtitle: "Membagi Durasi Belok",
    brief: "Blok tengah besar memaksa mobil mengitari perimeter luar arena untuk mencapai sasaran di seberang.",
    starsRule: { threeStarsSec: 7.5, twoStarsSec: 11.0 },
    start: { xRel: 0.20, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.80, yRel: 0.85, radius: 22 },
    obstacles: [
      { xRel: 0.35, yRel: 0.30, wRel: 0.30, hRel: 0.40, label: "PULAU PUSAT" }
    ]
  },
  {
    id: 9,
    title: "Level 9: Tantangan Pengulangan (Loop)",
    subtitle: "Pola Berulang dengan ULANGI 4x",
    brief: "Lintasan spiral mengitari pembatas. Susun pola [Maju -> Belok] di dalam blok 'ULANGI' agar kodemu rapi!",
    starsRule: { threeStarsSec: 8.5, twoStarsSec: 13.0 },
    start: { xRel: 0.15, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.50, yRel: 0.50, radius: 20 },
    obstacles: [
      { xRel: 0.30, yRel: 0.30, wRel: 0.40, hRel: 0.06, label: "SEKAT 1" },
      { xRel: 0.65, yRel: 0.36, wRel: 0.06, hRel: 0.36, label: "SEKAT 2" },
      { xRel: 0.30, yRel: 0.66, wRel: 0.41, hRel: 0.06, label: "SEKAT 3" }
    ]
  },
  {
    id: 10,
    title: "Level 10: Grand Prix Ekspedisi",
    subtitle: "Ujian Akhir Robotika",
    brief: "Uji seluruh keahlianmu: kombinasikan navigasi jarak jauh, penghindaran rintangan, dan ketepatan rem!",
    starsRule: { threeStarsSec: 10.0, twoStarsSec: 15.0 },
    start: { xRel: 0.15, yRel: 0.88, angle: -Math.PI / 2 },
    target: { xRel: 0.85, yRel: 0.15, radius: 20 },
    obstacles: [
      { xRel: 0.30, yRel: 0.55, wRel: 0.10, hRel: 0.45, label: "GERBANG 1" },
      { xRel: 0.55, yRel: 0.00, wRel: 0.10, hRel: 0.45, label: "GERBANG 2" },
      { xRel: 0.75, yRel: 0.55, wRel: 0.10, hRel: 0.25, label: "HALANGAN AKHIR" }
    ]
  }
];