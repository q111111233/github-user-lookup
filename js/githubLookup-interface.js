var GithubLookup = require('./../js/githubLookup.js').githubLookupModule;

$(document).ready(function() {
  var currentUser = new GithubLookup();
  $('#lookup').click(function() {
    $('.searched').remove();

    var username = $('#username').val();
    $('#username').val("");
    currentUser.getGithubLookup(username);
  });
});
