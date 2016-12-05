import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    titlePage: string = 'Home';

    /**
     * Attendre la version stable de 'ng2-bootstrap'
     * afin que cala puisse marcher avec Angular 2.2.1
     */
    // Carousel properties
    // interval: number = 5000;
    // noTransition: boolean = false;
    // noPause: boolean = true;
    // slides: Array<any> = [];

    constructor() {
        // this.slides = [
        //     {active: false, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'},
        //     {active: false, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'},
        //     {active: false, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'},
        //     {active: true, image: 'http://lorempixel.com/980/480/food/', title: 'Quis eu consectetur culpa aliqua fugiat aliqua.', text: 'Non occaecat elit deserunt tempor sint quis cillum. Sit dolore duis laborum consequat pariatur deserunt qui commodo nulla. Et aliquip aliquip magna sint sunt nostrud commodo eu. Ea fugiat eiusmod incididunt minim aliqua irure non cillum voluptate.'}
        // ];
    }

    ngOnInit() {
    }

}
