# CHALLENGES:
En 48 horas tuve que desarrollar 2 proyectos para una empresa llamada Gundo.

# CHALLENGE-1
# Gundo App

Gundo App es una aplicación que proporciona recomendaciones nutricionales personalizadas. Los usuarios pueden iniciar sesión para recibir recomendaciones basadas en su nutrigenética.

## Tecnologías Utilizadas

### Frontend
- **React**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React**
- **React-icons**
- **React-toastify**

### Backend
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Nodemon**
- **CORS**
- **dotenv**
- **express-async-handler**
- **express-session**

## Instalación

1. **Clona el repositorio**

    ```bash
    https://github.com/LiamOtegui/gundo-challenges.git
    ```

2. **Cambia de carpeta**

    ```bash
    cd challenge-1
    ```

3. **Instala las dependencias para el frontend**

    Navega a la carpeta `client` y ejecuta:

    ```bash
    yarn install
    ```

4. **Instala las dependencias para el backend**

    Navega a la carpeta `api` y ejecuta:

    ```bash
    npm install
    ```

5. **Configura las variables de entorno**

    Crea un archivo `.env` en la carpeta `api` y agrega las siguientes variables:

    *(lo adjunte en el e-mail)*
    
    ```env
    MONGO_URL=your_mongodb_env
    PORT=your_port_env
    NODE_ENV=your_node_env
    ```

6. **Inicia el servidor**

    En la carpeta `api`, ejecuta:

    ```bash
    npm start
    ```

    Esto iniciará el servidor de desarrollo con Nodemon.

7. **Inicia el cliente**

    En la carpeta `client`, ejecuta:

    ```bash
    yarn dev
    ```

    Esto iniciará la aplicación React en el navegador.

## Uso

1. **Inicia sesión** en la aplicación utilizando las credenciales válidas.

    ```bash
    username: john_doe
    password: johnwick
    username: jane_doe
    password: maryjane
    ```

2. **Recibe recomendaciones** personalizadas basadas en tu nutrigenética.

## Estructura del Proyecto

- **`client/`**: Contiene el frontend de la aplicación.
- **`api/`**: Contiene el backend de la aplicación, incluyendo la lógica del servidor y la conexión a MongoDB.

----

# CHALLENGE-2
# Gundo E-commerce

El Desafío 2 se centra en la integración de un sistema de recomendación en un entorno de e-commerce. La aplicación demo muestra cómo se pueden recomendar productos saludables basados en las preferencias de macronutrientes del usuario.

## Tecnologías Utilizadas

### Frontend
- **React**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React-toastify**

### Backend
- **Node.js**
- **Express**
- **JSON (simulacion de datos)**

## Instalación

1. **Clona el repositorio**

    ```bash
    https://github.com/LiamOtegui/gundo-challenges.git
    ```

2. **Cambia de carpeta**

    ```bash
    cd challenge-2
    ```

3. **Instala las dependencias para el frontend**

    Navega a la carpeta `client` y ejecuta:

    ```bash
    yarn install
    ```

4. **Instala las dependencias para el backend**

    Navega a la carpeta `api` y ejecuta:

    ```bash
    npm install
    ```

5. **Configura las variables de entorno**

    Crea un archivo `.env` en la carpeta `api` y agrega las siguientes variables:

    ```env
    PORT=your_port_env
    NODE_ENV=your_node_env
    ```

6. **Inicia el servidor**

    En la carpeta `api`, ejecuta:

    ```bash
    npm start
    ```

    Esto iniciará el servidor de desarrollo.

7. **Inicia el cliente**

    En la carpeta `client`, ejecuta:

    ```bash
    yarn dev
    ```

    Esto iniciará la aplicación React en el navegador.

## Uso

1. **Visita la aplicación** en tu navegador e ingresa como uno de los 10 usuarios ya registrados (por ejemplo user1, user2 o user3).

2. **Recibe recomendaciones** de productos basados en tus preferencias.

## Estructura del Proyecto

- **`client/`**: Contiene el frontend de la aplicación, donde los usuarios pueden ver las recomendaciones de productos.
- **`api/`**: Contiene el backend de la aplicación, que maneja las preferencias de los usuarios y proporciona recomendaciones de productos.

## Especificaciones del Algoritmo de Recomendación

- El algoritmo se centra en una preferencia de macronutrientes (por ejemplo, alto en proteínas).

## Creación de la Base de Datos Simulada

- **Productos**: Un conjunto de 35 productos con macronutrientes y especificaciones de gluten.
- **Usuarios**: Un conjunto de 10 usuarios con diversas preferencias de macronutrientes y gluten.

*Datos de ejemplo para la base de datos se encuentran en `api/data/products.json` y `api/data/users.json`.*

## Mensaje adicional
Le agradezco a Gundo por motivarme a hacer estos proyectos 💪
