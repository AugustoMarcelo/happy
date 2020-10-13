<h1 align="center">
  <img alt="Happy" src="https://res.cloudinary.com/augustomarcelo/image/upload/v1602521339/happy-logo_l827ol.svg" />
  <br />
  3rd Next Level Week
</h1>

<p align="center">
  <a href="#gear-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-how-to-run">How to run</a>
</p>

![App Screenshot](https://res.cloudinary.com/augustomarcelo/image/upload/v1602522373/happy-preview_urxxxc.png)

## :gear: Technologies

This project was developed during Next Level Week #3 with the following technologies:

- **Back-end**
  - [cors](https://github.com/expressjs/cors)
  - [dotenv](https://github.com/motdotla/dotenv)
  - [express](https://expressjs.com/pt-br/)
  - [express-async-errors](https://github.com/davidbanham/express-async-errors)
  - [multer](https://github.com/expressjs/multer)
  - [sqlite3](https://www.sqlite.org/index.html)
  - [typeorm](https://typeorm.io/)
  - [yup](https://github.com/jquense/yup)

- **Front-end**
  - [ReactJS](https://reactjs.org/)
  - [Typescript][ts]
  - [react-router-dom](https://github.com/ReactTraining/react-router)
  - [styled-components](https://www.styled-components.com/)
  - [react-icons](https://react-icons.github.io/react-icons/)
  - [leaflet](https://leafletjs.com/)
  - [react-leaflet](https://react-leaflet.js.org/)

## :computer: How to run

  ```bash
    # clone repository
    git clone https://github.com/AugustoMarcelo/happy.git

    # enter web folder
    cd web

    # download dependencies
    yarn

    # running web project
    yarn start

    ---

    # enter backend folder
    cd backend

    # download dependencies
    yarn

    # run migrations to create tables
    yarn typeorm migration:run

    # running backend
    yarn dev
  ```

---

[ts]: https://www.typescriptlang.org
[vscode]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint