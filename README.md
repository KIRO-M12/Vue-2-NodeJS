# Vue 3 + Node.js Project Setup

This README provides a comprehensive guide for setting up, managing, and troubleshooting your Vue 3 and Node.js project. Follow these steps to ensure a smooth development process.

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
cd vue-3-nodejs
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
     npm install webpack-dev-middleware@5.3.3 --save-dev
     ```

---

## **Development Commands**

### Run the Development Server
```bash
npm run dev
```
- Starts the Vue.js development server.
- Access the app in the browser: `http://localhost:5173` (default Vite port).

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

### Preview the Build
```bash
npm run preview
```
- Serve the production build locally.

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
  npm install vue-loader@17.0.0 --save-dev
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
    "express": "^4.21.2",
    "cors": "^2.8.5",
    "vue": "^3.2.47"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "eslint": "^8.50.0",
    "vite": "^4.4.0"
  }
  ```

### Updating Webpack (Optional for Legacy Builds)
1. For Webpack 4:
   ```bash
   npm install webpack@4.47.0 --save-dev
   ```
2. For Webpack 5:
   ```bash
   npm install webpack@5.97.1 --save-dev
   ```

---

## **Next Steps**

1. Set up CI/CD pipelines for deployment.
2. Integrate unit testing with Jest or Vitest.
3. Optimize production builds with additional Vite plugins.
4. Document custom configurations for future maintainers.

---

### **Changelog**
- Initial setup with Vue 3 and Node.js.
- Dependencies updated for security and compatibility.
- Configured ESLint and Vite.

---

### **Contributors**
- **KIRO-M12** - Project Owner/Developer.

For questions or issues, feel free to contact via [GitHub Issues](<repository_url>/issues).

