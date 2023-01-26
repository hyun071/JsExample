
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