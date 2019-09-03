import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = "BMI Calculator";
    height;
    weight;
    @track bmi;

    calculateBMI(){
        this.bmi=this.weight/(this.height * this.height);
    }
    onWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }
    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }
}