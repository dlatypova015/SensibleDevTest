import {  Component, Output, Input } from '@angular/core';
import {grpc} from '@improbable-eng/grpc-web'
import {CountryService} from '../generated/TESTING_pb_service'
import {EmptyRequest, CountriesReply} from '../generated/TESTING_pb'
import { CountryModel } from '../models/CountryModel';
import { CaseModel } from '../models/CaseModel';
import { NgFor } from '@angular/common';

@Component({
    selector: 'modal-dialog',
    standalone: true,
    imports: [NgFor],
    templateUrl: './modalWindow.component.html',
    styleUrl: './modalWindow.component.css'
})

export class ModalWindowComponent {
// @Input() header: string;
// @Input() description: string;
// @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
// private confirm() {
// this.isConfirmed.emit(true);
// }
// private close() {
// this.isConfirmed.emit(false);
//}
}