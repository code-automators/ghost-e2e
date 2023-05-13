# Ghost E2E

[![Cypress Test Automation](https://github.com/code-automators/ghost-e2e/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/code-automators/ghost-e2e/actions/workflows/cypress.yml)

Pruebas de extremo a extremo durante la automatización de pruebas en Ghost CMS v3.41.1 y v4.44.0

Realizado por:
- Juan Andrés Romero Colmenares - j.romero11@uniandes.edu.co
- Juan Sebastián Alegría - j.alegria@uniandes.edu.co
- Luisa Johanna Torres - lj.torresm1@uniandes.edu.co
- Juan Pablo Correa - jp.correap@uniandes.edu.co

Link a la wiki: https://github.com/code-automators/ghost-e2e/wiki  
Link a los issues: https://github.com/code-automators/ghost-issues/issues

## Funcionalidades bajo pruebas
1. Manejo de posts: Esta funcionalidad permite al administrador de Ghost crear, editar y eliminar publicaciones de blog en su sitio web. Desde el panel de administración, se pueden redactar nuevos posts, agregar imágenes y otros medios, programar su publicación y actualizar o eliminar publicaciones existentes.

2. Manejo de tags: Esta función permite al administrador de Ghost organizar y categorizar las publicaciones de blog utilizando tags. Se pueden crear, editar y eliminar tags para clasificar y ordenar los posts de manera eficiente y efectiva, lo que ayuda a los visitantes del sitio web a encontrar fácilmente el contenido relevante.

3. Manejo de páginas (pages): Esta funcionalidad permite al administrador de Ghost crear, editar y eliminar páginas en su sitio web. Las páginas son diferentes a las publicaciones de blog ya que no están organizadas por fecha y se utilizan generalmente para crear contenido estático.
4. Cambiar la navegación: Esta función permite al administrador de Ghost personalizar la navegación del sitio web, incluyendo la creación y eliminación de secciones de navegación y la modificación de la estructura y diseño de la navegación.

5. Crear una integración personalizada: Ghost permite a los administradores crear integraciones personalizadas para conectar su sitio web con otros servicios y herramientas que utilizan. Estas integraciones pueden ser creadas y configuradas a través del panel de administración de Ghost.

6. Cambiar la configuración de la página web: Esta funcionalidad permite al administrador de Ghost personalizar la configuración general de su sitio web, como el título del sitio, la descripción, la imagen de perfil y otros ajustes de configuración.

7. Editar perfil de administrador: Ghost permite al administrador actualizar su información de perfil, incluyendo su nombre, correo electrónico y contraseña.

8. Code Injection: Ghost ofrece una funcionalidad avanzada de inyección de código, lo que permite al administrador personalizar el código HTML, CSS y JavaScript de su sitio web. Esto puede ser utilizado para realizar cambios en la apariencia y funcionalidad del sitio, pero debe ser utilizado con precaución ya que los cambios pueden afectar la seguridad y estabilidad del sitio.

## Escenarios de Prueba tratados - Ghost v3.41.1

**Escenario de prueba 1: Crear un post con un tag y publicarlo**
- En este escenario, el usuario crea un nuevo post en la plataforma, añade un tag específico para categorizar el contenido y luego lo publica. El resultado esperado es que el post se publique correctamente con el tag asignado, y los visitantes puedan ver el post y su tag en el sitio web.

**Escenario de prueba 2: Editar un post existente y actualizar su título**
- Aquí, el usuario selecciona un post existente, cambia su título y guarda los cambios realizados. El resultado esperado es que el título del post sea actualizado correctamente en la plataforma y en el sitio web.

**Escenario de prueba 3: Crear un nuevo tag con una descripción inválida**
- En este escenario, el usuario intenta crear un nuevo tag pero introduce una descripción inválida (por ejemplo, con caracteres no permitidos o excediendo el límite de caracteres). El resultado esperado es que la plataforma muestre un mensaje de error y no permita la creación del nuevo tag.

**Escenario de Prueba 4: Publicar una nueva página**
- El usuario crea una nueva página en la plataforma y la publica. El resultado esperado es que la nueva página esté disponible en el sitio web y pueda ser visitada por los usuarios.

**Escenario de prueba 5: Cambiar la navegación del diseño**
- En este escenario, el usuario modifica la estructura de navegación del sitio web (por ejemplo, cambiando el orden de las páginas o añadiendo enlaces a otras páginas). El resultado esperado es que la navegación se actualice correctamente en el sitio web y se muestre según los cambios realizados.

**Escenario de prueba 6: Crear un post y agregar una imagen**
- El usuario crea un nuevo post y añade una imagen en el contenido del mismo. El resultado esperado es que el post se publique con la imagen incluida, y los visitantes puedan verla en el sitio web.

**Escenario de prueba 7: Crear un post con múltiples tags**
- En este escenario, el usuario crea un nuevo post y asigna varios tags para categorizar el contenido. El resultado esperado es que el post se publique con todos los tags asignados y los visitantes puedan ver el post con sus respectivos tags en el sitio web.

**Escenario de prueba 8: Editar un post existente y agregar una imagen**
- El usuario selecciona un post existente, añade una imagen en el contenido y guarda los cambios. El resultado esperado es que la imagen se muestre correctamente en el post en el sitio web.

**Escenario de prueba 9: Crear una nueva página, agregar una imagen y publicarla**
- En este escenario, el usuario crea una nueva página, añade una imagen en el contenido y la publica. El resultado esperado es que la página se publique con la imagen incluida y esté disponible en el sitio web.

**Escenario de prueba 10: Crear una integración personalizada**
- El usuario crea una nueva integración personalizada en la plataforma (por ejemplo, conectando con una API externa o añadiendo un widget de terceros). El resultado esperado es que la integración funcione correctamente y se muestre en el sitio web según lo configurado.

**Escenario de prueba 11: Editar un tag existente**
- Aquí, el usuario selecciona un tag existente y modifica sus detalles (como el nombre o la descripción). El resultado esperado es que los cambios se apliquen correctamente al tag y se reflejen en el sitio web.

**Escenario de prueba 12: Cambiar las credenciales del admin e intentar iniciar sesión con credenciales viejas y nuevas**
- El usuario cambia las credenciales de administrador (por ejemplo, actualizando la contraseña), y luego intenta iniciar sesión con las credenciales antiguas y nuevas. El resultado esperado es que el inicio de sesión con las credenciales antiguas falle y el inicio de sesión con las nuevas credenciales sea exitoso.

**Escenario de prueba 13: Crear un nuevo post y programar su publicación**
- En este escenario, el usuario crea un nuevo post y lo programa para que se publique automáticamente en una fecha y hora específicas. El resultado esperado es que el post sea publicado automáticamente en el momento programado.

**Escenario de prueba 14: Cambiar banner de la página de inicio**
- El usuario cambia el banner de la página de inicio en la plataforma. El resultado esperado es que el nuevo banner se muestre correctamente en la página de inicio del sitio web.

**Escenario de prueba 15: Realizar code injection en el header y footer del blog**
- En este escenario, el usuario introduce código personalizado en el header y footer del blog utilizando la función de "code injection" de la plataforma. El resultado esperado es que el código personalizado se ejecute correctamente y se muestre en el sitio web según lo configurado.

**Escenario de prueba 16: Crear un nuevo tag y asignarlo a una post existente**
- El usuario crea un nuevo tag y lo asigna a un post existente. El resultado esperado es que el tag se asigne correctamente al post y se muestre en el sitio web junto con el post.

**Escenario de prueba 17: Editar perfil cambiando el slug y los detalles de redes sociales, luego confirmar en la página correspondiente dada por el slug**
- En este escenario, el usuario edita su perfil, cambiando el slug (URL personalizada) y los detalles de las redes sociales. El resultado esperado es que los cambios se apliquen correctamente al perfil y se reflejen en la página correspondiente en el sitio web.

**Escenario de prueba 18: Eliminar un post**
- El usuario selecciona un post existente y lo elimina. El resultado esperado es que el post sea eliminado de la plataforma y ya no esté disponible en el sitio web.

**Escenario de prueba 19: Eliminar un tag**
- En este escenario, el usuario selecciona un tag existente y lo elimina. El resultado esperado es que el tag sea eliminado de la plataforma y ya no aparezca en el sitio web.

**Escenario de prueba 20: Entrar a configuración, cambiar los detalles de Ghost y hacer privado el sitio**
- El usuario accede a la configuración, modifica los detalles de Ghost (como el nombre del sitio, la descripción o el logotipo) y establece el sitio como privado. El resultado esperado es que los cambios se apliquen correctamente y el sitio web se vuelva privado, requiriendo una contraseña para acceder a su contenido.

## Escenarios de Prueba Modificados para VRT - Ghost v4.44.0
Los siguientes escenarios fueron escogidos para ser modificados y utilizados en la creación de los VRT para Ghost v4.44.0. Se usaron únicamente escenarios realizados en Cypress.

**Escenario de prueba 1: Crear un post con un tag y publicarlo**
- En este escenario, el usuario crea un nuevo post en la plataforma, añade un tag específico para categorizar el contenido y luego lo publica. El resultado esperado es que el post se publique correctamente con el tag asignado, y los visitantes puedan ver el post y su tag en el sitio web.

**Escenario de prueba 2: Editar un post existente y actualizar su título**
- Aquí, el usuario selecciona un post existente, cambia su título y guarda los cambios realizados. El resultado esperado es que el título del post sea actualizado correctamente en la plataforma y en el sitio web.

**Escenario de prueba 3: Crear un nuevo tag con una descripción inválida**
- En este escenario, el usuario intenta crear un nuevo tag pero introduce una descripción inválida (por ejemplo, con caracteres no permitidos o excediendo el límite de caracteres). El resultado esperado es que la plataforma muestre un mensaje de error y no permita la creación del nuevo tag.

**Escenario de Prueba 4: Publicar una nueva página**
- El usuario crea una nueva página en la plataforma y la publica. El resultado esperado es que la nueva página esté disponible en el sitio web y pueda ser visitada por los usuarios.

**Escenario de prueba 5: Cambiar la navegación del diseño**
- En este escenario, el usuario modifica la estructura de navegación del sitio web (por ejemplo, cambiando el orden de las páginas o añadiendo enlaces a otras páginas). El resultado esperado es que la navegación se actualice correctamente en el sitio web y se muestre según los cambios realizados.

**Escenario de prueba 10: Crear una integración personalizada**
- El usuario crea una nueva integración personalizada en la plataforma (por ejemplo, conectando con una API externa o añadiendo un widget de terceros). El resultado esperado es que la integración funcione correctamente y se muestre en el sitio web según lo configurado.

**Escenario de prueba 11: Editar un tag existente**
- Aquí, el usuario selecciona un tag existente y modifica sus detalles (como el nombre o la descripción). El resultado esperado es que los cambios se apliquen correctamente al tag y se reflejen en el sitio web.

**Escenario de prueba 12: Cambiar las credenciales del admin e intentar iniciar sesión con credenciales viejas y nuevas**
- El usuario cambia las credenciales de administrador (por ejemplo, actualizando la contraseña), y luego intenta iniciar sesión con las credenciales antiguas y nuevas. El resultado esperado es que el inicio de sesión con las credenciales antiguas falle y el inicio de sesión con las nuevas credenciales sea exitoso.

**Escenario de prueba 18: Eliminar un post**
- El usuario selecciona un post existente y lo elimina. El resultado esperado es que el post sea eliminado de la plataforma y ya no esté disponible en el sitio web.

**Escenario de prueba 20: Entrar a configuración, cambiar los detalles de Ghost y hacer privado el sitio**
- El usuario accede a la configuración, modifica los detalles de Ghost (como el nombre del sitio, la descripción o el logotipo) y establece el sitio como privado. El resultado esperado es que los cambios se apliquen correctamente y el sitio web se vuelva privado, requiriendo una contraseña para acceder a su contenido.


### Cypress

Desde la raiz del proyecto, puede ejecutar todos los escenarios de prueba, en ambas versiones de Ghost, con:
  ```bash
  npm test -- --spec 'cypress/e2e/*/scenarios/*.cy.js'
  ```

Si se desea una ejecución con mayor granularidad puede:

1. Instalar Cypress con `npm i -g cypress`.
2. Ir a la ruta de Cypress con `cd src/cypressTests/`.
3. Modificar el archivo de configuración para asignar los valores deseados por el usuario. El archivo se encuentra en: `src/cypressTests/cypress/e2e/scenarios/assets/config.json`. Es importante notar que acá se encuentran las credenciales a usar en los escenarios de prueba, por lo que es necesario que sean modificados de acorde a las preferencias del tester.
4. Ejecutar todos los escenarios de prueba de una sola versión con:
    ```bash
    cypress run --spec "cypress/e2e/v<VERSIÓN-DE-GHOST>/scenarios/*cy.js"
    ```
5. Ejecutar solo un escenario con:
    ```bash
    cypress run --spec "cypress/e2e/v<VERSIÓN-DE-GHOST>/scenarios/Scenario1.cy.js"
    ```
6. Alternativamente, puede usar `cypress open` y seleccionar este proyecto para seguir las instrucciones de ejecución mediante la GUI.

### Kraken
1. Instalar kraken-node con `npm i kraken-node`.
2. Ir a la carpeta de kraken con `cd src/kraken`.
3. Modificar el archivo de configuración para asignar los valores deseados por el usuario. El archivo se encuentra en: `src/kraken/properties.json`. Es importante notar que acá se encuentran las credenciales a usar en los escenarios de prueba, por lo que es necesario que sean modificados de acorde a las preferencias del tester.
4. Copiar el escenario deseado para ejecutar en el archivo RunningScenario.feature (Los escenarios se encuentran en `src/kraken/features/scenarios`).
5. Ejecutar el comando `node <RUTA-LOCAL-DE-KRAKEN> run`.
Notas:
- Para que funcione este comando, es necesario estar ubicado en `src/kraken`.
- El ejecutable es el script binario de kraken-node ubicado en `node_modules`, el cual fue instalado con el comando de `npm i kraken-node`. Un ejemplo de este comando para correr las pruebas es: `node ".\node_modules\kraken-node\bin\kraken-node" run`

#### Notas de la ejecución
Estas pruebas se ejecutaron sobre 2 versiones de ghost específicas. La v3.41.1 y la v4.44.0. Para esto, se crearon 2 contenedores de Docker con las siguientes instrucciones:

Puede ejecutar Ghost con los siguientes comandos (se recomienda no correrlos al tiempo):
```bash
docker run -d -e url=http://<machine-ip>:2368 -p 2368:2368 --name ghost_3.41.1 ghost:3.41.1
```

```bash
docker run -d -e url=http://<machine-ip>:2368 -p 2368:2368 --name ghost_4.44.0 ghost:4.44.0
```

Nosotros también desplegamos una instancia en GCP para tener disponible la versión de Ghost 3.41.1 y 4.44.0 en los siguientes enlaces, y así integrarlo con nuestro pipeline de GitHub Actions que corre automáticamente todas las pruebas de Cypress:

- v3.41.1: http://34.132.112.110:3411/
- v4.44.0 http://34.132.112.110:4440/

Al inicializar Ghost, se debe acceder a la URL correspondiente desde el navegador y completar manualmente los pasos de registro inicial de usuario, con las credenciales en los archivos de configuración JSON del proyecto. Además, la primera vez que se abre el sitio web, aparecerá una alerta de solicitud de actualización de seguridad, esta se debe cerrar para evitar fallas por interfaz en algunas de las pruebas existentes.

Para el caso de Kraken hay unos escenarios que alteran el estado de la aplicación de manera que otros escenarios no puedan ser ejecutados.
Es necesario restablecer ghost o arreglar manualmente estos cambios realizados por el escenario y seguir probando.

Los escenarios de Kraken NO se pueden ejecutar en paralelo, deberían ejecutarse secuencialmente reemplazando uno por uno en el RunningScenario.feature. Solo debe de haber un escenario al mismo tiempo en RunningScenario.feature

Los escenarios que causan cambios de este estilo son:
- Escenario 12 (Cambio de credenciales del admin)
  - Se arregla ingresando con las credenciales nuevas y cambiándolas por las viejas
- Escenario 20 (Cambio de ajustes generales y visibilidad del sitio web)
  - Se arregla yendo a la sección de ajustes y desactivando el modo privado del sitio web

## Visual Regression Testing - Resultados

### Reporte Manual

Si se quiere ejecutar el reporte de regresión visual de manera manual, se necesitan ejecutar los escenarios respectivos de Cypress tanto en la versión 3.41.1 como en la 4.44.0. Luego de ser ejecutados se puede correr los comandos `cd src/reportScript` y `node script.js`, y luego seguir las instrucciones en pantalla donde se pedirá incluir los paths de las carpetas que contienen los screenshots. (Los Paths deben de ser absolutos, no relativos). Después de esto, se generará un html que puede ser accedido desde cualquier navegador para poder ser visualizado.

Ejemplo de paths a ingresar (Windows):

- `C:\Users\ElRey\Documents\Scripts\JavaScript\7mo Semestre\Pruebas Automatizadas\ghost-e2e\src\cypressTests\cypress\screenshots\2023-05-13\v3.41.1`
- `C:\Users\ElRey\Documents\Scripts\JavaScript\7mo Semestre\Pruebas Automatizadas\ghost-e2e\src\cypressTests\cypress\screenshots\2023-05-13\v4.44.0`

### Reporte Automático

Los resultados del Visual Regression Testing se pueden acceder a través del reporte generado por el Workflow de Github Actions. Este reporte se genera tras la ejecución del workflow y muestra el estado actual de las pruebas visuales de Ghost CMS.

Para acceder al reporte del día, puedes hacerlo directamente a través del siguiente enlace: https://code-automators.github.io/ghost-e2e/. Si deseas ver el reporte de un día específico, puedes agregar la fecha del reporte deseado al final del enlace de la siguiente manera: https://code-automators.github.io/ghost-e2e/2023-05-13/.

En el reporte, se pueden encontrar las imágenes de referencia y las imágenes de prueba junto con la diferencia visual detectada, en caso de que haya alguna. También se puede observar el porcentaje de similitud entre las imágenes y la fecha y hora en que se ejecutó el Workflow.

Es importante tener en cuenta que el Visual Regression Testing no reemplaza las pruebas manuales y de unit testing, sino que complementa la suite de pruebas automatizadas. De esta manera, se pueden detectar posibles cambios visuales no deseados antes de que se desplieguen a producción.

### Reporte usado en el video
Debido a que con cada ejecución diferente del workflow se genera un reporte diferente, se decidió usar un reporte estático para el video. Este reporte se puede encontrar en la siguiente URL: https://code-automators.github.io/ghost-e2e/VRTReports/ExampleReport/VRT%20Report.html

Este reporte fue generado con los screenshots de la ejecución del workflow del día 13 de mayo de 2023. La cual se puede encontrar en el siguiente enlace: https://github.com/code-automators/ghost-e2e/actions/runs/4967891934

## Licencia

[![Licencia](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

-   **[Licencia MIT](LICENSE)**
-   Derechos de autor 2023 © Code Automators
