class NewItem extends React.Component {
    handleClick() {
        let name = this.itemName.value;
        let description = this.itemDescription.value;
        
        //console.log(`The name value is ${name} the description value is ${description}`);
        
        $.ajax({
            url: 'api/v1/items',
            type: 'POST',
            data: {item: {name: name, description: description}},
            success: (item) => {
                console.log('it worked!', item);
                this.props.handleSubmit(item);
            }, 
        });
    }
    
    render() {
        return (
            <div>
                <h1>New Item</h1>
                <input ref={(name) => {this.itemName = name}} placeholder='Enter the name of the item' />
                <input ref={(description) => {this.itemDescription = description}} placeholder='Enter a description' />
                <button onClick={this.handleClick.bind(this)}>submit</button>
            </div>
        );
    }
}