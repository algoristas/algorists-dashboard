import React from 'react'
import {Table, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import {ProblemSetData} from 'data/Data'

export default class ProblemSetBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = ProblemSetData
    this.getProblemSet = this.getProblemSet.bind(this)
    this.selectSet = this.selectSet.bind(this)
  }

  getProblemSet() {
    const selectedSet = this.state.selectedSet
    const problemSet = this.state.weeks[selectedSet].problems
    return problemSet
  }

  selectSet(e) {
      this.setState({selectedSet: e.target.value})
  }

  render() {
    return (
      <div>
        <h2 className='page-title'>Problem Set </h2>
        <div id='select-user-form' className='form-inline'>
          <FormGroup>
            <ControlLabel className='form-inline-title'>Problem Set: </ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={this.selectSet}>
              {
                this.state.weeks.map((week, key) => {
                    return (<option key={key} value={key} >{`Week ${key+1}`}</option>)
                })
              }
            </FormControl>
          </FormGroup>
        </div>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Problem name</th>
              <th>URL</th>
              <th>Difficulty</th>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            {
              this.getProblemSet().map((p, i) => {
                return (
                  <tr key={i}>
                    <td>W{this.state.selectedSet}P{i + 1}</td>
                    <td>{p.title}</td>
                    <td><a href={p.url}>[External link]</a></td>
                    <td>{p.difficulty}</td>
                    <td>{p.topics.join(', ')}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
