# Alumbres Aventura — Sitio web

Sitio de una sola página (con menú que salta a cada sección) construido en
HTML, CSS y JavaScript "puros" — sin plantillas ni programas externos, para
que puedas editarlo tú mismo con cualquier editor de texto (recomendado:
[Visual Studio Code](https://code.visualstudio.com/), gratis).

## Cómo ver la web en tu ordenador

No hace falta instalar nada. Haz doble clic en **`index.html`** y se abrirá
en tu navegador. Cada vez que guardes un cambio en cualquier archivo,
recarga la página (F5) para verlo.

## Estructura de archivos

```
alumbres-aventura/
├── index.html          → todo el contenido y textos de la web
├── css/
│   └── style.css        → todos los colores, tipografías y estilos
├── js/
│   └── main.js           → menú móvil, formulario, animaciones
├── img/                  → todas las imágenes (logo + fotos)
└── README.md              → este archivo
```

## Lo más importante que vas a querer cambiar

### 1. Las fotos (ahora mismo hay marcadores de posición)
Todas las imágenes están en la carpeta `img/`. Los marcadores dicen
"SUSTITUIR POR FOTO REAL" para que sea evidente cuáles debes cambiar.
Solo tienes que:
1. Renombrar tu foto nueva exactamente igual que el archivo que sustituye
   (por ejemplo, tu foto de la piscina debe llamarse `piscina.jpg`), **o**
2. Cambiar el nombre del archivo dentro de `index.html` (busca `src="img/...`).

Lista de imágenes usadas y dónde aparecen:

| Archivo                     | Dónde aparece                          | Tamaño recomendado |
|------------------------------|-----------------------------------------|---------------------|
| `hero-grupo.jpg`             | Foto grande de fondo, primera pantalla | 1600×1200 px o más  |
| `piscina.jpg`                | Tarjeta "Nuestro campamento"           | 800×1000 px         |
| `multiaventura.jpg`          | Tarjeta "Nuestro campamento"           | 800×1000 px         |
| `veladas.jpg`                | Tarjeta "Nuestro campamento"           | 800×1000 px         |
| `trabajo-equipo.jpg`         | Tarjeta "Nuestro campamento"           | 800×1000 px         |
| `descenso.jpg`               | Galería de actividades (descenso)      | 900×1200 px         |
| `alojamiento.jpg`            | Tarjeta "Nuestro campamento"           | 800×1000 px         |
| `camping-vista.jpg`          | Sección "Instalaciones"                | 1200×900 px         |
| `instalaciones-1/2/3.jpg`    | Galería "Instalaciones"                | 900×700 px          |
| `og-image.jpg`                | Vista previa al compartir en redes    | 1200×630 px         |
| `logo-blanco.png` / `logo-oscuro.png` | Cabecera, footer y "Sobre nosotros" | ya está listo, no lo toques a menos que cambie el logo |

**Consejo:** comprime tus fotos antes de subirlas (por ejemplo con
[TinyPNG](https://tinypng.com)) para que la web cargue rápido.

### 2. Los textos
Abre `index.html` con un editor de texto. El archivo está dividido en
bloques con comentarios como:

```html
<!-- ============================================================
     HERO — primera pantalla
     ============================================================ -->
```

Busca la sección que quieras cambiar y edita el texto que hay entre las
etiquetas (por ejemplo entre `<h2>` y `</h2>`). No borres las etiquetas
en sí (las palabras entre `<` y `>`), solo el texto.

### 3. Los colores
Abre `css/style.css`. En las primeras líneas encontrarás:

```css
:root {
  --color-rosa: #C1165A;
  --color-oscuro: #14201A;
  --color-crema: #F7F1EA;
  ...
}
```

Cambia el código de color (el que empieza por `#`) y se actualiza
automáticamente en todo el sitio.

### 4. El precio, el programa y los datos de contacto
- Ahora hay **dos campamentos**, cada uno con su propio precio:
  - "1 noche / 2 días" → precio en `id="precio-alumno-1noche"`.
  - "2 noches / 3 días" → precio en `id="precio-alumno-2noches"`.
  Ambos están en `index.html`, dentro de `<div class="tarjetas-precio">`.
- El programa de cada campamento está debajo, en la sección
  `PROGRAMA POR DÍAS`, dentro de `<div class="programa-tabs">`. Hay dos
  bloques `.programa` (uno con `id="programa-1noche"` y dos días, otro con
  `id="programa-2noches"` y tres días) y dos botones arriba para alternar
  entre ellos — cada fila es un horario + una actividad.
  Si añades un tercer campamento, copia un bloque `.programa` entero,
  dale un `id` nuevo y añade su botón correspondiente con
  `data-programa="tu-nuevo-id"` (el JavaScript ya lo detecta solo).
- El teléfono, email y dirección aparecen en dos sitios: la sección
  "Contacto" y el pie de página (footer). Búscalos y cámbialos en ambos.

### 5. El descenso de barrancos (Moratalla)

La actividad de descenso aparece en **seis sitios** de `index.html`. Si
necesitas cambiar el nombre, el enfoque o quitarla, estos son todos:

| Dónde | Qué buscar |
|--------|-------------|
| Iconos de actividades | `<span>Descenso de<br>barrancos</span>` (icono `fa-water`) |
| Bloque destacado | `<div class="destacada">` — texto, datos y aviso |
| Galería de fotos | `img/descenso.jpg` con la etiqueta "Descenso" |
| Checklist "qué incluye" | el `<li>` con "Descenso de barrancos en Moratalla" |
| Horario de 2 noches / 3 días | día 2, fila de las 10:00 |
| Información importante | el `<li>` de "imprescindible saber nadar" |

Además está mencionado en el `<meta name="description">` y en el
`og:description` del `<head>` (los textos que salen en Google y al
compartir el enlace).

**Si tu descenso es de río (kayak/rafting) y no barranquismo**, cambia
esos textos por "Descenso del río" — el icono `fa-water` sirve igual.

Los datos del bloque destacado (duración, material, nivel, temporada)
están puestos como ejemplo: contrástalos con la empresa que os lleva la
actividad y edítalos en los `<li>` de `<ul class="destacada__datos">`.

Si más adelante quieres destacar otra actividad, duplica todo el
`<div class="destacada">` y cambia el icono, el título y los datos: el
estilo (`.destacada` en `css/style.css`) ya es reutilizable.

### 6. El menú de navegación
Cada pestaña del menú (`Inicio`, `Sobre nosotros`...) es un enlace a una
sección con un `id` concreto. Si añades una sección nueva, dale un `id`
único y añade un enlace `<a href="#tu-id">Tu texto</a>` en el menú, tanto
en la cabecera como en el `<footer>`.

## El formulario de contacto

El formulario ya envía correos de verdad, usando el servicio gratuito
[FormSubmit](https://formsubmit.co) — no necesitas servidor propio ni
programador.

Ahora mismo está configurado para enviar a: **pedrojoseriquelme34@gmail.com**
(es una dirección de prueba, más abajo te explico cómo cambiarla).

### ⚠️ Paso obligatorio la primera vez: activar el correo

FormSubmit funciona así para evitar spam: la **primera** vez que alguien
envíe el formulario, no recibirás el mensaje directamente. En su lugar,
llegará un correo de FormSubmit a `pedrojoseriquelme34@gmail.com` pidiendo
confirmar la dirección (algo como "Confirm Activation" o "Activate Form").

**Hay que abrir ese correo (revisa también Spam/Promociones) y pulsar el
botón de confirmación.** A partir de ese momento, todos los mensajes que
se envíen desde el formulario llegarán automáticamente a esa bandeja de
entrada, sin ningún paso adicional.

Así que para probarlo:
1. Abre `index.html` en el navegador (o publica la web).
2. Rellena el formulario de contacto y pulsa "Enviar mensaje".
3. Revisa la bandeja de `pedrojoseriquelme34@gmail.com` y confirma la
   activación.
4. Envía un segundo mensaje de prueba — ese ya debería llegar directo.

### Cómo cambiar el correo de destino más adelante

Cuando quieras que los mensajes lleguen a otro correo (por ejemplo, el
definitivo de la empresa), cambia la dirección
`pedrojoseriquelme34@gmail.com` en **dos sitios** (deben coincidir):

1. En `index.html`, dentro de `<form ... action="https://formsubmit.co/...">`.
2. En `js/main.js`, en la línea `const EMAIL_DESTINO = '...'` (bloque
   **"5. FORMULARIO DE CONTACTO"**).

Recuerda que, igual que la primera vez, ese nuevo correo también deberá
activarse con el correo de confirmación de FormSubmit.

### Otros ajustes disponibles (opcional)

Dentro del `<form>` en `index.html` hay varios campos ocultos que puedes
tocar si quieres:
- `_subject`: el asunto con el que llega el email.
- `_template`: el diseño del correo (`table` por defecto; hay otras
  opciones en la [documentación de FormSubmit](https://formsubmit.co/documentation)).
- Puedes añadir `_cc` con otro correo si quieres que los mensajes lleguen
  también a una segunda dirección (mira la documentación).

### Límites del plan gratuito
FormSubmit gratuito permite envíos ilimitados desde un mismo correo de
destino y guarda un histórico de 30 días por si se te escapa algún email.
Si en el futuro el campamento crece mucho, existen planes de pago con más
funciones, pero para una web de contacto normal el gratuito es suficiente.

## Publicar la web en internet

Cuando esté lista, necesitas subir estos archivos a un hosting. Dos
opciones sencillas y gratuitas para empezar:

- **Netlify** (netlify.com): arrastra la carpeta entera a su web y la
  publica en segundos.
- **GitHub Pages** (pages.github.com): sube los archivos a un
  repositorio y actívalo desde la configuración.

Más adelante, para tener tu propio dominio (`www.alumbresaventura.es`),
tendrás que comprarlo (por ejemplo en Namecheap o IONOS) y apuntarlo al
hosting que elijas.

## Iconos y tipografía

- Los iconos vienen de [Font Awesome](https://fontawesome.com/icons)
  (gratis) y se cargan automáticamente desde internet — no necesitas
  descargar nada. Si quieres cambiar un icono, busca su nombre en esa
  web y sustitúyelo en el `class="fa-solid fa-..."` correspondiente.
- La tipografía es **Poppins** (Google Fonts), también se carga sola.
