class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			editable: false
		}
	}
	
	handleEdit() {
		if (this.state.editable) {
			let name = this.name.value;
			let id = this.props.item.id;
			let description = this.description.value;
			let item = {id: id, name: name, description: description};
			this.props.handleUpdate(item);
			console.log('in handleEdit', this.state.editable, name, description);
		};
		this.setState({editable: !this.state.editable});
		console.log('edit button clicked');
	}

    render() {
    	let name = this.state.editable ? <input type='text' ref={name => this.name = name} defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    	let description = this.state.editable ? <input type='text' ref={description => this.description = description} defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

        return (
            <div>
                {name}
                {description}
                <button onClick={this.props.handleDelete}>Delete</button>
                <button onClick={this.handleEdit.bind(this)}>{this.state.editable ? 'Submit' : 'Edit'}</button>
            </div>
        );
    }
}