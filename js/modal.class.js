class Modal{
    element = new Object();
    title;
    message;
    button;
    
    constructor(element, titleElement, messageElement, footerElement){
        this.element = element;
        this.title = titleElement;
        this.message = messageElement;
        this.button = footerElement;
    }

    setTitleText(text){
        this.title.innerHTML = text;
    }

    setMessageText(text){
        this.message.innerHTML = text;
    }
    accept(){
        close();
        alert("ACCEPT");
    }

    setButton(text){
        this.button.innerHTML = text;
        this.button.setAttribute("onclick", alert("BOOM"));
        console.log("Attribute Set!");
    }

    toggle(){
        this.element.toggle();
        console.log("TOGGLED");
    }

    test(){
        console.log("TEST");
    }

    close(){
        this.element.toggle();
        console.log("TOGGLED");
    }
}