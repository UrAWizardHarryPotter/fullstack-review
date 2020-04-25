const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner:  String, // [index].owner.login
  repoUrl: String, // [index].hmtl_url
  forks:   Number, // [index].forks
  watchers: Number, // [index].watchers
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
module.exports.Repo = Repo;