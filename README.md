# Rooch Dapp Template with React.js 18+, Tailwind CSS 3, TypeScript, DaisyUI, and Rooch-Sdk

<p align="center">
  <a href="https://rooch.network"><img src="https://rooch.network/logo/rooch_black_combine.svg" alt="Rooch banner"></a>
</p>

🚀 This is a Rooch Dapp template built with React.js, Tailwind CSS, TypeScript, and DaisyUI. Our template focuses on providing an excellent developer experience, integrating the latest technologies and tools, including crucial Rooch-related libraries (@roochnetwork/rooch-sdk, @roochnetwork/rooch-sdk-kit). It empowers developers to swiftly construct powerful Rooch Dapps.

### Getting Started

> You can directly use this template on GitHub by clicking the "Use this template" button.

Clone this template and kickstart your Rooch Dapp development:

```
git clone https://github.com/nlyrthiia/Rooch-Dapp-Template.git your-project-name
cd your-project-name
npm install
npm run dev
```

Visit http://localhost:5173 to embark on your development journey.

### Features

- 🔥 Powered by the latest [React.js](https://react.dev) for static site generation
- 🎨 Selective use of [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com) for flexible UI design
- 💅 Optimized style processing: PostCSS, integrated with `styled-jsx`
- 🚀 Enhanced development experience: Integration with [Rooch-SDK](https://github.com/rooch-network/rooch/tree/main/sdk/typescript/rooch-sdk) for rapid integration of Rooch features
- 🎉 Type checking with [TypeScript](https://www.typescriptlang.org)
- ✅ Strict mode for TypeScript and React 18
- ✏️ Code linting and formatting: ESLint and [Prettier](https://prettier.io)
- 🦊 Git workflow enhancements: Husky and Lint-staged
- 🗂 Comprehensive development tooling: VSCode, Netlify, PostCSS, ESLint, Prettier, TypeScript
- 🖱️ Easy deployment: Supports one-click deployment to Vercel and Netlify

### Core Advantages

- ☕ Automatic minification of HTML & CSS for improved performance
- 💨 Rapid live reload for increased development efficiency
- ✅ Intelligent cache management for content freshness
- 🌐 Built-in Rooch-Sdk-Kit for simplified Dapp development

### Development Philosophy

- Minimalistic code design, focusing on Dapp business logic
- Optimized SEO performance for increased discoverability
- 🚀 Production-ready environment, ensuring reliability and efficiency

### Components

Our template includes the following components for your convenience:

- WalletConnect
- Navbar
- Banner
- Footer
- Meta
- More components Roochable in our [Components](https://github.com/nlyrthiia/Rooch-Dapp-Template/tree/main/src/components/).

### Requirements

- Node.js and npm

### Customization and Configuration

Easily customize based on your requirements:

- `src/styles/index.css`: Your Tailwind CSS customized CSS file
- `utils/AppConfig.ts`: Template configuration file
- `src/pages/App.tsx`: Customize the homepage
- `src/components/*` and `src/layout/*`: Component and template layers
- `src/*`: Atomic components supporting component blocks

### Deployment

One-click production-ready build:

```
npm run build
npm run start
```

### Directory Structure

```
.
├── README.md            # README file, contains the project description and usage guidelines.
├── next.config.js       # React.js configuration file
├── public               # Public folder for static files.
│   └── assets
│       └── images       # Image files
├── src                  # Pages folder for React.js, holds the application's pages
│   ├── layout           # Layout component, builds the basic layout of the page
│   ├── utils            # Utilities folder, contains helper functions and tools
│   ├── styles           # PostCSS styles folder, using Tailwind CSS
│   ├── components       # Components folder, contains reusable UI components.
├── tailwind.config.js   # The Tailwind CSS configuration file
└── tsconfig.json        # TypeScript configuration file
```

### Open Source Contributions

We welcome and encourage community contributions to this project. If you encounter issues or have good suggestions, feel free to open an issue.

🌟 Created a Rooch project using our template? We're excited to share your work with the global Rooch community! Simply email us your project name and GitHub link, and we'll feature your project in our README and on Discord. This is a great opportunity to increase your project's visibility and join our vibrant Rooch community!
