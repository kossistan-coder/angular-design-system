import { Component, EventEmitter, Input, Output } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  applictionItems : MenuItem[] = [
    {
      icon: 'fa-solid fa-folder',
      label: 'Projects',
      isOpen: false,
    },
    {
      icon: 'fa-solid fa-chart-bar',
      label: 'Performance',
      isOpen: false,
    },
    {
      icon: 'fa-solid fa-gear',
      label: 'Settings',
      isOpen: false,
    }
  ]

  menuItems: MenuItem[] = [
    {
      icon: 'fa-solid fa-house',
      label: 'Dashboard',
      isOpen: false,
    },
    {
      icon: 'fa-solid fa-bookmark',
      label: 'Bookmarks',
      isOpen: false,
    },
    {
      icon: 'fas fa-envelope',
      label: 'Messages'
    },
    {
      icon : 'fa-solid fa-users',
      label : 'Team'
    },

    {
      icon : 'fa-solid fa-calendar',
      label : 'Calendar'
    },
    {
      icon : 'fa-solid fa-gear',
      label : 'Settings'
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

}
