import QtQuick 2.0

Rectangle {
  id: root
  width: 800
  height: 480
  color: "black"

  FontLoader { id: poppinsLight; source: "./Poppins-Light.ttf" }

  // state
  property int progress: 0
  property bool brewing: false
  property bool done: false
  property int selectedSize: 1 // 0 small, 1 med, 2 large
  property string selectedState: selectedSize === 0 ? "small..."
                          : selectedSize === 1 ? "medium..."
                          : "large..."

  function startBrew() {
    progress = 0
    brewing = true
    done = false
    brewTimer.running = true
  }

  function finishBrew() {
    brewTimer.running = false
    brewing = false
    done = true
  }

  function resetHome() {
    brewTimer.running = false
    brewing = false
    done = false
    progress = 0
  }

  Timer {
    id: brewTimer
    interval: 60
    repeat: true
    running: false
    onTriggered: {
      progress = Math.min(100, progress + 2)
      if (progress >= 100) finishBrew()
    }
  }

  // background image
  Image {
    anchors.fill: parent
    source: "coffee.png"
    fillMode: Image.PreserveAspectCrop
  }

  // home screen
  Item {
    anchors.fill: parent
    visible: !root.brewing && !root.done

    Text {
        text: "Good Morning, Wyatt"
        color: "white"
        font.pixelSize: 34
        font.family: poppinsLight.name;

        x: 0
        y: 45
        width: parent.width
        anchors.horizontalCenter: parent.horizontalCenter
        horizontalAlignment: Text.AlignHCenter
   }

   Text {
        text: "12:30 pm"
        color: "white"
        font.pixelSize: 64
        font.family: poppinsLight.name;

        x: 0
        y: 110
        width: parent.width
        horizontalAlignment: Text.AlignHCenter
   }

// size buttons row
Item {
  width: 520
  height: 60
  anchors.horizontalCenter: parent.horizontalCenter
  y: 260

  Rectangle {
    id: pillSmall
    x: 0; y: 0
    width: 160; height: 50
    radius: 25
    color: (root.selectedSize === 0) ? "white" : "transparent"
    border.width: 2
    border.color: (root.selectedSize === 0) ? "white" : '#ffffff'
    MouseArea { anchors.fill: parent; onClicked: root.selectedSize = 0 }
    Text {
        anchors.topMargin: 8;
      font.family: poppinsLight.name
      anchors.fill: parent
      verticalAlignment: Text.AlignVCenter
      horizontalAlignment: Text.AlignHCenter
      text: "Small"
      color: (root.selectedSize === 0) ? "#222222" : "white"
      font.pixelSize: 22
    }
  }

  Rectangle {
    id: pillMed
    x: 180; y: 0
    width: 160; height: 50
    radius: 25
    color: (root.selectedSize === 1) ? "white" : "transparent"
    border.width: 2
    border.color: (root.selectedSize === 1) ? "white" : '#ffffff'
    MouseArea { anchors.fill: parent; onClicked: root.selectedSize = 1 }
    Text {
        anchors.topMargin: 8;
      font.family: poppinsLight.name
      anchors.fill: parent
      verticalAlignment: Text.AlignVCenter
      horizontalAlignment: Text.AlignHCenter
      text: "Med"
      color: (root.selectedSize === 1) ? "#222222" : "white"
      font.pixelSize: 22
    }
  }

  Rectangle {
    id: pillLarge
    x: 360; y: 0
    width: 160; height: 50
    radius: 25
    color: (root.selectedSize === 2) ? "white" : "transparent"
    border.width: 2
    border.color: (root.selectedSize === 2) ? "white" : '#ffffff'
    MouseArea { anchors.fill: parent; onClicked: root.selectedSize = 2 }
    Text {
        anchors.topMargin: 8;
      font.family: poppinsLight.name
      anchors.fill: parent
      verticalAlignment: Text.AlignVCenter
      horizontalAlignment: Text.AlignHCenter
      text: "Large"
      color: (root.selectedSize === 2) ? "#222222" : "white"
      font.pixelSize: 22
    }
  }
}

// Brew button
Rectangle {
      width: 280
      height: 54
      radius: 27
      color: "white"
      anchors.horizontalCenter: parent.horizontalCenter
      y: 340

      MouseArea { anchors.fill: parent; onClicked: root.startBrew() }

      Text {
        font.family: poppinsLight.name;
        anchors.topMargin: 10;
        anchors.fill: parent; verticalAlignment: Text.AlignVCenter; horizontalAlignment: Text.AlignHCenter;
        text: "Brew"
        color: "#222"
        font.pixelSize: 22
      }
    }
  }

  // brewing screen
  Item {
    anchors.fill: parent
    visible: root.brewing

    Text {
      text: "Brewing " + root.selectedState
      color: "white"
      font.pixelSize: 34
      font.family: poppinsLight.name;
      width: parent.width
      anchors.horizontalCenter: parent.horizontalCenter
      horizontalAlignment: Text.AlignHCenter
      y: 70
    }

    // progress bar outer
    Rectangle {
      width: 700
      height: 44
      radius: 22
      color: "transparent"
      border.width: 3
      border.color: '#ffffff'
      anchors.horizontalCenter: parent.horizontalCenter
      y: 360

      // fill
      Rectangle {
        x: 3; y: 3
        height: parent.height - 6
        radius: (parent.height - 6) / 2
        width: Math.max(0, (parent.width - 6) * root.progress / 100)
        color: "white"
      }
    }
  }

// done screen
Item {
    anchors.fill: parent
    visible: root.done

    Text {
      text: "Enjoy!"
      color: "white"
      font.pixelSize: 38
      anchors.horizontalCenter: parent.horizontalCenter
      horizontalAlignment: Text.AlignHCenter
      font.family: poppinsLight.name
      width: parent.width
      y: 75
    }

    Rectangle {
      width: 300
      height: 54
      radius: 27
      color: "white"
      anchors.horizontalCenter: parent.horizontalCenter
      y: 340

      MouseArea { anchors.fill: parent; onClicked: root.resetHome() }

      Text {
        anchors.centerIn: parent
        text: "Brew Another"
        font.family: poppinsLight.name
        width: parent.width
        color: "#222"
        font.pixelSize: 22
        verticalAlignment: Text.AlignVCenter
        horizontalAlignment: Text.AlignHCenter
      }
    }
  }
}