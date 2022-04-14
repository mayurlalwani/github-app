import { select } from "d3-selection";
import React from "react";

class Grid extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.updateAxis();
  }
  renderAxis() {
    const node = this.ref.current;
    select(node);
  }
  updateAxis() {
    const { t } = this.props;
    select(".grid-group").transition(t);
  }
  render() {
    return <g ref={this.ref} className="grid-group" />;
  }
}

export default Grid;
