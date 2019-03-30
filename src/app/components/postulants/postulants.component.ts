import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css']
})
export class PostulantsComponent implements OnInit {

  public postulants = [];
  constructor(
    private firestoreService: FirestoreService
  ) { }

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

}
