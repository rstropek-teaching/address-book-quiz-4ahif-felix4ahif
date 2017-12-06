export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    eMail: string;
}

export let contacts: IContact[] = [
    {id: 1, firstName: 'Donald', lastName: 'Duck', eMail: '334535234634' },
    {id: 2, firstName: 'Mickey', lastName: 'Mouse', eMail: '068012345670' },
    {id: 3, firstName: 'Minnie', lastName: 'Mouse', eMail: '068012345679' },
    {id: 4, firstName: 'Scrooge', lastName: 'McDuck', eMail: '068012345673' }
];