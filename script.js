function pegarValor() {
    return myInput.value;
  }

  const createButton = (text, callback) => {
    const button = document.createElement("span");
    button.textContent = text;
    button.addEventListener("click", callback);
    return button;
  };
  
  function criarElementoLI(texto) {
    const liElemento = document.createElement("li");
    liElemento.textContent = texto;
  
    const checkButton = createButton("✔", () =>
      liElemento.classList.toggle("check")
    );
  
    liElemento.appendChild(checkButton);
  
    return liElemento;
  }
  
  function limparInput() {
    document.getElementById("myInput").value = "";
  }
  
  function novoItem() {
    const valorInput = pegarValor();
  
    if (valorInput.trim() !== "") {
      const liElemento = criarElementoLI(valorInput);
      document.getElementById("myUL").appendChild(liElemento);
      limparInput();
    } else {
      alert("Digite um valor antes de adicionar à lista.");
    }
  }
  

