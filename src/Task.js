class Task {
  constructor(options) {
    this.ID = Date.now();
    this.title = options.title || "";
    this.description = options.description || "";
    this.listID = options.listID || 0;
    this.subtasks = options.subtasks || [];
    this.isCompleted = options.isCompleted || false;
    this.isFollowed = options.isFollowed || false;
  }
}

export default Task;
