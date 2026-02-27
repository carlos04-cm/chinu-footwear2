👟 CHINU FOOTWEAR

Tienda virtual de calzado moderno para hombres y mujeres, desarrollada con HTML5, CSS3 y JavaScript, aplicando diseño estructurado, estilos externos, variables CSS, diseño adaptable (responsive) e interactividad básica.

📌 Descripción del Proyecto

CHINU FOOTWEAR es una página web estática que simula una tienda online de calzado.
El sitio permite navegar entre diferentes secciones y cuenta con una funcionalidad interactiva para mostrar u ocultar colecciones.

El sitio cuenta con:

🏠 Página principal (Inicio)
👨 Sección de calzado para hombre
👩 Sección de calzado para mujer
🎨 Diseño adaptable para dispositivos móviles
📦 Uso de Normalize.css para compatibilidad entre navegadores
🎯 Uso de variables CSS para mejor organización del diseño
⚙️ Interactividad con JavaScript

🗂 Estructura del Proyecto

CHINU-FOOTWEAR/
│
├── index.html
├── hombre.html
├── mujer.html
│
├── css/
│ ├── normalize.css
│ └── styles.css
│
├── js/
│ └── script.js
│
└── img/
├── banner.png
├── coleccion1.png
├── coleccion2.png
├── coleccion3.png
├── coleccion4.png
└── (imágenes de productos)

🧩 Tecnologías Utilizadas

HTML5 → Estructura del contenido
CSS3 → Diseño, estilos, sombras y animaciones
Normalize.css → Normalización de estilos entre navegadores
CSS Grid → Distribución de productos y colecciones
Flexbox → Organización del header
Variables CSS (:root) → Manejo centralizado de colores
JavaScript → Interactividad del sitio

⚙️ Funcionalidad JavaScript
Mostrar / Ocultar Colecciones

En la página Inicio, el sitio incluye un botón que permite:

Ocultar la sección de colecciones

Volver a mostrarla

Cambiar dinámicamente el texto del botón

Funcionamiento:

Se selecciona el botón por su id

Se selecciona la sección de colecciones con querySelector

Se alterna la propiedad display entre grid y none

Código JavaScript utilizado:

const botonColecciones = document.getElementById("toggleColecciones");
const colecciones = document.querySelector(".colecciones");

botonColecciones.addEventListener("click", () => {
    if (colecciones.style.display === "none") {
        colecciones.style.display = "grid";
        botonColecciones.textContent = "Ocultar colecciones";
    } else {
        colecciones.style.display = "none";
        botonColecciones.textContent = "Mostrar colecciones";
    }
});
🎨 Características del Diseño
Header

Logo del sitio

Menú de navegación con enlace activo

Barra de búsqueda

Íconos visuales (🔍 🛒)

Banner principal

Imagen de fondo

Texto centrado

Diseño adaptable

Productos

Distribuidos en grid de 3 columnas

Efecto hover con elevación y sombra

Imagen, nombre y precio

📱 Diseño Responsive

El sitio se adapta automáticamente en pantallas menores a 768px:

Header en columna

Productos en una sola columna

Colecciones en 2 columnas

Imágenes ajustadas automáticamente

Compatible con:

📱 Celulares
💻 Computadores
📲 Tablets

🎨 Paleta de Colores (Variables CSS)

--ColorFondoBody: #e6e0de;
--ColorTextoBody: #333;
--ColorHeader: #e3dedc;
--ColorNavActivo: #ff8c00;
--ColorProductoFondo: #f2eeec;

Las variables están definidas en :root para facilitar futuras modificaciones del diseño.

🚀 Cómo usar el proyecto

Clonar el repositorio
git clone https://github.com/tuusuario/chinu-footwear.git

Abrir la carpeta en VS Code

Ejecutar index.html en el navegador

📈 Mejoras Futuras

Carrito de compras funcional

Filtros por precio

Conexión a base de datos

Publicación en hosting real

Animaciones más avanzadas

👨‍💻 Autor

Carlos Sierra
Yesenia Perez
Andres Morales

Proyecto académico de Desarrollo Web Frontend.
