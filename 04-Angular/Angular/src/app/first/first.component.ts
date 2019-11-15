import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  title: string = "Sample title"
  obj = {
    name: "Krzysztof",
    surname: "S"
  }
  H1Class : any;

  constructor() { }

  
  ngOnInit() {
    setInterval(()=>{
      if(this.H1Class == "Clicked")
        this.H1Class = "Clicked2"
      else
        this.H1Class = "Clicked"
    }, 1000)

    
  }

  fun(){
    
    
    return "Function result"
  }

  alert(){
    alert("Test");
  }
}
