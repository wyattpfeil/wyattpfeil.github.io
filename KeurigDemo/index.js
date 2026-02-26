console.log("QMLEngine:", typeof QmlWeb.QMLEngine); // should be "function"
const engine = new QmlWeb.QMLEngine(document.getElementById("app")); // per docs: new QMLEngine(element)
engine.loadFile("./ApplicationWindow.qml");
engine.start();

setTimeout(() => engine.start(), 0);