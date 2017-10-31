import { Component } from '@angular/core';
import { Response } from '@angular/http';

<<<<<<< HEAD
import { DataStorageService } from '../shared/data-storage.service';
=======
import { DataStorageService } from './../shared/data-storage.service';
>>>>>>> 8f00ed4fa7fdd31675dc524a4323f9f085f5a105

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
<<<<<<< HEAD
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
=======
  constructor(private dataStorageService: DataStorageService) { }
  
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) =>{
          console.log(response);
          
>>>>>>> 8f00ed4fa7fdd31675dc524a4323f9f085f5a105
        }
      );
  }

<<<<<<< HEAD
  onFetchData() {
=======
  onFetchData(){
>>>>>>> 8f00ed4fa7fdd31675dc524a4323f9f085f5a105
    this.dataStorageService.getRecipes();
  }
}
