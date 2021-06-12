export class CreateDto {
  title: string;
  comment?: string;
  isCompleted?: boolean;
};

export class UpdateDto {
  title: string;
  comment?: string;
  isCompleted?: boolean;
}