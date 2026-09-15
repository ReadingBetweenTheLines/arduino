/**
 * DATABASE LEVEL & MISI TANTANGAN STUDUINO
 * Disimpan di window.GAME_LEVELS agar dapat diakses kapan saja.
 */
window.GAME_LEVELS = [
  {
    id: 1,
    title: "Level 1: Garis Lurus",
    subtitle: "Luncurkan robot menuju sasaran",
    brief: "Aktifkan M1 dan M2 dengan arah SEARAH (CW). Atur detik TUNGGU agar berhenti pas di lingkaran hijau.",
    starsRule: { threeStarsSec: 2.2, twoStarsSec: 3.8 },
    start: { xRel: 0.5, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.5, yRel: 0.20, radius: 24 },
    obstacles: []
  },
  {
    id: 2,
    title: "Level 2: Sudut Siku L",
    subtitle: "Belok tajam di persimpangan",
    brief: "Maju lurus, lalu belok 90° ke kanan (M1 SEARAH, M2 LAWAN), kemudian melaju ke lingkaran hijau.",
    starsRule: { threeStarsSec: 3.8, twoStarsSec: 5.5 },
    start: { xRel: 0.22, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.78, yRel: 0.22, radius: 22 },
    obstacles: [
      { xRel: 0.44, yRel: 0.45, wRel: 0.12, hRel: 0.55, label: "TEMBOK" }
    ]
  },
  {
    id: 3,
    title: "Level 3: Slalom Zig-Zag",
    subtitle: "Lewati celah di antara rintangan",
    brief: "Jalur lurus ditutup! Program manuver belok kanan lalu kiri melewati celah sempit.",
    starsRule: { threeStarsSec: 5.5, twoStarsSec: 8.0 },
    start: { xRel: 0.5, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.5, yRel: 0.16, radius: 20 },
    obstacles: [
      { xRel: 0.15, yRel: 0.58, wRel: 0.45, hRel: 0.08, label: "BLOK A" },
      { xRel: 0.42, yRel: 0.36, wRel: 0.45, hRel: 0.08, label: "BLOK B" }
    ]
  },
  {
    id: 4,
    title: "Level 4: Putar Balik Huruf U",
    subtitle: "Putaran balik haluan 180 derajat",
    brief: "Meluncur ke lorong kiri, lakukan putaran 180 derajat, lalu meluncur turun ke kanan.",
    starsRule: { threeStarsSec: 6.8, twoStarsSec: 9.5 },
    start: { xRel: 0.25, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.75, yRel: 0.82, radius: 22 },
    obstacles: [
      { xRel: 0.45, yRel: 0.25, wRel: 0.10, hRel: 0.75, label: "PEMBATAS" }
    ]
  },
  {
    id: 5,
    title: "Level 5: Rebound Sensor Bumper",
    subtitle: "Gunakan sensor sentuh untuk berbalik",
    brief: "Dinding beton menghalangi jalan. Gunakan blok 'JIKA SENTUH' untuk mundur dan berbelok saat menabrak!",
    starsRule: { threeStarsSec: 5.5, twoStarsSec: 8.5 },
    start: { xRel: 0.28, yRel: 0.82, angle: -Math.PI / 2 },
    target: { xRel: 0.80, yRel: 0.80, radius: 22 },
    obstacles: [
      { xRel: 0.10, yRel: 0.38, wRel: 0.80, hRel: 0.08, label: "TEMBOK SENSOR" }
    ]
  },
  {
    id: 6,
    title: "Level 6: Labirin Kotak Spiral",
    subtitle: "Optimasi logika perulangan",
    brief: "Masuk ke pusat spiral. Gunakan blok 'ULANGI 4x' agar programmu tetap ringkas!",
    starsRule: { threeStarsSec: 8.5, twoStarsSec: 13.0 },
    start: { xRel: 0.15, yRel: 0.85, angle: -Math.PI / 2 },
    target: { xRel: 0.50, yRel: 0.50, radius: 18 },
    obstacles: [
      { xRel: 0.30, yRel: 0.30, wRel: 0.40, hRel: 0.06, label: "BLOK 1" },
      { xRel: 0.65, yRel: 0.35, wRel: 0.06, hRel: 0.40, label: "BLOK 2" },
      { xRel: 0.30, yRel: 0.70, wRel: 0.40, hRel: 0.06, label: "BLOK 3" }
    ]
  }
];