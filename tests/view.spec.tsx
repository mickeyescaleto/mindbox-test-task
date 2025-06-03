import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from '@vitest/browser/context';

import { TodosProvider } from '../src/app/providers/todos-provider';
import { View } from '../src/widgets/view';

test('should render initial state', async () => {
  const { getByPlaceholder, getByText } = render(
    <TodosProvider>
      <View />
    </TodosProvider>,
  );

  await expect
    .element(getByPlaceholder('What needs to be done?'))
    .toBeInTheDocument();

  await expect.element(getByText('No todos')).toBeInTheDocument();

  await expect.element(getByText('No items left')).toBeInTheDocument();
});

test('should update render when adding new todo', async () => {
  const { getByPlaceholder, getByText } = render(
    <TodosProvider>
      <View />
    </TodosProvider>,
  );

  const input = getByPlaceholder('What needs to be done?');

  await userEvent.type(input, 'New todo');

  await userEvent.keyboard('{enter}');

  await expect.element(getByText('New todo')).toBeInTheDocument();

  await expect.element(getByText('1 item left')).toBeInTheDocument();
});

test('should mark todo as completed in state', async () => {
  const { getByPlaceholder, getByText } = render(
    <TodosProvider>
      <View />
    </TodosProvider>,
  );

  const input = getByPlaceholder('What needs to be done?');

  await userEvent.type(input, 'New todo');

  await userEvent.keyboard('{enter}');

  await userEvent.tab();

  await userEvent.keyboard('{enter}');

  await expect.element(getByText('New todo')).toBeInTheDocument();

  await expect.element(getByText('No items left')).toBeInTheDocument();
});

test('should remove completed todo from the list on delete', async () => {
  const { getByPlaceholder, getByText } = render(
    <TodosProvider>
      <View />
    </TodosProvider>,
  );

  const input = getByPlaceholder('What needs to be done?');

  await userEvent.type(input, 'New todo');

  await userEvent.keyboard('{enter}');

  await userEvent.tab();

  await userEvent.keyboard('{enter}');

  await userEvent.tab();

  await userEvent.tab();

  await userEvent.tab();

  await userEvent.keyboard('{enter}');

  await expect.element(getByText('No todos')).toBeInTheDocument();

  await expect.element(getByText('No items left')).toBeInTheDocument();
});
