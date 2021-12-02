export class Sale {
    public _id:string;
    public Date:string;
    public Description:string;
    public Amount:number;
    public Status:number;
    public Paid:string;

    constructor(
        // _id:string = '',
        date:string = '',
        description:string = '',
        amount:number = 0,
        status:any = ''
    ) {
        this._id = '';
        this.Date = date;
        this.Description = description;
        this.Amount = amount;
        this.Status = status;
        this.Paid = '';
    }
}