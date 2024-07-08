const prompt = require('prompt-sync')();

// Array para armazenar os livros
let books = [];

// Função para adicionar um livro
const addBook = () => {
    console.log('\nAdicionar novo livro:');
    const name = prompt('Nome do livro: ');
    const author = prompt('Autor do livro: ');
    const pages = parseInt(prompt('Número de páginas: '));
    const genre = prompt('Gênero do livro (separado por vírgulas): ').split(',').map(genre => genre.trim());

    const newBook = {
        name: name,
        author: author,
        pages: pages,
        genre: genre
    };

    books.push(newBook);
    console.log('Livro adicionado com sucesso!');
};

// Função para remover um livro
const removeBook = () => {
    console.log('\nRemover um livro:');
    const name = prompt('Nome do livro a ser removido: ');

    const index = books.findIndex(book => book.name === name);
    if (index !== -1) {
        books.splice(index, 1);
        console.log('Livro removido com sucesso!');
    } else {
        console.log('Livro não encontrado.');
    }
};

// Função para listar todos os livros
const listBooks = () => {
    console.log('\nLista de Livros:');
    books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.name} - ${book.author} (${book.pages} páginas) - Gênero: ${book.genre.join(', ')}`);
    });
};

// Função para atualizar um livro
const updateBook = () => {
    console.log('\nAtualizar informações de um livro:');
    const name = prompt('Nome do livro a ser atualizado: ');

    const index = books.findIndex(book => book.name === name);
    if (index !== -1) {
        const property = prompt('O que deseja atualizar (nome, autor, páginas, gênero)? ');
        switch (property) {
            case 'nome':
                books[index].name = prompt('Novo nome: ');
                break;
            case 'autor':
                books[index].author = prompt('Novo autor: ');
                break;
            case 'páginas':
                books[index].pages = parseInt(prompt('Novo número de páginas: '));
                break;
            case 'gênero':
                books[index].genre = prompt('Novo gênero (separado por vírgulas): ').split(',').map(genre => genre.trim());
                break;
            default:
                console.log('Propriedade inválida.');
                return;
        }
        console.log('Livro atualizado com sucesso!');
    } else {
        console.log('Livro não encontrado.');
    }
};

module.exports = {
    addBook,
    removeBook,
    listBooks,
    updateBook
};
