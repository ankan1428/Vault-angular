import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { SecurityService } from './../security.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  faCaretRight = faCaretRight;
  private selectedOption: string;
  private showAnswer: boolean;
  private correctAnswer: string;
  private disableOptions: boolean;
  public isDisable: boolean;
  public question: any;

  constructor(private security: SecurityService) {
    this.question = {};
    this.isDisable = true;
    this.disableOptions = false;
  }

  ngOnInit() {
    this.security.getQuestion()
      .subscribe(data => {
        this.showAnswer = false;
        if (!data) {
          this.disableOptions = true;
          return; 
        }
        this.disableOptions = false;
        this.question = data;
        this.selectedOption = undefined;
        this.correctAnswer = undefined;
      });
  }

  setSelected(opt: string): void {
    this.isDisable = this.disableOptions;
    if(this.disableOptions) return;
    this.selectedOption = opt;
    
  }

  submit(): void {
    this.isDisable = this.disableOptions = true;
    let correctOption = this.security.validate(this.selectedOption);

    if (typeof correctOption === 'string') {
      this.correctAnswer = correctOption;
      this.showAnswer = true;
    } else if (correctOption === false) {
      setTimeout(() => {
        this.disableOptions = false;
        this.correctAnswer = undefined;
        this.selectedOption = undefined;
      }, 2000);
    }
  }

  reset(): void {
    this.security.resetActivity(); 
  }

}
