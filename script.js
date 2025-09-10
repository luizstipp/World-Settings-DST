// Seleciona elementos do HTML
const tipoA = document.getElementById("tipoA");
const tipoB = document.getElementById("tipoB");
const nivel1 = document.getElementById("nivel1");
const nivel2 = document.getElementById("nivel2");
const imagemCentral = document.getElementById("imagemCentral");

// Variável para guardar o tipo atual (A ou B)
let tipoAtual = "A";

// Função para atualizar a imagem
function atualizarImagem() {
    // Lê os valores atuais das barras
    const n1 = nivel1.value;
    const n2 = nivel2.value;

    // Monta o caminho da imagem
    const caminho = `img/${tipoAtual}-${n1}-${n2}.png`;

    // Atualiza a imagem central
    imagemCentral.src = caminho;
}

// Funções para trocar tipo
tipoA.addEventListener("click", () => {
    tipoAtual = "A";
    tipoA.classList.add("active");
    tipoB.classList.remove("active");
    atualizarImagem();
});

tipoB.addEventListener("click", () => {
    tipoAtual = "B";
    tipoB.classList.add("active");
    tipoA.classList.remove("active");
    atualizarImagem();
});

// Atualiza a imagem sempre que o usuário muda algum scrollbar
nivel1.addEventListener("input", atualizarImagem);
nivel2.addEventListener("input", atualizarImagem);

// Inicializa a imagem
atualizarImagem();
