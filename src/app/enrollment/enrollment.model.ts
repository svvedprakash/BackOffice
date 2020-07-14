export interface Enrollment {
    selector: boolean;
    partyId: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    clearingType: string;
    createdDate?: Date;
    lastUpdateDate?: Date;
    accounts? : Account[];
}

export interface Account {
    id: string;
    name: string;
}