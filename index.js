const prompt = require('prompt-sync')();

const { addBook, removeBook, listBooks, updateBook } = require('./books');

while (true) {
    console.log('\n*** BIBLIOTECA ***');
    console.log('1. Adicionar livro');
    console.log('2. Remover livro');
    console.log('3. Listar todos os livros');
    console.log('4. Atualizar informações de um livro');
    console.log('5. Sair');

    const option = parseInt(prompt('Escolha uma opção: '));

    switch (option) {
        case 1:
            addBook();
            break;
        case 2:
            removeBook();
            break;
        case 3:
            listBooks();
            break;
        case 4:
            updateBook();
            break;
        case 5:
            console.log('Saindo...');
            process.exit(0);
        default:
            console.log('Opção inválida.');
    }
}
