// --- Card click-to-link for Page 5 ---
document.addEventListener('DOMContentLoaded', function() {
  const cardLinks = [
    'https://www.fao.org/philippines/news/detail/es/c/435529/',
    'https://www.researchgate.net/publication/318451686_Initial_Findings_of_the_Nationwide_Assessment_of_Philippine_Coral_Reefs_Philippine_Journal_of_Science_1462177-185', // Licuanan et al. (2017) - use a journal link or placeholder
    'https://oneocean.org/flash/the_philippine_seas.html',
    'https://www.researchgate.net/publication/280940198_Detection_of_ciguatera_fish_poisoning_in_the_Philippines',
    'https://theguidon.com/2023/09/a-sea-of-food-persisting-problems-in-the-fishing-sector/',
    'https://iwlearn.net/files/pdfs/Ahmed%20et%20al%202007_Coral%20reefs%20Bolinao.pdf',
    'https://www.greeneconomycoalition.org/news-and-resources/philippine-mangroves-fight-floods#:~:text=Troublingly%2C%20mangroves%20in%20the%20Philippines,well%20as%20providing%20jobs%20and',
    'https://oneocean.org/flash/the_philippine_seas.html'
  ];
  const cards = document.querySelectorAll('.page-5 .card');
  cards.forEach((card, i) => {
    card.addEventListener('click', function(e) {
      // Only open if a link is defined
      if (cardLinks[i]) {
        window.open(cardLinks[i], '_blank');
      }
    });
    card.style.cursor = 'pointer';
  });
});
const infoContent = {
  reefs: `
    <p>
      Philippines is considered as the <b>“center of the center”</b> when it comes to marine biodiversity. Due to the large number of the corals in the area, Philippines, Malaysia, Indonesia, Timor Leste, Papua New Guinea and Solomon Island are located in the region called <b>“Coral Triangle”</b> where 76% (605) of the world’s coral species (798) are found, the highest coral diversity in the world.
      <br><br><img src="images/fact-coral_triangle.jpg">

      If the region is the center of global marine biodiversity, the Philippines is the “center of the center.” Its marine resources are made up not just of coral reefs but “seagrass beds, mangrove and beach forests, fisheries, invertebrates, seaweeds, marine mammals and many others”
      The Philippines has the second highest seagrass diversity in the world, second only to Australia. 
      <br><br>Due to the country's marine biodiversity richness, conservationists have advocated its becoming a special focus of marine conservation efforts.

      <br><br><a href='https://www.undp.org/philippines/publications/4th-philippine-national-report-convention-biological-diversity' target=_black>The 4th Philippine National Report to the Convention on Biological Diversity. (n.d.).UNDP.</a>
    </p>
  `,
  resources: `
    <p>

    \u2022 <b>Ensures food security:</b> marine biodiversity supports up to 25% proportion of the country’s marine fisheries production.
    <br><br>\u2022 <b>The Philippines</b> has 500 species of corals and 1,763 reef associated species. In which our nation's reef economic value is estimated to be around 202 billion pesos per year.
    <br><br>\u2022 <b>Coral reefs boost eco-tourism</b>: 3rd largest reef area (~2.5 million hectares) and most diverse coral reef in the world where 1m² of healthy reefs = 1-5kg of white sand/year.
    <br><br>\u2022 <b>Medical resources:</b> marine organisms like cone snails produce compounds used in medicines (e.g., ziconotide, a painkiller 1,000x stronger than morphine).

    <br><br><br><br><a href='https://www.sciencedirect.com/science/article/abs/pii/S0921800917300812' target=_black>Tamayo N., et al. (2018). National Estimates of Values of Philippine Reefs' Ecosystem Service. Ecological Economics. Volume 146.</a>
    </p>
  `,

  resilience: `
    <p>
      Coral reefs and other coastal ecosystems such as seagrasses and mangroves are widely recognized to provide <b>protection against the devastating effects of strong waves</b> associated with tsunamis and storms. Meta-analyses reveal that coral reefs provide substantial protection against natural hazards by <b>reducing wave energy by an average of 97%</b> — reef crests alone dissipate most of this energy (86%).

      <br><br><img src="images/fact-coastal_protection2.jpg">
      <img src="images/fact-coastal_protection.jpg">

      <a href='https://doi.org/10.1038/ncomms4794' target=_black>Ferrario, F., et al. (2014). The effectiveness of coral reefs for coastal hazard risk reduction and adaptation. Nature Communications, 5(1). </a>
    </p>
  `,
};

const infoBox = document.getElementById('infoBox');
const topics = document.querySelectorAll('.text-reefs, .text-resources, .text-resilience');
const topicKeys = ['reefs', 'resources', 'resilience'];
let currentIndex = 0;
let isHovering = false;

// Helper to remove .topic-active from all topics
function clearActiveTopic() {
  topics.forEach(el => el.classList.remove('topic-active'));
}

// Show info for a given topic key and animate the topic
function showInfo(topic) {
  infoBox.innerHTML = infoContent[topic];
  infoBox.style.display = 'block';
  clearActiveTopic();
  // Add .topic-active to the relevant topic
  document.querySelector(`.text-${topic}`).classList.add('topic-active');
}

// Hide info box and remove animation
// function hideInfo() {
// //   infoBox.style.display = 'none';
//   clearActiveTopic();
// }

// Add hover listeners
topics.forEach(el => {
  el.addEventListener('mouseenter', () => {
    isHovering = true;
    const topic = el.getAttribute('data-topic');
    showInfo(topic);
    // Update currentIndex to the hovered topic's index
    currentIndex = topicKeys.indexOf(topic);
  });
  el.addEventListener('mouseleave', () => {
    isHovering = false;
    hideInfo();
  });
});

// Show the first topic quickly (e.g., after 1 second)
showInfo(topicKeys[currentIndex]);
currentIndex = (currentIndex + 1) % topicKeys.length;

setTimeout(() => {
  setInterval(() => {
    if (!isHovering) {
      showInfo(topicKeys[currentIndex]);
      currentIndex = (currentIndex + 1) % topicKeys.length;
    }
  }, 15000); // 15 seconds
}, 1000); // 1 second delay for the first topic (adjust as needed)


// Page 4

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const contents = document.querySelectorAll('.content');
const totalSlides = slides.length;
const page4 = document.querySelector('.page-4');

const bgClasses = ['bg1', 'bg2', 'bg3', 'bg4'];

function updatePage4Bg(index) {
  if (!page4) return;
  bgClasses.forEach(cls => page4.classList.remove(cls));
  page4.classList.add(bgClasses[index]);
}

function showSlide(index) {
  // Hide all slides and contents
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  // Show current slide and content
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
  contents[index].classList.add('active');
  updatePage4Bg(index);
}

function changeSlide(direction) {
  currentSlideIndex += direction;
  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

// DISABLED: Auto-advance slides every 20 seconds
// setInterval(() => {
//   changeSlide(1);
// }, 25000);

// Initialize
showSlide(0);