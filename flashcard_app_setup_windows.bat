
@echo off
REM Backend Environment Setup

REM Install Node.js
REM Make sure Node.js is installed on your system by visiting: https://nodejs.org/

REM Initialize Your Node.js Project
mkdir my-flashcard-app-backend
cd my-flashcard-app-backend
npm init -y

REM Install Express and TypeScript
npm install express
npm install -g typescript
tsc --init

REM Install ESLint and Prettier for Linting and Formatting
npm install eslint --save-dev
npm install prettier --save-dev
REM Optionally setup ESLint and Prettier configurations

REM Install Passport.js for Authentication
npm install passport

REM Install Joi for Data Validation (or Yup if preferred)
npm install @hapi/joi
REM or
REM npm install yup

cd ..

REM Frontend Environment Setup

REM Create React App with TypeScript Template
npx create-react-app my-flashcard-app-frontend --template typescript
cd my-flashcard-app-frontend

REM Install Redux for State Management (Optional for MVP)
npm install redux react-redux

REM Install Styled-Components for Styling
npm install styled-components

REM Note: TypeScript is already included with the Create React App TypeScript template

cd ..

REM Pause the batch file to view any messages
pause
