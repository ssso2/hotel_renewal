$(function(){
    $().click(function(){
        
    })
    $("#pay").click(function(e){

        if($("#in-time :selected").val()==""){ 
            alert("체크인 예정 시간을 확인해주세요.")
            return false
        }
        if(!($("#guide-chk").is(":checked"))){ 
            alert("유의사항, 취소 및 환불 규정을 확인해주세요.")
            return false
        }
        if(!($("#col-arg").is(":checked"))){ 
            alert("개인정보 수집ㆍ이용에 동의해야만 결제하실 수 있습니다.")
            return false
        }
        if(!($("#sug-arg").is(":checked"))){ 
            alert("개인정보 제3자 제공에 동의해야만 결제하실 수 있습니다.")
            return false
        }
    })
})

