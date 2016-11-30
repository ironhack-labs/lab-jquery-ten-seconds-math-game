var options = {
  operators: ['addition', 'substraction', 'multiplication', 'division'],
  numberLimit: 10
};
var game = new TenSecondsMathGame(options);

$(document).ready(function(){
  $("#number-limit-range").on('change', function(){
    options.numberLimit = this.value;
    $("#number-limit").html(this.value);
  });

  $(".option-box").on('change', function(){
    options.operators.push(this.id);
  });
});
