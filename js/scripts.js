var ratPack = $.sammy(function() {
    this.element_selector = '#content';
    // routes will go here
});

this.get('#/inbox', function(context) {
    context.app.swap('');
    context.$element().append('<h1>inbox</h1>');
});

$(function() {
  ratPack.run('#/inbox');
});

this.get('#/label/:name', function(context) {
    context.app.swap('');
    context.$element().append('<h1>' + this.params['name'] + '</h1>');
});

this.get('#/compose', function(context) {
    context.app.swap('');
    context.$element().append('<h1>say hello to?</h1>'
      + '<form action="#/compose" method="post">'
      + '<input type="text" name="to" />'
      + '<input type="submit" name="submit" />'
      + '</form>');
});

this.post('#/compose', function(context) {
    context.app.swap('');
    var to = this.params['to'];
    context.$element().append('<h1>hi ' + to + '</h1>');
});

