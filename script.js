const colleges = [
   { name: 'Burdwan Raj College', url: 'https://burdwanrajcollege.ac.in/', logo: 'burdwan_raj_college.png' },
   { name: 'Memari College', url: 'https://memaricollege.com/memari/index.php', logo: 'memari_college.png' },
     { name: 'Dr. Bhupendra Nath Dutta Smriti Mahavidyalaya', url: 'https://dbndsm.edu.in/', logo: 'dbndsm.png' },
     { name: 'Guskara Mahavidyalaya', url: 'https://www.gushkaramahavidyalaya.ac.in/', logo: 'guskara_mahavidyalaya.png' },
     { name: 'Hooghly Mohsin College', url: 'https://hooghlymohsincollege.ac.in/', logo: 'hooghly_mohsin_college.png' },
     { name: 'Kandra Radha Kanta Kundu Mahavidyalaya', url: 'https://www.kandrarkkmahavidyalaya.org/', logo: 'kandra_rkk_mahavidyalaya.png' },
     { name: 'Mankar College', url: 'https://mankarcollege.ac.in/', logo: 'mankar_college.png' },
     { name: 'Aghorekamini Prakashchandra Mahavidyalaya', url: 'https://akpcmahavidyalaya.org/', logo: 'akpc_mahavidyalaya.png' },
    { name: 'Netaji Mahavidyalaya', url: 'https://www.netajimahavidyalaya.ac.in/', logo: 'netaji_mahavidyalaya.png' },
    { name: 'Shyamsundar College', url: 'https://syamsundarcollege.ac.in/', logo: 'shyamsundar_college.png' },
    { name: 'Vivekananda Mahavidyalaya', url: 'https://vmbdn.in/', logo: 'vivekananda_mahavidyalaya.png' },
    { name: 'Tarakeswar Degree College', url: 'https://tarakeswardegreecollege.org/', logo: 'tarakeswar_degree_college.png' },
    { name: 'Abhedananda Mahavidyalaya', url: 'https://abhedanandamahavidyalaya.ac.in/', logo: 'abhedananda_mahavidyalaya.png' },
    { name: 'Arambagh Girls College', url: 'https://www.arambaghgirlscollege.net/', logo: 'arambagh_girls_college.png' },
    { name: 'Burdwan Institute of Management & Computer Science', url: 'https://www.bims.co.in/', logo: 'bims.png' },
    { name: 'Dr. Gour Mohan Roy College', url: 'https://www.monteswardrgmroycollege.com/', logo: 'gour_mohan_roy_college.png' },
    { name: 'Mangalkote Government College', url: 'https://www.mangalkotegovtcollege.org/', logo: 'mangalkote_govt_college.png' },
    { name: 'St. Xavier\'s College, Burdwan', url: 'https://www.sxcb.edu.in/', logo: 'st_xaviers_college.png' },
    { name: 'Burdwan University', url: 'https://www.buruniv.ac.in/', logo: 'burdwan_university.png' },
    { name: 'Chandernagore Government College', url: 'https://www.chandernagorecollege.ac.in/', logo: 'chandernagore_govt_college.png' },
    { name: 'Durgapur Government College', url: 'https://durgapurgovtcollege.ac.in/', logo: 'durgapur_govt_college.png' },
    { name: 'Raja Rammohun Roy Mahavidyalaya', url: 'https://www.rrrmahavidyalaya.edu.in/', logo: 'raja_rammohun_roy_mahavidyalaya.png' },
    { name: 'Suri Vidyasagar College', url: 'https://surividyasagarcollege.org.in/', logo: 'suri_vidyasagar_college.png' },
    { name: 'Balagarh Bijoy Krishna Girls Mahavidyalaya', url: 'https://bkgc.in/', logo: 'balagarh_bijoy_krishna_girls_mahavidyalaya.png' },
    { name: 'Bejoy Narayan Mahavidyalaya', url: 'https://www.bnmv.ac.in/', logo: 'bejoy_narayan_mahavidyalaya.png' }
  ];


const cardColors = [
  '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF',
  '#33FFD7', '#FFD733', '#FF5733', '#33FF57', '#3357FF',
  '#FF33A6', '#A633FF', '#33FFD7', '#FFD733', '#FF5733',
  '#33FF57', '#3357FF', '#FF33A6', '#A633FF', '#33FFD7',
  '#FFD733', '#FF5733', '#33FF57', '#3357FF', '#FF33A6'
];

function createCollegeCard(college, color) {
  return `
    <div class="col-md-4 college-card">
      <div class="card" style="background-color: ${color};">
        <div class="card-body text-center">
          <img src="${college.logo}" alt="${college.name} Logo" class="card-logo">
          <h5 class="card-title">${college.name}</h5>
          <p class="card-text">Click the button below to visit the official website.</p>
          <a href="${college.url}" target="_blank" class="btn btn-primary">Visit Website</a>
        </div>
      </div>
    </div>
  `;
}

function displayColleges(filteredColleges) {
  const collegesList = document.getElementById('collegesList');
  collegesList.innerHTML = filteredColleges.map((college, index) => 
    createCollegeCard(college, cardColors[index % cardColors.length])
  ).join('');
}

document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredColleges = colleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm)
  );
  displayColleges(filteredColleges);
});

// Initial display of all colleges
displayColleges(colleges);

// Splash screen logic
$(document).ready(function() {
  setTimeout(function() {
    $('#splash-screen').fadeOut();
  }, 3000); // 3000 milliseconds = 3 seconds
});
