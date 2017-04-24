import { connect } from 'react-redux';
import { fetchTasksByList, updateTask } from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasksByList: (listId) => dispatch(fetchTasksByList(listId)),
    updateTask: (task) => dispatch(updateTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
