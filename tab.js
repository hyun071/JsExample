var car2 = { name: 'SONATA', price: [50000, 3000, 4000] }
document.querySelector('.car-price').innerHTML = '가격: ' + car2.price[1];

var tab = $('.tab-button').length;
function tabButton(t) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(t).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(t).addClass('show');
}
// for (let i = 0; i < tab; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         tabButton(i)
//     })
// }
$('.list').click(function (e) {
    tabButton(e.target.dataset.id);
    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     tabButton(0)
    // }    if(e.target == document.querySelectorAll('.tab-button')[1]){
    //     tabButton(1)
    // }    if(e.target == document.querySelectorAll('.tab-button')[2]){
    //     tabButton(2)
    // }
})
// $('.products').on('', function () {
//     $('.size').style.display = 'block';
// // document.querySelector('.size').style.display = 'block';
// $('.products').eq([1]).style.display = 'block';
// $('.form-select').eq(0).on('input', function(){
//     if ($('.form-select').eq(0).val() == '셔츠'){
//         $('.form-select').eq(1).removeClass('hide');
//         }
// })

// var pants = [28, 30, 32];
var shirts = [90, 100, 110];
$('.form-select').eq(0).on('input', function () {
    var value = this.value;
    if (value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        shirts.forEach(function (a) {
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        });
    } else if (value == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        var pants = `<option>28</option>
    <option>30</option>`;
        // $('.form-select').eq(1).html(pants);
        document.querySelectorAll('.form-select')[1].innerHTML = pants;
    } else {
        $('.form-select').eq(1).addClass('form-hide');
    }
});

// for in 문법
