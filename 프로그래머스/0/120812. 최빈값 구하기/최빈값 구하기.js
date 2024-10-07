function solution(array) {
    let obj = {}
    for(let ele of array){
        if(!obj.hasOwnProperty(ele)){
            obj[ele] = 1;
        }else{
            obj[ele]++;
        }
    }
    let maxCount = 0;
    let answer = [];
    for(let prop in obj){
        if(obj[prop] > maxCount){
            maxCount = obj[prop]
            answer = [Number(prop)]
        }else if(obj[prop] === maxCount){
            answer.push(Number(prop))
        }
    }
    
    if(answer.length > 1){
        return -1
    }
    
    return answer[0]
}