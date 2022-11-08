const mongoose = require('mongoose');

    function makeConnection(uri){
        return mongoose
        .connect(uri,

            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            })
        .then(() => console.log('MongoDB database Connected...'))
        .catch((err) => console.log(err));
}

async function closeConnection(){
       await mongoose.connection.close()
}

module.exports = {
            makeConnection,
                closeConnection
}



//const itemsConnection = makeNewConnection('mongodb+srv://lukas-dufek:frameworkvuejs@items.x2hdz8c.mongodb.net/?retryWrites=true&w=majority');
//const tasksConnection = makeNewConnection('mongodb+srv://lukas-dufek:frameworkvuejs@slovniulohy.ofdkuu5.mongodb.net/?retryWrites=true&w=majority');

/*
module.exports = {
    itemsConnection,
    tasksConnection
};

 */

