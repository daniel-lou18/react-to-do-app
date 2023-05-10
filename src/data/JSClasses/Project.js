const Project = class {
  date = new Date();
  tasks = [];
  constructor(projectName, color, svg, selected = false) {
    this._projectName = projectName;
    this.id = projectName + '-' + (Date.now() + '').slice(-10);
    this._color = color;
    this._svg = svg;
    this.message();
    this._selected = selected;
  }

  message() {
    console.log('New Project created')
  }

  // set svgColor(newColor) {
  //   this._svg.fill = newColor;
  // }

  // get svgColor() {
  //   return this._svg.fill;
  // }

  // set svgSize(newSize) {
  //   this._svg.width = this._svg.height = newSize;
  // }

  // get svgSize() {
  //   return this._svg.width;
  // }

  set projectName(newName) {
    this._projectName = newName;
  }

  get projectName() {
    return this._projectName;
  }

  get capitalizedProjectName() {
    return this._projectName[0].toUpperCase() + this._projectName.slice(1);
  }

  get selected() {
    return this._selected;
  }

  set selected(newStatus) {
    this._selected = newStatus;
    return this;
  }

};

const PersonalProject = class extends Project {
  constructor(projectName, color, _, selected) {
    super(projectName, color, _, selected);
    this._svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=${color} stroke="none" class="feather feather-circle list-dot">
      <circle cx="12" cy="12" r="5"/>
    </svg>`;
  }
}

export { Project as default, PersonalProject };
