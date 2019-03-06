import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getCharactersAsync} from '../actions/index';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharactersAsync()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
function mapStateToProps(state){
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}
// the characters and the fetching boolean
export default connect(mapStateToProps,{getCharactersAsync})(CharacterListView);
