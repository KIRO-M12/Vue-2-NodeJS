# Vue 3 + Node.js Project Setup

This README provides a comprehensive guide for setting up, managing, and troubleshooting your Vue 2 and Node.js project. Follow these steps to ensure a smooth development process.

---

## **Prerequisites**

1. **Install Node.js:**
   - Install Node.js (recommended: v16 LTS) from [Node.js downloads](https://nodejs.org/).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Install Git:**
   - Download and install Git from [Git downloads](https://git-scm.com/).
   - Verify installation:
     ```bash
     git --version
     ```

3. **Install a Package Manager:**
   - Use `npm` (default with Node.js) or `yarn`:
     ```bash
     npm install -g yarn
     ```

4. **Install a Version Manager (Optional):**
   - For Node.js version control, use:
     - **`nvm` for Unix-based systems:** [nvm](https://github.com/nvm-sh/nvm).
     - **`nvm-windows` for Windows:** [nvm-windows](https://github.com/coreybutler/nvm-windows).

---

## **Project Setup**

### 1. Clone the Repository
```bash
git clone <repository_url>
cd vue-2-nodejs
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Fix Compatibility Issues
#### Update Vulnerable Packages
1. Audit dependencies:
   ```bash
   npm audit fix
   ```
2. If critical vulnerabilities persist, run:
   ```bash
   npm audit fix --force
   ```
#### Resolve Webpack Compatibility:
   - Ensure `webpack-dev-middleware` matches your `webpack` version.
   - For Webpack 4:
     ```bash
     npm install webpack-dev-middleware@3.7.3 --save-dev
     ```
   - For Webpack 5:
     ```bash
     npm install webpack-dev-middleware@7.4.2 --save-dev
     ```

---

## **Development Commands**

### Run the Development Server
```bash
npm run serve
```
- Starts the Vue.js development server.
- Access the app in the browser: `http://localhost:8080`

### Lint Your Code
```bash
npm run lint
```
- Fix common issues:
  ```bash
  npm run lint -- --fix
  ```

### Build for Production
```bash
npm run build
```
- Bundles the app for deployment in the `/dist` directory.

---

## **Common Issues & Fixes**

### **1. Dependency Errors (ERESOLVE)**
- Use `--legacy-peer-deps` to resolve conflicts:
  ```bash
  npm install --legacy-peer-deps
  ```

### **2. Webpack Loader Errors**
- If `NormalModule` errors occur, ensure compatible loaders:
  ```bash
  npm install vue-loader@16.8.3 --save-dev
  ```

### **3. Node.js Version Compatibility**
- Downgrade Node.js if needed using `nvm`:
  ```bash
  nvm install 16
  nvm use 16
  ```

---

## **Advanced Configuration**

### Customizing `package.json`
- Review and remove duplicate dependencies.
- Ensure consistent versions for `@vue` and `webpack` packages.
- Example:
  ```json
  "dependencies": {
    "axios": "^1.7.9",
    "cors": "^2.8.5",
    "express": "^4.21.2"
  },
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@vue/cli-plugin-babel": "^4.5.19",
    "@vue/cli-plugin-eslint": "^4.5.19",
    "@vue/cli-service": "^4.5.19",
    "eslint": "^6.8.0",
    "vue": "^2.6.14",
    "vue-template-compiler": "^2.6.14"
  }
  ```

### Updating Webpack
1. For Webpack 4:
   ```bash
   npm install webpack@4.47.0 --save-dev
   ```
2. For Webpack 5:
   ```bash
   npm install webpack@5.97.1 --save-dev
   ```

### Fixing ESLint Version Conflicts
- Upgrade ESLint for compatibility:
  ```bash
  npm install eslint@7.32.0 --save-dev
  ```
- Adjust `eslint` rules in `.eslintrc.js`.

---

## **Next Steps**

1. Set up CI/CD pipelines for deployment.
2. Integrate unit testing with Jest or Mocha.
3. Optimize production builds with additional Webpack plugins.
4. Document custom configurations for future maintainers.

---

### **Changelog**
- Initial setup with Vue 2 and Node.js.
- Dependencies updated for security and compatibility.
- Configured Webpack and ESLint.

---

### **Contributors**
- **KIRO-M12** - Project Owner/Developer.

For questions or issues, feel free to contact via [GitHub Issues](<repository_url>/issues).

