import { Component, OnInit, Inject } from '@angular/core';
import swal from 'sweetalert2';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from '@angular/core/src/render3';
declare const $: any;
@Component({
  selector: 'app-formview',
  templateUrl: './formview.component.html',
  styleUrls: ['./formview.component.scss']
})
export class FormViewComponent implements OnInit {
  // item = { fileType: 'header' };

  // validation variables
  mailTypeSelected = '';

  url: any;
  numberError = false;

  form: any;
  attriWithOUTCondQues: any;
  attributesWithCondQues: any;
  conQuestList = [];
  formCurrentPage: any;
  currentPageIndex = 0;
  showTable = false;
  DropDownSettings = {};
  formListNo: any;
  constructor(
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
    @Inject(AngularFirestore) public firestore: AngularFirestore,

    @Inject(Router) private router: Router, ) {
    this.subscribeRouteChanges();


  }
  ngOnInit() {
    this.DropDownSettings = {
      singleSelection: false,
      idField: 'label',
      textField: 'label',
      enableCheckAll: false,
      itemsShowLimit: 3,
      // limitSelection: ,
      allowSearchFilter: true,
    };

  }




  subscribeRouteChanges() {
    this.activatedRoute.queryParams
      .subscribe((e: Params) => {
        this.formListNo = e.formId;
        this.getFormById(this.formListNo);

        console.log(e);

      });

  }

  getFormById(id) {
    // this.firestore.collection('formList/' + id).doc(id).get();
    // console.log(this.firestore.collection('formList/' + id));
    this.firestore.collection('formList').doc(id).get().subscribe(doc => {
      const completForm = doc.data();
      // remove Conditional quetions from form  and save in new array
      this.attriWithOUTCondQues = doc.data();
      this.attributesWithCondQues = doc.data();

      // attriWithOUTCondQues = completForm.attributes.filter(page => {
      //   return page.field.forEach(el => {
      //     return el.makeItCondsnl;
      //   });
      // });
      // attributesWithCondQues = completForm.attributes.filter(page => {
      //   page.field.forEach(el => {
      //     return !el.makeItCondsnl;
      //   });
      // });
      // this.form = completForm;

      for (let i = 0; i < this.attriWithOUTCondQues.attributes.length; i++) {


        for (let j = 0; j < this.attriWithOUTCondQues.attributes[i].field.length; j++) {


          if (this.attriWithOUTCondQues.attributes[i].field[j].makeItCondsnl) {
            this.conQuestList.push(this.attriWithOUTCondQues.attributes[i].field[j]);

            this.attriWithOUTCondQues.attributes[i].field.splice(j, 1);
          }
        }
      }
      this.form = this.attriWithOUTCondQues;
      console.log(this.conQuestList);

      // for (let i = 0; i < this.attributesWithCondQues.attributes.length; i++) {


      //   for (let j = 0; j < this.attributesWithCondQues.attributes[i].field.length; j++) {


      //     if (!this.attributesWithCondQues.attributes[i].field[j].makeItCondsnl) {


      //       this.attributesWithCondQues.attributes[i].field.splice(j, 1);
      //     }
      //   }
      // }




      console.log(this.attriWithOUTCondQues);

      this.formCurrentPage = this.form.attributes[this.currentPageIndex];
      $('.maker-input').css('fontFamily', this.form.theme.fontFamily);
      $('.user-input').css('fontFamily', this.form.theme.fontFamily);
      $('.maker-input').css('color', this.form.theme.qestColor);
      $('.user-input').css('color', this.form.theme.ansColor);

      this.changeQuestColor();
      this.changeAnsColor();
    });
  }
  changeQuestColor() {
    const nodes = document.getElementsByClassName('maker-input') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i].getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
      for (let j = 0; j < node.length; j++) {
        node[j].style.color = this.form.theme.qestColor;

      }
    }
  }
  changeAnsColor() {
    const nodes = document.getElementsByClassName('user-input') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i].getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
      for (let j = 0; j < node.length; j++) {
        node[j].style.color = this.form.theme.ansColor;
      }
    }
  }

  countWord(str, obj) {
    // const counter = str.match(/(\w+)/g).length;
    // console.log(obj);
    // console.log(str);

    // obj.srcElement.style.minWidth = ((str.length + 1) * 9) + 'px';
    // if (obj.srcElement.style.minWidth < '320px') {
    //   obj.srcElement.style.minWidth = ((str.length + 1) * 9) + 'px';
    // }
    console.log(str.length % 60);

    if ((str.length > 0) && (str.length % 60 === 0)) {
      obj.srcElement.style.height = (str.length / 60) * 30 + 30 + 'px';
    }

    if ((str.length === 0) && (str.length % 60 === 0)) {
      obj.srcElement.style.height = 40 + 'px';

    }

    console.log(obj.srcElement.style.width);

    console.log(((str.length + 1) * 8));

    // console.log(counters);
    // if (!obj.savesize) {
    //   {
    //     obj.savesize = obj.size;
    //     // obj.size = Math.max(obj.savesize, obj.value.length);
    //   }

    // }

  }
  Expand(obj) {
    if (!obj.savesize) {
      {
        obj.savesize = obj.size;
        obj.size = Math.max(obj.savesize, obj.value.length);
      }

    }
  }


  backToForm() {
    // tslint:disable-next-line: radix
    this.router.navigate(['/home/form'], { queryParams: { formId: this.formListNo } });

  }
  // check object is not null or valid

  isValidObject(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {

        return true;
      }
    }
    return false;
  }
  setDateValidation(val) {

  }
  onSelectFile(event, val) {
    console.log(event.target.files[0]);
    console.log(val.validOption);
    let uploadFileSize = event.target.files[0].size / 1024;
    if (this.isValidObject(val.validOption)) {
      if (val.validOption.value === 'Mb') {
        uploadFileSize /= 1024;
      }
      if (val.validOption.value === 'Gb') {
        uploadFileSize = uploadFileSize / 1024 / 1024;
      }
      if (uploadFileSize < val.validOption.size) {
        if (event.target.files && event.target.files[0]) {
          val.uploadedFileByUser.name = event.target.files[0].name;
          const reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          // tslint:disable-next-line: no-shadowed-variable
          reader.onload = (event) => { // called once readAsDataURL is completed
            console.log(val);

            this.url = (event.target as FileReader).result;
            val.uploadedFileByUser.url = this.url;
          };
        }
      } else {
        swal('Error', 'File Size Exceed Limit of ' + val.validOption.size + val.validOption.value, 'error');

      }
    } else {
      if (event.target.files && event.target.files[0]) {
        val.uploadedFileByUser.name = event.target.files[0].name;

        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event) => { // called once readAsDataURL is completed
          console.log(event);

          this.url = (event.target as FileReader).result;
          val.uploadedFileByUser.url = this.url;
        };
      }


    }


  }
  uploadFileClick(id) {
    document.getElementById(id).click();
  }



  checkedState(item, val, index) {
    console.log(val);
    // if (this.isValidObject(item.validOption)) {
    const selected = item.values.filter(c => c.value);
    console.log(selected);

    if ((item.validOption.value !== 'min') && (selected.length > item.validOption.limit)) {
      val.value = false;
    }

    item.userResponse = selected.filter(c => c.value);
    console.log(item.userResponse);


    console.log(this.conQuestList);

    this.conQuestList.forEach(el => {
      if (item.id == el.ConditionalQuest.question.id) {




        console.log('id match');
        // debugger;


        if (item.userResponse.length < 1) {
          const indexValue = this.formCurrentPage.field.indexOf(el);
          if (indexValue !== -1) {


            this.formCurrentPage.field.splice(indexValue, 1);
          }
        } else {


          // item.userResponse.forEach(obj => {
          for (let m = 0; m < item.userResponse.length; m++) {
            const obj = item.userResponse[m];

            if (this.containLabel(el.ConditionalQuest.answers.label, item.userResponse)) {

              if ((obj.label === el.ConditionalQuest.answers.label)) {
                console.log('obj match');


                if (obj.value) {
                  if (!this.containsObject(el, this.formCurrentPage.field)) {
                    this.formCurrentPage.field.splice(index + 1, 0, el);

                  }

                }
              }



              // else {

              //   console.log(' its falls ');
              //   // if (this.containLabel(el.ConditionalQuest.answers.label, item.userResponse)) {
              //   console.log(this.containsObject(el, this.formCurrentPage.field));

              //   // }

              //   if (this.containsObject(el, this.formCurrentPage.field)) {
              //     console.log('delete' + index + 1);

              //     this.formCurrentPage.field.splice(index + 1, 1);

              //   }
              // }
            } else {
              const indexValue = this.formCurrentPage.field.indexOf(el);
              if (indexValue !== -1) {


                this.formCurrentPage.field.splice(indexValue, 1);
              }
            }
          }

        }

      }
    });

  }

  containLabel(label, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].label === label) {
        return true;
      }
    }

    return false;
  }

  containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  }


  checkConditionalQuestForTrueFalse(item, index) {
    // inputValue
    this.conQuestList.forEach(el => {
      if (item.id == el.ConditionalQuest.question.id) {


        if (item.inputValue === el.ConditionalQuest.answers.value) {

          if (!this.containsObject(el, this.formCurrentPage.field)) {
            this.formCurrentPage.field.splice(index + 1, 0, el);

          }

        } else {
          const indexValue = this.formCurrentPage.field.indexOf(el);
          if (indexValue !== -1) {


            this.formCurrentPage.field.splice(indexValue, 1);
          }
        }



      }
    });
  }

  checkConditionalQuestForYesNo() {

  }

  ratingColor(item, i) {
    item.RatingByUser = i + 1;
    for (let j = 0; j < item.ratingArray.length; j++) {
      // document.getElementsByClassName(item + j);;
      if (i >= j) {
        if (item.selestedValidation == 'btn btn-light') {
          document.getElementById(item.name + j).style.backgroundColor = '#fcf403';

        } else {

          document.getElementById(item.name + j).style.color = '#fcf403';
        }
      } else {
        document.getElementById(item.name + j).style.color = 'black';
        if (item.selestedValidation == 'btn btn-light') {
          document.getElementById(item.name + j).style.backgroundColor = '#f8f9fa';

        }
      }
      // console.log(nodes);
      // nodes[j].style.color = 'yellow';
    }


  }
  goToPage(index) {
    this.currentPageIndex = index;
    this.formCurrentPage = this.form.attributes[this.currentPageIndex];
  }



  mailExtention(val, index) {
    val.mailType = val.emailList[index];


  }


  // numberInputValidation(item) {

  //   if (item.value > item.validOption.max) {
  //     // item.value = item.validOption.max;
  //     this.numberError = true;

  //   } else if (item.value < item.validOption.min) {
  //     // item.value = item.validOption.min;
  //     this.numberError = true;

  //   } else {
  //     this.numberError = false;

  //   }
  //   console.log(this.numberError);

  //   console.log(item.value);
  //   console.log(item);


  // }



  navigateToPage(val) {
    this.currentPageIndex = this.currentPageIndex + val;
    this.formCurrentPage = this.form.attributes[this.currentPageIndex];

  }


  submitResult(val, bc) {
    console.log(this.form.attributes);

    console.log(val);

    let errorCount = 0;
    if (this.numberError) {
      swal('Error', ' Please fill valid details', 'error');
      return;
    }
    if (bc) {

      swal('Error', ' Please Fill The Mandatory Fields (*)', 'error');
      return;
    }
    this.form.attributes.forEach(element => {
      element.field.forEach(el => {

        // tslint:disable-next-line: no-debugger
        if (el.required) {
          if ((el.fielType === 'rating')) {

            if (el.RatingByUser === '') {


              swal('Error', ' Please fill Rating', 'error');
              errorCount++;
              return;
            }
            if ((el.userComment.want) && (el.userComment.comment === '')) {
              swal('Error', ' Please Comment On Your Rating', 'error');
              errorCount++;
              return;
            }

          }
          if (el.fielType === 'number') {
            if (this.isValidObject(el.value)) {
              swal('Error', 'Please fill the mendatory field', 'error');
              errorCount++;
              return;
            }
            if (this.isValidObject(el.validOption)) {
              if ((el.validOption.min) && (el.validOption.min > el.value)) {
                swal('Error', 'Please enter grater then minimum value', 'error');
                errorCount++;
                return;
              }
              if ((el.validOption.max) && (el.validOption.max < el.value)) {
                swal('Error', 'Please enter less then maximum value', 'error');
                errorCount++;
                return;
              }
            }
          }
          if ((el.fielType === 'file') && (el.uploadedFileByUser.url === '')) {
            swal('Error', ' Please Upload File', 'error');
            errorCount++;

            return;

          }
          if ((el.fielType === 'dropdown') || (el.fielType === 'multiple') || (el.fielType === 'picture')) {

            if (el.userResponse.length > 0) {

              if ((el.validOption.value === 'max') && (el.userResponse.length < el.validOption.limit)) {
                swal('Error', 'please  ' + el.validOption.label + '  ' + el.validOption.limit, 'error');

                errorCount++;

                return;
              } else if ((el.validOption.value === 'min') && (el.userResponse.length < el.validOption.limit)) {
                swal('Error', 'please  ' + el.validOption.label + '  ' + el.validOption.limit, 'error');
                errorCount++;

                return;
              } else {
                if ((el.validOption.value === 'both') && (el.userResponse.length !== el.validOption.limit)) {
                  swal('Error', 'please  ' + el.validOption.label + '  ' + el.validOption.limit, 'error');

                  errorCount++;

                  return;

                }
              }
            } else {
              // swal('Error', 'please fill  ' + el.label, 'error');

              // errorCount++;

              // return;

            }




          }

          if ((el.fielType === 'trueFalse') && (el.inputValue === '')) {
            swal('Error', 'Choose Option For' + el.label, 'error');
            errorCount++;
            return;

          }

          if ((el.fielType === 'yesNo') && (el.inputValue === '')) {
            console.log(el);

            swal('Error', 'Choose Option For' + el.label, 'error');
            errorCount++;
            return;

          }
        }
      });
    });
    if (errorCount == 0) {
      this.showTable = true;

    }


  }

  onItemSelect(event, item) {
    console.log(event);

    if (this.isValidObject(item.validOption)) {

      if (item.validOption.value === 'max') {
        this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: item.validOption.limit });

      } else if (item.validOption.value === 'min') {
        this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: item.values.length + 1 });

      } else {


        if (item.validOption.value === 'both') {
          this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: item.validOption.limit });


        }
      }

    }



    // this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: 2 });

    console.log(item);

  }

}
