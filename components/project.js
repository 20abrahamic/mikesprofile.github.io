const data = [
  {
    title: "Data Connection",
    description:
      "Real time updating website of a variable updated through connection",
    image: "personalpage/data.jpg",
    link: "project1.html",
    projectStats: {
      MySQL: 60,
      JavaScript: 20,
      HTML: 10,
      CSS: 10,
    },
  },
  {
      title: "Utah Tech Website",
      description: "Website to show case Utah Tech University",
      image: "personalpage/utahtech.jpg",
      link: "https://www.geocities.ws/d00397750/utahtech6/index.html",
      projectStats: {
        JavaScript: 20,
        HTML: 40,
        CSS: 40,
      },
  },
  {
      title: "UFO sighting",
      description: "Heat map of UFO sightings in USA",
      image: "personalpage/star.jpg",
      link: "project3.html",
      projectStats: {
        mySQL: 60,
        JavaScript: 20,
        HTML: 10,
        CSS: 10,
      },
  },
  {
      title: "Calculator",
      description: "Calculator made with Javascript",
      image: "personalpage/calc.png",
      link: "https://www.geocities.ws/d00397750/calculator/index.html",
      projectStats: {
        JavaScript: 70,
        HTML: 15,
        CSS: 15,
      },
  },
  {
      title: "Personal Page Website",
      description: "A website to show case my achievements",
      image: "personalpage/newyork.jpg",
      link: "project4.html",
      projectStats: {
        JavaScript: 30,
        HTML: 30,
        CSS: 40,
      },
  },
  {
      title: "Music Recommendation",
      description: "Uses machine learning to recommend music for user ",
      image: "personalpage/phone.jpg",
      link: "project6.html",
      projectStats: {
        mySQL: 40,
        JavaScript: 10,
        HTML: 5,
        CSS: 5,
        Python: 40,
      },
  },
];

function createProject() {
  const leftContainer = document.querySelector("#left-container");
  const rightContainer = document.querySelector("#right-container");
  let count = 0;
  for (let i = 0; i < 6; i++) {
    const template = document.createElement("template");

    template.innerHTML = `
    <div class="project-item">
    <a href="${data[i].link}">
      <div class="project-image-wrapper">
        <img class="project-image" src="${data[i].image}" height="200" width="200">
        <div class="stats">
          ${Object.entries(data[i].projectStats).map(([key, value], index) => `
            <div class="stat-item">
              <div class="stat-label">${key}</div>
              <div class="stat-bar primary-color-${index + 1}" style="width: ${value}%;"></div>
            </div>
          `).join('')}
        </div>  
      </div>    
    </a>
    <div class="project-text">
      <h1 class="project-titles">${data[i].title}</h1>
      <br> 
      <h3>${data[i].description}</h3>
    </div>         
  </div>   
        `;

    if (count > 2) {
      rightContainer.appendChild(template.content);
    } else {
      leftContainer.appendChild(template.content);
    }

    count += 1;
  }
}

createProject();
