// tslint:disable-next-line:variable-name
export const icons_and_fields = [
    // {
    //     id: 1,
    //     uniqName: 'Header',
    //     name: 'Header',
    //     subName: 'Format',
    //     icon: 'header.png',
    //     fielType: 'header',
    // ConditionalQuest: {},
    //     tooltip: 'The first thing your users will see.',
    //     label: 'Enter Your Heading',
    //     type: 'text',
    //     handle: true

    // },
    // {
    //     id: 17,
    //     uniqName: 'Footer',
    //     name: 'Footer',
    //     subName: 'Format',
    //     icon: 'footer.png',
    //     fielType: 'footer',
    // ConditionalQuest: {},
    //     tooltip: 'The last thing your users will see.',
    //     type: 'text',
    //     label: 'footer content',
    //     handle: true

    // },

    {
        id: 2,
        uniqName: 'Text',
        name: 'Text',
        subName: 'Format',
        icon: 'short_text.png',
        fielType: 'text',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Good for short answers, like names.',
        label: 'Enter your Question here',
        placeholder: ' Answer Text',
        userAns: null,
        errorText: 'maximum 256 charector are allowed',
        min: 0,
        max: 256,
        handle: true,
        userResponse: [],
        validOption: {},

        formValidations: [
            {
                label: ' Greater Then',
                value: 'min'
            },
            {
                label: ' Less Then',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ]


    },
    {
        id: 14,
        uniqName: 'Number',
        name: 'Number',
        subName: 'Format',
        icon: 'Number.png',
        fielType: 'number',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Good for long answers, like the meaning of life',
        errorText: 'Custom Error Field',
        label: 'Enter your amount in number here',
        placeholder: 'Enter Amount',
        min: 0,
        max: 256,
        userResponse: [],
        validOption: {},

        formValidations: [
            {
                label: ' Greater Then',
                value: 'min'
            },
            {
                label: ' Less Then',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ],


        handle: true

    },
    {
        id: 3,
        uniqName: 'Statement',
        name: 'Statement',
        subName: 'Format',
        icon: 'statement.png',
        fielType: 'statement',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        tooltip: 'say to your users without asking for a response.',
        label: 'Enter your Statement here',
        type: 'text',
        handle: true

    },

    {
        id: 6,
        uniqName: 'Email',
        name: 'Email',
        subName: 'Format',
        icon: 'mail.png',
        fielType: 'email',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Ask for a email address.',
        type: 'email',

        label: 'Email',
        inputValue: '',
        placeholder: 'Enter your email',
        errorText: 'Please enter a valid email',
        handle: true,
        mailType: '',
        emailList: []
    },

    {
        id: 16,
        uniqName: 'Date',
        name: 'Date',
        subName: 'Format',
        type: 'date',
        icon: 'date.png',
        fielType: 'date',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        label: 'How old are you ?',

        tooltip: 'Only accepts answers as calendar dates.',
        errorText: 'Custom Error Field',
        placeholder: 'Date',
        minDate: '',
        maxDate: '',

        userResponse: [],
        validOption: {},

        formValidations: [
            {
                label: 'After',
                value: 'min'
            },
            {
                label: ' Before',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ],
    },
    {
        id: 15,
        uniqName: 'Website',
        name: 'Website',
        subName: 'Format',
        icon: 'website.png',
        fielType: 'website',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Ask your audience to share a link.',
        errorText: 'Custom Error Field',
        type: 'url',

        label: 'Enter your website Link here',
        inputValue: '',
        placeholder: 'Enter your website link',
        // regex: '^[\da-fA-F]{2}([-:])([\da-fA-F]{2}\1){4}[\da-fA-F]{2}',
        handle: true,
        httpType: '',
        httpList: [],
        comType: '',
        comList: []


    },



    {
        id: 4,
        uniqName: 'Phone',
        name: 'Phone',
        subName: 'Number',
        icon: 'mobile_no.png',
        fielType: 'phone',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Ask for a phone number with a right format.',
        errorText: 'Custom Error Field',
        type: 'text',
        label: 'Enter Your Phone',

        placeholder: 'Enter your phone number',
        inputValue: '',
        regex: '[789][0-9]{9}',
        phoneType: '',
        phoneList: [],

        handle: true
    },
    {
        id: 8,
        uniqName: 'File Upload',
        name: 'File Upload',
        subName: 'Format',
        icon: 'file_upload.png',
        fielType: 'file',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        label: 'uploud your resume',
        required: true,
        tooltip: 'Ask for any type of file.',
        errorText: 'Custom Error Field',
        uploadedFileByUser: {
            name: '',
            url: '',
        },
        userResponse: [],
        validOption: {},

        formValidations: [
            {
                label: 'Kb',
                value: 'Kb',
                size: 100
            },
            {
                label: ' Mb',
                value: 'Mb',
                size: 10
            },
            {
                label: 'Gb',
                value: 'Gb',
                size: 1
            }
        ]

    },
    {
        id: 12,
        uniqName: 'Multiple',
        name: 'Multiple',
        subName: 'Choice',
        icon: 'multiple_choice.png',
        fielType: 'multiple',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        label: 'Enter question for multiselection',
        tooltip: 'Give your audience options to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Enter Your Option Here',
                value: false
            },
            {
                label: 'Enter Your Option Here',
                value: false
            }
        ],
        userResponse: [],
        validOption: {},

        formValidations: [

            {
                label: 'Select atleast',
                value: 'min',
                limit: 1
            },
            {
                label: 'Select exectly',
                value: 'both',
                limit: 1
            },
            {
                label: 'Select atmost',
                value: 'max',
                limit: 1
            }

        ]
    },

    {
        id: 5,
        uniqName: 'Picture',
        name: 'Picture',
        subName: 'Choice',
        icon: 'picture_format.png',
        fielType: 'picture',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        label: 'Select the picture',
        tooltip: 'Give your users image option to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Enter Your Option1 Here',
                value: false,
                img: '',
                name: '',
            },
            {
                label: 'Enter Your Option Here',
                value: false,
                img: '',
                name: '',

            }
        ],
        userResponse: [],
        validOption: {},

        formValidations: [
            {
                label: 'Select atleast',
                value: 'min',
                limit: 1
            },
            {
                label: 'Select exectly',
                value: 'both',
                limit: 1
            },
            {
                label: 'Select atmost',
                value: 'max',
                limit: 1
            }
        ],

    },


    {
        id: 7,
        uniqName: 'Dropdown',
        name: 'Dropdown',
        subName: 'Format',
        icon: 'dropdown.png',
        fielType: 'dropdown',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        label: ' enter quetion for  selection',
        tooltip: 'Provide a list of options to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Enter Your Option Here',
                value: false
            },
            {
                label: 'Enter Your Option Here',
                value: false
            }
        ],

        userResponse: [],
        validOption: {},

        formValidations: [
            {
                label: 'Select atleast',
                value: 'min',
                limit: 1
            },
            {
                label: 'Select exectly',
                value: 'both',
                limit: 1
            },
            {
                label: 'Select atmost',
                value: 'max',
                limit: 1
            }]

    },
    // {
    //     id: 18,
    //     uniqName: 'Conditional Dropdown',
    //     name: 'Conditional',
    //     subName: 'Dropdown',
    //     icon: 'conditional_dropdown.png',
    //     fielType: 'conditional',
    // ConditionalQuest: {},
    //     required: true,
    //     tooltip: 'Ask your users the question depending on other answers.',
    //     label: 'Ask your users the question depending on other answers.',
    // },



    {
        id: 9,
        uniqName: 'Yes/No',
        name: 'Yes/No',
        subName: 'Format',
        icon: 'yes_no.png',
        fielType: 'yesNo',
        ConditionalQuest: {
            makeItCondsnl: false,
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Give your users just three options.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: [

            {
                label: 'Yes',
                value: true
            },
            {
                label: 'No',
                value: false
            },
            {
                label: 'May Be',
                value: 'both'
            },
        ],
    },

    // {
    //     id: 10,
    //     uniqName: 'Payment',
    //     name: 'Payment',
    //     subName: 'Format',
    //     icon: 'payment.png',
    //     fielType: '',
    // ConditionalQuest: {},
    //     required: true,
    //     tooltip: '',
    //     errorText: 'Custom Error Field',
    // },
    {
        id: 11,
        uniqName: 'True/False',
        name: 'True/False',
        subName: 'Format',
        icon: 'true_false.png',
        fielType: 'trueFalse',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}

        },
        required: true,
        tooltip: 'Ask your users is it true or not.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: [

            {
                label: 'True',
                value: true
            },
            {
                label: 'False',
                value: false
            },
        ],

    },


    {
        id: 13,
        uniqName: 'Rating',
        name: 'Rating',
        subName: 'Scale',
        icon: 'rating.png',
        fielType: 'rating',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},

            answers: {}

        },
        required: true,
        label: 'Rate our product',
        tooltip: 'Ask them to rate something.',
        errorText: 'Custom Error Field',
        selestedValidation: 'fa fa-star-o',
        ratingLimit: 5,
        RatingByUser: '',
        ratingArray: [1, 2, 3, 4, 5],
        userComment: {
            want: false,
            comment: '',
        },
        formRating: [
            // 'fa fa-star-o', 'fa fa-smile-o', 'fa fa-sun-o', 'fa fa-heart-o', 'btn btn-light',

            {
                label: 'Star',
                value: 'fa fa-star-o'
            },
            {
                label: 'Smiley',
                value: 'fa fa-smile-o'
            },
            {
                label: 'Sun',
                value: 'fa fa-sun-o'
            },
            {
                label: 'Heart',
                value: 'fa fa-heart-o'
            },
            {
                label: 'Number',
                value: 'btn btn-light'
            }
        ],
    },








    // {
    //     id: 19,
    //     uniqName: 'Table',
    //     name: 'Table',
    //     subName: 'Format',
    //     icon: 'table.png',
    //     fielType: 'table',
    // ConditionalQuest: {},
    //     required: true,
    //     tooltip: '',
    //     label: 'Enter Footer contain',
    //     errorText: 'Custom Error Field',
    // },





];


export class Customer {
    key: string;
    name: string;
    age: number;
    active = true;
}
export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    phone: number;
}



