console.log('Hello, world!')
console.log('yo')

function grade(score) {
    score = Math.round(score)
    if (score <0 || score >100) {
        console.log('Error')
    } else if (score >= 80) {
        console.log('You got A')
    } else if (  score >= 70) {
        console.log('You got B')
    } else if (score >= 60) {
        console.log('You got C')
    } else if (score >= 50) {
        console.log('You got D')
    } else {
        console.log('You got F')
    }
}

grade(100)
