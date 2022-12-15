import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createticketService.GpCreate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}