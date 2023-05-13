const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//name no esta definido como una clase
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`);// await debe emplearse con funciones asincronas-------se cambia el nombre de la variable response por data
  console.log(`${usersEndpoint}/${username}`);//lo ponemos para ver que si este añadiendo bien la ruta
  console.log(data);
  //se cambian las comillas simples para que reciba ${}
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //n no estaba definido
}


displayUser('stolinski').catch(handleError);