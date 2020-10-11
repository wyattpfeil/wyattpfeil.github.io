
var SubmitCodeButton = new TextButton(0.1, 0.06)
SubmitCodeButton.innerColor = Color3.fromRGB(75, 75, 75)
SubmitCodeButton.bevel = 10
SubmitCodeButton.textColor = Color3.fromRGB(200, 200, 200)
SubmitCodeButton.position = Vector2.new(0.9, 0.45)
SubmitCodeButton.text = "Run Code"

SubmitCodeButton.onButtonClicked = function() {
    console.log("Clicked!")
    var codeToRun = document.querySelector("#two_0 > foreignObject > div > textarea").value
    var elements = document.getElementById("two_0").childNodes
    elements.forEach(function(element){
        console.log(element)
        if(element.getAttribute("fill") == "#c8c8c8" || element.getAttribute("fill") == "rgba(75,75,75, 1)" || element.tagName == "foreignObject"){
            
        } else {
            element.remove()
        }
    })
    eval(codeToRun)
}

var CodeInput = new NewTextBox(0.2, 0.2)
CodeInput.position = Vector2.new(0.8, 0.5)

/*
var CoinLabel = new TextButton(0.1, 0.1)
CoinLabel.onlyTextVisible = true
CoinLabel.position = Vector2.new(0.5, 0.4)

var FlipButton = new TextButton(0.1, 0.1)
FlipButton.size = Vector2.new(0.1, 0.06)
FlipButton.text = "Flip Coin!"
FlipButton.innerColor = Color3.fromRGB(90, 90, 90)
FlipButton.textColor = Color3.fromRGB(220, 220, 220)
FlipButton.bevel = 10

FlipButton.onButtonClicked = function() {
    var HeadsOrTails = Math.round(Math.random())
    if(HeadsOrTails == 0) {
        CoinLabel.text = "Heads"
    } else {
        CoinLabel.text = "Tails"
    }
    FlipButton.innerColor = Color3.fromRandom()
}
*/