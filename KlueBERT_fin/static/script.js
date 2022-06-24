$(function() {
    $('button#process').on('click', function() {
      console.log('process click func');
      $.getJSON($SCRIPT_ROOT + '/_input_helper', {
        text_data: $('#text-data').val()
      }, function(data) {
        console.log('review result func');
        $("#result").empty();
        $("#result").prepend(data.result);
      });
      return false;
    });
  });


$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

// # csv파일로 읽어서 dropdown 목록에 추가하기
// https://stackoverflow.com/questions/21714547/read-csv-from-server-and-put-contents-into-drop-down-list-in-html-or-javascript


// 동적 옵션 선택
$( document ).ready(function(){
  //테스트용 데이터
  var sel1 = {
      "default":"지역선택",
      "서울":"서울특별시",
      "부산":"부산광역시",
      "제주" : "제주도",
      // "gyeonggi" : "경기도",
      // "incheon" : "인천광역시",
      // "gangwon" : "강원도",
      // "gyeongsangnamdo" : "경상남도",
      // "gyeongsangbukdo" : "경상북도",
      // "jeonlanamdo" : "전라남도",
      // "jeonlabukdo" : "전라북도",
      // "chungcheongnamdo" : "충청남도",
      // "chungcheongbukdo" : "충청북도",
      // "daegu" : "대구광역시",
      // "gwangju" : "광주광역시",
      // "deajun" : "대전광역시",
      // "ulsan" : "울산광역시",
      // "sejong" : "세종특별자치시"
    };
    
    //sel1이 서울일경우
    var sel2_1 = {
      'default' : '지역선택',
      '종로구':'종로구',
      '중구':'중구',
      '용산구':'용산구',
      '성동구': '성동구',
      '광진구' :'광진구',
      // 'dongdaemun' : '동대문구',
      // 'jungrang': '중랑구',
      // 'seongbuk': '성북구',
      // 'gangbuk': '강북구',
      // 'dobong': '도봉구', 
      // 'nowon':'노원구',
      // 'eunpyeong' :'은평구',
      // 'seodaemun': '서대문구',
      // 'mapo': '마포구',
      // 'yangcheon': '양천구',
      // 'gangseo': '강서구',
      // 'guro': '구로구',
      // 'geumcheon' :'금천구',
      // 'youngdeungpo': '영등포구',
      // 'dongjak': '동작구',
      // 'gwanak': '관악구',
      // 'seocho' :'서초구',
      // 'gangnam': '강남구', 
      // 'songpa' :'송파구',
      // 'gangdong': '강동구'
    };

    //sel1이 부산일경우
    var sel2_2 = {
      'default' : '지역선택',
      '서구' : '서구', 
      '동구' : '동구', 
      '영도구' : '영도구', 
      '부산진구' : '부산진구', 
      '동래구' : '동래구', 
      // 'namgu' : '남구', 
      // 'bukgu' : '북구', 
      // 'haeundae' : '해운대구',
      // 'saha' : '사하구', 
      // 'geumjeong' : '금정구', 
      // 'yeonje' : '연제구', 
      // 'sooyoung' : '수영구', 
      // 'sasang' : '사상구', 
      // 'gijang' : '기장군'
    };

    //sel1이 제주일경우
    var sel2_3 = { 
      'default' : '지역선택',
      '제주시' : '제주시', 
      '서귀포시' : '서귀포시'
    };

    //sel1이 선택전일경우
    var sel2_9999 = { 
      'noselect' : '지역선택'

    };

    //sel2가 종로구일경우
    var sel3_1 = {
      'default' : '지역선택',
      '더숲 초소책방' : '더숲 초소책방',
      '에디션덴마크쇼룸' : '에디션덴마크쇼룸',
      '아키비스트' : '아키비스트',
      '효자베이커리' : '효자베이커리',
      '카페이마' : '카페이마',
      '스쿠퍼젤라또' : '스쿠퍼젤라또',
      '카페 시노라' : '카페 시노라',
      '통인동커피공방 위켄드' : '통인동커피공방 위켄드',
      'myc' : 'myc',
      '모드니에' : '모드니에',
    };

    //sel2가 중구일경우
    var sel3_2 = {
      'default' : '지역선택',
      '롤로도넛' : '롤로도넛',
      '뮬랭 듀 몽드' : '뮬랭 듀 몽드',
      '후후라운지' : '후후라운지',
      '튀튀쿠키' : '튀튀쿠키',
      '덴고의 커피' : '덴고의 커피',
      '카페르뮤즈' : '카페르뮤즈',
      '카페누하191' : '카페누하191',
      '음악의 숲' : '음악의 숲',
      'ohooCafe' : 'ohooCafe',
      '청고래' : '청고래', 
    };

    //sel2가 용산구일경우
    var sel3_3 = {
      'default' : '지역선택',
      '푸른 양귀비' : '푸른 양귀비',
      'Address' : 'Address',
      '도시락카페 통' : '도시락카페 통',
      '도깨비코리아' : '도깨비코리아',
      '카페장난' : '카페장난',
      '건강책방 일일호일' : '건강책방 일일호일',
      '홀리데이프로젝트' : '홀리데이프로젝트',
      '라파리나' : '라파리나',
      'H라운지' : 'H라운지',
      '서울상회' : '서울상회',
    };

    //sel2가 성동구일경우
    var sel3_4 = {
      'default' : '지역선택',
      '아이사구아' : '아이사구아',
      '르프랑루프탑' : '르프랑루프탑',
      '토오베' : '토오베',
      '동백양과점' : '동백양과점',
      '카페뎀셀브즈' : '카페뎀셀브즈',
      '애즈라이크' : '애즈라이크',
      '스태픽스' : '스태픽스',
      '카페아르크' : '카페아르크',
      '모브' : '모브',
      '통의동단팥' : '통의동단팥'
    };

    //sel2가 광진구일경우
    var sel3_5 = {
      'default' : '지역선택',
      '세이지핀치' : '세이지핀치',
      'Say Something' : 'Say Something',
      '미라보쇼콜라' : '미라보쇼콜라',
      'TIMT' : 'TIMT',
      '카페느티' : '카페느티',
      '홍콩빵태국커피' : '홍콩빵태국커피',
      'LP소리골' : 'LP소리골',
      '홀드미커피' : '홀드미커피',
      '선드라이커피' : '선드라이커피',
      '그린냅' : '그린냅', 
    };

    //sel2가 제주시일경우
    var sel3_6 = {
      'default' : '지역선택',
      '서촌스코프' : '서촌스코프',
      '레레플레이' : '레레플레이',
      '광화문시민카페' : '광화문시민카페',
      '러셔스 스쿱스' : '러셔스 스쿱스',
      '담장옆에국화꽃CCOT 안녕인사동점' : '담장옆에국화꽃CCOT 안녕인사동점',
      '미러볼커피스탠드' : '미러볼커피스탠드',
      '카페꼼마 삼일빌딩점' : '카페꼼마 삼일빌딩점',
      '포비 을지로' : '포비 을지로',
      '인사동 전통찻집 전통다원' : '인사동 전통찻집 전통다원',
      '합 원서점' : '합 원서점', 
    };

    //sel2가 서귀포시일경우
    var sel3_7 = {
      'default' : '지역선택',
      '빅토리아베이커리 서촌' : '빅토리아베이커리 서촌',
      '포시즌스호텔서울 마루' : '포시즌스호텔서울 마루',
      '파머스반 브레드' : '파머스반 브레드',
      '카페뎀셀브즈' : '카페뎀셀브즈',
      '릴랙스 인 다운타운' : '릴랙스 인 다운타운',
      '링링' : '링링', 
      '블리스버거 앤 카페' : '블리스버거 앤 카페',
      '아트쉬프트' : '아트쉬프트',
      '카페 빵쌤' : '카페 빵쌤', 
      '이공오도씨' : '이공오도씨',
    };

    //sel2가 서구일경우
    var sel3_8 = {
      'default' : '지역선택',
      '그레이커피' : '그레이커피',
      '커피붕붕 커피볶는집' : '커피붕붕 커피볶는집',
      '카페큐브' : '카페큐브',
      '와프' : '와프',
      '히든커피' : '히든커피',
      '슬로우레시피' : '슬로우레시피',
      '오늘도다온치즈' : '오늘도다온치즈',
      '안녕 제제' : '안녕 제제',
      '한방차보감' : '한방차보감',
      '서울에서첫번째전통찻집' : '서울에서첫번째전통찻집',
    };

    //sel2가 동구일경우
    var sel3_9 = {
      'default' : '지역선택',
      '카페 한복남' : '카페 한복남',
      '감성유리다방' : '감성유리다방',
      '시에라' : '시에라',
      '피아자도르' : '피아자도르',
      '논현커피' : '논현커피',
      '파티세리저스트' : '파티세리저스트',
      '베르니' : '베르니',
      '저잣거리' : '저잣거리',
      'COWORKERS GROUND' : 'COWORKERS GROUND',
      'Rounge cafe' : 'Rounge cafe',
    };

    //sel2가 영도구일경우
    var sel3_10 = {
      'default' : '지역선택',
      '컬103' : '컬103',
      '골프인에스프레소' : '골프인에스프레소',
      '도트 블랭킷' : '도트 블랭킷',
      '슬로우포레스트' : '슬로우포레스트',
      '카페죠꽁드' : '카페죠꽁드',
      '차마시는뜰' : '차마시는뜰',
      '먼차' : '먼차',
      '보드레 안다미로' : '보드레 안다미로',
      '이태리탁' : '이태리탁',
      'RadioM' : 'RadioM',
    };

    //sel2가 부산진구일경우
    var sel3_11 = {
      'default' : '지역선택',
      '파인콘' : '파인콘',
      '라포레' : '라포레',
      'CAFE D 55' : 'CAFE D 55',
      '카페 루아흐' : '카페 루아흐',
      '브랏트' : '브랏트',
      '언더우드소셜클럽' : '언더우드소셜클럽',
      '아웃오브아프리카' : '아웃오브아프리카',
      '동양 차 문화관' : '동양 차 문화관',
      '커피펙토리글로보' : '커피펙토리글로보',
      '카페 위투' : '카페 위투',
    };

    //sel2가 동래구일경우
    var sel3_12 = {
      'default' : '지역선택',
      '이사일로청삼로종' : '이사일로청삼로종',
      '아키비스트' : '아키비스트',
      '런던 베이글 뮤지엄' : '런던 베이글 뮤지엄',
      '놋그릇 가지런히' : '놋그릇 가지런히',
      '클럽에스프레소' : '클럽에스프레소',
      '톤티커피' : '톤티커피',
      '낙원장' : '낙원장',
      '묘한빵집' : '묘한빵집',
      '침니펍' : '침니펍',
      '델픽' : '델픽',
    };

    var sel3_9999 = {
      'noselect' : '지역선택'
    };


    //sel1에 서버에서 받아온 값을 넣기위해..
    // map배열과 select 태그 id를 넘겨주면 option 태그를 붙여줌.
    // map[키이름] = 그 키에 해당하는 value를 반환한다.
    //retOption(데이터맵, select함수 id)
    function retOption(mapArr, select){
      var html = '';
      var keys = Object.keys(mapArr);
      for (var i in keys) {
          html += "<option value=" + "'" + keys[i] + "'>" + mapArr[keys[i]] + "</option>";
      }
        $("select[id='" + select +"']").html(html);
    }

    $("select[id='sel1']").on("change", function(){
      var option = $("#sel1 option:selected").val();
      var subSelName = '';
      console.log('1 단계');  
      if(option == "서울") {
        // console.log('2 단계');
          subSelName = "sel2_1";
          {$("select[id='sel2']").on("change", function(){
            var suboption = $("#sel2 option:selected").val();
            var subsubSelName = '';
            if(suboption == "종로구"){
              subsubSelName = "sel3_1";
              // console.log('3 단계');
            } else if(suboption == "중구"){
              subsubSelName = "sel3_2";
            } else if(suboption == "용산구"){
              subsubSelName = "sel3_3";
            } else if(suboption == "성동구"){
              subsubSelName = "sel3_4";
            } else if(suboption == "광진구"){
              subsubSelName = "sel3_5";
            } else if(suboption == 'default'){
              subSelName = 'sel2_9999';
            } else{
              // $("#sel3").hide();
              subSelName = 'default';
              return;
            }
            $("#sel3").show();
            retOption(eval(subsubSelName), 'sel3');  
          })
        }
        } else if(option == "제주"){
          // console.log('4 단계');  
          subSelName = "sel2_3";
          {$("select[id='sel2']").on("change", function(){
            var suboption = $("#sel2 option:selected").val();
            var subsubSelName = '';
            if(suboption == "제주시"){
              subsubSelName = "sel3_6";
              // console.log('3 단계');
            } else if(suboption == "서귀포시"){
              subsubSelName = "sel3_7";
            } else if(suboption == 'default'){
              subsubSelName = 'sel2_9999';
            } else{
              // $("#sel3").hide();
              subsubSelName = 'default';
              return;
            }
            $("#sel3").show();
            retOption(eval(subsubSelName), 'sel3');  
          })
        }
        } else if(option == '부산'){
          subSelName = 'sel2_2';
          {$("select[id='sel2']").on("change", function(){
            var suboption = $("#sel2 option:selected").val();
            var subsubSelName = '';
            if(suboption == "서구"){
              subsubSelName = "sel3_8";
              console.log('3 단계');
            } else if(suboption == "동구"){
              subsubSelName = "sel3_9";
            } else if(suboption == "영도구"){
              subsubSelName = "sel3_10";
            } else if(suboption == "부산진구"){
              subsubSelName = "sel3_11";
            } else if(suboption == "동래구"){
              subsubSelName = "sel3_12";
            } else if(suboption == 'default'){
              subsubSelName = 'sel2_9999';
            } else{
              // $("#sel3").hide();
              subsubSelName = 'default';
              return;
            }
            $("#sel3").show();
            retOption(eval(subsubSelName), 'sel3');  
          })
        }
        } else if(option == 'default'){
          subSelName = 'sel2_9999';
        } else{
          // $("#sel2").hide();
          subSelName = 'default';
          return;
        }
        $("#sel2").show();
        retOption(eval(subSelName), "sel2");
    })
    console.log('0 단계');  

    retOption(sel1, "sel1");
});



// 버튼 눌러서 value값 가져오기(출력해보기>>>카페명이 출력되게하면 됨)
$(function() {
  $('button#getregion').on('click', function () {
    var mainRegion = $("#sel1").val();
    var subRegion = $('#sel2').val();
    var cafelist = $("#sel3").val();
    // 출력 테스트용
    $("#crawl_key").html(
      // mainRegion + " " + subRegion + " " + 
      cafelist
      )
  });
  return false;
});


// 리뷰 크롤링 및 라벨 출력 기능
$(function() {
  $('button#getreview').on('click', function() {
    console.log('getreview click func');
    console.log($("#sel3").val());
    $.getJSON($SCRIPT_ROOT + '/_input_name', {
      key_data: $("#sel3").val()
    }, function(data) {
      console.log('결과값 출력func');
      $("#crawl_result").empty();
      $("#crawl_result").prepend(data.crawl_result);
    });
    return false;
  });
});
