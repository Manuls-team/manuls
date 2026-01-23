# Manuls

A modern, responsive web application built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for fast development
- **Tailwind CSS v4**: Utilizing the latest Tailwind CSS for styling
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Team Showcase**: Meet the team section with real LinkedIn profile pictures
- **Contact Form**: Professional contact form with gradient styling
- **Service Highlights**: Showcase your services with timeline layouts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

Follow these steps to get the project up and running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/Manuls-team/manuls.git
cd manuls
```

### 2. Install dependencies

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

### 3. Start the development server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start and be available at `http://localhost:5173` (or another port if 5173 is already in use).

## 📜 GH page

https://manuls-team.github.io/manuls

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module replacement (HMR).

### `npm run build`

Builds the app for production to the `dist` folder.

- Compiles TypeScript
- Optimizes the build for best performance
- Minifies the code

### `npm run preview`

Locally preview the production build before deploying.

### `npm run lint`

Runs ESLint to check for code quality issues.

## 🏗️ Project Structure

```
manuls/
├── src/
│   ├── assets/
│   │   └── avatars/          # Team member profile pictures
│   ├── components/
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Hero.tsx          # Hero section
│   │   ├── MeetTeam.tsx      # Team showcase
│   │   ├── Navigation.tsx    # Navigation bar
│   │   ├── WhatWeUse.tsx     # Technologies section
│   │   ├── WhyManuls.tsx     # Services/features section
│   │   └── icons/            # SVG icon components
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles & Tailwind config
│   └── main.tsx              # Application entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 🎨 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **ESLint** - Code linting

## 🚢 Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to be deployed to your hosting service.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

The production build can be deployed to any static hosting service:

- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **AWS S3**
- **Azure Static Web Apps**

## 👥 Team

The project showcases team members with their LinkedIn profile pictures stored locally in `src/assets/avatars/`.

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or contributions, please contact the team.

---

Built with ❤️ by the Manuls team
