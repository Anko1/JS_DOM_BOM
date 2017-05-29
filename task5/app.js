var onClickSP = function (e) {
    var $el = e.target;

    e.stopPropagation();

    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
};

document.body.onclick = onClickSP;
$('#box1').onclick = onClickSP;
$('#box2').onclick = onClickSP;
$('#box3').onclick = onClickSP;

$('#link').click(function(event){
    event.preventDefault();

});
