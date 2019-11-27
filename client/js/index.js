function test() {
    alert("进入js");
    var csInterface = new CSInterface();
    var foregroundColor = "666";
    csInterface.evalScript("addNewColor('" + foregroundColor + "')");//who could tell me why the lack of ' makes such a strange error!!
}