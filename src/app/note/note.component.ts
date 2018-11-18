import { Component, Input } from '@angular/core';
import { RouterService } from '../services/router.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input() note : Note;

  constructor(private routerSvc : RouterService) {
    console.log('Inside NoteComponent constructor')
  }

  openNoteEditView() {
    const noteID = this.note.id;
    this.routerSvc.routeToEditNoteView(noteID);
  }
}
