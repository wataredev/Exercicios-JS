class Funcionario {
    constructor(nome, tipo) {
        this.nome = nome;   // Armazena o nome do funcionário
        this.tipo = tipo;   // Armazena o tipo do funcionário
    }

    // Método para exibir um avatar
    obterAvatar() {
        let avatarUrl = '';
        switch(this.tipo) {
            case 'Engenheiro':
                avatarUrl = 'icon-engenheiro.png';
                break;
            case 'Designer':
                avatarUrl = 'icon-designer.png';
                break;
            case 'Gerente':
                avatarUrl = 'icon-gerente.png';
                break;
            case 'Desenvolvedor':
                avatarUrl = 'icon-desenvolvedor.png';
                break;
        }
        return avatarUrl;  // Retorna a URL do avatar
    }

    // Método para exibir uma mensagem
    mostrarMensagem() {
        return `${this.nome} foi adicionado como ${this.tipo}! Bem-vindo a equipe!`;
    }
}

// Função principal que lida com a adição de funcionários
function adicionarFuncionario() {
    const nome = document.getElementById('name').value;
    const tipo = document.getElementById('type').value;
    const avatarDiv = document.getElementById('avatar');
    const messageDiv = document.getElementById('message'); 

    // Verifica se o nome foi inserido
    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Cria uma nova instância de Funcionario
    const novoFuncionario = new Funcionario(nome, tipo);

    // Atualiza o avatar e a mensagem
    avatarDiv.style.display = "flex";
    avatarDiv.style.backgroundImage = `url(${novoFuncionario.obterAvatar()})`;
    messageDiv.textContent = novoFuncionario.mostrarMensagem();

    // Limpa o campo de nome após adicionar
    document.getElementById('name').value = '';
}
