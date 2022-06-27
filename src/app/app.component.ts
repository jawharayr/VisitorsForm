import { Component } from '@angular/core';
import { AbstractControl ,FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(0),
    reason: new FormControl(''),
    fnumber: new FormControl(0),

  });
  submitted = false;

  constructor(private formBulider: FormBuilder){}
  ngOnInit(): void{
    this.form = this.formBulider.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      reason: ['', Validators.required],
      fnumber: ['', Validators.required]
    })
  }
  get f(): { [key: string]: AbstractControl} {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid){
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2))
  }
}
