const styledConsole = (message, colorCode) => {
  console.log(`%c ${message}`, `background: #222; color: #bada55; ${colorCode}`);
}

export {
  styledConsole
};