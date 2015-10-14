'use strict';

var injector = angular.injector(['ng', 'LoanApp']);
var loantypeService = injector.get('LoanTypeService');
var CustomRow = React.createClass({
    displayName: 'CustomRow',

    render: function render() {
        var self = this;
        return React.createElement(
            'section',
            null,
            React.createElement(
                'table',
                { className: 'table table-bordered table-hover' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        { className: 'active' },
                        React.createElement(
                            'th',
                            null,
                            'Active/Inactive'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'ID #'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Loan Description'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    this.props.data.map(function (data) {
                        return React.createElement(
                            'tr',
                            { className: 'warning' },
                            React.createElement(
                                'td',
                                { className: 'text-center' },
                                React.createElement(
                                    'input',
                                    { type: 'checkbox', checked: data.isDeleted },
                                    ' '
                                )
                            ),
                            React.createElement(
                                'td',
                                null,
                                data.id
                            ),
                            React.createElement(
                                'td',
                                null,
                                data.typeDesc
                            )
                        );
                    })
                )
            )
        );
    }
});
var LoanTypeApp = React.createClass({
    displayName: 'LoanTypeApp',

    getInitialState: function getInitialState() {
        return {
            data: [], value: ""

        };
    },
    componentDidMount: function componentDidMount() {
        loantypeService.getLoanTypes().then((function (result) {
            this.setState({ data: result.data

            });
        }).bind(this));
    },
    onChange: function onChange(event) {
        event.preventDefault();
        var regex = new RegExp(event.target.value, 'i');
        var filtered = this.state.data.filter(function (datum) {
            return datum.typeDesc().search(regex) > -1;
        });
        //this.state.data.filter(function(datum) {
        //    return datum.typeDesc.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;

        //}.bind(this));
        this.setState({
            data: filtered
        });
    },

    filterData: function filterData(event) {
        event.preventDefault();
        this.state.data.filter((function (datum) {
            return datum.typeDesc.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
        }).bind(this));
    },
    handleChange: function handleChange(event) {
        this.setState({ value: event.target.value });
    },
    render: function render() {
        var self = this;
        var CustomRowInputs = React.createClass({
            displayName: 'CustomRowInputs',

            render: function render() {
                return React.createElement(
                    'section',
                    { className: 'text-left' },
                    React.createElement(
                        'h4',
                        null,
                        'Loan Types'
                    ),
                    React.createElement(
                        'table',
                        { className: 'form-group col-md-12' },
                        React.createElement(
                            'thead',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'th',
                                    null,
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        onChange: self.onChange.bind(self),
                                        placeholder: 'Search' })
                                ),
                                React.createElement('th', { className: 'width:5px' }),
                                React.createElement(
                                    'th',
                                    null,
                                    React.createElement(
                                        'button',
                                        {
                                            type: 'button',
                                            className: 'form-control btn-primary',
                                            onChange: this.filterData },
                                        'Add'
                                    )
                                ),
                                React.createElement('th', { className: 'width:8px' }),
                                React.createElement(
                                    'th',
                                    null,
                                    React.createElement(
                                        'button',
                                        {
                                            type: 'submit',
                                            className: 'form-control btn-primary',
                                            onClick: this.onClick,
                                            background: 'blue' },
                                        ' Update'
                                    )
                                )
                            )
                        )
                    )
                );
            }
        });

        return React.createElement(
            'section',
            null,
            React.createElement(CustomRowInputs, null),
            React.createElement(CustomRow, { data: this.state.data })
        );
    }
});
React.render(React.createElement(LoanTypeApp, null), document.getElementById('loanTypeContainer'));