import mongoose from 'mongoose';

// for new version mongoose library
mongoose.set("strictQuery", true);

mongoose.connect('******').then({
// these are not obligatories
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    // useCreateIndex: true
})

.then(db => console.log('DB is connected!'))
 .catch(error => console.log(error))


