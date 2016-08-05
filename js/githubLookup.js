var apiKey = require('./../.env').apiKey;

function GithubLookup(){
}

GithubLookup.prototype.getGithubLookup = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response[0]);


    response.forEach(function(a){
      $('.result').append('<li>' + a.name + '</li>' +
                          '<p>' + a.description + '</p>');
    })


  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubLookupModule = GithubLookup;
