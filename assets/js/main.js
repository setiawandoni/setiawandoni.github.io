/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== POPUP =====*/

const modal = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalAnalysis = document.getElementById("modalAnalysis");
const modalInsight = document.getElementById("modalInsight");
const modalRecommendation = document.getElementById("modalRecommendation");
const closeBtn = document.querySelector(".close");

const projectData = [
    {
        title: "2024 Diastima Sales Performance Analysis: Key Insights and Strategic Recommendations",
        img: "assets/img/work1.png",
        analysis: "The sales trend in 2024 shows a significant spike in only certain months. The top three best-selling products are keychains, jackets, and jerseys. The comparison of revenue between online and offline sales channels reveals a large gap.",
        insight: "Sales tend to increase only during specific periods, such as during events. However, keychain sales remain consistent even on regular days, making it the best-selling product. On the other hand, online marketing efforts appear to be less effective in converting website visitors into buyers on e-commerce platforms.",
        recommendation: "Always identify sales opportunities during specific event periods or times. Focus on expanding the product range, especially the most popular keychain designs. Additionally, improve marketing strategies to enhance the effectiveness of online sales conversions." 
    },
    {
        title: "Analysis of Social Buzz Content Categories with the Highest Popularity",
        img: "assets/img/work2.png",
        analysis: "The best-performing content categories were found to be animals and science. Notably, the third-ranked healthy food content indicated that the audience of Social Buzz content comprised individuals who want to live a healthy lifestyle.",
        insight: "Interestingly, these were consolidated into just three categories: animals, science and technology, and healthy food. This consolidation was observed to accumulate viewers.",
        recommendation: "Further optimizing content in these three categories to increase Social Buzz content engagement was recommended"
    },
    {
        title: "COVID-19 Data Analysis for the Year 2020-2021",
        img: "assets/img/work3.png",
        analysis: "The global positive rate is 19.67%. The positive rate in ASEAN countries is 10.11%, which is 9.56% lower than the global scale. Additionally, the forecast predicts an increase in cases, with an estimated 18,285 new cases on July 1, 2021, indicating a need for ongoing vigilance and preparedness.",
        insight: "The data shows a significant disparity in the positive rate between the global and ASEAN regions, with ASEAN countries having a lower rate of 10.11% compared to the global rate of 19.67%. Unfortunately, this could be due to the relatively low testing rates in ASEAN countries, which may result in many undetected cases.",
        recommendation: "To prevent this possibility, it is recommended that countries worldwide, especially in ASEAN, increase their testing capacities while keeping the positive rate as low as possible. Each country needs to continue public health efforts, vaccination campaigns, and ongoing monitoring to prevent unexpected or uncontrolled spikes in cases."
    },
    {
        title: "Hypothesis Testing and Statistical Modeling of Facebook Ad Conversion Relationships",
        img: "assets/img/work4.png",
        analysis: "The Simple Linear Regression analysis reveals a statistically significant relationship and a positive correlation between the number of Facebook ad clicks and the number of conversions. This finding aligns with the predicted hypothesis that more clicks will lead to an increase in conversions.",
        insight: "This indicates that each additional click on a Facebook ad is likely to result in an increase in conversions, highlighting the direct impact of ad engagement on user actions.",
        recommendation: "Focus on strategies to increase the number of ad clicks, such as enhancing ad creatives, refining targeting, and conducting A/B testing to optimize click-through rates and ultimately boost conversion rates."
    },
    
];

document.querySelectorAll(".work__img").forEach((item, index) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        modalTitle.textContent = projectData[index].title;
        modalImage.src = projectData[index].img;
        modalAnalysis.textContent = projectData[index].analysis;
        modalInsight.textContent = projectData[index].insight;
        modalRecommendation.textContent = projectData[index].recommendation;

        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
