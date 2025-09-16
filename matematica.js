const PI = 3.14

function calculabhaskara(a, b, c) {
    delta= b*b - 4*a*c
 x1 = (- b + Math.sqrt(b * b - 4 * a * c))/2 * a 
 x2 = (- b - Math.sqrt(b * b - 4 * a * c))/2 * a 

 console.log("x1: ", x1, "x2: ", x2)
}

module.exports = {calculabhaskara, PI}