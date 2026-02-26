const engine = new QmlWeb.QMLEngine(document.getElementById("app"));
engine.loadFile("./ApplicationWindow.qml");
engine.start();

setTimeout(() => engine.start(), 0);