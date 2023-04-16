import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarService } from 'src/app/core/services/car/car.service';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public car?: CarI;

  @Input() public isEditMode: boolean = false;

  public carForm?: FormGroup;
  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public imgSrc: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService
    ) {}

  public ngOnInit(): void {
    this.initForm();
    this.carForm?.get('image')?.valueChanges.subscribe((value: string)=> {
      this.imgSrc = value;
    })
  }

  public handleCar() {
    if (this.carForm?.valid) {
      if (this.isEditMode) {
        this.editCar();
      } else {
        this.createCar();
      }
      this.carForm?.reset();
    } else {
      this.hasFormError = true;
    }
  }

  private createCar() {
    this.carService.createCar(this.carForm?.value).subscribe((car)=> {
          this.hasFormError = false;
    this.hasSuccess = true;
    setTimeout(() => {
      this.hasSuccess = false;
    }, 7000);
    })
  }

  private editCar() {
    if (!this.car) { return; }
    this.carService.editCar(this.carForm?.value, this.car.id).subscribe((car) => {
      this.hasFormError = false;
      this.hasSuccess = true;
      setTimeout(() => {
        this.hasSuccess = false;
      }, 7000);
    })
}


  private initForm() {
    if (this.car){
      this.imgSrc = this.car.image
    }
    this.carForm = this.formBuilder.group({
      image: new FormControl(this.car?.image || '', [Validators.required]),
      model: new FormControl(this.car?.model || '', [Validators.required]),
      vehicle: new FormControl(this.car?.vehicle || '', [Validators.required]),
      manufacturer: new FormControl(this.car?.manufacturer || '', [
        Validators.required,
      ]),
      fuel: new FormControl(this.car?.fuel || '', [Validators.required]),
      type: new FormControl(this.car?.type || '', [Validators.required]),
      price: new FormControl(this.car?.price || '', [Validators.required]),
    });
  }
}
