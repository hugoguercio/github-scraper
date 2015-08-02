var gs = require('../lib/');
var test = require('tape');

test('Scrape a known profile @alanshaw', function(t){
  var user = 'alanshaw';
  gs.profile(user, function(err, data){
    t.ok(data.developerprogram === true, '- @' + user + ' is a member of the "GitHub Developer Program"');
    t.ok(data.followercount > 100, '- @' + user + ' Has more than 100 followers');
    t.ok(data.starred > 100, '- @' + user + ' Has starred more than 100 repos');
    console.log(data);
    t.end()
  })
})

test('parse @iteles activity feed (expect recent activity)', function(t){
	var user = 'iteles';
	gs.feed(user, function(err, data){
		t.ok(err === null, 'No error when parsing @' +user +' activity feed');
    var entry = data.entries.filter(function(e){
      return e.indexOf('commented');
    })
    t.ok(data.entries.length === 30, '@' +user +' activity feed contains 30 entries')
		t.end();
	})
})
