
export const Global = {
    // url: 'https://sheet.best/api/sheets/6e2fe4c8-ba21-4963-85e2-a62712ed4098',
    url: 'http://localhost:3200/api/sales',
    getId: ( long:number ) => {
        let id = '';
        const chain = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for( let i = 0; i < long; i++ ) {
            id += chain.charAt(Math.floor(Math.random() * chain.length));
        }
        return id;
    }
}
