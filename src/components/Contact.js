import React from 'react';

export default function Contact() {
    return (
        <form>
            <div className="row" id="sidenav">
                <div className="input-field col s6" id="name-contact" />
                <input id="icon_prefix" type="text" className="validate" />
                <label for="icon_prefix">Full Name</label>
            </div>
            <div className="input-field col s6" id="phone-contact">
                <input id="icon_telephone" type="tel" className="validate" />
                <label for="icon_telephone">Telephone</label>
            </div>
            <div className="input-field col s6" id="email-contact">
                <input id="" type="tel" className="validate" />
                <label for="">Email</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right"></i>
            </button>
                </form>
            
    );
}