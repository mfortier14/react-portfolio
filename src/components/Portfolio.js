import React from 'react';

export default function Portfolio() {
    return (
        <div className="row">
        <div className="column">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="../assets/images/workday-scheduler.png"></img>
                    <hr></hr>
                    <h4 className="title">Day Planner</h4>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i
                            className="material-icons right"><i
                                className="small material-icons">add_circle</i></i></span>
                    <a href="https://mfortier14.github.io/Calendar/"
                        className="waves-effect waves-light btn">View</a>
                    <a href="https://github.com/mfortier14/Calendar.git"
                        className="waves-effect waves-light btn">Github</a>
                    <p><a href="#">Github</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About<i
                            className="material-icons right">close</i></span>
                    <p>An hourly day planner where one can save notes or reminders</p>
                </div>
            </div>
        </div>
        <div className="column">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="../assets/images/pass-generator.png"></img>
                    <hr></hr>
                    <h4 className="title">Password Generator</h4>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i
                            className="material-icons right"><i
                                className="small material-icons">add_circle</i></i></span>
                    <a href="https://mfortier14.github.io/PasswordGen/"
                        className="waves-effect waves-light btn">View</a>
                    <a href="https://github.com/mfortier14/PasswordGen.git"
                        className="waves-effect waves-light btn">Github</a>
                     <p><a href="#">Github</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About<i
                            className="material-icons right">close</i></span>
                    <p>A password generator that will randomly generate with certain
                        criteria prompted by the user</p>
                </div>
            </div>
        </div>
        <div className="column">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="../assets/images/project-one.png"></img>
                    <hr></hr>
                    <h4 className="title">Project One: SocialNite Music App</h4>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i
                            className="material-icons right"><i
                                className="small material-icons">add_circle</i></i></span>
                    <a href="https://bfall-debug.github.io/project_1/"
                        className="waves-effect waves-light btn">View</a>
                    <a href="https://github.com/bfall-debug/project_1"
                        className="waves-effect waves-light btn">Github</a>
                 <p><a href="#">Github</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About<i
                            className="material-icons right">close</i></span>
                    <p>An app that allows the user to search for live concerts by their
                        favorite genre and by their location. They can save their
                        favorite concerts and buy tickets.</p>
                </div>
            </div>
        </div>
        <div className="column">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="../assets/images/project 2 screenshot.PNG"></img>
                    <hr></hr>
                    <h4 className="title">Project Two: Invengeon Employee Mangement System</h4>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i
                            className="material-icons right"><i
                                className="small material-icons">add_circle</i></i></span>
                    <a href="https://invengeonemployeemanagement.herokuapp.com/"
                        className="waves-effect waves-light btn">View</a>
                    <a href="https://github.com/rachaelchar/Project-II.git"
                        className="waves-effect waves-light btn">Github</a>
                <p><a href="#">Github</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About<i
                            className="material-icons right">close</i></span>
                    <p>An employee management system that allows employees to clock in and out and keep track of their sick time and PTO. The application also has admin features where new employees can be registered.</p>
                </div>
            </div>
        </div>
    </div>
    )
}