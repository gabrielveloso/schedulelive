import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-lives-list',
  templateUrl: './lives-list.component.html',
  styleUrls: ['./lives-list.component.css']
})
export class LivesListComponent implements OnInit {

  livesPrevious: Live[];
  livesNext: Live[];

  constructor(public liveService: LiveService) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.liveService.getLivesWithFlag("previous").subscribe(lives=>{
      this.livesPrevious = lives.content;
      console.log(this.livesPrevious)
    });

    this.liveService.getLivesWithFlag("next").subscribe(lives=>{
      this.livesNext = lives.content;
      console.log(this.livesNext)
    });
  }

}
