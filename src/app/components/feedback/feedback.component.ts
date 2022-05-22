import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  ValidationErrors, 
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  feedbackForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    comentario: [''],
    nota:['',[Validators.required, Validators.min(0), Validators.max(10)]]
  });

  get nome() {
    return this.feedbackForm.get("nome");
  }

  get email() {
    return this.feedbackForm.get("email");
  }

  get comentario() {
    return this.feedbackForm.get("comentario");
  }

  get nota() {
    return this.feedbackForm.get("nota");
  }

  onSubmit() {
    alert('Feedback enviado!');
    console.log(this.feedbackForm.value)
  }
  ngOnInit(): void {
  }

}