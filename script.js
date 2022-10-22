'use strict';

function calculateVolumeAndArea(a) {
    
    if (typeof (a) !== 'number' || a <= 0 || !Number.isInteger(a)) {
        return console.log("При вычислении произошла ошибка");
    }
    const S = 6 * (a * a); 
    const V = a * a * a;

    return console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);
}

calculateVolumeAndArea(1.2);

