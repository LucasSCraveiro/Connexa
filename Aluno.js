class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    // Método para exibir informações do aluno
    exibirInformacoes() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`;
    }

    //Getters
    
    getNome() {
        return this.nome;
    }
    
    getIdade() {
        return this.idade;
    }
    
    getCurso() {
        return this.curso;
    }
    
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    
    setIdade(idade) {
        this.idade = idade;
    }
    
    setCurso(curso) {
        this.curso = curso;
    }
}
