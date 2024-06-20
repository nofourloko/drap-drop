
interface ActivityFields{
    "title" : string;
    "date": string
    "description" : string;
}

class Activity implements ActivityFields{
    public title
    public date
    public description
    public finished

    constructor(_title : string, _date: string, _description: string){
        this.title = _title;
        this.date = _date;
        this.description = _description;
        this.finished = false
    }


}

export const classTransformer = (fields : ActivityFields) : Activity => {
    return new Activity(fields.title, fields.date, fields.description)
}

export type {ActivityFields}
export default Activity