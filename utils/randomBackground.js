export default function randomColor() {
    var generatedColor = "";

    var listNumber = "abcdef1234567890";
    for (var i = 0; i < 6; i++) {
        var numberGenerated = Math.floor(Math.random() * listNumber.length);
        var color = listNumber.charAt(numberGenerated);
        generatedColor = generatedColor + color;
    }

    return generatedColor;
}
