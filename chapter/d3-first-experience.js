function SimpleWidget (spec) {
  var instance = {};

  var headline, description;

  instance.render = function () {
    var div = d3.select('body').append('div');

    console.log(div);

    div.append('h3').text(headline);

    div.attr('class', 'box')
    .attr('style', 'color:' + spec.color)
      .append('p')
      .text(description);

    return instance;
  }

  instance.headline = function (h) {
    if (!arguments.length) h;
      headline = h;

    console.log(instance);

    return instance;
  }

  instance.description = function (desc) {
    if (!arguments.length) desc;
      description = desc;
    return instance;
  }

  return instance;
};

var widget = SimpleWidget({color: '#6495ed'})
  .headline('Simple Widget')
  .description('This is a simple widget demonstrating functional javascript.');

console.log(widget);

widget.render();