import { createEvent } from 'effector';
import { NewTodo, Todo } from '../../models';

export let todosLoadingStart = createEvent();
export let todosLoadingEnd = createEvent();

export let todosUpdate = createEvent<Todo>();
export let todosDelete = createEvent<Todo>();

export let todosNewSave = createEvent<NewTodo>();
export let todosNewInit = createEvent<number>();
export let todosNewDelete = createEvent<NewTodo>();
