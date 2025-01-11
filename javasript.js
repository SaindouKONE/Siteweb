// Initialisation de la carte Leaflet
const map = L.map('map').setView([5.259063,-3.96522], 12);

// Ajout du fond de carte par défaut
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Gestion des sous-menus
function toggleSubmenu(menuId) {
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });
  const menu = document.getElementById(menuId);
  if (menu) menu.style.display = 'block';
}

// Script pour afficher/masquer le formulaire de connexion
function showLogin() {
  const loginForm = document.getElementById('login-form');
  loginForm.classList.toggle('hidden');
}

// Changement de fond de carte
document.getElementById('basemap-selector').addEventListener('change', (e) => {
  const selected = e.target.value;
  map.eachLayer(layer => {
    map.removeLayer(layer);
  });
  if (selected === 'satellite') {
    L.tileLayer('https://{s}.satellite-provider.com/{z}/{x}/{y}.jpg').addTo(map);
  } else if (selected === 'ign') {
    L.tileLayer('https://{s}.ign-provider.com/{z}/{x}/{y}.jpg').addTo(map);
  } else if (selected === 'local') {
    // Exemple d'ajout d'une image locale
    L.imageOverlay('local-image.jpg', [[5.259063, -3.96522], [5.259063, -3.96522]]).addTo(map);
  }
});

// Redirection vers l'accueil
function goToHome() {
  alert('Retour à l\'accueil.');
}
