import { useState, useEffect, Fragment } from 'react';
import '../../styles/notes.scss';
import { push as Menu } from 'react-burger-menu';
import List from "../notes/list";
import Editor from "../notes/editor";
import NoteService from '../../services/notes';

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const response = await NoteService.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([]);
        }
    }

    const createNote = async () => {
        await NoteService.create();
        fetchNotes();
    }

    const deleteNote = async (note) => {
        await NoteService.delete(note._id);
        fetchNotes();
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id == id;
        })
        setCurrentNote(note);
    }

    return (
        <Fragment>
            <div className="columns notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            Search...
                        </div>
                    </div>
                    <List
                        notes={notes}
                        selectNote={selectNote}
                        current_note={current_note} 
                        createNote={createNote}
                        deleteNote={deleteNote} />
                </Menu>


                <div className="column is-12 notes-editor" id="notes-editor">
                    <Editor note={current_note} />
                </div>
            </div>
        </Fragment>
    )
}

export default Notes;