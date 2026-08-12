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
        title: " Leveraging Sales Data of PT Sejahtera Bersama for Sustainable Growth and Optimization",
        img: "assets/img/work7.png",
        context_objective: "PT Sejahtera Bersama required an in-depth analysis of their transaction data to identify sales trends, evaluate product performance, and understand customer behavior. The goal was to build an interactive dashboard that provides data-driven strategies for sustaining and increasing long-term sales.",
        execution_approach: "Applying the OSEMN framework, I cleaned the transaction data in Excel and designed an Entity Relationship Diagram (ERD) to map data relationships. I then engineered a structured master table in MySQL, which was sorted chronologically and by order volume, before developing a comprehensive Tableau dashboard to visualize key metrics.",
        insights_recommendations: "Sales data reveals that the Robots category generates the highest revenue, while eBooks have the highest order quantity. The top-performing cities in sales are Washington, Houston, and San Diego, and sales trends fluctuate throughout the year, with certain months experiencing significant peaks. These trends indicate that high-volume but low-revenue categories can be optimized through bundling or upselling, while cities with strong sales performance should be prioritized for targeted marketing efforts. Additionally, seasonal patterns present opportunities for more strategic promotions. To enhance sales performance, strategies include offering bundling and discounts for eBooks and Training Videos, increasing marketing efforts in high-sales cities, and driving Average Order Value (AOV) growth in high-order cities. Furthermore, seasonal promotions, cross-selling strategies, and loyalty programs can be implemented to boost customer retention and long-term revenue growth." 
    },
    {
        title: "2024 Diastima Sales Performance Analysis: Key Insights and Strategic Recommendations",
        img: "assets/img/work1.png",
        context_objective: "As an emerging brand dedicated to disseminating astronomical knowledge through fashion and merchandise, Diastima required a reliable system to track its initial business operations. The primary objective was to design a centralized and accessible monitoring system to track daily sales, inventory movements, and revenue, enabling the team to analyze product performance in real-time.",
        execution_approach: "I developed a structured master data log using Google Sheets to accurately record incoming and outgoing inventory, product series, and transaction prices. I then connected this dataset to Looker Studio to design a live monitoring dashboard. By establishing this automated data pipeline, any updates in the master sheet are instantly visualized, allowing the team to conduct accessible, real-time sales analysis on the go.",
        insights_recommendations: "Sales tend to increase only during specific periods, such as during events. However, keychain sales remain consistent even on regular days, making it the best-selling product. On the other hand, online marketing efforts appear to be less effective in converting website visitors into buyers on e-commerce platforms. Always identify sales opportunities during specific event periods or times. Focus on expanding the product range, especially the most popular keychain designs. Additionally, improve marketing strategies to enhance the effectiveness of online sales conversions." 
    },
    {
        title: "Analysis of Social Buzz Content Categories with the Highest Popularity",
        img: "assets/img/work2.png",
        context_objective: "Generating a massive amount of unstructured data daily, Social Buzz needed a comprehensive audit of their big data practices in preparation for a successful IPO. The primary goal was to efficiently process this data to identify the top 5 content categories with the highest aggregate popularity.",
        execution_approach: "I performed comprehensive data cleaning on three datasets using Excel, handling missing values and removing irrelevant entries to ensure data reliability. I then merged the data using VLOOKUP and applied SUMIF to create a master scoring table evaluating 16 content categories. Finally, I visualized the top 5 performers in a Tableau dashboard to support their strategic priorities.",
        insights_recommendations: "The best-performing content categories were found to be animals and science. Notably, the third-ranked healthy food content indicated that the audience of Social Buzz content comprised individuals who want to live a healthy lifestyle. Interestingly, these were consolidated into just three categories: animals, science and technology, and healthy food. This consolidation was observed to accumulate viewers. Further optimizing content in these three categories to increase Social Buzz content engagement was recommended"
    },
    {
        title: "COVID-19 Data Analysis for the Year 2020-2021",
        img: "assets/img/work3.png",
        context_objective: "To prepare for future responses, there was a need to understand the spread and impact of the COVID-19 pandemic globally and within the ASEAN region. The objective was to visualize the top 5 most affected areas and uncover hidden data patterns using smart discovery features.",
        execution_approach: "I cleaned historical COVID-19 dataset (March 2020 – April 2021) using Microsoft Excel to handle missing values and ensure consistency. Afterward, I utilized SAP Analytics Cloud to build interactive dashboards, drill down into ASEAN-specific metrics, and forecast future trends up to July 2021.",
        insights_recommendations: "The forecast predicts an increase in cases, with an estimated 18,285 new cases on July 1, 2021, indicating a need for ongoing vigilance and preparedness. Additionally, the data shows a significant disparity in the positive rate between the global and ASEAN regions, with ASEAN countries having a lower rate of 10.11% compared to the global rate of 19.67%. Unfortunately, this could be due to the relatively low testing rates in ASEAN countries, which may result in many undetected cases. To prevent this possibility, it is recommended that countries worldwide, especially in ASEAN, increase their testing capacities while keeping the positive rate as low as possible. Each country needs to continue public health efforts, vaccination campaigns, and ongoing monitoring to prevent unexpected or uncontrolled spikes in cases."
    },
    {
        title: "Hypothesis Testing and Statistical Modeling of Facebook Ad Conversion Relationships",
        img: "assets/img/work4.png",
        context_objective: "The objective was to determine the exact statistical relationship between ad engagement and user actions across Facebook and AdWords platforms. This analysis aimed to scientifically prove whether an increase in ad clicks directly correlates with a higher conversion rate.",
        execution_approach: "I conducted hypothesis testing (𝛼 = 0.05) and calculated p-values using Microsoft Excel to validate the statistical significance of the data. Furthermore, I built a simple linear regression model to predict future conversion outcomes and visualized the statistical findings through Tableau.",
        insights_recommendations: "The Simple Linear Regression analysis reveals a statistically significant relationship and a positive correlation between the number of Facebook ad clicks and the number of conversions. This finding aligns with the predicted hypothesis that more clicks will lead to an increase in conversions. This indicates that each additional click on a Facebook ad is likely to result in an increase in conversions, highlighting the direct impact of ad engagement on user actions. Focus on strategies to increase the number of ad clicks, such as enhancing ad creatives, refining targeting, and conducting A/B testing to optimize click-through rates and ultimately boost conversion rates."
    },
    
];

document.querySelectorAll(".work__img").forEach((item, index) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        modalTitle.textContent = projectData[index].title;
        modalImage.src = projectData[index].img;
        modalcontext_objective.textContent = projectData[index].context_objective;
        modalexecution_approach.textContent = projectData[index].execution_approach;
        modalinsights_recommendations.textContent = projectData[index].insights_recommendations;

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
