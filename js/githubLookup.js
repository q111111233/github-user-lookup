var apiKey = require('./../.env').apiKey;

function GithubLookup(){
}

GithubLookup.prototype.getGithubLookup = function(){
  $.get('https://api.github.com/users/q111111233?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
