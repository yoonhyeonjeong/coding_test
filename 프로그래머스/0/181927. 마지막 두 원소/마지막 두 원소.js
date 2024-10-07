function solution(num_list) {
    var answer = [];
    num_list.map((ele, i)=>{
        if(num_list[i] > num_list[i-1]){
            answer = [...num_list,num_list[i]-num_list[i-1]]
        }else{
            answer =[...num_list,num_list[i]*2]
        }
    })
    
    return answer;
}