import React from 'react';

// import cities from 'cities.json';


export default class AutocompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
            'David',
            'Ann',
            'Charlie',
            'Darling'
        ];
        this.state = {
            suggestions: []
        };
    }

    // filterSuggestions (e) {
        
    //     return this.items.filter(item => {
    //         return item.startsWith(e.target.value);
    //     });
    // }

    // showSuggestions (e) {
    //     console.log(this.filterSuggestions(e));
    //     this.suggestions = this.filterSuggestions(e);
    //     console.log(this.suggestions);
    //     return this.filterSuggestions(e);   
    // }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ( { suggestions, text: value } ));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="list-group">
                {suggestions.map((item) => <li className="list-group-item" onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render () {
        return (
            <div className="AutocompleteText">
                <div className="input-group mb-3">
                    <input type="text" onChange={(e) => this.onTextChanged(e)} value={this.state.text} className="form-control" aria-describedby="button-addon2" />
                    
                    <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
                
                    {this.renderSuggestions()}
                
            </div>
        );
    }
}