class OurHelloWithClass extends React.Component {
    render() {
      return(
      <h1 className="my-title">Hello!</h1>
      );
    }
  }
  
  class OurList extends React.Component {
    render() {
      return (
        <ul>
          <li className="option-01">Option 1</li>
          <li className="option-02">Option 2</li>
          <li className="option-03">Option 3</li>
        </ul>
      );
    }
  }
  
  class MyWrapper extends React.Component {
    render() {
      return (
        <div className="my-wrapper">
          <OurHelloWithClass />
          <OurList />
        </div>
      );
    }
  }
  
  const container = document.getElementById('app');
  ReactDOM.render(<MyWrapper />, container);