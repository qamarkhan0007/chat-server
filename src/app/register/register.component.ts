import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _service: AppService) { }

  ngOnInit() {
  }
  register(form: any) {
    console.log('form >>>>>>>>>>>>>', form);
    this._service.register(form).subscribe( res => {
      console.log('response >>>>>>>', res);
    });
  }

}
