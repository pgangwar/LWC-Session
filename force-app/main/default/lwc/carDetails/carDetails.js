import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'

export default class CarDetails extends LightningElement {
    carID;
    @wire(getRecord, {recordId : '$carId'})
    car;
}