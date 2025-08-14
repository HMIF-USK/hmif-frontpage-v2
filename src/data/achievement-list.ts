import { IArticle } from '@/types/article.types';

export const achievements: IArticle[] = [
  {
    slug: 'ngobrol-bareng-bidang-minat-x-informatics-club-1',
    imgUrl: '/images/hinata_mantap.jpg',
    title: 'Ngobrol Bareng Bidang Minat X Informatics Club 1',
    singkatanTitle: 'Ngobar',
    kategori: 'event',
    penyelenggara: ['PPM', 'Penelitian dan Pengembangan Mahasiswa'],
    tanggal: 'Kamis, 12 Juli 2025',
    lokasi: 'Auditorium FMIPA',
    waktu: '19.00 - 20.00 WIB',
    deskripsi: [
      '     Dedikasi Informatika (DETIK) merupakan sebuah acara tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika. Event ini bertujuan untuk mempererat hubungan antar mahasiswa, alumni, dan dosen dalam bidang informatika.',
      'Acara ini akan menampilkan berbagai kegiatan menarik seperti workshop teknologi terbaru, seminar dari para ahli di bidang IT, dan networking session yang memungkinkan peserta untuk saling bertukar pengalaman dan membangun koneksi profesional.',
    ],
  },
  {
    slug: 'ngobrol-bareng-bidang-minat-x-informatics-club-2',
    imgUrl: '/images/hinata_mantap.jpg',
    title: 'Ngobrol Bareng Bidang Minat X Informatics Club 2',
    singkatanTitle: 'Ngobar',
    kategori: 'event',
    penyelenggara: ['PPM', 'Penelitian dan Pengembangan Mahasiswa'],
    tanggal: 'Kamis, 12 Juli 2025',
    lokasi: 'Auditorium FMIPA',
    waktu: '19.00 - 20.00 WIB',
    deskripsi: [
      '     Dedikasi Informatika (DETIK) merupakan sebuah acara tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika. Event ini bertujuan untuk mempererat hubungan antar mahasiswa, alumni, dan dosen dalam bidang informatika.',
      'Acara ini akan menampilkan berbagai kegiatan menarik seperti workshop teknologi terbaru, seminar dari para ahli di bidang IT, dan networking session yang memungkinkan peserta untuk saling bertukar pengalaman dan membangun koneksi profesional.',
    ],
  },
  {
    slug: 'ngobrol-bareng-bidang-minat-x-informatics-club-3',
    imgUrl: '/images/hinata_mantap.jpg',
    title: 'Ngobrol Bareng Bidang Minat X Informatics Club 3',
    singkatanTitle: 'Ngobar',
    kategori: 'event',
    penyelenggara: ['PPM', 'Penelitian dan Pengembangan Mahasiswa'],
    tanggal: 'Kamis, 12 Juli 2025',
    lokasi: 'Auditorium FMIPA',
    waktu: '19.00 - 20.00 WIB',
    deskripsi: [
      '     Dedikasi Informatika (DETIK) merupakan sebuah acara tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika. Event ini bertujuan untuk mempererat hubungan antar mahasiswa, alumni, dan dosen dalam bidang informatika.',
      'Acara ini akan menampilkan berbagai kegiatan menarik seperti workshop teknologi terbaru, seminar dari para ahli di bidang IT, dan networking session yang memungkinkan peserta untuk saling bertukar pengalaman dan membangun koneksi profesional.',
    ],
  },
];

export const achievementsMap = new Map<string, IArticle>(
  achievements.map((achievement) => [achievement.slug, achievement])
);

// Utility function untuk mendapatkan project berdasarkan slug
export const getAchievementBySlug = (slug: string): IArticle | undefined => {
  return achievementsMap.get(slug);
};
