function solution(array, commands) {
    return commands.map(([i,j,k]) =>{
        const slicedArray = array.slice(i-1, j); // 1. 슬라이싱
        const sortedArray = slicedArray.sort((a,b) => a -b) // 2. 정렬
        return sortedArray[k-1] // 3 . k번쨰값 찾기 
        
    })
}