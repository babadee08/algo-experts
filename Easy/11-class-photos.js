function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    if (blueShirtHeights.length !== redShirtHeights.length) {
        return false;
    }
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    let backGuys = redShirtHeights;
    let frontGuys = blueShirtHeights;
    if (redShirtHeights[0] < blueShirtHeights[0]) {
        backGuys = blueShirtHeights;
        frontGuys = redShirtHeights;
    }

    for (let idx = 0; idx < backGuys.length; idx++) {
        if (frontGuys[idx] > backGuys[idx]) {
            return false;
        }
    }

    return true;
}