var Friend = {
  sayHello: function() {
    return "Hello there! It is nice to meet you, " + this.name + ".";
  }
};


$(document).ready(function() {
  $("form#new-friend").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();

    var newFriend = Object.create(Friend);
    newFriend.name = inputtedName;

    $("ul#friends").append("<li><span class='friend'>" + newFriend.name + "</span></li>");

    $("input#name").val("");

    $(".friend").last().click(function() {
      $("#show-response").show();
      $("#response").text(newFriend.sayHello());
    });
  });
});
