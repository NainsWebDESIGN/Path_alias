import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
    title = 'Welcome Guys';
    private TitleSubject = new BehaviorSubject(this.title);
    title$ = this.TitleSubject.asObservable();
    constructor() { }
    changeTitle(_Value: string) {
        this.title = _Value;
        this.TitleSubject.next(this.title);
    }
}
