import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  items: any[];
  isDarkMode: boolean = false;

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
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'vela-blue';
    this.applyTheme(this.isDarkMode ? 'vela-blue' : 'saga-blue');
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'vela-blue' : 'saga-blue';
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
  }

  applyTheme(theme: string) {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = `assets/themes/${theme}/theme.css`;
    if (theme === 'vela-blue') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }
  

}
