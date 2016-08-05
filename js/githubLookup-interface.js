var GithubLookup = require('./../js/githublookup.js').githublookupModule;

$(document).ready(function() {
  $('#lookup').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    GithubLookup.getGithubLookup();
  });
});
