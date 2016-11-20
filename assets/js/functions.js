<<<<<<< HEAD
var dateThen = new Date('07/21/2017 12:30 AM');
function update() {
  var dateNow = Date.now()
  var dif = dateThen - dateNow
  var seconds = dif/1000;
  $('.text').html(Math.floor(seconds))
  var days = Math.floor(((seconds/60)/60)/24)
  var hours = Math.floor(((seconds/60)/60))
  var minutes = Math.floor(seconds/60)

  $('.days').html(days + " days,")
  $('.hours').html(hours % days + " hours,")
  $('.minutes').html("and " + minutes % hours + " minutes.")
}

setInterval(function(){ update() }, 1000);
=======
var render = function(){
  var input = $('.input')
  var output = $('.output')

  try {
    var rendered = katex.renderToString($('input').val(), { displayMode: true,
                                                            throwOnError: false,
                                                            errorColor: "#ff329f" })
  }
  catch(err) {
  }
  $('.output').html(rendered)
}
>>>>>>> origin/master
