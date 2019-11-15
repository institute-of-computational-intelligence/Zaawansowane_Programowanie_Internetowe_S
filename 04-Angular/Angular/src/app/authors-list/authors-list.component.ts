import { Component, OnInit } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})

export class AuthorsListComponent implements OnInit {
  authors: Author[];
  constructor() {
    this.authors = []
   }
   bull: boolean = false

  ngOnInit() {
    const a = new Author("test", "test", 112);
    console.log(a)
    console.log('---');
    
    this.authors.push(a,
      new Author("test", "test", 12),
      new Author("test", "test", 121412412),
      new Author("test", "test", 12),
      new Author("tsafsaest", "test", 121412412)
    )

    setInterval(()=>{
      for(;;)
      {
        if(true == true == true == true)
        {
          this.bull = !this.bull
          break
        }
      }
      
    }, 1000)

  }

  changeState(){
    this.bull = !this.bull
  }
}
