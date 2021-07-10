import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.categories = [
            {
                id: 1,
                name: "fiction"
            },
            {
                id: 2,
                name: "history"
            },
            {
                id: 3,
                name: "tech"
            },
            {
                id: 4,
                name: "cooking"
            },
        ];
        this.members = [
            {
                id: 1,
                fName: 'first1',
                lName: 'last1',
                email: 'first1.last1@thepracticalit.com'
            },
            {
                id: 2,
                fName: 'first2',
                lName: 'last2',
                email: 'first2.last2@thepracticalit.com'
            },
            {
                id: 3,
                fName: 'first3',
                lName: 'last3',
                email: 'first3.last3@thepracticalit.com'
            }
        ];
    }
    render = () => {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>{this.name}</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">Categories</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Categories</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                {
                                    this.categories.map( category => {
                                        return <li><Link to={"/list"}>
                                        <i className="fa fa-circle-o"></i> {category.name}</Link></li>
                                    }
                                    )
                                }
                                
                            </ul>
                        </li>
                        <li>
                        <a href="pages/widgets.html">
                            <i className="fa fa-th"></i> <span>Contributors</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-green">new</small>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                                {
                                    this.members.map( member => {
                                        return <li><a href={"/member/"+member.id}>
                                        <i className="fa fa-circle-o">
                                            </i> {member.fName+ ' ' + member.lName}</a></li>
                                    }
                                    )
                                }
                                
                            </ul>
                        </li>
                        {/* <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Charts</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                        </ul>
                        </li> */}
                        {/* <li>
                        <ul className="treeview-menu">
                            <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                            <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                        </ul>
                        </li>
                        <li>
                        <a href="pages/calendar.html">
                            <i className="fa fa-calendar"></i> <span>Calendar</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-red">3</small>
                            <small className="label pull-right bg-blue">17</small>
                            </span>
                        </a>
                        </li>
                        <li>
                        <a href="pages/mailbox/mailbox.html">
                            <i className="fa fa-envelope"></i> <span>Mailbox</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-yellow">12</small>
                            <small className="label pull-right bg-green">16</small>
                            <small className="label pull-right bg-red">5</small>
                            </span>
                        </a>
                        </li> */}
                    </ul>
                </section>
            </aside> 
        )
    }
}