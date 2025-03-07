describe('Tasks', () => {
  let taskData;

  beforeEach(() => {
    cy.visit('/');
    cy.fixture('tasks.json').then((data) => {
      taskData = data;
    });
  });

  context('Create task', () => {
    it('should create a task', () => {
      const task = taskData.success;

      cy.createTask(task.name);
      cy.shouldHaveText(task.name);
      cy.deleteTask(task.name);
    });

    it('should not create a task with duplicate name', () => {
      const task = taskData.duplicate;

      cy.createTask(task.name);
      cy.createTask(task.name);
      cy.alertMessage('Task already exists!');
      cy.buttonAlertConfirm();
      cy.deleteTask(task.name);
    });

    it('should not create a task with empty name', () => {
      const task = taskData.required;

      cy.validationMessage(task.name);
    });
  });

  context('Update task', () => {
    it('should mark a task as complete', () => {
      const task = taskData.update;
      
      cy.createTask(task.name);
      cy.toggleTask(task.name);
      cy.isCompleteTask(task.name);
      cy.deleteTask(task.name);
    });
  });

  context('Delete task', () => {
    it('should delete a task', () => {
      const task = taskData.delete;

      cy.createTask(task.name);
      cy.deleteTask(task.name);
      cy.shouldNotHaveText(task.name);
    });
  });
});
