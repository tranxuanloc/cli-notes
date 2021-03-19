class Command {
  tool: string;
  type: string;
  command: string;
  description: string;
  example: string;

  constructor(
    tool: string,
    type: string,
    command: string,
    description: string,
    example: string
  ) {
    this.tool = tool;
    this.command = command;
    this.description = description;
    this.example = example;
    this.type = type;
  }
}

export default Command;
