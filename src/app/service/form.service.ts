import { Injectable, } from '@angular/core';
import { of } from 'rxjs';

const formList = {
  count: 2,
  page: 0,
  total_pages: 0,
  items_per_page: 0,
  items: [
    {
      id: 0,
      created_at: '2019-09-12T08:55:39.214Z',
      create_user_id: 0,
      create_user: {
        id: 1,
        name: 'John Snow'
      },
      updated_at: '2019-09-12T08:55:39.214Z',
      update_user_id: 0,
      update_user: {
        id: 1,
        name: 'John Snow'
      },
      form_type: 'form_regular',
      status: 'draft',
      name: 'Form No 1',
      instructions: 'How to sale the product',
      category_id: 0,
      category_name: 'sales',
      language_code: 'string',
      restrict_submit_to: [
        0
      ],
      restrict_view_to: [
        0
      ],
      pre_populate: true,
      approve_automatically: true,
      admin_eyes_only: true,
      notify_alert_queue: true,
      fields: [
        {
          id: 0,
          parent_id: 0,
          rank: 0,
          field_type: 'autocomplete',
          label: 'string',
          instructions: 'string',
          required: true,
          task_field: true,
          json_logic: {},
          settings: {}
        }
      ],
      schema_id: 'string',
      schema_version: 0,
      is_read_only: true
    },
    {
      id: 0,
      created_at: '2019-09-12T08:55:39.214Z',
      create_user_id: 0,
      create_user: {
        id: 1,
        name: 'John Snow'
      },
      updated_at: '2019-09-12T08:55:39.214Z',
      update_user_id: 0,
      update_user: {
        id: 1,
        name: 'John Snow'
      },
      form_type: 'form_regular',
      status: 'draft',
      name: 'Form No 2',
      instructions: 'How to purchase the product',
      category_id: 0,
      category_name: 'Purchase',
      language_code: 'string',
      restrict_submit_to: [
        0
      ],
      restrict_view_to: [
        0
      ],
      pre_populate: true,
      approve_automatically: true,
      admin_eyes_only: true,
      notify_alert_queue: true,
      fields: [
        {
          id: 0,
          parent_id: 0,
          rank: 0,
          field_type: 'autocomplete',
          label: 'string',
          instructions: 'string',
          required: true,
          task_field: true,
          json_logic: {},
          settings: {}
        }
      ],
      schema_id: 'string',
      schema_version: 0,
      is_read_only: true
    },
    {
      id: 2,
      created_at: '2019-09-12T08:55:39.214Z',
      create_user_id: 0,
      create_user: {
        id: 1,
        name: 'John Snow'
      },
      updated_at: '2019-09-12T08:55:39.214Z',
      update_user_id: 0,
      update_user: {
        id: 1,
        name: 'John Snow'
      },
      form_type: 'form_regular',
      status: 'draft',
      name: 'Form No 3',
      instructions: 'IT Department Product testing review',
      category_id: 0,
      category_name: 'IT',
      language_code: 'string',
      restrict_submit_to: [
        0
      ],
      restrict_view_to: [
        0
      ],
      pre_populate: true,
      approve_automatically: true,
      admin_eyes_only: true,
      notify_alert_queue: true,
      fields: [
        {
          id: 0,
          parent_id: 0,
          rank: 0,
          field_type: 'autocomplete',
          label: 'string',
          instructions: 'string',
          required: true,
          task_field: true,
          json_logic: {},
          settings: {}
        }
      ],
      schema_id: 'string',
      schema_version: 0,
      is_read_only: true
    },
    {
      id: 3,
      created_at: '2019-09-12T08:55:39.214Z',
      create_user_id: 0,
      create_user: {
        id: 1,
        name: 'John Snow'
      },
      updated_at: '2019-09-12T08:55:39.214Z',
      update_user_id: 0,
      update_user: {
        id: 1,
        name: 'John Snow'
      },
      form_type: 'form_regular',
      status: 'draft',
      name: 'Form No 4',
      instructions: 'HR Deparment Hiring student for sales team',
      category_id: 0,
      category_name: 'HR',
      language_code: 'string',
      restrict_submit_to: [
        0
      ],
      restrict_view_to: [
        0
      ],
      pre_populate: true,
      approve_automatically: true,
      admin_eyes_only: true,
      notify_alert_queue: true,
      fields: [
        {
          id: 0,
          parent_id: 0,
          rank: 0,
          field_type: 'autocomplete',
          label: 'string',
          instructions: 'string',
          required: true,
          task_field: true,
          json_logic: {},
          settings: {}
        }
      ],
      schema_id: 'string',
      schema_version: 0,
      is_read_only: true
    }
  ]
};

const formById = {
  id: 0,
  created_at: '2019-09-12T08:55:39.214Z',
  create_user_id: 0,
  create_user: {
    id: 1,
    name: 'John Snow'
  },
  updated_at: '2019-09-12T08:55:39.214Z',
  update_user_id: 0,
  update_user: {
    id: 1,
    name: 'John Snow'
  },
  form_type: 'form_regular',
  status: 'draft',
  name: 'Form No 1',
  instructions: 'How to sale the product',
  category_id: 0,
  category_name: 'sales',
  language_code: 'string',
  restrict_submit_to: [
    0
  ],
  restrict_view_to: [
    0
  ],
  pre_populate: true,
  approve_automatically: true,
  admin_eyes_only: true,
  notify_alert_queue: true,
  fields: [
    {
      id: 0,
      parent_id: 0,
      rank: 0,
      field_type: 'autocomplete',
      label: 'string',
      instructions: 'string',
      required: true,
      task_field: true,
      json_logic: {},
      settings: {}
    }
  ],
  schema_id: 'string',
  schema_version: 0,
  is_read_only: true
};

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {

    if (!JSON.parse(localStorage.getItem('formList'))) {
      localStorage.setItem('formList', JSON.stringify(formList));
    }
  }




  // get all form
  getFormList() {
    return of(JSON.parse(localStorage.getItem('formList')));
  }

  // get form By id
  getFormById(id) {
    console.log(id);
    let form = {};
    const forms = JSON.parse(localStorage.getItem('formList'));
    forms.items.forEach(element => {
      console.log(element.id);
      if (element.id == id) {
        console.log('its Match');
        form = element;
        return of(element);

      }
    });
    // console.log(forms);

    return of(form);
  }

  // delete form by id

  deleteFormById(id) {
    const forms = JSON.parse(localStorage.getItem('formList'));
    const updatedForm = forms.items.filter(element => element.id === id);
    forms.items = updatedForm;
    localStorage.setItem('formList', JSON.stringify(forms));
    return of('Deleted Successfuly ');
  }

  // add new form
  addNewForm(formData) {
    const formlist = JSON.parse(localStorage.getItem('formList'));
    formData.id = formlist.length;
    console.log(formData);

    formlist.items.push(formData);


    localStorage.setItem('formList', JSON.stringify(formlist));

    return of(formData.id);
  }
}
