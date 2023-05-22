function toggleContent(value) {
    // si no recibe value, retorna sin hacer nada
    if (!value) return;
  
    // busco todos los tabs y los oculto
    let tabs = document.querySelectorAll(".collapse");
    tabs.forEach((tab) => (tab.style.display = "none"));
  
    // busco el tab que necesito activar y lo muestro
    let activeTab = document.querySelector(`#tabla-${value}`);
  
    // valido si existe el elemento antes de aplicar el cambio
    if (activeTab) activeTab.style.display = "block";
  }
  