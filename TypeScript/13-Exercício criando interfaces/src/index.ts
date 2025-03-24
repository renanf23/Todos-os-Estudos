interface User {
  id: number;
  login: string;
  name: string;
  bio: string;
  publicRepos: number;
  reposUrl: string;
  message?: string;
}
const users: User[] = [];

interface UserInfo {
  name: string;
  description: string;
  fork: boolean;
  star: number;
}

async function firstMenuOption(userName: string) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const user = await response.json();

  const newUser = {
    id: user.id,
    login: user.login,
    name: user.name,
    bio: user.bio,
    publicRepos: user.public_repos,
    reposUrl: user.repos_url,
    message: user.message,
  };
  userCheck(newUser);
}

function userCheck(user: User) {
  if (user.message == "Not Found") {
    console.log("não achou");
  } else {
    users.push(user);
  }
}

function findUser(name: string) {
  const user = users.find((user) => user.login === name);

  return user ?? false;
}
function promptValidUser(name: string, callbackfn: (user: User) => void) {
  const validUser = findUser(name);
  if (validUser) {
    callbackfn(validUser);
  } else {
    console.log("Usuário não encontrado retornando ao menu...");
  }
}

function secondMenuOption(name: string) {
  promptValidUser(name, async (user) => {
    const response = await fetch(user.reposUrl);
    const userInfo = await response.json();
    let list = `Repositóros de ${user.name}\n`;

    userInfo.forEach((info) => {
      list += `
        Nome: ${info.name}
        Descrição: ${info.description}
        Fork: ${info.fork}
        Stargazers: ${info.stargazers_count}
      `;
    });
    console.log(list);
  });
}

function thirdMenuOption() {
  let list = `Usuários salvos: \n`;

  users.forEach((user) => {
    list += `
    Nome: ${user.name}
    Login: ${user.login}
    ID: ${user.id}
    Repositórios: ${user.publicRepos}
    `;
  });
  return console.log(list);
}

function fourthMenuOption() {
  let count = 0;

  users.forEach((user) => {
    count += user.publicRepos;
  });
  console.log(`O número de todos os repositórios salvos é: ${count}`);
}

let rank = `O rank dos 5 usuários com mais repositórios é:\n`;

function fifthMenuOption() {
  rank = `O rank dos 5 usuários com mais repositórios é:\n`;
  users.slice().sort((a, b) => b.publicRepos - a.publicRepos);
  for (let i = 0; i < users.length; i++) {
    rank += `${i + 1} - ${users[i].name} com ${
      users[i].publicRepos
    } repositórios.\n`;
  }
  console.log(rank);
}
