import React, { Fragment } from 'react';
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ListNotes(props) {
    return (
        <Fragment>
            <div className='columns' breakpoint="mobile">
                <div className='column is-6 is-offset-1'>
                    <h6 className="title is-6">
                        {props.notes.length} Notes
                    </h6>

                    <div className='column is-2'>
                        <button className="button is-active is-outlined" onClick={() => props.createNote()}>
                            Notes +
                        </button>
                    </div>

                </div>
            </div>
            <div className="list notes-list">
                {props.notes.map((item, key) =>
                    <div className="list-item" key={key} onClick={() => props.selectNote(item._id)}>
                        <h6 className="title is-6">
                            {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                        </h6>
                        <h6 className="subtitle is-6">
                            {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                        </h6>

                        <div className='columns' breakpoint="mobile">
                            <div className='column is-10'>
                                <span className="tag">
                                    {Moment(item.created_at).format('DD/MM')}
                                </span>
                            </div>
                            <div className='column is-2'>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => props.deleteNote(item)}
                                    color="grey"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}
export default ListNotes;