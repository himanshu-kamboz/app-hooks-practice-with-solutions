# Counter App

A small React + Vite application that lets users increment and decrement a counter value with simple button controls.

## Overview

This project is a beginner-friendly practice app built to demonstrate:

- React state management
- simple UI interactions
- Vite as the frontend tooling setup
- basic counter logic with min/max boundaries

The app keeps the counter in a range from 0 to 20, so it cannot go below zero or above twenty.

## Features

- Add button to increase the counter
- Remove button to decrease the counter
- Minimum value is locked at 0
- Maximum value is locked at 20
- Clean single-page interface using React

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS for styling

## Project Structure

```text
counter-app/
├── index.html
├── package.json
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       ├── hero.png
│       ├── react.svg
│       └── vite.svg
├── eslint.config.js
├── .gitignore
├── package-lock.json
└── README.md
```

## How it works

The app uses React's `useState` hook to store the current counter value. The `addValue` and `removeValue` functions update the value while enforcing these rules:

- `counter + 1` only runs when the value is below 20
- `counter - 1` only runs when the value is above 0

## Notes

This is a simple app intended for learning and practice. It does not include persistent storage or backend integration; it is purely a front-end interaction demo.
