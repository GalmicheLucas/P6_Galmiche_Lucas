async function generateModal () {

const sectionPortfolio = document.getElementById("portfolio");
sectionPortfolio.insertAdjacentElement("afterbegin", mode);

const modifyButton = document.querySelector(".modify");
modifyButton.addEventListener("click", async() => {
    const apiWorks = await fetch("http://localhost:5678/api/works");
    const works = await apiWorks.json();

    generateModal(works);
});
}

// Not display filterBar
const filterBar = document.querySelector(".filterbar");
filterBar.style.display = "none";

// gallery
const galleryProjects = document.createElement('div');
galleryProjects.className = "gallery";

//Display gallery of projects in DOM
export function displayGallery(works) {

    galleryProjects.innerHTML = '';

    if (Array.isArray(works) && works.length > 0) {
        for (let i = 0; i < works.length; i++) {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figCaption = document.createElement("figcaption");
            img.src = works[i].imageUrl;
            figCaption.textContent = works[i].title;
            //update with modale activity
            figure.id = `works-${works[i].id}`;
            //appendChild to portfolioSection
            figure.appendChild(img);
            figure.appendChild(figCaption);
            galleryProjects.appendChild(figure);
            portfolioSection.appendChild(galleryProjects);
        }
    }
}
