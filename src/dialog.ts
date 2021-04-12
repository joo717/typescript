type Type = "image" | "video" | "note" | "todo";
interface Content {
  readonly type: Type;
  title?: string;
  description?: string;
  imageUrl?: string;
  youtubeUrl?: string;
  toDos?: ToDo[];

  addContent(
    title?: string,
    description?: string,
    imageUrl?: string,
    youtubeUrl?: string,
    toDos?: ToDo[]
  ): Content;
}

class ImageContent implements Content {
  readonly type: Type = "image";
  description: string;
  imageUrl: string;
  constructor(description: string, imageUrl: string) {
    this.description = description;
    this.imageUrl = imageUrl;
  }
  addContent(description: string, imageUrl: string): ImageContent {
    const content: ImageContent = new ImageContent(description, imageUrl);
    return content;
  }
}
class VideoContent implements Content {
  readonly type: Type = "video";
  description: string;
  youtubeUrl: string;
  constructor(description: string, youtubeUrl: string) {
    this.description = description;
    this.youtubeUrl = youtubeUrl;
  }
  addContent(description: string, youtubeUrl: string): VideoContent {
    const content: VideoContent = new VideoContent(description, youtubeUrl);
    return content;
  }
}
class NoteContent implements Content {
  readonly type: Type = "note";
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
  addContent(title: string, description: string): NoteContent {
    const content: NoteContent = new NoteContent(title, description);
    return content;
  }
}
class ToDoContent implements Content {
  readonly type: Type = "todo";
  title: string;
  toDos: ToDo[];
  constructor(title: string, toDos: ToDo[]) {
    this.title = title;
    this.toDos = toDos;
  }
  addContent(title: string, toDos: any): ToDoContent {
    const content: ToDoContent = new ToDoContent(title, toDos);
    return content;
  }
}

class ToDo {
  name: string;
  isFinished: boolean = false;
  constructor(name: string) {
    this.name = name;
  }
}

function openDialog(type: Type) {
  closeAllDialogs();
  const dialog = document.getElementById(type + "_dialog") as HTMLDialogElement;
  if (!dialog) return;
  dialog.open = true;
}

function closeAllDialogs() {
  const dialogs = document.getElementsByTagName("dialog");
  const dialogArray = Array.prototype.slice.call(dialogs);
  dialogArray.forEach((dialog) => {
    if (!dialog) return;
    dialog.open = false;
  });
  clearEveryInput();
  clearEveryTextarea();
}

function clearEveryInput() {
  const inputs = document.getElementsByTagName("input");
  const inputArray = Array.prototype.slice.call(inputs);
  inputArray.forEach((input) => {
    input.value = "";
  });
}

function clearEveryTextarea() {
  const textareas = document.getElementsByTagName("textarea");
  const textareaArray = Array.prototype.slice.call(textareas);
  textareaArray.forEach((textarea) => {
    textarea.value = "";
  });
}

function clickSaveButton(type: Type) {
  switch (type) {
    case "image":
      const imageDescription: string = (<HTMLInputElement>(
        document.getElementById("image_description_textarea")
      )).value;
      const imageUrl: string = (<HTMLInputElement>(
        document.getElementById("image_url_input")
      )).value;
      const image: ImageContent = new ImageContent(imageDescription, imageUrl);
      addSection(image);
      return;
    case "video":
      const videoDescription: string = (<HTMLInputElement>(
        document.getElementById("video_description_textarea")
      )).value;
      const youtubeUrl: string = (<HTMLInputElement>(
        document.getElementById("video_url_input")
      )).value;
      const youtubeCode = youtubeUrl.substring(
        youtubeUrl.indexOf("?v=") + 3,
        youtubeUrl.indexOf("&")
      );
      const youtubeEmbed = "https://www.youtube.com/embed/" + youtubeCode;
      const video: VideoContent = new VideoContent(
        videoDescription,
        youtubeEmbed
      );
      addSection(video);
      return;
    case "note":
      const noteTitle: string = (<HTMLInputElement>(
        document.getElementById("note_title_input")
      )).value;
      const noteDescription: string = (<HTMLInputElement>(
        document.getElementById("note_description_textarea")
      )).value;
      const note: NoteContent = new NoteContent(noteTitle, noteDescription);
      addSection(note);
      return;
    case "todo":
      const todoTitle: string = (<HTMLInputElement>(
        document.getElementById("todo_title_input")
      )).value;
      const todos: string = (<HTMLInputElement>(
        document.getElementById("todo_textarea")
      )).value;
      const toDoStringArray: string[] = todos.split("\n");
      const toDoArray: ToDo[] = [];
      toDoStringArray.forEach((toDo) => {
        const newToDo: ToDo = new ToDo(toDo);
        toDoArray.push(newToDo);
      });
      const todo: ToDoContent = new ToDoContent(todoTitle, toDoArray);
      addSection(todo);
      return;
    default:
      throw new Error("strange type!");
  }
}

function addSection<T extends Content>(content: T): void {
  const documentNode = document.getElementsByTagName("document")[0];
  switch (content.type) {
    case "image":
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.src = content.imageUrl ? content.imageUrl : "";
      div.appendChild(img);

      var div2 = document.createElement("div");
      div2.className = "text_div";
      var p = document.createElement("p");
      p.innerHTML = content.description ? content.description : "";
      div2.appendChild(p);

      var section = document.createElement("section");
      section.className = "image_section";
      section.appendChild(div);
      section.appendChild(div2);
      documentNode.prepend(section);
      closeAllDialogs();
      return;

    case "video":
      var div = document.createElement("div");
      var iframe = document.createElement("iframe");
      iframe.src = content.youtubeUrl ? content.youtubeUrl : "";
      iframe.height = "200";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      div.appendChild(iframe);

      var div2 = document.createElement("div");
      div2.className = "text_div";
      var p = document.createElement("p");
      p.innerHTML = content.description ? content.description : "";
      div2.appendChild(p);

      var section = document.createElement("section");
      section.className = "video_section";
      section.appendChild(div);
      section.appendChild(div2);
      documentNode.prepend(section);
      closeAllDialogs();
      return;

    case "note":
      var div = document.createElement("div");
      div.className = "text_div";
      var h3 = document.createElement("h3");
      h3.innerHTML = content.title ? content.title : "";
      var p = document.createElement("p");
      p.innerHTML = content.description ? content.description : "";
      div.appendChild(h3);
      div.appendChild(p);

      var section = document.createElement("section");
      section.className = "note_section";
      section.appendChild(div);
      documentNode.prepend(section);
      closeAllDialogs();
      return;

    case "todo":
      var div = document.createElement("div");
      div.className = "text_div";
      var h3 = document.createElement("h3");
      h3.innerHTML = content.title ? content.title : "";
      div.appendChild(h3);
      const todos: ToDo[] = content.toDos as ToDo[];
      todos.forEach((todo) => {
        var newDate = Math.random().toString();
        const p = document.createElement("p");
        const newToDoCheckbox = document.createElement("input");
        newToDoCheckbox.type = "checkbox";
        newToDoCheckbox.id = newDate;
        newToDoCheckbox.checked = todo.isFinished;
        const newToDolabel = document.createElement("label");
        newToDolabel.htmlFor = newDate;
        newToDolabel.innerHTML = todo.name;
        p.appendChild(newToDoCheckbox);
        p.appendChild(newToDolabel);
        div.appendChild(p);
      });

      var section = document.createElement("section");
      section.className = "todo_section";
      section.appendChild(div);
      documentNode.prepend(section);
      closeAllDialogs();
      closeAllDialogs();
      return;

    default:
      throw new Error("strange type!");
  }
}
