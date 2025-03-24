function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada");
    setTimeout(() => {
      console.log("Resolvendo a promise");
      resolve("Resultado");
    }, 1000);
  });
}

setTimeout(() => {
  console.log(p);
}, 2000);

const p = execute();

console.log(p);
