# Software Engineer Technical Test

Esto es una prueba para los candidatos a Software Engineer de Adalab. La prueba se basa en una aplicación de gestión de candidatas a un curso de Adalab, que usa las tecnologías, herramientas y procesos que usamos actualmente. Partimos de una base de código ya existente (como luego será tu labor aquí) y el objetivo es desplegarlo y añadir algunas nuevas funcionalidades.

## Base de código

El código que se provee consiste en

- Una aplicación front-end realizada con React y componentes de la librería Material UI
- Tiene implementada una funcionalidad para registrar nuevos usuarios y hacer login
- Usa la librería de Firebase para realizar la autenticación y acceder a una base de datos
- Tiene creadas algunas funciones para acceder a las colecciones de la base de datos en Firestore (`src/firebase/db.js`)

Para configurar este proyecto en Firebase, podemos seguir estos pasos:

- Crear nuevo proyecto desde la consola de Firebase
- Configurar la base de front-end para que use la configuración del proyecto Firebase creado, mediante un fichero de configuración `src/firebase/config.json` que no está en control de versiones
- Activar en la consola de Firebase la autenticación por usuario / contraseña
- Lanzar la aplicación en local y probar que crea usuarios y hace login
- Activar en la consola de Firebase la creación de una base de datos tipo Firestore; una vez creada se recomienda aplicar las reglas de Firestore provistas (`firestore.rules`)

## Tareas a realizar

1. Construir una Cloud Function (en `/functions/index.js`) que permita guardar una candidata en la colección de candidatas en Firestore. De cada nueva candidata nos va a llegar: nombre completo, email, código postal y fecha de nacimiento. La edad se calcula a partir de la fecha de nacimiento y se guarda también en BBDD. Esta función la desplegaremos en Firebase para que esté accesible.
2. Crear un formulario de Google Forms para crear nuevas candidatas, con los campos descritos en el paso anterior: nombre completo, email, código postal y fecha de nacimiento.
3. Conectar el formulario de Google Forms y la Cloud Function anterior, de forma que cuando se rellene el formulario se envía una petición a la Cloud Function y la información de la candidata se guarden en BBDD.
4. En la aplicación de front-end, vamos a crear una vista en la ruta `/home` ya existente donde mostraremos un listado de todas las candidatas que tenemos en BBDD. Este listado lo podremos filtrar (en cliente) mediante un input de texto permitirá buscar por nombre o email. BONUS: este listado de candidatas sólo será visible para usuarios administaradores (según las reglas en `firestore.rules`).
5. Desplegar la aplicación en firebase hosting para poder acceder a través de una URL pública.

### Bonus

Demuestra tus capacidades de testing realizando un test sencillo donde veas oportuno

## Entrega

Para evaluar la prueba necesitamos que nos compartas

- la URL a un repositorio con el código del proyecto
- la URL al formulario de Google Forms para crear candidatas
- la URL de la aplicación de front-end con es listado de candidatas

## ANEXO: Guía de instalación y uso

```
git clone git@github.com:Adalab/software-engineer-technical-test.git
cd software-engineer-technical-test
npm install
cd functions
npm install
```

Instala firebase-tools de forma global

`npm install -g firebase-tools`

Conectar al proyecto de firebase creado

`firebase login`
`firebase use --add`

### Lanza el front-end en local

`npm start`

### Lanza el servidor (funciones) en local

`firebase serve`

### Para desplegar

Desplegar solo las funciones:
`firebase deploy --only functions`
