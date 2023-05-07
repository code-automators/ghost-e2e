# Ghost E2E

Pruebas de extremo a extremo durante la automatización de pruebas en Ghost CMS v3.41.1

Realizado por:
- Juan Andrés Romero Colmenares - j.romero11@uniandes.edu.co
- Juan Sebastián Alegría - j.alegria@uniandes.edu.co
- Luisa Johanna Torres - lj.torresm1@uniandes.edu.co
- Juan Pablo Correa - jp.correap@uniandes.edu.co

## Funcionalidades bajo pruebas
1. Manejo de posts: Esta funcionalidad permite al administrador de Ghost crear, editar y eliminar publicaciones de blog en su sitio web. Desde el panel de administración, se pueden redactar nuevos posts, agregar imágenes y otros medios, programar su publicación y actualizar o eliminar publicaciones existentes.

2. Manejo de tags: Esta función permite al administrador de Ghost organizar y categorizar las publicaciones de blog utilizando tags. Se pueden crear, editar y eliminar tags para clasificar y ordenar los posts de manera eficiente y efectiva, lo que ayuda a los visitantes del sitio web a encontrar fácilmente el contenido relevante.

3. Manejo de páginas (pages): Esta funcionalidad permite al administrador de Ghost crear, editar y eliminar páginas en su sitio web. Las páginas son diferentes a las publicaciones de blog ya que no están organizadas por fecha y se utilizan generalmente para crear contenido estático.
4. Cambiar la navegación: Esta función permite al administrador de Ghost personalizar la navegación del sitio web, incluyendo la creación y eliminación de secciones de navegación y la modificación de la estructura y diseño de la navegación.

5. Crear una integración personalizada: Ghost permite a los administradores crear integraciones personalizadas para conectar su sitio web con otros servicios y herramientas que utilizan. Estas integraciones pueden ser creadas y configuradas a través del panel de administración de Ghost.

6. Cambiar la configuración de la página web: Esta funcionalidad permite al administrador de Ghost personalizar la configuración general de su sitio web, como el título del sitio, la descripción, la imagen de perfil y otros ajustes de configuración.

7. Editar perfil de administrador: Ghost permite al administrador actualizar su información de perfil, incluyendo su nombre, correo electrónico y contraseña.

8. Code Injection: Ghost ofrece una funcionalidad avanzada de inyección de código, lo que permite al administrador personalizar el código HTML, CSS y JavaScript de su sitio web. Esto puede ser utilizado para realizar cambios en la apariencia y funcionalidad del sitio, pero debe ser utilizado con precaución ya que los cambios pueden afectar la seguridad y estabilidad del sitio.

## Escenarios de Prueba tratados


## Ejecución de Pruebas

### Cypress

1. Instalar Cypress con `npm i -g cypress`.
2. Ir a la ruta de Cypress con `cd src/cypress_tests/`.
3. Ejecutar todos los escenarios de prueba con: `cypress run --spec "cypress/e2e/scenarios/*cy.js"`.
4. Ejecutar solo un escenario con: `cypress run --spec "cypress/e2e/scenarios/Scenario1.cy.js"`.
5. Alternativamente, puede usar `cypress open` y seleccionar este proyecto para seguir las instrucciones de ejecución mediante la GUI.

### Kraken
1. Instalar kraken-node con `npm i kraken-node`.
2. Ir a la carpeta de kraken con `cd src/kraken`.
3. Copiar el escenario deseado para ejecutar en el archivo RunningScenario.feature (Los escenarios se encuentran en `src/kraken/features/scenarios`).
4. Ejecutar el comando `node [RUTA LOCAL DE KRAKEN] run`. 
Notas: 
- Para que funcione este comando, es necesario estar ubicado en `src/kraken`.
- El ejecutable es el script binario de kraken-node ubicado en `node_modules`, el cual fue instalado con el comando de `npm i kraken-node`.   Un ejemplo de este comando para correr las pruebas es:  
`node "C:\Users\ElRey\Documents\Scripts\JavaScript\ghost-e2e\node_modules\kraken-node\bin\kraken-node" run`

## Licencia

[![Licencia](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

-   **[Licencia MIT](LICENSE)**
-   Derechos de autor 2023 © Code Automators
