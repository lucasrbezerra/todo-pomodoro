import { Task, Content, Button, Modal, ConfirmationModal, Input } from '../../components';
import { IModalContext, ITask } from '../../interfaces';
import { useModal } from '../../context/hooks';
import { useContext, useState } from 'react';
import { AnimatedList } from 'react-animated-list';
import { ModalContext } from '../../context';

type TaskListProps = {
  tasks: ITask[];
  currentTask: ITask;
  resetCountdown: () => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number, isDone: boolean, newTask: string) => void;
};

const MODAL_TYPE = {
  DELETE: 'delete',
  EDIT: 'edit',
};

const initialValues = {
  MODAL_TYPE: MODAL_TYPE,
  isShown: false,
  modalType: MODAL_TYPE['DELETE'],
  setModalType: (value: string) => {},
  toggle: () => {},
};

export const TaskList: React.FC<TaskListProps> = ({ tasks, currentTask, deleteTask, editTask, resetCountdown }) => {
  const [selectedTask, setSelectedTask] = useState<ITask | any>();
  const [error, setError] = useState(false);
  const [taskName, setTaskName] = useState<string>('');
  const { isShown, toggle } = useModal(initialValues);
  const [modalType, setModalType] = useState<string>(MODAL_TYPE['DELETE']);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    if (taskName.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      if (taskName.length > 0) {
        editTask(selectedTask.id, selectedTask.isDone, taskName);
        setTaskName('');
        toggle();
      } else {
        setError(true);
      }
    }
  };

  const handleEdit = (task: ITask) => {
    setTaskName(task.task);
    setModalType(MODAL_TYPE['EDIT']);
    setSelectedTask(task);
    toggle();
  };

  const onConfirmEdit = () => {
    if (taskName.length > 0) {
      editTask(selectedTask.id, selectedTask.isDone, taskName);
      setTaskName('');
    } else {
      setError(true);
    }
    toggle();
  };

  const onConfirmDelete = () => {
    deleteTask(selectedTask.id);
    if (selectedTask.id === currentTask.id) {
      resetCountdown();
    }
    toggle();
  };

  const onCancelDelete = () => toggle();

  const handleDelete = (task: ITask) => {
    setModalType(MODAL_TYPE['DELETE']);
    setSelectedTask(task);
    toggle();
  };

  return (
    <Content width="85%" maxHeight="340px" overflowY="scroll" overflowX="hidden" m="0 auto">
      <AnimatedList animation={'grow'}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} currentTask={currentTask}>
            <Content display="flex" position="absolute" right="16px">
              <Button
                width="35px"
                height="35px"
                mIcon="0 0 0 .25rem"
                icon="fas fa-pen"
                onClick={() => handleEdit(task)}
              />
              <Button
                width="35px"
                height="35px"
                mIcon="0 0 0 .25rem"
                icon="fas fa-trash"
                onClick={() => handleDelete(task)}
              />
            </Content>
          </Task>
        ))}
      </AnimatedList>

      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={modalType === MODAL_TYPE['DELETE'] ? `Confirmação` : `Editar Tarefa`}
        modalContent={
          modalType === MODAL_TYPE['DELETE'] ? (
            <ConfirmationModal
              onConfirm={onConfirmDelete}
              onCancel={onCancelDelete}
              message="Tem certeza que quer deletar essa tarefa?"
            />
          ) : (
            <Content width="250px">
              <Input
                autoFocus
                placeholder="Entre com uma tarefa nova..."
                error={error}
                value={taskName}
                onChange={onChange}
                icon={false}
                width="100%"
                onKeyDown={onKeyDown}
              />
              <ConfirmationModal onConfirm={onConfirmEdit} haveNoButton={false} />
            </Content>
          )
        }
      />
    </Content>
  );
};
