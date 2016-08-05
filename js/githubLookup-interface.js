var GithubLookup = require('./../js/githubLookup.js').githubLookupModule;

$(document).ready(function() {
  var currentUser = new GithubLookup();
  $('#lookup')click(function() {


    var username = $('#username').val();
    $('#username').val("");
    currentUser.getGithubLookup(username);
  });
});
