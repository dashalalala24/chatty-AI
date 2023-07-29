export function createFormData(data: File) {
  const formData = new FormData();
  formData.append("lang", "ru");
  formData.append("file", data);
  console.log("formData", formData);
  console.log("file", data);
  return formData;
}

export function cleanTranscriprion(text: string) {
  return text.replace("\n\n", " ");
}
