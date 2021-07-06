function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    redShirtSpeeds.sort((a, b) => a - b);
    if (fastest) {
        blueShirtSpeeds.sort((a, b) => b - a);
    } else {
        blueShirtSpeeds.sort((a, b) => a - b);
    }
    
    let i = 0;
    let j = redShirtSpeeds.length - 1;

    let maxSpeed = 0;

    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        maxSpeed += Math.max(redShirtSpeeds[j], blueShirtSpeeds[i]);
        i++;
        j--;
    }

    return maxSpeed
}