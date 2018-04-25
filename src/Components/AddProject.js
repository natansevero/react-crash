import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types';

class AddProject extends Component {

    constructor() {
        super();

        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web', 'Mobile', 'Desktop']
    }

    optionsSelectCategoriesRender() {
        let options = this.props.categories.map(category => {
            return (
                <option key={category} value={category}>{category}</option>
            )
        })

        return options;
    }

    handleSubmit(event) {
        if(this.refs.name.value === '') {
            alert('Name is required')
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    name: this.refs.name.value,
                    category: this.refs.category.value
                }
            }, () => {
                this.props.addProject(this.state.newProject)
            })
        }

        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Name:</label><br />
                    <input type="text" ref="name" />    
                </div>
                <div>
                    <label>Category:</label><br />
                    <select ref="category">
                        {this.optionsSelectCategoriesRender()}
                    </select>    
                </div><br />
                <input type="submit" value="Submit" />
            </form>            
        </div>
        );
    }
}    

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;
