const createSingleContact = function (contact) {
	return React.createElement(Contact, { item: contact, key: contact.id });
}

const Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function () {
		const contacts = this.props.items.map(createSingleContact);

		return (
			React.createElement('ul', { className: 'contactsList' }, contacts)
		);
	}
});