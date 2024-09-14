import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';

  items: any[];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      // Education
      { label: 'Education', icon: 'pi pi-fw pi-book', routerLink: '/education' },
      // Projects
      { label: 'Projects', icon: 'pi pi-fw pi-briefcase', routerLink: '/projects' },
      { label: 'Skills', icon: 'pi pi-fw pi-cog', routerLink: '/skills' },
      { label: 'Experience', icon: 'pi pi-fw pi-file', routerLink: '/experience' },
      { label: 'Contact', icon: 'pi pi-fw pi-envelope', routerLink: '/contact' },
    ];
  }

}

