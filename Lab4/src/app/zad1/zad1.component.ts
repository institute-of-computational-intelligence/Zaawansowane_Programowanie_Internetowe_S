import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad1',
  templateUrl: './zad1.component.html',
  styleUrls: ['./zad1.component.css']
})
export class Zad1Component implements OnInit {
  zad1pole:string = "Test";
  zad2style:any = {};
  zad2aOn:boolean = false;
  zad2bOn:boolean = false;
  zad5map = [ {"link1":false,"link2":false,"link3":false,"link4":false} ]
  constructor() { }

  ngOnInit() {
    this.zad5();
  }
  zad1(){
    this.zad1pole = "Mateusz Wypchlak"
  }
zad2a(){
  if(!this.zad2aOn){
  this.zad2style = {"font-size.px":20}
  this.zad2aOn = true;
  }else{
    this.zad2style = {"font-size.px":13}
    this.zad2aOn = false;
  }
}
zad2b(){
  if(!this.zad2bOn){
    this.zad2style = {"color":"green","text-decoration": "line-through"}
    this.zad2bOn = true;
    }else{
      this.zad2style = {"color":"black","text-decoration": "none"}
      this.zad2bOn = false;
    }
  }

    zad5(){
   
  
    }
 
  
}

