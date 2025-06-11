
document.getElementById("form-entregador").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const nome = inputs[0].value;
  const veiculo = inputs[1].value;
  const li = document.createElement("li");
  li.textContent = nome + " - " + veiculo;
  document.getElementById("lista-entregadores").appendChild(li);
  this.reset();
});

document.getElementById("form-rota").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const destino = inputs[0].value;
  const status = inputs[1].value;
  const li = document.createElement("li");
  li.textContent = "Destino: " + destino + " | Status: " + status;
  document.getElementById("lista-rotas").appendChild(li);
  this.reset();
});

function simularLocalizacao() {
  const local = ["Centro", "Zona Norte", "Zona Sul", "Depósito", "Em trânsito"];
  const aleatorio = local[Math.floor(Math.random() * local.length)];
  document.getElementById("localizacao").textContent = aleatorio;
}

function gerarRelatorio() {
  const entregadores = Array.from(document.querySelectorAll("#lista-entregadores li")).map(li => li.textContent);
  const rotas = Array.from(document.querySelectorAll("#lista-rotas li")).map(li => li.textContent);
  const texto = "Entregadores:\n" + entregadores.join("\n") + "\n\nRotas:\n" + rotas.join("\n");
  document.getElementById("relatorio-output").textContent = texto;
}
