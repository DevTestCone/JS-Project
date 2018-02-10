function moveTo(el) {

  if (el == "fifth") {
    var selected = $(".six").next();
  } else if (el == "third") {
    var selected = $(".second").prev();
  } else {
    var selected = el;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("fourth");

  $(prev).removeClass().addClass("third");
  $(next).removeClass().addClass("fifth");

  $(nextSecond).removeClass().addClass("six");
  $(prevSecond).removeClass().addClass("second");

  $(nextSecond).nextAll().removeClass().addClass('seventh');
  $(prevSecond).prevAll().removeClass().addClass('first');

}

$('#scroll div').click(function() {
  moveTo($(this));
});
