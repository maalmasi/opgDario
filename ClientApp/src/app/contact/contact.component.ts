import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup;
  email: Email;
  emailString: string;
  formSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      senderName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      senderEmail: new FormControl('', [Validators.required, Validators.email]),
      senderSubject: new FormControl('', [Validators.required, Validators.minLength(5)]),
      senderMessage: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onFormSubmit() {
    this.email = <Email>this.emailForm.value;
    this.emailString = JSON.stringify(this.email);
    console.log(this.email);
    console.log(this.emailString);

    const header = new HttpHeaders()
      .set('Content-type', 'application/json');

    this.http.post<Email>(this.baseUrl + 'api/Email/SendEmail',
      this.emailString,
      { headers: header })
      .subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}

export interface Email {
  senderName: string;
  senderEmail: string;
  senderSubject: string;
  senderMessage: string;
}
