import {Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable, BehaviorSubject } from 'rxjs';

import {User} from '../models';
import {UserService} from '../services';
import {Router} from '@angular/router';

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
	 styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    currentUser: User;
    // public homeSubject = new BehaviorSubject<any>();

    constructor(private userService: UserService,
                private router: Router) {

    }


    ngOnInit() {
        this.userService.currentUser.subscribe(
            (userData) => {
                this.currentUser = userData;
            }
        )
       // this.homeSubject.asObservable().subscribe(function (res) {
         //   console.log('==================', res);
        // });
    }

    logout() {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    }
}
