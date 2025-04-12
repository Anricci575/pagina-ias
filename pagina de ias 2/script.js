// Lista de IAs específicas (solo las mencionadas: Deepseek, Copilot, Blackbox)
const ais = [
    {
        name: "Deepseek",
        description: "IA especializada en búsqueda avanzada y análisis de datos en tiempo real.",
        link: "https://www.deepseek.com/"
    },
    {
        name: "Copilot",
        description: "IA de GitHub para asistencia en codificación y generación de código en tiempo real.",
        link: "https://copilot.github.com/"
    },
    {
        name: "Blackbox",
        description: "IA que convierte descripciones en texto en imágenes realistas y creativas.",
        link: "https://www.blackbox.com/"
    }
];

// Cargar las IAs al cargar la página
window.onload = function() {
    const aiListElement = document.getElementById("aiList");
    
    ais.forEach(ai => {
        const aiItem = document.createElement("div");
        aiItem.classList.add("ai-item");

        aiItem.innerHTML = `
            <h3>${ai.name}</h3>
            <p>${ai.description}</p>
            <a href="${ai.link}" target="_blank">
                <button>Ver más</button>
            </a>
        `;

        aiListElement.appendChild(aiItem);
    });
}
