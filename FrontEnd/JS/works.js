// Sélectionne l'élément avec la classe 'gallery' du DOM 
const gallery = document.querySelector(".gallery");

// Définit une fonction asynchrone pour charger les projets depuis l'API
async function loadProjects() {
    // Effectue une requête GET vers l'API pour récupérer les travaux
    const response = await fetch("http://localhost:5678/api/works");
    
    // Attend la réponse de l'API et la convertit en JSON
    return await response.json();
}   


