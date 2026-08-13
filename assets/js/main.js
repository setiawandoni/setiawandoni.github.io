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
const modalContext = document.getElementById("modalcontext");
const modalApproach = document.getElementById("modalapproach");
const modalKey_Outcomes = document.getElementById("modalkey_outcomes");
const closeBtn = document.querySelector(".close");

const projectData = [
    {
        title: "Sales Performance Analysis & Commercial Strategy (MySQL, Tableau)",
        img: "assets/img/work7.png",
        context: "PT Sejahtera Bersama required an in-depth analysis of their transaction data to identify sales trends, evaluate product performance, and understand customer behavior. The goal was to build an interactive dashboard that provides data-driven strategies for sustaining and increasing long-term sales.",
        approach: "Applying the OSEMN framework, I cleaned the transaction data in Excel and designed an Entity Relationship Diagram (ERD) to map data relationships. I then engineered a structured master table in MySQL, which was sorted chronologically and by order volume, before developing a comprehensive Tableau dashboard to visualize key metrics.",
        key_outcomes: "The analysis revealed that while Robots drive revenue, eBooks lead in order volume. Based on these findings, I recommended boosting Average Order Value (AOV) by bundling high-volume items and prioritizing targeted marketing in top-performing cities like Washington and Houston during seasonal peaks." 
    },
    {
        title: "Real-Time Sales & Inventory Monitoring Pipeline (Google Sheets, Looker Studio)",
        img: "assets/img/work1.png",
        context: "As an emerging brand dedicated to disseminating astronomical knowledge through fashion and merchandise, Diastima required a reliable system to track its initial business operations. The primary objective was to design a centralized and accessible monitoring system to track daily sales, inventory movements, and revenue, enabling the team to analyze product performance in real-time.",
        approach: "I developed a structured master data log using Google Sheets to accurately record incoming and outgoing inventory, product series, and transaction prices. I then connected this dataset to Looker Studio to design a live monitoring dashboard. By establishing this automated data pipeline, any updates in the master sheet are instantly visualized, allowing the team to conduct accessible, real-time sales analysis on the go.",
        key_outcomes: "The system successfully eliminated manual tracking. Highlighting consistent keychain demand and event-driven sales spikes, the insights prompted strategic recommendations to expand the core product line and optimize online marketing for better e-commerce conversions." 
    },
    {
        title: "Big Data Content Audit & Engagement Strategy (Microsoft Excel, Tableau)",
        img: "assets/img/work2.png",
        context: "Generating a massive amount of unstructured data daily, Social Buzz needed a comprehensive audit of their big data practices in preparation for a successful IPO. The primary goal was to efficiently process this data to identify the top 5 content categories with the highest aggregate popularity.",
        approach: "I performed comprehensive data cleaning on three datasets using Excel, handling missing values and removing irrelevant entries to ensure data reliability. I then merged the data using VLOOKUP and applied SUMIF to create a master scoring table evaluating 16 content categories. Finally, I visualized the top 5 performers in a Tableau dashboard to support their strategic priorities.",
        key_outcomes: "The audit successfully pinpointed Animals, Science, and Healthy Food as the primary audience magnets. I provided data-backed recommendations to executive leadership to consolidate their content strategy around these three pillars, maximizing user engagement ahead of the IPO."
    },
    {
        title: "Regional Trend Forecasting & Smart Discovery Analysis (SAP Analytics Cloud)",
        img: "assets/img/work3.png",
        context: "To prepare for future responses, there was a need to understand the spread and impact of the COVID-19 pandemic globally and within the ASEAN region. The objective was to visualize the top 5 most affected areas and uncover hidden data patterns using smart discovery features.",
        approach: "I cleaned historical COVID-19 dataset (March 2020 – April 2021) using Microsoft Excel to handle missing values and ensure consistency. Afterward, I utilized SAP Analytics Cloud to build interactive dashboards, drill down into ASEAN-specific metrics, and forecast future trends up to July 2021.",
        key_outcomes: "The model predicted an imminent upward trend in new cases and highlighted a dangerously low positivity rate (10.11%) in ASEAN compared to the global average. This provided evidence-based recommendations for policymakers to urgently scale up local testing and vaccination efforts."
    },
    {
        title: "Hypothesis Testing and Statistical Modeling of Facebook Ad Conversion Relationships (Microsoft Excel, Tableau)",
        img: "assets/img/work4.png",
        context: "The objective was to determine the exact statistical relationship between ad engagement and user actions across Facebook and AdWords platforms. This analysis aimed to scientifically prove whether an increase in ad clicks directly correlates with a higher conversion rate.",
        approach: "I conducted hypothesis testing (𝛼 = 0.05) and calculated p-values using Microsoft Excel to validate the statistical significance of the data. Furthermore, I built a simple linear regression model to predict future conversion outcomes and visualized the statistical findings through Tableau.",
        key_outcomes: "The statistical model successfully proved a direct, positive correlation between ad clicks and conversions. This validated the recommendation to confidently reallocate the marketing budget toward A/B testing and creative optimization to systematically increase click-through rates."
    },
    
];

document.querySelectorAll(".work__img").forEach((item, index) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        modalTitle.textContent = projectData[index].title;
        modalImage.src = projectData[index].img;
        modalContext.textContent = projectData[index].context;
        modalApproach.textContent = projectData[index].approach;
        modalKey_Outcomes.textContent = projectData[index].key_outcomes;

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
