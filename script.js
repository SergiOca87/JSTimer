class Timer {
    constructor(startButton, pauseButton, durationInput ) {
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.durationInput = durationInput;

        //listeners
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
       
        //First tick is initiated manually, otherwise the user would have to wait a second for the setInterval to start
        this.tick();

         //Run the tick function every second
        this.interval = setInterval(this.tick, 1000); 
    }

    pause = () => {
        //We clear (pause) the timer we have initiated
        clearInterval(this.interval);
    }

    tick = () => {

        //If we are at 0, invoke pause, else, subtract 1 to timeRemaining
        this.timeRemaining <= 0 ? this.pause() : this.timeRemaining = this.timeRemaining - 1;
        
    }

    //Getters and Setters, special JS keywords available inside of Objects
    //Allows us to set and to get a property, in this case, we use it to update the UI input
    //and to use it in the tick method
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    //In a setter, the aegumet gets passed even if we write " this.timeRemaining = this.timeRemaining - 1;", that value will be passed in as "time"
    set timeRemaining(time) {
        this.durationInput.value = time
    }
}

//Selectors
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const duration = document.querySelector('#duration');

new Timer( start, pause, duration);