import { IQuestionBase } from "../question.interface";

export interface IScqQuestion extends IQuestionBase {
  type: 'SCQ'; // Enforcing SCQ as type
  options: string[]; // List of options for the single-choice question
}
