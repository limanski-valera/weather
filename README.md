# Weather App

Project Deployment: https://limanski-valera.github.io/weather/

# App Description

Single page app with 3 days weather forecast with city selection. The application works with free weather API "https://openweathermap.org/api" and gives the opportunity to learn the weather for 3 cities of Ukraine - Kiev, Dnipro and Donetsk, added search by city.

### What I used to create the project

The application is built in Vue to work with components. 
Since the application is written in the composition style, the Pinia state manager was chosen to store the application state.
I used Axios library to work with the weather API "https://openweathermap.org/api".
As a UI library I chose https://www.shadcn-vue.com/
The library https://tailwindui.com/ was used to speed up the layout

### Project Features

The background of the app changes depending on the current weather. 
The application is adapted for all screen sizes.
The data is automatically changed when you select a city.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
