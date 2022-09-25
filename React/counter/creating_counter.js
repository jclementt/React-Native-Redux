class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { 
        contador: 0,
              nome: "Joanna Clementino"
      };
    }
    
    onClickHandler() {
      this.setState({
        contador: this.state.contador + 1
      })
    }
    
    render() {    
      return (
        <div> 
          <Contador valor={this.state.contador} />
          <Button label="Add" onClick={() => this.onClickHandler()} /> 
          <Button label="Write to the Console" onClick={() => console.log("You clicked!")} /> 
            </div>
      )
    }
  }
  
  const Contador = (props) => (
    <div>
      <h1>{ props.valor }</h1>
    </div>
    )
  
  const Button = (props) => (
    <div>
      <button onClick={() => props.onClick()}>{ props.label }</button>
    </div>
  )
  
  ReactDOM.render(
        <App />,
        document.getElementById('app')
  );