const Task = class {
  date = new Date();
  constructor(taskName="Task", descr="Description", dueDate=new Date(), project, priority=4) {
    this.id = taskName.replace(/\s/g, '' ).slice(-5) + (Date.now() + '').slice(-10);
    this._taskName = taskName;
    this._descr = descr;
    this._dueDate = dueDate;
    this._project = project;
    this._priority = priority;
    this._strikethrough = false;
    this.message();
    this.setPriorityColor();
    this.setPriorityColorName();
    this.setPriorityBackgroundColor();
  }

  get taskName() {
    return this._taskName;
  }

  set taskName(newName) {
    this._taskName = newName;
  }

  get descr() {
    return this._descr;
  }

  set descr(newDescr) {
    this._descr = newDescr;
  }

  get dueDate() {
    return this._dueDate
  }

  set dueDate(newDate) {
    this._dueDate = newDate
  }

  get priority() {
    return this._priority
  }

  set priority(newPriority) {
    this._priority = newPriority;
  }

  get strikethrough() {
    return this._strikethrough;
  }

  set strikethrough(newStatus) {
    this._strikethrough = newStatus;
  }

  message() {
    console.log('New Task created')
  }

  shortenTaskDescr() {
    if (this._descr.length > 50) {
      return this._descr
              .replace(/[\r\n]/gm, ' ')
              .slice(0, 50)
              + "...";
    } else return this._descr;
  }

  setPriorityColor() {
    if (this._priority === 1) this._priorityColor = 'rgb(220, 20, 60)';
    if (this._priority === 2) this._priorityColor = 'rgb(255, 140, 0)';
    if (this._priority === 3) this._priorityColor = 'rgb(100, 149, 237)';
    if (this._priority === 4) this._priorityColor = 'rgb(175, 175, 175)';
  }

  setPriorityColorName() {
    if (this._priority === 1) this._priorityColorName = 'crimson';
    if (this._priority === 2) this._priorityColorName = 'darkorange';
    if (this._priority === 3) this._priorityColorName = 'cornflowerblue';
    if (this._priority === 4) this._priorityColorName = 'darkgray';
  }

  setPriorityBackgroundColor() {
    if (this._priority === 1) this._priorityBackgroundColor = 'rgb(220, 20, 60, 0.2)';
    if (this._priority === 2) this._priorityBackgroundColor = 'rgb(255, 140, 0, 0.2)';
    if (this._priority === 3) this._priorityBackgroundColor = 'rgb(100, 149, 237, 0.2)';
    if (this._priority === 4) this._priorityBackgroundColor = 'rgb(175, 175, 175, 0.2)';
  }
};

export default Task;
