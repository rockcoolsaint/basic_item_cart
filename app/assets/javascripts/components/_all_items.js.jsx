class AllItems extends React.Component {
    handleDelete(id) {
        console.log('delete item clicked');
        this.props.handleDelete(id);
    }

    onUpdate(item) {
        this.props.onUpdate(item);
    }

    render() {
        let items = this.props.items.map(item => {
            return (
                <div key={item.id}>
                    <Item item={item}
                        handleDelete={this.handleDelete.bind(this, item.id)}
                        handleUpdate={this.onUpdate.bind(this)}/>
                </div>
            );
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}