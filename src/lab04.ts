class ChangeInput {
    value = 0;

    decreaseNumber() {
        if(this.value > 0 ) {
            this.value -= 1;
        }
    }
    
    increaseNumber() {
        this.value += 1;
    }
}

