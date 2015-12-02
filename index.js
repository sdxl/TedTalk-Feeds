google.load("feeds", "1");
function initialize() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  feed.setNumEntries(100)
  feed.load(function(result) {
    var container = $('#feed');
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      var img = entry.mediaGroups[0].contents[0].thumbnails[0].url
      var item = $('<li>'+ 
              '<div class="collapsible-header">'+
                '<div >' + 
                  '<h5>' + entry.title + '</h5>'+
                  '<h6>' + 
                  '<div>'+ 'Posted: ' + new Date(entry.publishedDate) + '</div>'+
                  '</h6>'+
                  '<img src=' + img + '>' +
                '</div>'+
              '</div>'+
              '<div class="collapsible-body">'+
                '<p>'+entry.content + '</p>'+
                '<p>'+ '<a href=' +entry.link  + ' target="_blank">' + "click here to view video in new tab" + '</a>'+ '</p>'+
              '<div>'
          +'</li>'
        );
      item.appendTo(container);
    }
  });
  $("#loader").remove();
}
google.setOnLoadCallback(initialize);

