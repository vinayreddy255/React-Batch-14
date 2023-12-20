import { PureComponent } from "react";

class PureComponentExmple extends PureComponent {
  constructor() {
    super();
    this.state = { name: "Kirna", address: { country: "India" } };
  }

  changeData = () => {
    this.setState({ name: "Ram", address: { country: "USA" } });
  };
  componentDidMount() {
    console.log("did mount in another comonent calling...");
  }

  shouldComponentUpdate(preveProps, preveState) {
    if (preveState.address.country == this.state.address.country) {
      return false;
    }
    return true;
  }

  render() {
    console.log("Pure compoent render calling....");
    return (
      <>
        <h1>PureComponentExmple</h1>
        <h2>city:{this.state.name}</h2>
        <h2>Country:{this.state.address.country}</h2>
        <button onClick={this.changeData}>changeData</button>
      </>
    );
  }
}

export default PureComponentExmple;
