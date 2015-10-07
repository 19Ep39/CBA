var loantypeData = {};
var rows = [];
var injector = angular.injector(['ng', 'LoanApp']);
var loantypeService = injector.get('LoanTypeService');
var CustomRow = React.createClass({
    render: function() {
        return (
            <tr className = "warning">
                <td>{this.props.id}</td>
                <td>{this.props.typeDesc}</td>
            </tr>
        );
    }
});
var LoanTypeApp = React.createClass({
    getInitialState: function() {
        return {
            data:[]        
        }
    },
    componentDidMount: function() {       
        loantypeService.getLoanTypes().then(function (result) {
            loantypeData = result;
            this.setState(loantypeData)
        }.bind(this))
    },
render: function() { 
    this.state.data.map(function(data){
        rows.push(<CustomRow id={data.id} typeDesc={data.typeDesc} />)
});
return (
  <section>         
<h4>Loan Types</h4>
     <table className="table table-bordered table-hover">
            <thead>
                <tr className="active">
                    <th>ID #</th>
                    <th>Loan Description</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>          

</section>
    );
}
});
React.render(<LoanTypeApp />, document.getElementById('loanTypeContainer'));