'use strict';

var injector = angular.injector(['ng', 'LoanApp']);
var loantypeService = injector.get('LoanTypeService');
var CustomRow = React.createClass({
    displayName: 'CustomRow',

    render: function render() {
        return React.createElement(
            'section',
            null,
            React.createElement(
                'h4',
                null,
                'Loan Types'
            ),
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
            data: []
        };
    },
    componentDidMount: function componentDidMount() {
        loantypeService.getLoanTypes().then((function (result) {
            this.setState({ data: result.data

            });
        }).bind(this));
    },
    render: function render() {
        return React.createElement(CustomRow, { data: this.state.data });
    }
});
React.render(React.createElement(LoanTypeApp, null), document.getElementById('loanTypeContainer'));