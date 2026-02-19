##  VideoGames Appi

Aplicación web desarrollada en Angular que permite gestionar un catálogo de videojuegos.

La aplicación consume una API externa para obtener los datos y permite realizar operaciones CRUD:


##  Ejecución del proyecto

Instalar dependencias:

```
npm install
```

Ejecutar la aplicación:
bash
```
ng serve
```

Abrir en el navegador:
```
http://localhost:4200
```

## Funcionalidades
- Añadir juegos

- Editar juegos

- Eliminar juegos

- Ver detalle de cada juego

## Tecnologías utilizadas

- Angular

- TypeScript

- HTML / CSS

- HttpClient (consumo de API REST)


Navegación entre páginas mediante rutas
bash 
```

proyecto-Api/
│
├── src/
│   ├── app/
│   │
│   │   ├── components/
│   │   │   ├── add-game/
│   │   │   │   ├── add-game.css
│   │   │   │   ├── add-game.html
│   │   │   │   ├── add-game.spec.ts
│   │   │   │   └── add-game.ts
│   │   │   │
│   │   │   ├── edit-game/
│   │   │   │   ├── edit-game.css
│   │   │   │   ├── edit-game.html
│   │   │   │   ├── edit-game.spec.ts
│   │   │   │   └── edit-game.ts
│   │   │   │
│   │   │   ├── game-detail/
│   │   │   │   ├── game-detail.css
│   │   │   │   ├── game-detail.html
│   │   │   │   ├── game-detail.spec.ts
│   │   │   │   └── game-detail.ts
│   │   │   │
│   │   │   ├── game-list/
│   │   │   │   ├── game-list.css
│   │   │   │   ├── game-list.html
│   │   │   │   ├── game-list.spec.ts
│   │   │   │   └── game-list.ts
│   │   │   │
│   │   │   └── menu/
│   │   │       ├── menu.html
│   │   │       ├── menu.spec.ts
│   │   │       └── menu.ts
│   │
│   │   ├── pages/
│   │   │   ├── add/
│   │   │   │   ├── add.css
│   │   │   │   ├── add.html
│   │   │   │   ├── add.spec.ts
│   │   │   │   └── add.ts
│   │   │   │
│   │   │   ├── detail/
│   │   │   │   ├── detail.css
│   │   │   │   ├── detail.html
│   │   │   │   ├── detail.spec.ts
│   │   │   │   └── detail.ts
│   │   │   │
│   │   │   └── main/
│   │   │       ├── main.css
│   │   │       ├── main.html
│   │   │       ├── main.spec.ts
│   │   │       └── main.ts
│   │
│   │   ├── services/
│   │   │   └── games-service.ts
│   │
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css


```
## API

La aplicación utiliza una API REST externa para gestionar los videojuegos.

Ejemplo de endpoints:

- GET /games → Obtener todos los juegos

- GET /games/{id} → Obtener juego por ID

 POST /games → Crear juego

- PUT /games/{id} → Actualizar juego

- DELETE /games/{id} → Eliminar juego








