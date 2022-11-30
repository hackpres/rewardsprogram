export const getPoints = (arr) => {
    let points = 0;
    arr.map((num) => {
        if(num > 100) {
            return points += 50 + ((num - 100) * 2)
        } else if (num > 50) {
            return points += num - 50
        }
        return
    })
    return points
}