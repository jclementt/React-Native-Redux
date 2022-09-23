class App extends React.Component {
	  constructor(props) {
		      super(props);
		      
		      this.state = {
			            contador: 0,
			            nome: "Joanna Clementino"
			          };
		    }
	  
	  render() {
		      setTimeout(() => {
			            this.setState({
					            contador: this.state.contador + 1
					          })
			          }, 1000)
		      
		      return (
			            <div>
			              <h1>{ this.state.contador }</h1>
			              <h2>{ this.state.nome }</h2>
			            </div>
			          );
		    }
}

ReactDOM.render(
	  <App />,
	  document.getElementById('app')
);
