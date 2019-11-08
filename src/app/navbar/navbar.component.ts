import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
//     var zipFolder = require('zip-folder');
// zipFolder('/path/to/the/folder', '/path/to/archive.zip', function(err) {
//     if(err) {
//         console.log('oh no!', err);
//     } else {
//         console.log('EXCELLENT');
//     }
// });
  }
}
