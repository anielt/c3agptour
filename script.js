var myArray = [
  "https://youtube.com/embed/lH1HULAhdtM",
  "https://youtube.com/embed/WLIv7HnZ_fE",
  "https://youtube.com/embed/Kob0xfG2F_o",
  //  "https://youtube.com/embed/iEUpvK5JVys",
  // "https://youtube.com/embed/O3NCwtFeWOQ"
];

$(document).ready(function() {
  $('.random-button').on('click', function(ev) {
    ev.preventDefault();
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    $.featherlight({iframe: randomItem, iframeMaxWidth: '100%', iframeWidth: 560,
	iframeHeight: 315});
  });
 });

// Made By Aniel