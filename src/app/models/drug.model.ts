export class DrugModel {
    name;
    date;
    type;
    quantity;
    description;
    mobileNumber

    constructor(name, date, type, quantity, description, mobileNumber) {
        this.name = name;
        this.date = date;
        this.type = type;
        this.quantity = quantity;
        this.description = description;
        this.mobileNumber = mobileNumber;
    }
}