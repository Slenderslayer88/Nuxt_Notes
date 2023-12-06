export class Collection {
	id="";
	title="";
	notes=[];

	addNoteToCollection(note) {
		this.notes.push(note)
	}

	constructor(_title, _notes) {
		this.title = _title;
		this.notes = _notes;
	}
}