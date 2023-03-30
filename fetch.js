const searchBox = document.querySelector('.searchBox')
const searchResult = document.querySelector('.searchResult')
const openMenu = document.querySelector('.openMenu');
const contain = document.querySelector('.contain');
const closeMenu = document.querySelector('.closeMenu');
const songs = document.querySelector('#firstChild');
const trackList = document.querySelector('.trackList')
const title = document.querySelector('.title');
const image = document.querySelector('.image');
const songName = document.querySelector('.songName')
const artistName = document.querySelector('.artistName')
// buttons
const previous = document.querySelector('.previous');
const playOn = document.querySelector('.play');
const next = document.querySelector('.next');
const stopPlaying = document.querySelector('.stop');
// Time and PROGRESS
const defaultTime = document.querySelector('.defaultTime')
const progress = document.querySelector('.progress')
const endTime = document.querySelector('.endTime')
const volumeBtn = document.querySelector('.volumeBtn')
let playing = false;
let begin = 0;
let timer;

// creating an audio element
let player = document.createElement('audio');
const url = 'https://api.alquran.cloud/v1/quran/ar.alafasy'
fetch(url).then((response) => response.json())
.then(({data}) => {
	let list = [
		{
			name: 'Surah Al-Fatiha',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/001Www.quranaudio.info.mp3'
		},
		{
			name: 'Surah Al Baqorah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/002Www.quranaudio.info.mp3'
		},
		{
			name: 'Surah Al Emran',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/003Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratun Nisa',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/004Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Maaidah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/005Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al-An’am',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/006Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al-A’raf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/007Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Anfal',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/008Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratut Taubah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/009Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Yunus',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/010Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Hud',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/011Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Yusuf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/012Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratur Ra’d',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/013Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Ibrahim',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/014Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Hijr',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/015Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu An-Nahl',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/016Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al isra’',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/017Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Kahf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/018Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Maryam',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/019Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Taha',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/020Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Anbiyaa',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/022Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Haj',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/023Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Mu’minun',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/024Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratun Nur',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/025Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Furqan',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/026Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Ash-Shu’ara',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/027Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu An Naml',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/028Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Qasas',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/029Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Ankabut',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/030Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Ar-Rum',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/031Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Luqman',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/031Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu As Sajdah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/032Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Ahzab',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/033Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Sabai',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/034Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Fatir',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/035Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Yasin',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/036Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu As Saffah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/037Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Sad',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/038Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Az-Zumar',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/039Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Ghafir',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/040Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Fussilah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/041Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu As Shura',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/042Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Az-Zukhruf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/043Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Dukhan',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/044Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Jathiyah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/045Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Ahqaf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/046Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Muhammad',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/047Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Fath',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/048Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Hujurat',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/049Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Qaf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/050Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Adh Dhariyaat',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/051Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratut Tur',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/052Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratun Najm',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/053Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Qamar',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/054Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratur Rahman',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/055Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Waqi’ah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/056Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Hadid',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/057Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Mujaadilah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/058Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Hashr',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/059Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Mumtahinah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/060Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu As Saf',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/061Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Jumu’ah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/062Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Munafiquun',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/063Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu At Taghabun',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/064Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Talaq',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/065Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu At Tahrim',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/066Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Mulk',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/067Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Qalam',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/068Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Haqqah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/069Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Ma’arij',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/070Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratun Nuh',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/071Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Jinn',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/072Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Muzammil',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/073Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al-Mudaththir',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/074Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Qiyamah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/075Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Insan',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/076Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Mursalat',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/077Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu An-Naba’',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/078Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu An Nazi’ah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/079Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu ’Abasa',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/080Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu At Takwir',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/081Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Infitaar',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/082Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Mutaffifin',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/083Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Inshiqaq',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/084Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Buruj',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/085Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Tariq',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/086Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al A’la',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/087Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Ghashiyah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/088Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Fajr',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/089Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Balad',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/090Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Ash Shams',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/019Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Layl',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/092Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Adh Dhuha',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/093Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Inshirah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/094Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu At Tin',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/095Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul ’Alaq',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/096Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Qadr',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/097Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Bayyinah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/098Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Az Zalzalah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/099Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al ’Adiyah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/100Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Qari’ah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/101Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul At Takathur',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/102Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al-’Asr',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/103Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Humazzah',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/104Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Fil',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/105Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Quraesh',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/106Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Ma’un',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/107Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Kauthar',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/108Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratul Al Kafirun',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/109Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu An Nasr',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/110Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Masad',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/111Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Ikhlas',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/112Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratu Al Falaq',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/113Www.quranaudio.info.mp3'
		},
		{
			name: 'Suratun Nas',
			artist: data.edition.englishName,
			path: 'https://ia800309.us.archive.org/24/items/RecitationByMisharyRashedAlafasy/114Www.quranaudio.info.mp3'
		}
		]	
	const toPlay = () => {clearInterval(timer);
		player.src = list[begin].path;
		player.load();
		songName.textContent = list[begin].name;
		artistName.textContent = data.edition.name;
		title.textContent = `Playing ${begin + 1} of ${list.length}`;
		timer = setInterval(seekUpdate, 1000);
		// function to reset values
		const reset = () => {
		 defaultTime.textContent = '0:00';
		 endTime.textContent = '0:00';
		}
		reset()
	}
	const play = () => {playOn.addEventListener('click', () => {if (!playing) {playTrack()}else{pause()}})}
	play()
		
	const playTrack = () => {
		player.play();
		playing = true;
		playOn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
	} 
	playTrack()
	
	const pause = () =>  {
		// Pause the loaded track
		player.pause();
		playing = false;   
		playOn.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
	}
	pause()
	
	
	const nextTrack = () => {
		// Go back to the first track if the
		// current one is the last in the track list
		next.addEventListener('click', () => {
			if (begin < list.length - 1)
			begin += 1;
			else begin = 0;
			// Load and play the new track
			toPlay(begin);
			playTrack();
		})

		player.addEventListener('ended', () => {
			begin++;
			if(begin == list.length) {
				begin = 0
				toPlay(begin)
			}else {
				toPlay(begin)
			}
		})
	}
	nextTrack()


	const prevTrack = () => {
		// Go back to the last track if the current one is the first in the track list
		previous.addEventListener('click', () => {
			if (begin > 0)
			begin -= 1;
			  else begin = list.length - 1;
			  // Load and play the new track
			  toPlay(begin);
			  playTrack();
		})    
	}
	prevTrack()

	const toStop = () => {
		stopPlaying.addEventListener('click', () => {
			player.pause()
			playing = false;
			player.defaultTime = 0
		})
	}
	toStop()
	
	const volumePoint = () => {volumeBtn.addEventListener('change', () => {player.volume = volumeBtn.value / 100})}
	volumePoint()

	const toIncrease = () => {document.querySelector('.increase').addEventListener(('click'), () => {volumeBtn.value ++;})}
	toIncrease()

	const toDecrease = () => {document.querySelector('.decrease').addEventListener(('click'), () => {volumeBtn.value --;})}
	toDecrease()
	const seekUpdate = () => {
		let point = 0;
		// Check if the current track duration is a number
		if (!isNaN(player.duration)) {
			point = player.currentTime * (100 / player.duration);
			progress.value = point;
			// Calculate the time left and the total duration
			let defaultMinutes = Math.floor(player.currentTime / 60);
			let defaultSeconds = Math.floor(player.currentTime - defaultMinutes * 60);
			let minutes = Math.floor(player.duration / 60);
			let seconds = Math.floor(player.duration - minutes * 60);
			// Add a zero to the single digit time values
			if (defaultSeconds < 10) { defaultSeconds = '0' + defaultSeconds; }
			if (seconds < 10) { seconds = '0' + seconds; }
			if (defaultMinutes < 10) { defaultMinutes = '0' + defaultMinutes; }
			if (minutes < 10) { seconds = '0' + seconds; }
			
			// Display the updated duration
			defaultTime.textContent = defaultMinutes + ':' + defaultSeconds;
			endTime.textContent = minutes + ':' + seconds;
		}
	}
	seekUpdate()

	openMenu.addEventListener('click', () => {
		contain.style.display = 'block'
		
	})
	closeMenu.addEventListener('click', () => {
		contain.style.display ='none'
	})

	list.map((chapter) => {
		const chapterList = document.createElement('p');

		trackList.append(chapterList)
		chapterList.textContent = chapter.name;	
	});

	toPlay(begin)
})


