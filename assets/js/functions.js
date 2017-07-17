var dateThen = new Date('07/21/2017 3:30 PM');
function update() {
  
  var dateNow = Date.now()
  var dif = dateThen - dateNow
  var seconds = dif/1000;
  var days = Math.floor(((seconds/60)/60)/24)
  var hours = Math.floor(((seconds/60)/60))
  var minutes = Math.floor(seconds/60)
  
  if(seconds == 0) {
    $('.text').html("0 seconds! Yay!")
    $('.days').html("It's sumer why are you still looking at this?")
    $('.hours').html("")
    $('.minutes').html("")
  } else {
    $('.text').html(Math.floor(seconds) + " seconds.")
    $('.days').html(days + " days,")
    $('.hours').html(hours % days + " hours,")
    $('.minutes').html("and " + minutes % hours + " minutes.")
  }
  
}

setInterval(function(){ update() }, 1000);
