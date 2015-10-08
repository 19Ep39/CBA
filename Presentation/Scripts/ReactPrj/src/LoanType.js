var injector = angular.injector(['ng', 'LoanApp']);
var loantypeService = injector.get('LoanTypeService');
var CustomRow = React.createClass({
    render: function() {
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
                <tbody>
                    {
                        this.props.data.map(function(data){
                            return(
                            <tr className="warning">
                                <td>{data.id}</td>
                                <td>{data.typeDesc}</td>
                            </tr>
                        );              
                        })
                    }
                </tbody>
            </table>
        </section>
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
            this.setState({data: result.data
            
            });
        }.bind(this))
    },
    render: function() { 
        return(       
        <CustomRow data={this.state.data} />
    );    
}
});
React.render(
<LoanTypeApp  />
, document.getElementById('loanTypeContainer'));