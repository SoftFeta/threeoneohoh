var mongoose = require('mongoose');

//Define Items schema and model
var itemsSchema = new mongoose.Schema({
        pic: {data: Buffer, contentType: String},
        giver: String,
        taker: String,
        trending: Boolean,
        newListing: Boolean,
        name: String,
        cat: String,
        neighbourhood: String,
        quantity: Number,
        desc: String,
        clickTime: Date,
        getTime: Date,
        status: String,
        tags: []
    },
    {
        autoIndex: true,
        timestamps: {createdAt: 'created_at'}
    });

var Items = mongoose.model('Items', itemsSchema);

function createDefaultItems() {
    Items.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Items.create({
                pic: {data: '', contentType: 'image/png'},
                giver: 'joeBloggs',
                taker: 'billLiu',
                trending: true,
                newListing: true,
                name: 'A lump of metal',
                cat: 'book1',
                neighbourhood: 'psk',
                quantity: 15,
                desc: 'no description',
                clickTime: new Date(),
                getTime: new Date(),
                status: 0
            });
        }
    });
}

function createItem() {

}

exports.createDefaultItems = createDefaultItems;