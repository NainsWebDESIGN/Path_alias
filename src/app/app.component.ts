import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '@service/app.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = '';
  title$ = new Subscription();
  constructor(private app: AppService) { }
  change(_Text) {
    this.app.changeTitle(_Text.value);
  }
  ngOnInit() {
    this.title$ = this.app.title$.subscribe(el => {
      this.title = el;
    })
  }
  ngOnDestroy() {
    this.title$.unsubscribe();
  }
}
