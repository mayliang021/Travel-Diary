const mongoose = require('mongoose');
const {Schema} = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/diary');
}

const diarySchema = new Schema({
  title: String,
  location: String,
  body: String,
  photosUrl: String,
  date: String,
  geolocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})

const Diary = mongoose.model('Diary', diarySchema);

module.exports = Diary;