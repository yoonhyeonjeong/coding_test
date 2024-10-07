function solution(num_list) {
    var answer = 0;
    var answer2 = 0;
    num_list.forEach((num,i)=>{
        if(i % 2 === 0){
            answer += num
        }else{
            answer2 += num
        }
    })
    return Math.max(answer,answer2)
}