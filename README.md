# Contract list

Contract list web app based on ReactJS (create-react-app)

## Requirements

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/)

# How to run (backend)

1. Clone the repo

```sh
git clone https://github.com/mesaquen/contract-list.git
```

2. Install the backend dependenciese

```sh
# at /contract-list/contract-list-bff directory
yarn install
```

3. Start the server

```sh
yarn start
```

The application backend is made available at **http://localhost:3001**

# How to run (frontend)

1. Install the frontend dependenciese

```sh
# at /contract-list/contract-list-bff directory
yarn install
```

2. Start the server

```sh
yarn start
```

The application frontend is made available at **http://localhost:3000**

## Running the tests

```
yarn test
```

## TODO

- [ ] Implement virtualized listing for better handling of large lists
- [ ] SnackbarController for handling multiple calls to Snackbar
