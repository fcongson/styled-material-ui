# jarden-material-ui

[Material-UI](https://material-ui.com/) React Components wrapped in [Jarden](https://www.jarden.co.nz/) styles.

## Concept

This project is a proof of concept for building reusable React Components from existing [Material-UI](https://material-ui.com/) React Components wrapped in custome styles.

## Structure

Each reusable React Component will live in its own directory:

```
src
└── components
    └── CountrySelect
        ├── CountrySelect.stories.tsx
        ├── CountrySelect.test.tsx
        ├── CountrySelect.tsx
        └── __snapshots__
            └── CountrySelect.test.tsx.snap
```

Component directories include the Component (`Component.tsx`), unit tests (`Component.test.tsx`), test snapshots (`Component.test.tsx.snap`), and stories (`Component.stories.tsx`).

## Components

Components are built using React and Typescript to wrap [Material-UI](https://material-ui.com/) React Components.

## Testing

[Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) are used to test each component. Snapshots are created to detect breakages.

## Stories

[Storybook](https://storybook.js.org/) is used as a development environment for component testing. It also provides documentation on component usage.
