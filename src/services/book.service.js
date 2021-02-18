'use strict'
import { Utils } from './utils.service.js';
import axios from 'axios'
import { DbService } from './db-service.js';

const KEY = 'books';

export const bookService = {
    query,
    get,
    remove,
    save,
    findBooks,
    getIndex
    // getEmptybook
}

async function query(filterBy) {
    var books = await DbService.query(KEY);
    if (!filterBy) return books;
    if (filterBy.title.length > 0) {
        const regex = new RegExp(filterBy.title, 'i');
        books = books.filter((book) => regex.test(book.title))

    };

    if (filterBy.minPrice || filterBy.maxPrice) {
        console.log(filterBy.minPrice, filterBy.maxPrice);
        books = books.filter((book) => book.listPrice.amount > +filterBy.minPrice && book.listPrice.amount < +filterBy.maxPrice)

    };
    return books;
}

function get(id) {
    return DbService.get(KEY, id);
}
function getIndex(id) {
    return DbService.get(KEY, id);
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(book) {
    console.log(book);
    if (book.id) return DbService.put(KEY, book);
    else return DbService.post(KEY, book)
}
async function findBooks(search) {
    try {
        let search = Utils.loadFromStorage(search)
        if (search) return search
        else {
            let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            res = res.data
            var items = res.items
            // console.log(items);
            items = items.map(item => {
                return { ...item, listPrice: { amount: Utils.getRandomInt(0, 100), currencyCode: 'ILS' }, thumbnail: item.volumeInfo.imageLinks.thumbnail }

            });

            Utils.storeToStorage('search', items)
            return items
        }
    }
    catch (err) {
        console.log(err);
    }
}

// function getEmptybook() {
//     return {
//         vendor: '',
//         speed: 0
//     }
// }

// function _createDefaultbooks() {
//     return [
//         _createbook('Audu', 50),
//         _createbook('Fiak', 73),
//         _createbook('Subali', 100),
//         _createbook('Susika', 120),
//     ];
// }

// function _createbook(vendor, speed) {
//     return {
//         vendor,
//         speed,
//     }
// }
