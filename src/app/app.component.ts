import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core'; import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('script') script: ElementRef;

  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  /*  */
  options = {
    theme: 'vs-dark'
  };
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  submit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.text = "(function() {" + this.code + "})();"
    this.script.nativeElement.appendChild(s);
  }
}