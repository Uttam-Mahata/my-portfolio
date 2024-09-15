import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  items: any[];

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
