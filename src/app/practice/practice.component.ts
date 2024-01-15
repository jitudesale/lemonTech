import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  
  treeData: any;
  lists: any[] = [];

  constructor(private menuservice: MenuService) { }

  ngOnInit(): void {
    this.menuDetails();
  }

  menuDetails() {
    this.menuservice.getMenuData().subscribe(
      (data) => {
        this.treeData = data;
        this.lists = this.treeData.data;
        this.lists.forEach(item => {
          item.showChildren = false;
        });
       
      }
    );
  }

  toggleChildVisibility(item: any): void {
    if (this.hasChildren(item)) {
      alert('Parent has children!');
    } else {
      alert('Parent has no children!');
    }

    item.showChildren = !item.showChildren;
  }

  hasChildren(parent: any): boolean {
    return this.lists.some(child => child.refMenuId === parent.id);
  }
}




