import { Injectable } from '@angular/core';
import { Enrollment } from './enrollment.model';
@Injectable()
export class EnrollmentService {
    private enrollmentsHistory: Enrollment[] = [
        {
            selector: false, partyId: 1888829, firstName: 'Claire', lastName: 'Andersion',
            clearingType: 'NFS', createdDate: new Date(2020, 7, 1), 
            lastUpdateDate: new Date(2020, 7, 3)
        },
        {
            selector: false, partyId: 1888830, firstName: 'Melissa', lastName: 'French', 
            clearingType: 'NFS', createdDate: new Date(2020, 7, 5), 
            lastUpdateDate: new Date(2020, 7, 8)
        },
        {
            selector: false, partyId: 1887612, firstName: 'Glenn', 
            lastName: 'Teraoka', clearingType: 'NXI',
            createdDate: new Date(2020, 6, 9), lastUpdateDate: new Date(2020, 7, 2)
        },
        {
            selector: false, partyId: 1888293, firstName: 'Kylie', 
            lastName: 'Ava', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 1832786, firstName: 'Kylie', 
            lastName: 'Emily', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 7694328, firstName: 'Bella', 
            lastName: 'Natalie', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 7695326, firstName: 'Kayla', 
            lastName: 'Jacob', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 8461975, firstName: 'Harper', 
            lastName: 'Noah', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 1276549, firstName: 'Peyton', 
            lastName: 'Alexander', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 6824567, firstName: 'Arianna', 
            lastName: 'Zoe', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 1128765, firstName: 'Sophie', 
            lastName: 'Hailey', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 1987352, firstName: 'Claire', 
            lastName: 'Gabriella', clearingType: 'NXI',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 1986539, firstName: 'Victoria', 
            lastName: 'Nevaeh', clearingType: 'NFS',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        },
        {
            selector: false, partyId: 7654987, firstName: 'Samuel', 
            lastName: 'Kaylee', clearingType: 'NXI',
            createdDate: new Date(2020, 1, 3), lastUpdateDate: new Date(2020, 7, 4)
        }
    ];

    public getEnrollmentHistory = () => {
        return this.enrollmentsHistory.slice();
    }
}