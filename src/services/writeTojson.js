const dbJSON = require('../services/db.json')
var fs = require('fs')
// const dbService = require('./db.service')
// const userService = require('../api/user/user.service')

import { Utils } from './utils.service';

function doit() {
    console.log('ttt');
    fs.readFile('./db.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data); //now it an object
            obj.obj.forEach(element => {
                element.authors = ["Tina", "Ryan", "Lacy", "Nina"]
                let num = Utils.getRandomInt()
                element.listPrice = { amount: num, currencyCode: "ILS", isOnSale: true }

            });


            //add some data
            var json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('./db.json', json, 'utf8', function (err) { console.log(err); }); // write it back 
        }
    })
}
// const produceService = {
//     async add(produce) {
//         // const collection = await dbService.getCollection('produce')
//         await collection.insertOne(produce)
//         return produce
//     }
// }
// const recipeService = {
//     async add(recepie) {
//         // const collection = await dbService.getCollection('recepie')
//         await collection.insertOne(recepie)
//         return recepie
//     }
// }


// userMap: localId  ===> miniUserFromDB
// userMap: 'u101'  ===> {_id: 'xx12jhjkka22', fullName: 'Mashu', imgUrl: ''}

// async function go() {
//     const userMap = await saveUsers()
//     const produceMap = await saveProduces()
//     // console.log('userMap', userMap)
//     // console.log('produceMap', produceMap)
//     const saved = await saveRecipes(userMap, produceMap)
//     console.log('Saved', saved[0])
// }

// async function saveUsers() {
//     console.log('Importing ', dbJSON.workers.length, 'Users')
//     const localUserIds = []
//     const prms = dbJSON.workers.map((workers) => {
//         workers.leadSrc = "website"
//     })
//     console.log(prms);
//     //     const localUserId = workers.id
//     //     localUserIds.push(localUserId)
//     //     delete user._id
//     //     return userService.add(user)
//     // })

//     // return Promise.all(prms)
//     //     .then((users) => {
//     //         const userMap = users.reduce((accUserMap, savedUser, idx) => {
//     //             const miniUser = {
//     //                 _id: savedUser._id.toString(),
//     //                 fullname: savedUser.fullname,
//     //                 imgUrl: savedUser.imgUrl
//     //             }
//     //             accUserMap[localUserIds[idx]] = miniUser
//     //             return accUserMap
//     //         }, {})
//     //         return userMap
//     //     })
// }
// async function saveProduces() {
//     console.log('Importing ', dbJSON.produce.length, 'Produces')
//     const localProduceIds = []
//     const prms = dbJSON.produce.map((produce) => {
//         const localProduceId = produce._id
//         localProduceIds.push(localProduceId)
//         delete produce._id
//         return produceService.add(produce)
//     })

//     return Promise.all(prms)
//         .then((produces) => {
//             const produceMap = produces.reduce((accProduceMap, savedProduce, idx) => {
//                 const miniProduce = {
//                     _id: savedProduce._id.toString(),
//                     name: savedProduce.name,
//                     imgUrl: savedProduce.imgUrl
//                 }
//                 accProduceMap[localProduceIds[idx]] = miniProduce
//                 return accProduceMap
//             }, {})
//             return produceMap
//         })
// }


// function saveRecipes(userMap, produceMap) {
//     console.log('Importing ', dbJSON.recipe.length, 'Recipes!')
//     const prms = dbJSON.recipe.map(recipe => {
//         delete recipe._id
//         recipe.createdBy = userMap[recipe.createdBy._id]
//         recipe.makers = recipe.makers.map(maker => userMap[maker._id])
//         recipe.likers = recipe.likers.map(liker => userMap[liker._id])
//         recipe.reviews = recipe.reviews.map(review => ({ ...review, by: userMap[review.by._id] }))
//         recipe.ingredients = recipe.ingredients.map(ingredient => {
//             const produce = produceMap[ingredient.produceId]
//             const res = { ...ingredient, ...produce }
//             // console.log('produce is: ', produce)
//             if (produce) res.produceId = produce._id
//             else console.log('ERROR produce not found', ingredient)
//             delete res._id
//             return res
//         })
//         return recipeService.add(recipe)
//     })
//     return Promise.all(prms)
// }

module.exports = {
    doit
}


{
    [
        {
            "kind": "books#volume",
            "id": "DNl1DwAAQBAJ",
            "etag": "qr+eYPVKif0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/DNl1DwAAQBAJ",
            "volumeInfo": {
                "title": "Quilting 101",
                "subtitle": "Master Basic Skills and Techniques Easily through Step-by-Step Instruction",
                "authors": [
                    "Editors of Creative Publishing international"
                ],
                "publisher": "Quarry Books",
                "publishedDate": "2018-08-21",
                "description": "Written with the absolute beginner in mind, Quilting 101 teaches all the basics for machine quilting with step-by-step instructions and photographs. Quilting 101 will teach you quilting skills through engaging projects, beginning with easy designs for early success and moving on to progressively more difficult patterns as you master the techniques. New skills are explored in depth as they are introduced. The most comprehensive beginner’s book available, Quilting 101 begins with an introductory section covering all the basics of quilting: choosing fabric, quick cutting techniques, sewing seams, completing a quilt top, layering and basting, and both hand and machine quilting methods. The accompanying online videos include a how-to guide illustrating quilting basics, demonstrating all projects, and offering the complete book pages in PDF format. All the information you need to get started with quilting is contained in this captivating guide.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781631596575"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1631596578"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 176,
                "printType": "BOOK",
                "categories": [
                    "Crafts & Hobbies"
                ],
                "averageRating": 4.5,
                "ratingsCount": 2,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=DNl1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=DNl1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=DNl1DwAAQBAJ&pg=PA5&dq=quilting&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=DNl1DwAAQBAJ&dq=quilting&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Quilting_101.html?hl=&id=DNl1DwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=DNl1DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "9of 10Repeat lower \u003cb\u003equilt\u003c/b\u003e the 11Repeat Stitch of \u003cb\u003equilt\u003c/b\u003e. top. binding the measuring \u003cbr\u003e\nthe in \u003cb\u003equilt\u003c/b\u003e, Remove \u003cb\u003equilt\u003c/b\u003e. the strips steps steps catching ditch Trim the the 4 even \u003cbr\u003e\n5 (page to \u003cb\u003equilt\u003c/b\u003e to pins the step 7 the 9 with for ends for top as 43)binding the&nbsp;..."
            }
        }
    ]
}