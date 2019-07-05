function calculateIntersec() {
    var isoValue = $('#iso_value').val();
    var p1X = $('#p1_x').val();
    var p1Y = $('#p1_y').val();
    var f1 = $('#f1').val();
    var p2X = $('#p2_x').val();
    var p2Y = $('#p2_y').val();
    var f2 = $('#f2').val();

    if (isoValue === '' || p1X === '' || p1Y === '' || f1 === '' || p2X === '' || p2Y === '' || f2 === ''
        || isNaN(isoValue) || isNaN(p1X) || isNaN(p1Y) || isNaN(f1) || isNaN(p2X) || isNaN(p2Y) || isNaN(f2)) {
        setResult('Please enter values first!');
        return;
    }

    isoValue = parseFloat(isoValue);
    p1X = parseFloat(p1X);
    p1Y = parseFloat(p1Y);
    f1 = parseFloat(f1);
    p2X = parseFloat(p2X);
    p2Y = parseFloat(p2Y);
    f2 = parseFloat(f2);

    try {
        var intersec = marchingSquaresIntersec({
            iso: isoValue,
            pointA: {
                x: p1X,
                y: p1Y,
                f: f1
            },
            pointB: {
                x: p2X,
                y: p2Y,
                f: f2
            },
        });

        setResult('p<sub>0</sub> = (' + intersec.x + ', ' + intersec.y + ')');
    } catch (err) {
        setResult('Error: ' + err.message);
    }
}

function setResult(msg) {
    $('#form-result').html(msg);
}

function observeParamChanges()
{
    $("#form-params input").bind("propertychange change click keyup input paste", function(event){
        calculateIntersec();
    });
}

$(document).ready(function () {
    observeParamChanges();
    calculateIntersec();
});