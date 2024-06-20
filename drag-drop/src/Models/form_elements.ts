interface FormElement {
    placeHolder : string,
    type : string,
    id : string
}

const formElements : FormElement[] = [
    {
        placeHolder : "Activity",
        type: "text",
        id : "title"
    },
    {
        placeHolder : "Date of activity",
        type: "date",
        id: "date"
    },
    {
        placeHolder : "Description",
        type: "text",
        id: "description"
    }
]

export default formElements