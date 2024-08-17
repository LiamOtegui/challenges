
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
    git clone https://github.com/tu-usuario/gundo-app.git
    ```

2. **Instala las dependencias para el frontend**

    Navega a la carpeta `client` y ejecuta:

    ```bash
    cd client
    yarn install
    ```

3. **Instala las dependencias para el backend**

    Navega a la carpeta `api` y ejecuta:

    ```bash
    cd api
    npm install
    ```

4. **Configura las variables de entorno**

    Crea un archivo `.env` en la carpeta `api` y agrega las siguientes variables:

    *(lo envie a su e-mail)*
    
    ```env
    MONGO_URL=your_mongodb_env
    PORT=your_port_env
    NODE_ENV=your_node_env
    ```

5. **Inicia el servidor**

    En la carpeta `api`, ejecuta:

    ```bash
    npm start
    ```

    Esto iniciará el servidor de desarrollo con Nodemon.

6. **Inicia el cliente**

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

## Mensaje adicional
Le agradezco a Gundo por motivarme a hacer este proyecto 💪
