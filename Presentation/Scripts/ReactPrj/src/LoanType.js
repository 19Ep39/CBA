var injector = angular.injector(['ng', 'LoanApp']);
var loantypeService = injector.get('LoanTypeService');
var CustomRow = React.createClass({
      render: function() {
        var self = this;
        return (
        <section>
            
            <table className="table table-bordered table-hover">
                <thead>
                    <tr className="active">
                        <th>Active/Inactive</th>
                        <th>ID #</th>
                        <th>Loan Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(function(data){
                            return(
                            <tr className="warning">
                                <td className="text-center"><input type="checkbox" checked = {data.isDeleted}> </input></td>
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
            data:[],value:""
          
        }
    },
    componentDidMount: function() {      
        loantypeService.getLoanTypes().then(function (result) {
            this.setState({data: result.data
            
            });
        }.bind(this))
    },
    onChange: function(event) {
        event.preventDefault();    
        const regex = new RegExp(event.target.value, 'i');
        const filtered = this.state.data.filter(function(datum) {
            return (datum.typeDesc().search(regex) > -1);
        });
        //this.state.data.filter(function(datum) {
        //    return datum.typeDesc.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
           
        //}.bind(this)); 
        this.setState({
            data: filtered,
        });
    },

    filterData : function(event) {
            event.preventDefault();      
            this.state.data.filter(function(datum) {
                return datum.typeDesc.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
           
            }.bind(this));  


},
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },     
render: function() { 
    var self = this;
    var CustomRowInputs = React.createClass({
        render: function() {
            return (
            <section className="text-left">
                <h4>Loan Types</h4>
                    <table  className="form-group col-md-12">
                    <thead>
                        <tr >
                            <th> 
                                <input
                                type="text"
                                    className="form-control"
                                    onChange={self.onChange.bind(self)}
                                    placeholder="Search" />
                             </th>
                             <th className="width:5px"></th>
                            <th>
                                <button
                                    type="button"
                                    className="form-control btn-primary"
                                    onChange={ this.filterData}>Add
                                </button>
                            </th>
                            <th className="width:8px"></th>
                             <th>
                                <button 
                                    type="submit"
                                    className="form-control btn-primary"
                                    onClick={this.onClick}
                                    background ="blue"> Update
                                    </button>
                              </th>
                        </tr>
             </thead>
                    </table>
            </section>
        );
        }
    });

        return( <section>
             <CustomRowInputs/>
            <CustomRow data={this.state.data} />
            </section>      
        
    );    
}
});
React.render(
<LoanTypeApp  />
, document.getElementById('loanTypeContainer'));