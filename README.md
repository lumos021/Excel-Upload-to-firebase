# Excel File Uploader and Viewer

This project is a React application that allows users to upload Excel files to a Firebase database and view the data in a sortable, filterable, and searchable table. The application uses various libraries for different functionalities.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Features

- **File Upload**: Users can upload Excel files which are then stored in a database.
- **Data Viewing**: The data from the uploaded Excel files can be viewed in a table format.
- **Data Manipulation**: The table has features for sorting, filtering, and searching through the columns.

## Libraries Used

This project uses the following libraries:

- `@emotion/react` and `@emotion/styled` for styling components.
- `@mui/material` and `@mui/x-data-grid` for UI components and data grid functionality.
- `firebase` for backend services.
- `xlsx` for parsing and manipulating Excel files.
- `typescript` for adding static type definitions and other features to JavaScript.
- `react-scripts` for a modern web development environment.
- `web-vitals` for measuring web vitals.
- `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event` for testing the application.
- `@types/jest`, `@types/node`, `@types/react`, and `@types/react-dom` for TypeScript type definitions.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).