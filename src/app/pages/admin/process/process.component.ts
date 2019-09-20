import { Component, OnInit, Inject, } from '@angular/core';
import { Router } from '@angular/router';
import { field } from 'src/app/class/global.model';
import { AlertService } from 'src/app/service/alert.service';
import { AngularFirestore } from '@angular/fire/firestore';

declare const $: any;
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})

export class ProcessComponent implements OnInit {

  modelFields: Array<field> = [];
  model: any = {
    name: '',
    description: '',
    category: '',
    folder: {
      FolderName: '',
      FileName: '',
      pages: []
    },
    theme: {
      fontFamily: 'Poppins',
      qestColor: 'var(--black-color)',
      ansColor: 'var(--black-color)',
      bgColor: '000000',
      textColor: '000000',
      bannerImage: ''
    },

    attributes: [
      {
        name: 'Page 1',
        field: this.modelFields
      }]
  };
  formStorge = [];
  constructor(
    @Inject(Router) private router: Router,
    @Inject(AlertService) private alertService: AlertService,
    @Inject(AngularFirestore) public firestore: AngularFirestore) {

  }
  ngOnInit() {
    this.getFormFromFirebase();

  }

  getFormFromFirebase() {
    this.firestore.collection('formList').get().subscribe(doc => {
      doc.forEach((elem) => {
        const id = elem.id;
        const form = elem.data();
        form.id = id;
        this.formStorge.push(form);
      });
    });

  }
  goToFoermEditor() {
    this.formStorge.push(this.model);
    this.firestore.collection('formList').add(this.model).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      this.router.navigate(['/home/form'], { queryParams: { formId: docRef.id } });
      $('#ProcessDetailsModel').modal('hide');

    }).catch((error) => {
      this.alertService.showInfoAlert('Error adding document: ');

    });
  }

  editProcess(i) {
    this.router.navigate(['/home/form'], { queryParams: { formId: i } });

  }
  deleteProcess(id, index) {
    this.firestore.collection('formList').doc(id).delete().then(() => {
      this.alertService.showInfoAlert('Document successfully deleted!');

    }).catch((error) => {
      this.alertService.showInfoAlert('Error removing document: ');
    });

    this.formStorge.splice(index, 1);
  }
}
