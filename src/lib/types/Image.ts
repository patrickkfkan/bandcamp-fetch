export interface ImageFormat {
  id: number;
  name: string;
  width: number;
  height: number;
  fileFormat: string;
}

export interface ImageConstants {
  baseUrl: string;
  formats: ImageFormat[];
}
