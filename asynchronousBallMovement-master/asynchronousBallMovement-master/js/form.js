class Form{
    constructor(){}
    display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(300,100)
    var input = createInput("name");
    input.position(350,250);
    var button = createButton('play');
    button.position(350,300);   
    var greeting = createElement('h2');
    button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount+=1;
    player.update(name);
    player.update(playerCount);
    greeting.html("Wassup idiot"+name)
    greeting.position(300,300);
    })
    };

}