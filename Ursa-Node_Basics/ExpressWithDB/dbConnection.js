//<======================Lec18March12-Better Folder Structure=================================>
const {connect} = require('mongoose');

connect('mongodb://localhost:27017/NSUrsaWithJunoBatch')
.then(() => {
    console.log(`connection with DB successful`);
})
.catch(() => {
    console.log(`something went wrong!!`);
})
//<======================End: Lec18March12=================================>