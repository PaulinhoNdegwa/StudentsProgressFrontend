import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Icon, Table, Button, Loader, Dimmer, Segment } from 'semantic-ui-react';

import './styles.css';
import { fetchStudentDetails,sendProgressEmails } from '../../redux/actionCreators/studentProgress';


class StudentDetails extends Component {
  componentDidMount(){
    console.log(this.props);
    const { fetchStudentDetails } = this.props;
    fetchStudentDetails();
  }

  mapStudents = (students) => {
    return students.map(student => {
      return (
          <Table.Row key={student.email}>
            <Table.Cell>{student.student}</Table.Cell>
            <Table.Cell>{student.email}</Table.Cell>
            <Table.Cell>{student.IP1}</Table.Cell>
            <Table.Cell>{student.IP2}</Table.Cell>
            <Table.Cell>{student.IP3}</Table.Cell>
            <Table.Cell>{student.IP4}</Table.Cell>
            <Table.Cell>{student.attendance}</Table.Cell>
            <Table.Cell negative={student.first_recommendation === "No" ? true : false} positive={student.first_recommendation === "Yes" ? true : false}>
              <Icon name={student.first_recommendation === "No" ? 'close' : 'checkmark'} />
              {student.first_reason}
            </Table.Cell>
            <Table.Cell negative={student.final_recommendation === "No" ? true : false} positive={student.final_recommendation === "Yes" ? true : false}>
              <Icon name={student.final_recommendation === "No" ? 'close' : 'checkmark'} />
              {student.final_reason}
            </Table.Cell>
          </Table.Row>
      );
    })
  }
  render() {
    const { loading, loadingEmails ,students, sendProgressEmails } = this.props;

    return (
      <div id="student-details">
        <h2 className="student-details-header">These are the recent student results</h2>
        <Segment>
          <Dimmer active={loading ? true : false}>
            <Loader size='large' content="Loading student details" />
          </Dimmer>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>IP1 /31</Table.HeaderCell>
                <Table.HeaderCell>IP2 /22</Table.HeaderCell>
                <Table.HeaderCell>IP3 /22</Table.HeaderCell>
                <Table.HeaderCell>IP4 /28</Table.HeaderCell>
                <Table.HeaderCell>Attendance</Table.HeaderCell>
                <Table.HeaderCell>First recommendation</Table.HeaderCell>
                <Table.HeaderCell>Final recommendation</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {students ? this.mapStudents(students) : null}
            </Table.Body>
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell colSpan='4'>
                  <Button
                    floated='right'
                    icon
                    labelPosition='right'
                    primary
                    size='medium'
                    onClick={() => sendProgressEmails()}
                    loading={loadingEmails ? true : false}
                  >
                    <Icon name='mail' /> 
                    Send Emails
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <span><strong>NOTE:</strong> Google turns off authentication of <b>less secured apps</b>, eg. this one,
             after a while. If there is an error when sending the emails, <b>contact the developer</b> to turn on authentication 
             on the sender account
          </span>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.progressReducer.loading,
  students: state.progressReducer.students,
  loadingEmails: state.progressReducer.loadingEmails
});

export default connect(
  mapStateToProps,
  {
      fetchStudentDetails,
      sendProgressEmails
  }
)(StudentDetails);
