import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  track:any = "";

  async loadImage(event:any){
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = async (event:any) => {

     this.track  = {
        // name: selectedFile.name,
        path: event.target.result,
        // liked:false,
        // image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHaF-Os2eIoblm4ZVHpD6Segb0qd7kC5MvJuMu4CtPQqIz-MQODzbjAOi2LOFxDB3uSY&usqp=CAU"
      };

      console.log(this.track.path)
    }

   reader.readAsDataURL(selectedFile);

  //  setTimeout(()=>{
  //   this.getPlayList()
  //  }, 50)
    
  }

}
