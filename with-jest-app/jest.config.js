const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Chemin du projet Next.js
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Charge la config Jest
  testEnvironment: "jsdom", // Définit l'environnement de test pour React

  // Définition des fichiers de test à inclure
  testMatch: [
    "<rootDir>/with-jest-app/tests/**/*.[jt]s?(x)", // Recherche les tests dans le répertoire `with-jest-app/tests`
    "<rootDir>/__tests__/**/*.[jt]s?(x)", // Inclut les tests dans `__tests__/`
    "**/?(*.)+(spec|test).[tj]s?(x)", // Correspondance pour les fichiers `.test.tsx` et `.spec.tsx`
  ],

  // Ignore les fichiers inutiles
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  // Extensions supportées
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],

  // Ajout des alias de modules (optionnel si tu utilises `tsconfig.json`)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Si tu utilises des alias dans Next.js
  },

  // Transformation des fichiers TypeScript et JavaScript
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },

  // Ajout des mocks pour éviter les erreurs sur les fichiers statiques
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Augmente le timeout des tests pour éviter des erreurs sur CircleCI
  testTimeout: 30000,
};

// Export du fichier Jest config
module.exports = createJestConfig(customJestConfig);
