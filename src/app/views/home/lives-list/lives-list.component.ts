import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';


@Component({
  selector: 'app-lives-list',
  templateUrl: './lives-list.component.html',
  styleUrls: ['./lives-list.component.css'],
})
export class LivesListComponent implements OnInit {

  livesPrevious: Live[] = [];
  livesNext: Live[] = [];

  constructor(public liveService: LiveService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.liveService.getLivesWithFlag("previous").subscribe(lives=>{
      this.livesPrevious = lives.content;
      console.log("Previous");
      console.log(this.livesPrevious)

      this.livesPrevious.forEach(live=>{
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
    });

    this.liveService.getLivesWithFlag("next").subscribe(lives=>{
      this.livesNext = lives.content;
      console.log("Next");
      console.log(this.livesNext);

      this.livesNext.forEach(live=>{
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
    });
    
  }

}
