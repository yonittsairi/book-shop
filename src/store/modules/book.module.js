import { bookService } from '../../services/book.service';
export default {
    state: {
        books: null,
        filterBy: null,
        selectedbook: null
    },
    getters: {
        booksToShow(state) {
            const { books } = state;
            if (!state.filterBy) return books;
            const regex = new RegExp(state.filterBy.txt, 'i');
            const booksToShow = books.filter((book) => regex.test(book.vendor));
            return booksToShow;
        },
        selectedbook(state) {
            return state.selectedbook
        }
    },
    mutations: {
        setBooks(state, payload) {
            // console.log('asaa2');

            state.books = payload.books
        },
        setFilter(state, { filterBy }) {
            console.log(filterBy);
            state.filterBy = filterBy
        },
        removeBook(state, { bookId }) {
            const idx = state.books.findIndex(book => book.id === bookId)
            state.books.splice(idx, 1)
        },
        saveBook(state, { book }) {
            const idx = state.books.findIndex(currbook => currbook.id === book.id)
            if (idx === -1) state.books.push(book)
            else state.books.splice(idx, 1, book)
        },
        setSelectedBook(state, { book }) {
            state.selectedbook = book
        }
    },
    actions: {
        async loadBooks(context, { filterBy }) {
            console.log('asaa1', filterBy);
            const books = await bookService.query(filterBy)
            context.commit({ type: 'setBooks', books })
        },
        async removeBook(context, { bookId }) {
            try {
                await bookService.remove(bookId)
                context.commit({ type: 'removeBook', bookId })
            } catch (err) {
                context.dispatch({ type: 'setMsg', msgStr: 'something went wrong' })
                console.log(err);
            }
        },
        async saveBook({ commit }, { book }) {
            const savedbook = await bookService.save(book)
            commit({ type: 'saveBook', book: savedbook })
        },
        async getbookById(context, { bookId }) {
            const book = await bookService.get(bookId)
            context.commit({ type: 'setSelectedBook', book })
        }
    },
}