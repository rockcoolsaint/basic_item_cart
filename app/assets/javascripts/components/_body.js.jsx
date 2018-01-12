class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }
    
    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) });
        console.log('component did mount');    
    }
    
    handleSubmit(item) {
        let newState = this.state.items.concat(item);
        this.setState({items: newState});
    }
    
    handleDelete(id) {
        console.log('in handle delete');
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success: () => {
                console.log('Successfully removed item');
                this.removeItemClient(id);
            }
        });
    }

    removeItemClient(id) {
        let newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    }

    handleUpdate(item) {
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: { item: item},
            success: () => {
                console.log('you did it!!!');
                this.updateItems(item)
                // callback to swap objects
            }
        })
    }

    updateItems(item) {
        let items = this.state.items.filter((i) => { return i.id != item.id });
        items.push(item);

        this.setState({items: items});
    }
    
    render() {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit.bind(this)} />
                <AllItems items={this.state.items} 
                        handleDelete={this.handleDelete.bind(this)} 
                        onUpdate={this.handleUpdate.bind(this)} />
            </div>
        );
    }
}