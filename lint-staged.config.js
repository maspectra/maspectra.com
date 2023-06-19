module.exports = {
  "*.{js,ts,tsx}": (files) => {
    return files.map((file) =>
      file === __filename
        ? 'echo "Skip lint-staged.config.js"'
        : `pnpm eslint --fix ${file}`
    );
  },
  "*.md": (files) => {
    return files.map((file) => `pnpm prettier --write ${file}`);
  }
};
