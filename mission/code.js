age = Number(prompt("나이를 입력하세요:"))
member = prompt("회원 여부를 입력하세요(예/아니오):")

if (age <7){
    alert("무료")
}
else if (7< age <= 12){    
    if (member == "예"){
        alert("입장료는 4500원입니다")
    }
    else {
        alert("입장료는 5000원입니다")
    }
}
else if (13< age <= 64){
    if (member == "예"){
        alert("입장료는 9000원입니다")
    }
    else {
        alert("입장료는 10000원입니다")
    }
}
else if (64< age){
    if (member == "예"){
        alert("입장료는 2700원입니다")
    }
    else {
        alert("입장료는 3000원입니다")
    }
}
