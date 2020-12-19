export class DrugModel {
    id?;
    name;
    date;
    type;
    quantity;
    description;
    mobileNumber

    constructor(name, date, type, quantity, description, mobileNumber,id?) {
        this.name = name;
        this.date = date;
        this.type = type;
        this.quantity = quantity;
        this.description = description;
        this.mobileNumber = mobileNumber;
        this.id = id
    }
}