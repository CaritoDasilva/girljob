import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css']
})
export class PostulantsComponent implements OnInit {
  
  public postulants = [];
  public documentId = null;
public currentStatus = 1;
public newPostulantForm = new FormGroup({
  fullname: new FormControl(''),
  photo: new FormControl(''),
  id: new FormControl('')
});
  constructor(
    private firestoreService: FirestoreService
  ) { 
    this.newPostulantForm.setValue({
      id: '',
      fullname: '',
      photo: ''
    });
  }

  ngOnInit() {
    this.firestoreService.getPostulants().subscribe((postulantSnapshot) => {
      this.postulants = [];
      postulantSnapshot.forEach((postulantData: any) => {
        this.postulants.push({
          id: postulantData.payload.doc.id,
          data: postulantData.payload.doc.data()
        });
      })
    });
  }

  public newPostulant(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = {
        fullname: form.fullname,
        photo: form.photo
      }
      this.firestoreService.createPostulant(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.newPostulantForm.setValue({
          fullname: '',
          photo: '',
          id: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        fullname: form.fullname,
        photo: form.photo
      }
      this.firestoreService.updatePostulant(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newPostulantForm.setValue({
          fullname: '',
          photo: '',
          id: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

}
