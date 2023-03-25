// 철수찾기
var 출석부 = ['흥민', '영희', '철수', '재석'];

function nameSearch(name){
    for (var i = 0; i < 4; i++) {
        if (name == 출석부[i]) {
            console.log('있어요')
        }
    }
}


nameSearch('');




    // 아이디 미입력 혹은 비밀번호가 6자 이하일 시 알림창 띄우고 전송 막기 
    $('hello').on('submit', function (e) {
        if (nameSearch().value == '') {
          alert('있어요');
          e.preventDefault();
        } else  {
          alert('없어요');
          e.preventDefault();
        }
      });

