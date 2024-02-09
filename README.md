# Prueba Técnica de React Native: Aplicación de Películas

## Objetivo General

Desarrollar una aplicación en React Native que muestre un listado de películas populares y los detalles de cada una, implementando el concepto de diseño atómico para estructurar la UI.

## Pre-requisitos

- Node.js, npm o yarn, y el CLI de React Native instalados.
- Clave API válida de The Movie Database (TMDb).

## Instrucciones de Inicio

1. Clonar el repositorio principal (proporcionado por la organización) que contiene la estructura base del proyecto (si aplica).
2. **Crear una rama nueva a partir de `main` utilizando el nombre del candidato** como el nombre de la rama. Esto asegura que el trabajo realizado durante la prueba sea fácilmente identificable y accesible para revisión.

## Requisitos Funcionales

### Diseño Atómico

- **Átomos:** Desarrollar componentes básicos como botones, íconos, etiquetas de texto (por ejemplo, título de película, calificación) e imágenes (portada de película).
- **Moléculas:** Combinar átomos para crear componentes más complejos como tarjetas de película (que incluyen imagen, título y calificación) y barras de búsqueda.
- **Organismos:** Integrar moléculas y átomos en conjuntos más grandes y complejos, como la lista de películas y el encabezado de la aplicación.
- **Plantillas:** Estructurar la disposición de organismos en la pantalla para definir el layout general de las pantallas de Listado de Películas y Detalles de Película.
- **Páginas:** Combinar plantillas con datos específicos para renderizar las vistas finales que el usuario interactúa en la aplicación.

### Pantalla Principal: Listado de Películas Populares

- Utilizar una **plantilla** para definir el layout que incluya una lista de películas (organismo) y una barra de búsqueda (molécula).
- Cada película en la lista será un **organismo** compuesto de varias **moléculas** (tarjetas de película) que a su vez incluyen **átomos** como imágenes, textos y botones.

### Pantalla de Detalles de la Película

- Mostrar detalles de la película seleccionada usando una **plantilla** específica que organiza la información y las acciones disponibles (por ejemplo, marcar como favorita).
- La información de la película (título, sinopsis, calificación, etc.) se presentará a través de **moléculas** y **átomos**.

### Persistencia de Favoritos

- Implementar funcionalidad para marcar/desmarcar películas como favoritas usando **átomos** de botones o íconos dentro de las tarjetas de película y en la pantalla de detalles.
- Utilizar **AsyncStorage** para la persistencia de las selecciones de favoritos de manera local.

## Requisitos Técnicos

- Emplear **React Navigation** para la navegación entre las pantallas.
- Realizar llamadas a la API de TMDb con **Axios** o **Fetch API** para obtener la lista de películas y los detalles.
- Utilizar **useState** y **useEffect** para manejar el estado de la aplicación y **AsyncStorage** para la persistencia de datos.
- Aplicar el diseño atómico en la creación de componentes para una UI escalable y mantenible.

## Entregables

- Código fuente de la aplicación subido a un repositorio en GitHub.
- README.md en el repositorio con instrucciones detalladas para la instalación y ejecución de la aplicación, además de una breve descripción de cómo se aplicó el diseño atómico.

## Criterios de Evaluación

- Adherencia a los principios del diseño atómico en la estructuración de la UI.
- Calidad del código, incluyendo claridad, organización y buenas prácticas.
- Funcionalidad completa según los requisitos establecidos.
- Experiencia de usuario intuitiva y diseño visual atractivo.
- Implementación efectiva de la persistencia de datos con AsyncStorage.

## Notas Adicionales

- La creatividad en el uso del diseño atómico para crear una experiencia de usuario coherente y atractiva será valorada.
- La claridad en la documentación del código y en la explicación de las decisiones de diseño tomadas en el proyecto son importantes.
